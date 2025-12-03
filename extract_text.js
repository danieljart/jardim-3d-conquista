import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ptPath = path.join(__dirname, 'src', 'locales', 'pt.json');
const outDir = path.join(__dirname, 'textos_para_editar');

console.log(`Reading from ${ptPath}`);
const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

function formatEntry(key, value) {
    return `>>> ${key}\n[COMEÇA COM]\n${value}\n[MUDAR PARA]\n${value}\n\n`;
}

// Flatten function
function flatten(obj, prefix = '', res = {}) {
    for (const key in obj) {
        const val = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof val === 'object' && val !== null) {
            flatten(val, newKey, res);
        } else {
            res[newKey] = val;
        }
    }
    return res;
}

const flat = flatten(pt);
const fileContents = {};

// Define groups
const groups = {
    'geral': ['nav', 'footer'],
    'home': ['hero', 'about.homeSection', 'home.videoSection'],
    'servicos': ['services'],
    'sobre': ['about.page'],
    'contato': ['contact'],
    'projetos': ['project']
};

for (const key in flat) {
    let assigned = false;
    for (const [group, prefixes] of Object.entries(groups)) {
        if (prefixes.some(p => key === p || key.startsWith(p + '.'))) {
            if (!fileContents[group]) fileContents[group] = '';
            fileContents[group] += formatEntry(key, flat[key]);
            assigned = true;
            break;
        }
    }
    if (!assigned) {
        if (!fileContents['outros']) fileContents['outros'] = '';
        fileContents['outros'] += formatEntry(key, flat[key]);
    }
}

for (const [file, content] of Object.entries(fileContents)) {
    const filePath = path.join(outDir, `${file}.txt`);
    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
}


// Project content extraction
const projectsDir = path.join(__dirname, 'src', 'content', 'projects');

if (fs.existsSync(projectsDir)) {
    const categories = fs.readdirSync(projectsDir);

    for (const category of categories) {
        const categoryPath = path.join(projectsDir, category);
        if (!fs.statSync(categoryPath).isDirectory()) continue;

        let categoryContent = '';
        const projects = fs.readdirSync(categoryPath);

        for (const projectId of projects) {
            const projectPath = path.join(categoryPath, projectId);
            const infoPath = path.join(projectPath, 'info.txt');

            if (fs.existsSync(infoPath)) {
                const content = fs.readFileSync(infoPath, 'utf8').trim();
                const lines = content.split('\n');
                const title = lines[0].trim();
                const description = lines.slice(1).join('\n').trim();

                categoryContent += `>>> projects/${category}/${projectId}/title\n[COMEÇA COM]\n${title}\n[MUDAR PARA]\n${title}\n\n`;
                categoryContent += `>>> projects/${category}/${projectId}/description\n[COMEÇA COM]\n${description}\n[MUDAR PARA]\n${description}\n\n`;
            }
        }

        if (categoryContent) {
            const filePath = path.join(outDir, `projetos_${category}.txt`);
            fs.writeFileSync(filePath, categoryContent);
            console.log(`Created ${filePath}`);
        }
    }
}

console.log('Extraction complete.');
