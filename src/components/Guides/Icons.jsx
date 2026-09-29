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

export function PlusIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 12 12" className={className} {...base} strokeWidth={1.4}>
      <path d="M6 1.5v9M1.5 6h9" />
    </svg>
  );
}

export function MinusIcon({ className = 'h-3 w-3' }) {
  return (
    <svg viewBox="0 0 12 12" className={className} {...base} strokeWidth={1.6}>
      <path d="M1.5 6h9" />
    </svg>
  );
}

export function SparkleIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1.5c.7 5.4 5.1 9.8 10.5 10.5-5.4.7-9.8 5.1-10.5 10.5-.7-5.4-5.1-9.8-10.5-10.5C6.9 11.3 11.3 6.9 12 1.5Z" />
    </svg>
  );
}
