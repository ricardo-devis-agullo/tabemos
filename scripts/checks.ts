import { recipes } from '../recipes';
import fs from 'fs';
import path from 'path';

const files = fs.readdirSync(path.join(__dirname, '..', 'public'));

function exit(msg: string): never {
  console.error(msg);
  process.exit(1);
}

for (const slug of Object.keys(recipes)) {
  const mainPhoto = `${slug}.jpg`;
  if (!files.includes(mainPhoto)) {
    exit(`Not found image for ${slug}'`);
  }
}

console.log('All ok!');
