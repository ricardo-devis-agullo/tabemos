interface ImageProps {
  src: string;
  fallback?: string;
}

export const WebP: React.FC<ImageProps> = ({ src, fallback }) => {
  const altImage = fallback ?? src.replace('.webp', '.jpg');
  const mimeType = altImage.endsWith('.png') ? 'image/png' : 'image/jpeg';

  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <source srcSet={altImage} type={mimeType} />
      <img src={altImage} />
    </picture>
  );
};
