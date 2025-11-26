import os
import glob

def fix_encoding(filepath):
    try:
        # Try reading as UTF-8 first
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        # If successful, it's already UTF-8, but maybe it was saved with BOM or something?
        # Or maybe it's valid UTF-8 but double encoded? 
        # Actually, if it opens as UTF-8, it might still be "wrong" if it was read as Latin-1 and saved as UTF-8 by some other tool, but usually it fails if it's Latin-1 with accents.
        # Let's assume if it reads as UTF-8 it's fine, UNLESS it has the replacement character .
        if '' in content:
            raise ValueError("Contains replacement char")
            
    except (UnicodeDecodeError, ValueError):
        # Try reading as cp1252 (Windows default)
        try:
            with open(filepath, 'r', encoding='cp1252') as f:
                content = f.read()
            
            # Write back as UTF-8
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {filepath}")
        except Exception as e:
            print(f"Failed to fix {filepath}: {e}")
    else:
        # It read as UTF-8, but let's check if it looks like mojibake (e.g. "Ã©" instead of "é")
        # This is harder to detect automatically without heuristics.
        # But the user's issue is likely that the files ARE cp1252 and are being read as UTF-8 by Vite, showing  or weird chars.
        # If I read them as cp1252 and save as UTF-8, it should fix it.
        # But if I read a UTF-8 file as cp1252, I might break it.
        # The safe bet is: if it's valid UTF-8, leave it? 
        # The user said "shows another character".
        # If I read a cp1252 file as utf-8, it often fails or shows .
        pass

# Find all info.txt files
files = glob.glob('src/content/projects/**/*.txt', recursive=True)

for file in files:
    # Force read as cp1252 and write as utf-8 if it contains non-ascii
    # Actually, let's just try to read as cp1252. If it's valid utf-8, it might also be valid cp1252 but result in garbage.
    # Heuristic: Read as UTF-8. If it fails, it's definitely not UTF-8.
    # If it succeeds, check for common mojibake patterns or just leave it?
    # The user is on Windows. Likely saved as ANSI.
    
    try:
        with open(file, 'rb') as f:
            raw = f.read()
        
        # Detect if it's likely UTF-8
        try:
            raw.decode('utf-8')
            is_utf8 = True
        except UnicodeDecodeError:
            is_utf8 = False
            
        if not is_utf8:
            # It's not UTF-8, so it's likely cp1252
            content = raw.decode('cp1252')
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Converted to UTF-8: {file}")
        else:
            # It IS UTF-8. But is it correct?
            # If the user sees weird characters, maybe it IS UTF-8 but the browser is interpreting it wrong?
            # No, Vite serves as UTF-8.
            # Maybe it's "Ã©" (UTF-8 bytes interpreted as Latin-1 displayed as UTF-8? No.)
            # If the file is CP1252: 0xE9 (é).
            # Browser reads as UTF-8: 0xE9 is invalid start byte. Shows .
            # So `is_utf8` would be False for 0xE9.
            # So my logic holds.
            print(f"Already UTF-8: {file}")

    except Exception as e:
        print(f"Error processing {file}: {e}")
