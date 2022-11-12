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
  for (const recipe of recipes.values()) {
    const sourcePhoto = `${recipe.slug}.jpg`;

    if (!files.includes(sourcePhoto)) {
      exit(`Not found source image for ${recipe.slug}'`);
    }

    const stepPhotos = recipe.steps
      .map((s) => s.photo)
      .filter((p): p is string => typeof p === 'string');
    for (const stepPhoto of stepPhotos) {
      const sourcePhoto = `${recipe.slug}-${stepPhoto}.jpg`;

      if (!files.includes(sourcePhoto)) {
        exit(`Not found step photo image for ${recipe.slug}-${stepPhoto}'`);
      }
    }
  }
}
