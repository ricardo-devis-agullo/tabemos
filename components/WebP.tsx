interface ImageProps {
  src: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  fallback?: string;
}

export const WebP: React.FC<ImageProps> = ({
  src,
  width,
  height,
  style,
  fallback,
}) => {
  const source = src.endsWith('.webp') ? src : `${src}.webp`;
  const altImage = fallback ?? source.replace('.webp', '.jpg');
  const mimeType = altImage.endsWith('.png') ? 'image/png' : 'image/jpeg';

  return (
    <picture>
      <source srcSet={source} type="image/webp" />
      <source srcSet={altImage} type={mimeType} />
      <img style={style} src={altImage} width={width} height={height} />
    </picture>
  );
};
