const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Recursive function to find files if glob is not available (it might not be in the environment)
// Actually, I can just use fs.readdirSync recursively.
function getAllFiles(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('info.txt')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles('src/content/projects');

files.forEach(file => {
    try {
        const buffer = fs.readFileSync(file);

        // Check if valid UTF-8
        try {
            // This is a weak check, but Node's toString('utf8') doesn't throw on invalid sequences, it replaces them.
            // We can check if it contains the replacement character (U+FFFD) which is \uFFFD
            const utf8 = buffer.toString('utf8');
            if (utf8.includes('\uFFFD')) {
                throw new Error('Invalid UTF-8');
            }
            console.log(`Already UTF-8: ${file}`);
        } catch (e) {
            // Treat as latin1 (closest to cp1252 available natively)
            const content = buffer.toString('latin1');
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Converted to UTF-8: ${file}`);
        }
    } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
    }
});
