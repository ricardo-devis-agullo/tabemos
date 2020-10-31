import fs from 'fs';
import path from 'path';
import { recipes } from '../recipes';

const publicPath = path.join(__dirname, '..', 'public', 'photos');
const files = fs.readdirSync(publicPath);

function exit(msg: string): never {
  console.error(msg);
  process.exit(1);
}

export function checkImages(): void {
  for (const slug of Object.keys(recipes)) {
    const sourcePhoto = `${slug}.jpg`;

    if (!files.includes(sourcePhoto)) {
      exit(`Not found source image for ${slug}'`);
    }
  }
}
