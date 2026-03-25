const fs = require('fs');
const path = require('path');

const base = 'D:\\Projetos\\jardim-3d-conquista\\src\\content\\projects';
const categories = ['fachadas', 'cenografia', 'ambientes'];

const hooks = {
    'fachadas': "A store’s façade is never just an entrance. It’s a visual invitation that anticipates quality.",
    'cenografia': "Most exhibition stands fail to balance heavy technical requirements with visual elegance.",
    'ambientes': "Good spatial design adapts to the function of the moment, not the other way around."
};

const links = {
    'fachadas': 'https://danieljardim3d.netlify.app/servicos/fachadas',
    'cenografia': 'https://danieljardim3d.netlify.app/servicos/cenografia',
    'ambientes': 'https://danieljardim3d.netlify.app/servicos/ambientes'
};

const allProjects = [];

categories.forEach(cat => {
    for (let i = 1; i <= 6; i++) {
        const num = i.toString().padStart(2, '0');
        const dir = path.join(base, cat, num);
        
        if (fs.existsSync(dir)) {
            let infoEn = '';
            try {
                infoEn = fs.readFileSync(path.join(dir, 'info_en.txt'), 'utf8');
            } catch (e) {}
            
            let image = '';
            try {
                const files = fs.readdirSync(dir);
                image = files.find(f => f.match(/\.(png|jpe?g|webp)$/i));
                if (image) image = path.join(dir, image);
            } catch (e) {}
            
            const text = `${hooks[cat]}\n\n${infoEn.trim()}\n\nUsed as a presentation tool to support client approval and secure confident decision-making.\n\n🔗 See more projects: ${links[cat]}`;
            
            allProjects.push({ cat, num, text, image });
        }
    }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const f = shuffle(allProjects.filter(i => i.cat === 'fachadas'));
const c = shuffle(allProjects.filter(i => i.cat === 'cenografia'));
const a = shuffle(allProjects.filter(i => i.cat === 'ambientes'));

const f1 = f.pop();
const c1 = c.pop();
const f6 = f.pop();
const c6 = c.pop();

const middle = shuffle([...f, ...c, ...a]);
const finalQueue = [f1, c1, ...middle, f6, c6];

fs.writeFileSync('D:\\Projetos\\jardim-3d-conquista\\posts.json', JSON.stringify(finalQueue, null, 2));
console.log(`Generated ${finalQueue.length} posts.`);
