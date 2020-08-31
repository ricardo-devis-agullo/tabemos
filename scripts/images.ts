import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { recipes } from '../recipes';
import { availableResolutions, putResolution } from '../images';

const publicPath = path.join(__dirname, '..', 'public', 'photos');
const files = fs.readdirSync(publicPath);

function exit(msg: string): never {
  console.error(msg);
  process.exit(1);
}

export function generateImages({
  onlyCheck = false,
}: {
  onlyCheck: boolean;
}): void {
  for (const slug of Object.keys(recipes)) {
    const sourcePhoto = `${slug}.jpg`;

    if (!files.includes(sourcePhoto)) {
      exit(`Not found source image for ${slug}'`);
    }

    for (const resolution of availableResolutions) {
      const jpgPhoto = putResolution({ image: sourcePhoto, ...resolution });

      for (const photo of [jpgPhoto, jpgPhoto.replace('.jpg', '.webp')]) {
        if (!files.includes(photo)) {
          if (onlyCheck) {
            exit(`Photo ${photo} doesn't exist`);
          } else {
            const image = fs.readFileSync(path.join(publicPath, sourcePhoto));
            const newImage = photo.includes('-small')
              ? sharp(image).resize(null, 400)
              : sharp(image);
            newImage.toFile(path.join(publicPath, photo));
          }
        }
      }
    }
  }
}
