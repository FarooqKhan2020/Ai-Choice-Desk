const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.4}>
      <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.6}>
      <path d="m3.5 8.5 3 3 6-6.5" />
    </svg>
  );
}

export function CrossIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.6}>
      <path d="m4 4 8 8M12 4l-8 8" />
    </svg>
  );
}

export function TrophyIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.6}>
      <path d="M6 4h12v5a6 6 0 0 1-12 0V4Z" />
      <path d="M6 6H3v1.5A3.5 3.5 0 0 0 6.5 11M18 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5" />
      <path d="M12 15v3M8 21h8M9.5 18h5" />
    </svg>
  );
}

export function SearchIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.6}>
      <circle cx="9" cy="9" r="5.5" />
      <path d="m13.2 13.2 3.3 3.3" />
    </svg>
  );
}

export function PricingIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.3}>
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.5v7M9.8 6.2c-.4-.5-1-.7-1.8-.7-1 0-1.7.5-1.7 1.2 0 1.8 3.5.9 3.5 2.6 0 .7-.7 1.2-1.8 1.2-.8 0-1.5-.3-1.9-.9" />
    </svg>
  );
}

export function TargetIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.3}>
      <path d="M8 1.5 9.6 6.4 14.5 8 9.6 9.6 8 14.5 6.4 9.6 1.5 8 6.4 6.4 8 1.5Z" />
    </svg>
  );
}

const featureIcons = {
  search: (
    <>
      <circle cx="9" cy="9" r="5.5" />
      <path d="m13.2 13.2 3.3 3.3" />
    </>
  ),
  doc: (
    <>
      <path d="M5 2.5h7l3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z" />
      <path d="M12 2.5v3h3" />
    </>
  ),
  sparkle: (
    <path d="M10 2.5 12 8l5.5 2L12 12l-2 5.5L8 12l-5.5-2L8 8l2-5.5Z" />
  ),
  users: (
    <>
      <circle cx="10" cy="7" r="3" />
      <path d="M4 16.5c.5-3 3-4.5 6-4.5s5.5 1.5 6 4.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="m13 7-1.6 4.4L7 13l1.6-4.4L13 7Z" />
    </>
  ),
  bolt: <path d="M11 2.5 4.5 11H10l-1 6.5L15.5 9H10l1-6.5Z" />,
  shield: (
    <>
      <path d="M10 2.5 16 5v4.5c0 3.7-2.5 6.2-6 8-3.5-1.8-6-4.3-6-8V5l6-2.5Z" />
      <path d="m7.5 10 1.8 1.8 3.2-3.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4.2l2.8 1.6" />
    </>
  ),
};

export function FeatureIcon({ name, className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.4}>
      {featureIcons[name]}
    </svg>
  );
}
