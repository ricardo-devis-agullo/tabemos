import { recipes } from '../recipes';
import fs from 'fs';
import path from 'path';

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
    exit(`Not found image for ${slug}'`);
  }

  const toGenerate = [mainWebpPhoto, smallPhoto, smallWebpPhoto];

  for (const photo of toGenerate) {
    if (!files.includes(photo)) {
      exit(`Not found image for ${photo}`);
    }
  }
}

console.log('All ok!');
