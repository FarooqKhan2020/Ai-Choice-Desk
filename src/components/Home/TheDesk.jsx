import React from 'react';
import Link from 'next/link';

const authors = [
  {
    name: 'Jessica Dennis',
    role: 'Lead Analyst, Customer Experience',
    bio: 'Twelve years running support desks before she started scoring the software that replaces them.',
    initials: 'JD',
    avatarBg: 'bg-accent-secondary-light',
  },
  {
    name: 'Jessica Dennis',
    role: 'Editor, Automation & Operations',
    bio: 'Builds the fixed task lists every workflow tool has to survive before it earns a number.',
    initials: 'JD',
    avatarBg: 'bg-brand-primary-light',
  },
  {
    name: 'Jessica Dennis',
    role: 'Pricing Researcher',
    bio: 'Tracks list price, renewal price and the bill at three times your usage. Every 60 days.',
    initials: 'JD',
    avatarBg: 'bg-state-hover',
  },
  {
    name: 'Jessica Dennis',
    role: 'Research Director, AEO & GEO',
    bio: 'Measures where brands actually surface inside AI answers, not just on page one.',
    initials: 'JD',
    avatarBg: 'bg-brand-browseai-fill',
  },
];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path
        d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TheDesk() {
  return (
    <section className="px-6 py-14 sm:px-10 lg:px-15 lg:py-15">
      <div className="mx-auto max-w-300">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-text-secondary">
              The desk
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
              People sign the scores, not an algorithm
            </h2>
            <p className="pt-4 font-(family-name:--font-manrope) text-[16px] leading-7 text-text-secondary">
              Every review carries a name, a job history, and the date it was last
              checked. If a number changes, you can see who changed it and why.
            </p>
          </div>
          <Link
            href="/authors"
            className="flex shrink-0 items-center gap-2 font-(family-name:--font-manrope) text-[14px] font-bold uppercase tracking-[0.5px] text-text-primary transition-colors hover:text-accent-secondary"
          >
            View all authors
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author, i) => (
            <div
              key={i}
              className="rounded-xl border border-border-default bg-bg-page p-6"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full font-(family-name:--font-sora) text-[16px] font-bold text-text-primary ${author.avatarBg}`}
              >
                {author.initials}
              </div>
              <h3 className="pt-4 font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
                {author.name}
              </h3>
              <p className="pt-1 font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1px] text-text-secondary">
                {author.role}
              </p>
              <p className="pt-3 font-(family-name:--font-manrope) text-[14px] leading-6 text-text-secondary">
                {author.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TheDesk;
