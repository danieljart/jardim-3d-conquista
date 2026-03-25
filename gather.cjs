const fs = require('fs');
const path = require('path');

const base = 'D:\\Projetos\\jardim-3d-conquista\\src\\content\\projects';
const categories = ['fachadas', 'cenografia', 'ambientes'];

const results = [];

categories.forEach(cat => {
    for (let i = 1; i <= 6; i++) {
        const num = i.toString().padStart(2, '0');
        const dir = path.join(base, cat, num);
        
        if (fs.existsSync(dir)) {
            let info = '';
            try {
                info = fs.readFileSync(path.join(dir, 'info.txt'), 'utf8');
            } catch (e) {}
            
            let image = '';
            try {
                const files = fs.readdirSync(dir);
                image = files.find(f => f.match(/\.(png|jpe?g)$/i));
                if (image) image = path.join(dir, image);
            } catch (e) {}
            
            results.push({ cat, num, info, image });
        }
    }
});

fs.writeFileSync('D:\\Projetos\\jardim-3d-conquista\\results.json', JSON.stringify(results, null, 2));
console.log('Done');
