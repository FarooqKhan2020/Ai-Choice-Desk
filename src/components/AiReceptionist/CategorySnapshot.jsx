const stats = [
  { value: '4', label: 'Products tracked' },
  { value: '$29/mo', label: 'Starting price' },
  { value: '$50–$1,500', label: 'Typical monthly spend' },
  { value: '0', label: 'Free plans' },
  { value: 'Research data', label: 'Last updated' },
];

export default function CategorySnapshot() {
  return (
    <section className="bg-surface-alt py-9">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-7 flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path
              d="M3.75 11.25v3M7.25 7.5v6.75M10.75 9.75v4.5M14.25 4.5v9.75"
              stroke="#00CFC1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="text-[16px] font-bold tracking-[-0.01em] text-text-primary">
            Category Snapshot
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index > 0
                  ? 'lg:border-l lg:border-divider lg:pl-8'
                  : undefined
              }
            >
              <div className="mb-1.5 text-[26px] font-bold leading-none tracking-[-0.01em] text-text-primary">
                {stat.value}
              </div>
              <div className="text-[13px] text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
