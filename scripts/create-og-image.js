const fs = require('fs');
const path = require('path');

// Instructions pour créer l'image Open Graph
const instructions = `
# Instructions pour créer l'image Open Graph

## Option 1 : Conversion en ligne (RECOMMANDÉ)
1. Ouvrez le fichier public/og-image.svg dans votre navigateur
2. Faites un clic droit et "Enregistrer l'image sous"
3. Renommez le fichier en og-image.jpg
4. Placez-le dans le dossier public/

## Option 2 : Avec ImageMagick
\`\`\`bash
magick convert public/og-image.svg -resize 1200x630 public/og-image.jpg
\`\`\`

## Option 3 : Avec Sharp (Node.js)
\`\`\`bash
npm install sharp
node scripts/convert-og-image.js
\`\`\`
`;

console.log(instructions);

// Créer le script Sharp pour la conversion
const sharpScript = `
const sharp = require('sharp');
const fs = require('fs');

async function convertOGImage() {
  try {
    await sharp('public/og-image.svg')
      .resize(1200, 630)
      .jpeg({ quality: 90 })
      .toFile('public/og-image.jpg');
    console.log('✓ Image Open Graph créée: public/og-image.jpg');
  } catch (error) {
    console.error('✗ Erreur lors de la conversion:', error.message);
  }
}

convertOGImage();
`;

fs.writeFileSync('scripts/convert-og-image.js', sharpScript);
console.log('\n✓ Script de conversion créé: scripts/convert-og-image.js');
