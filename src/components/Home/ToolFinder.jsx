import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = ['01 Team', '02 Task', '03 Budget'];

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-text-secondary">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-text-secondary">
      <path
        d="M8 1.333 13.333 3.5v3.833c0 3.278-2.222 5.972-5.333 6.834-3.111-.862-5.333-3.556-5.333-6.834V3.5L8 1.333Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M5.833 8l1.5 1.5 2.834-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectField({ label, defaultValue, options }) {
  return (
    <div>
      <label className="block font-(family-name:--font-manrope) text-[14px] font-medium text-text-secondary">
        {label}
      </label>
      <div className="relative mt-2">
        <select
          defaultValue={defaultValue}
          className="w-full appearance-none rounded-lg border border-border-default bg-bg-input px-4 py-3 font-(family-name:--font-manrope) text-[15px] font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-teal-600/40"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
}

function ToolFinder() {
  return (
    <section
      className="px-6 py-16 sm:px-10 lg:px-15 lg:py-20"
      style={{
        backgroundImage: 'linear-gradient(180deg, #061428 0%, #000e20 100%)',
      }}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2">
            <Image src="/hero/sparkle.svg" alt="" width={16} height={16} />
            <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-teal-600">
              60-second tool finder
            </p>
          </div>
          <h2 className="max-w-lg pt-5 font-(family-name:--font-sora) text-3xl font-extrabold leading-tight text-text-on-dark sm:text-4xl">
            Your shortlist should fit your work—not the other way around.
          </h2>
          <p className="max-w-md pt-5 font-(family-name:--font-manrope) text-[16px] leading-7 text-text-on-dark-muted">
            Three quick choices. One focused recommendation, with the trade-offs made
            clear.
          </p>
          <div className="flex items-center gap-3 pt-8 font-(family-name:--font-geist-mono) text-[12px] uppercase tracking-[1.5px] text-text-on-dark-muted">
            {steps.map((step, i) => (
              <React.Fragment key={step}>
                {i > 0 && <span className="text-white/20">—</span>}
                <span>{step}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: card */}
        <div className="flex overflow-hidden rounded-2xl shadow-2xl">
          <div className="flex flex-1 flex-col gap-6 bg-bg-page p-8">
            <SelectField
              label="Who's using it?"
              defaultValue="Small team"
              options={['Small team', 'Solo', 'Enterprise']}
            />
            <SelectField
              label="What needs fixing?"
              defaultValue="Customer support"
              options={['Customer support', 'Content creation', 'Research']}
            />
            <SelectField
              label="Monthly budget?"
              defaultValue="Under 100$"
              options={['Under 50$', 'Under 100$', '100$+']}
            />
          </div>

          <div className="flex flex-1 flex-col bg-mint-200 p-8">
            <div className="flex items-start justify-between">
              <p className="font-(family-name:--font-geist-mono) text-[11px] font-bold uppercase tracking-[1.5px] text-text-primary">
                Your strongest match
              </p>
              <div className="text-right">
                <p className="font-(family-name:--font-sora) text-3xl font-extrabold leading-none text-teal-600">
                  95%
                </p>
                <p className="pt-1 font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[1px] text-text-secondary">
                  Match
                </p>
              </div>
            </div>

            <h3 className="pt-4 font-(family-name:--font-sora) text-2xl font-extrabold text-text-primary">
              Freshdesk
            </h3>
            <p className="pt-2 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-secondary">
              Reliable support automation without losing human oversight.
            </p>

            <Link
              href="/tools/freshdesk"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-(family-name:--font-manrope) text-[15px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
            >
              See the full review
              <ArrowRightIcon />
            </Link>

            <div className="mt-auto flex items-center gap-2 pt-6">
              <ShieldCheckIcon />
              <span className="font-(family-name:--font-manrope) text-[12px] text-text-secondary">
                Based on hands-on testing, not sponsorship
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolFinder;
