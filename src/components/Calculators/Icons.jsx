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

export function SearchIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.3}>
      <circle cx="7.2" cy="7.2" r="4.6" />
      <path d="m10.8 10.8 3 3" />
    </svg>
  );
}

const paths = {
  doc: (
    <>
      <rect x="4" y="3" width="12" height="14" rx="2" />
      <path d="M7 7.5h6M7 10.5h6M7 13.5h3" />
    </>
  ),
  chart: (
    <>
      <circle cx="10" cy="4.5" r="1.4" />
      <path d="M5 16V11M10 16V8M15 16V12M3.5 16.5h13" />
    </>
  ),
  ring: (
    <>
      <path d="M16 9a6.2 6.2 0 1 1-2-4.4" />
      <path d="M14.5 2.5v3h-3" />
    </>
  ),
  bolt: (
    <>
      <path d="M5.5 3h9v14l-4.5-3-4.5 3V3Z" />
      <path d="m10.6 5.6-1.8 3h2.4l-1.8 3" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="6.5" r="2.5" />
      <path d="M3.5 15.5c.4-2.6 2.2-3.8 4.5-3.8 1.2 0 2.2.3 3 .9" />
      <circle cx="14.5" cy="14.5" r="3" />
      <path d="m13.3 14.5.9.9 1.6-1.8" />
    </>
  ),
  network: (
    <>
      <circle cx="10" cy="10" r="1.8" />
      <path d="M10 3v3.4M10 13.6V17M3 10h3.4M13.6 10H17M5 5l2.5 2.5M12.5 12.5 15 15M15 5l-2.5 2.5M7.5 12.5 5 15" />
    </>
  ),
  coin: (
    <>
      <path d="M10 3c3 0 5 2.4 5 5.5 0 2-1 3.4-2 4.3V15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 15v-2.2c-1-.9-2-2.3-2-4.3C5 5.4 7 3 10 3Z" />
      <path d="M10 6.5v4M8.6 8.5h2.8" />
    </>
  ),
};

export function CalcIcon({ name, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.3}>
      {paths[name]}
    </svg>
  );
}
