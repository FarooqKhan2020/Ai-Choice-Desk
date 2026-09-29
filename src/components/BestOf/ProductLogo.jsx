import Image from 'next/image';

export default function ProductLogo({ src, size = 40, className = '' }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`shrink-0 rounded-lg object-cover ${className}`}
    />
  );
}
