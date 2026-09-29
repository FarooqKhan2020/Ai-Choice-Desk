import Image from 'next/image';

export default function ToolLogo({ tool, size = 28, className = '' }) {
  const style = { width: size, height: size };

  if (tool.logo) {
    return (
      <Image
        src={tool.logo}
        alt=""
        width={size}
        height={size}
        style={style}
        className={`shrink-0 rounded-md object-cover ${className}`}
      />
    );
  }

  return (
    <span
      style={{ ...style, fontSize: Math.round(size * 0.45) }}
      className={`flex shrink-0 items-center justify-center rounded-md bg-navy-900 font-(family-name:--font-sora) font-bold text-white ${className}`}
      aria-hidden="true"
    >
      {tool.initials ?? tool.name.charAt(0)}
    </span>
  );
}
