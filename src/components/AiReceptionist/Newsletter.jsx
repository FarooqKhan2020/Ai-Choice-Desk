'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-brand-primary pb-14 pt-15">
      {/* Decorative circle */}
      <div
        className="pointer-events-none absolute -top-[38px] left-[495px] hidden size-[280px] rounded-full bg-white/20 lg:block"
        aria-hidden="true"
      />

      {/* Decorative dots */}
      <div
        className="pointer-events-none absolute -top-[3px] right-[19px] hidden grid-cols-4 gap-[21px] lg:grid"
        aria-hidden="true"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="size-[5px] rounded-full bg-navy-900/25" />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-15">
        <div>
          <p className="font-(family-name:--font-manrope) text-[11px] font-bold uppercase text-navy-900">
            The Choice Desk Briefing
          </p>
          <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-[1.15] text-navy-900 sm:text-[36px]">
            Make your next software decision
            <br className="hidden sm:block" /> with better data.
          </h2>
          <p className="pt-3 font-(family-name:--font-manrope) text-[15px] text-navy-900">
            One useful, source-linked email a week. No noise.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex h-11 w-full max-w-[395px] shrink-0"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            aria-label="Email address"
            required
            className="min-w-0 flex-1 rounded-l-lg border border-navy-900/40 bg-transparent px-4 font-(family-name:--font-manrope) text-[14px] text-navy-900 placeholder:text-navy-900/40 focus:border-navy-900 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-r-lg bg-text-primary px-5 font-(family-name:--font-manrope) text-[14px] font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
