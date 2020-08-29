import { recipes } from '../recipes';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicPath = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicPath);

function exit(msg: string): never {
  console.error(msg);
  process.exit(1);
}

for (const slug of Object.keys(recipes)) {
  const mainPhoto = `${slug}.jpg`;
  const mainWebpPhoto = `${slug}.webp`;
  const smallPhoto = `${slug}-small.jpg`;
  const smallWebpPhoto = `${slug}-small.webp`;

  if (!files.includes(mainPhoto)) {
    exit(`Not found source image for ${slug}'`);
  }

  const toGenerate = [mainWebpPhoto, smallPhoto, smallWebpPhoto];

  for (const photo of toGenerate) {
    if (!files.includes(photo)) {
      const image = fs.readFileSync(path.join(publicPath, mainPhoto));
      const newImage = photo.includes('-small')
        ? sharp(image).resize(null, 400)
        : sharp(image);
      newImage.toFile(path.join(publicPath, photo));
    }
  }
}

console.log('All ok!');
