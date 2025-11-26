export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    images: string[];
}

// Helper to capitalize category
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Load info.txt files
const infoFiles = import.meta.glob('/src/content/projects/*/*/info.txt', { eager: true, query: '?raw', import: 'default' });
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

    // Create a unique ID based on category and folder number to avoid collisions if needed, 
    // but for now we'll try to parse the folder name as ID. 
    // If the user uses "01" in multiple categories, we might have ID collisions if we just use parseInt(idStr).
    // However, the previous system used simple numbers. 
    // Let's generate a unique ID hash or just use a large number offset for categories?
    // Or better: keep the ID as number but ensure unique folders?
    // The user asked for "01", "02". If "fachadas/01" and "interiores/01" exist, they have same ID.
    // This breaks routing /projeto/:id.
    // We should probably use a string ID like "fachadas-01" or generate a unique numeric ID.
    // Let's generate a unique numeric ID by hashing or just assigning sequentially? 
    // Sequential assignment based on load order is flaky.
    // Let's try to parse the folder name. If collisions, we have a problem.
    // BUT, the user might just want to number them sequentially across the board?
    // Or maybe we change the route to /projeto/:category/:id?
    // The user asked for "criar os diretorios... e um txt".
    // Let's assume for now the user will manage unique IDs or we change the route.
    // Changing route to /projeto/:category/:id is safer but breaks existing links if any (none yet except what I just added).
    // Actually, I just added /projeto/:id.
    // Let's change the route to /projeto/:category/:id to be safe and robust.

    // WAIT, I can't easily change the route structure without updating all links again.
    // Let's try to generate a unique ID. 
    // Maybe (categoryIndex * 1000) + projectNumber?
    // categories: 'fachadas', 'interiores', 'cenografia', 'ambientes', 'personalizados'
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

    const lines = content.split('\n');
    const title = lines[0].trim();
    const description = lines.slice(1).join('\n').trim();

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
        category,
        description,
        images: projectImages
    });
}

export const projectsData = projects.sort((a, b) => a.id - b.id);
