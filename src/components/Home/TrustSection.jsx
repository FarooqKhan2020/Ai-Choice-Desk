import React from 'react';
import Image from 'next/image';

const stats = [
  { value: '320+', label: 'Tools tested' },
  { value: '2410', label: 'Hours logged' },
  { value: '614', label: 'Prices checked' },
  { value: '90', label: 'Day review cycle' },
];

const verificationNotes = [
  { note: 'Freshdesk renewal pricing rechecked', date: 'Today' },
  { note: 'Claude writing benchmark rerun', date: '2d ago' },
  { note: 'ElevenLabs voice latency scope updated', date: '4d ago' },
];

function FlaskIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0">
      <path
        d="M6.333 1.333h3.334M6.667 1.333v3.99a2 2 0 0 1-.334 1.11L3.05 11.62a1.667 1.667 0 0 0 1.389 2.59h7.122a1.667 1.667 0 0 0 1.389-2.59L9.667 6.433a2 2 0 0 1-.334-1.11v-3.99"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 9.333h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-teal-600">
      <path
        d="M13.333 4 6 11.333 2.667 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustSection() {
  return (
    <section className="bg-tint-ice px-6 py-14 sm:px-10 lg:px-15 lg:py-15">
      <div className="mx-auto grid max-w-300 gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left: image card */}
        <div className="overflow-hidden rounded-2xl">
          <div className="relative h-80 w-full sm:h-96">
            <Image
              src="/images/researchers.png"
              alt="The team reviewing test results"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-cards-dark-fill px-8 py-6">
            <div className="flex items-center gap-2 text-teal-600">
              <FlaskIcon />
              <span className="font-(family-name:--font-geist-mono) text-[11px] font-medium uppercase tracking-[2px]">
                Inside the lab
              </span>
            </div>
            <p className="pt-2 font-(family-name:--font-manrope) text-[18px] font-semibold text-text-on-dark">
              Real accounts. Real workflows. Every week.
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-text-secondary">
            Evidence, not volume
          </p>
          <h2 className="pt-3 font-(family-name:--font-sora) text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Trust is built in <span className="text-teal-600">the details.</span>
          </h2>
          <p className="max-w-md pt-4 font-(family-name:--font-manrope) text-[16px] leading-7 text-text-secondary">
            The numbers behind every recommendation are visible, current, and tied to
            real testing work.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-8 rounded-xl border border-border-default bg-card-bg p-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-(family-name:--font-sora) text-3xl font-extrabold text-text-primary">
                  {stat.value}
                </p>
                <p className="pt-1 font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1px] text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="pt-6 font-(family-name:--font-geist-mono) text-[11px] font-medium uppercase tracking-[2px] text-text-secondary">
            Latest verification notes
          </p>
          <div className="mt-3 flex flex-col divide-y divide-border-default rounded-xl border border-border-default bg-card-bg px-5">
            {verificationNotes.map((item) => (
              <div key={item.note} className="flex items-center justify-between gap-4 py-4">
                <span className="flex items-center gap-2.5 font-(family-name:--font-manrope) text-[14px] text-text-primary">
                  <CheckIcon />
                  {item.note}
                </span>
                <span className="shrink-0 font-(family-name:--font-manrope) text-[13px] text-text-muted">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
