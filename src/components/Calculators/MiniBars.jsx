export function MiniBars({ className = 'h-8 w-12' }) {
  return (
    <svg viewBox="0 0 47 33" className={className} fill="currentColor" aria-hidden="true">
      <rect x="0" y="20" width="7" height="13" rx="3.5" />
      <rect x="13" y="14" width="7" height="19" rx="3.5" />
      <rect x="26" y="8" width="7" height="25" rx="3.5" />
      <rect x="39" y="0" width="7" height="33" rx="3.5" />
    </svg>
  );
}
