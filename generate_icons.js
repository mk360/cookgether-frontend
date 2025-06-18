const fs = require('fs');
const path = require('path');

// Input/output paths
const rawDir = path.resolve(__dirname, './src/icons');
const outPath = path.resolve(__dirname, './public/sprite.svg');

// Helper: extract inner content and viewBox
function parseSvg(fileContent) {
    const viewBoxMatch = fileContent.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    const inner = fileContent
        .replace(/<svg[^>]*>/, '')
        .replace(/<\/svg>/, '')
        .trim();
    return { viewBox, inner };
}

// Begin building the sprite
let symbols = '';

fs.readdirSync(rawDir).forEach((file) => {
    if (file.endsWith('.svg')) {
        const content = fs.readFileSync(path.join(rawDir, file), 'utf8');
        console.log(file, content);
        const { viewBox, inner } = parseSvg(content);
        const id = path.basename(file, '.svg');
        symbols += `  <symbol id="${id}" viewBox="${viewBox}">\n    ${inner}\n  </symbol>\n`;
    }
});

// Wrap in <svg> root
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n${symbols}</svg>\n`;

// Write to output file
fs.writeFileSync(outPath, sprite, 'utf8');
console.log(`✅ Sprite generated at: ${outPath}`);