const fs = require('fs');
const path = require('path');

// Créer le dossier scripts s'il n'existe pas
if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

// Instructions pour générer les favicons
const instructions = `
# Instructions pour générer les favicons

Pour résoudre le problème du favicon dans les résultats de recherche, vous devez créer plusieurs formats d'icônes :

## 1. Utilisez un générateur en ligne (recommandé)
Allez sur https://realfavicongenerator.net/ et :
- Uploadez votre favicon.svg existant
- Configurez les couleurs et paramètres
- Téléchargez le package complet

## 2. Ou utilisez des outils en ligne de commande

### Avec ImageMagick (si installé) :
\`\`\`bash
# Créer favicon.ico (16x16, 32x32, 48x48)
magick convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
magick convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
magick convert public/favicon.svg -resize 48x48 public/favicon.ico

# Créer apple-touch-icon
magick convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png

# Créer icônes Android
magick convert public/favicon.svg -resize 192x192 public/android-chrome-192x192.png
magick convert public/favicon.svg -resize 512x512 public/android-chrome-512x512.png
\`\`\`

### Avec Sharp (Node.js) :
\`\`\`bash
npm install sharp
node scripts/generate-favicons-sharp.js
\`\`\`

## 3. Fichiers requis dans /public :
- favicon.ico (16x16, 32x32, 48x48)
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png (180x180)
- android-chrome-192x192.png
- android-chrome-512x512.png
- site.webmanifest (déjà créé)

## 4. Vérification
Après avoir généré les fichiers, testez avec :
- https://realfavicongenerator.net/favicon_checker
- Google Search Console
- Outils de développement du navigateur
`;

console.log(instructions);

// Créer le script Sharp si l'utilisateur veut l'utiliser
const sharpScript = `
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const inputFile = 'public/favicon.svg';
  
  if (!fs.existsSync(inputFile)) {
    console.error('Favicon SVG non trouvé:', inputFile);
    return;
  }

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  for (const { name, size } of sizes) {
    try {
      await sharp(inputFile)
        .resize(size, size)
        .png()
        .toFile(\`public/\${name}\`);
      console.log(\`✓ Généré: \${name}\`);
    } catch (error) {
      console.error(\`✗ Erreur pour \${name}:\`, error.message);
    }
  }

  // Créer favicon.ico (nécessite un package spécial)
  console.log('\\n⚠️  Pour favicon.ico, utilisez un générateur en ligne ou ImageMagick');
  console.log('   https://realfavicongenerator.net/');
}

generateFavicons().catch(console.error);
`;

fs.writeFileSync('scripts/generate-favicons-sharp.js', sharpScript);
console.log('\n✓ Script Sharp créé: scripts/generate-favicons-sharp.js');
