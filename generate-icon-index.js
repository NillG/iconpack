const fs = require('fs');
const path = require('path');

const iconsDir = path.resolve(__dirname, 'src/icons');
const indexFile = path.join(iconsDir, 'index.ts');

if (!fs.existsSync(iconsDir)) {
    console.error('❌ src/icons directory does not exist.');
    process.exit(1);
}

const files = fs.readdirSync(iconsDir)
    .filter(file => file.endsWith('.tsx') && file !== 'index.ts');

if (files.length === 0) {
    console.warn('⚠️ No .tsx icon components found in src/icons.');
} else {
    const exports = files.map(file => {
        const name = path.basename(file, '.tsx');
        return `export { default as ${name} } from './${name}';`;
    }).join('\n');

    fs.writeFileSync(indexFile, exports, 'utf-8');
    console.log(`✅ index.ts generated with ${files.length} exports.`);
}