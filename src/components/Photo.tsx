import Image from 'next/image';

/**
 * Image frame with a hairline border and fixed aspect — keeps the editorial
 * grid honest and prevents layout shift (width/height come from next/image).
 */
export default function Photo({
  src,
  alt,
  ratio = '4 / 5',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className = '',
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card border border-line bg-parchment ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
