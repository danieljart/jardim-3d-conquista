export interface Project {
    id: number;
    title: string; // Default/PT title
    title_en?: string; // English title
    category: string;
    categorySlug: string; // Added for translation
    description: string; // Default/PT description
    description_en?: string; // English description
    images: string[];
}

// Helper to capitalize category
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Load info.txt files (Portuguese)
const infoFiles = import.meta.glob('/src/content/projects/*/*/info.txt', { eager: true, query: '?raw', import: 'default' });
// Load info_en.txt files (English)
const infoFilesEn = import.meta.glob('/src/content/projects/*/*/info_en.txt', { eager: true, query: '?raw', import: 'default' });
// Load images
const imageFiles = import.meta.glob('/src/content/projects/*/*/*.{jpg,jpeg,png,webp,svg}', { eager: true, import: 'default' });

const projects: Project[] = [];

// Process info files to create project skeletons
for (const path in infoFiles) {
    const content = infoFiles[path] as string;
    const parts = path.split('/');
    // path is like /src/content/projects/fachadas/01/info.txt
    // parts: ['', 'src', 'content', 'projects', 'fachadas', '01', 'info.txt']
    const categorySlug = parts[parts.length - 3];
    const idStr = parts[parts.length - 2];

    // Try to load English content
    const enPath = path.replace('info.txt', 'info_en.txt');
    const contentEn = infoFilesEn[enPath] as string | undefined;

    // Generate ID
    const categories = ['fachadas', 'interiores', 'cenografia', 'ambientes', 'personalizados'];
    const catIndex = categories.indexOf(categorySlug.toLowerCase());
    const projectNum = parseInt(idStr, 10);

    let id = projectNum;
    if (catIndex !== -1) {
        id = (catIndex + 1) * 1000 + projectNum;
    } else {
        // Fallback for unknown categories
        id = 9000 + projectNum;
    }

    // Parse Portuguese content
    const lines = content.split('\n');
    const title = lines[0].trim();
    const description = lines.slice(1).join('\n').trim();

    // Parse English content if available
    let title_en = undefined;
    let description_en = undefined;
    if (contentEn) {
        const linesEn = contentEn.split('\n');
        title_en = linesEn[0].trim();
        description_en = linesEn.slice(1).join('\n').trim();
    }

    // Find images for this project
    const projectImages: string[] = [];
    // The glob path keys are absolute from project root in Vite usually, or relative.
    // import.meta.glob keys start with /src/content...
    const projectDir = `/src/content/projects/${categorySlug}/${idStr}/`;

    // Get all image paths that belong to this project
    const projectImagePaths = Object.keys(imageFiles).filter(path => path.includes(projectDir));

    // Sort paths alphabetically to ensure 01.jpg comes before 02.jpg
    projectImagePaths.sort();

    for (const path of projectImagePaths) {
        projectImages.push(imageFiles[path] as string);
    }

    // Map category slug to display name
    let category = capitalize(categorySlug);
    if (categorySlug === 'cenografia') category = 'Cenografia';

    projects.push({
        id, // This ID is now e.g. 1001, 2001, etc.
        title,
        title_en,
        category,
        categorySlug, // Add slug for translation lookups
        description,
        description_en,
        images: projectImages
    });
}

export const projectsData = projects.sort((a, b) => a.id - b.id);
