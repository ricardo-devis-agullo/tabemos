const photoResPattern = /\w+_(?<width>\d+)?x(?<height>\d+)?\.\w+/;

interface Resolution {
  width?: number;
  height?: number;
}

function partialNumber(x: unknown): number | undefined {
  const converted = Number(x);

  return Number.isNaN(converted) ? undefined : converted;
}

export function getResolution(image: string): Resolution {
  const { width, height } = photoResPattern.exec(image)?.groups ?? {
    width: undefined,
    height: undefined,
  };

  if (!width && !height) {
    throw new Error('Not found width nor height');
  }

  return {
    width: partialNumber(width),
    height: partialNumber(height),
  };
}

export function putResolution(options: { image: string } & Resolution): string {
  if (photoResPattern.exec(options.image)) {
    throw new Error(`The image ${options.image} already has a resolution`);
  }

  const [name, extension] = options.image.split('.');
  const width = options.width ?? '';
  const height = options.height ?? '';
  const baseName = `${name}_${width}x${height}`;

  return extension ? `${baseName}.${extension}` : baseName;
}

type ResKeys = '400x';
const resolutionMapping: Record<string, Resolution> = {
  '400x': { width: 400 },
};
export const availableResolutions = Object.values(resolutionMapping);

export function getPhoto(image: string, resKey: ResKeys): string {
  return putResolution({ image, ...resolutionMapping[resKey] });
}
