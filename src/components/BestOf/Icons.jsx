const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ArrowIcon({ className = 'h-4 w-4', strokeWidth = 1.6 }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.3}>
      <path d="M8 1.8 13 3.6v4c0 3-2 5-5 6.6-3-1.6-5-3.6-5-6.6v-4L8 1.8Z" />
      <path d="m5.8 8 1.6 1.6 2.8-3" />
    </svg>
  );
}

export function ClockIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.3}>
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.5V8l2.3 1.4" />
    </svg>
  );
}

export function StarIcon({ className = 'h-2.5 w-2.5' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="m8 1.2 1.9 4.5 4.9.4-3.7 3.2 1.1 4.8L8 11.4l-4.2 2.7 1.1-4.8L1.2 6.1l4.9-.4L8 1.2Z" />
    </svg>
  );
}

export function TrendIcon({ className = 'h-[18px] w-[18px]' }) {
  return (
    <svg viewBox="0 0 18 18" className={className} {...base} strokeWidth={1.4}>
      <path d="m2.5 12.5 4-4 2.5 2.5 6.5-6.5M11.5 4.5h4v4" />
    </svg>
  );
}

export function HeadsetIcon({ className = 'h-[18px] w-[18px]' }) {
  return (
    <svg viewBox="0 0 18 18" className={className} {...base} strokeWidth={1.4}>
      <path d="M3 10V9a6 6 0 0 1 12 0v1" />
      <rect x="2.5" y="10" width="3" height="4.5" rx="1.2" />
      <rect x="12.5" y="10" width="3" height="4.5" rx="1.2" />
    </svg>
  );
}

export function SearchIcon({ className = 'h-[17px] w-[17px]' }) {
  return (
    <svg viewBox="0 0 17 17" className={className} {...base} strokeWidth={1.42}>
      <circle cx="7.8" cy="7.8" r="4.8" />
      <path d="m11.4 11.4 3 3" />
    </svg>
  );
}

export function MiniBars({ className = 'h-4 w-6' }) {
  return (
    <svg viewBox="0 0 24 16" className={className} fill="currentColor" aria-hidden="true">
      <rect x="0" y="10" width="3" height="6" rx="1.5" />
      <rect x="5" y="8" width="3" height="8" rx="1.5" />
      <rect x="10" y="6" width="3" height="10" rx="1.5" />
      <rect x="15" y="3" width="3" height="13" rx="1.5" />
      <rect x="20" y="0" width="3" height="16" rx="1.5" />
    </svg>
  );
}
