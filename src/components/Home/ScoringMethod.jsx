import React from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Acquire access',
    description:
      'We buy the plan or use a standard trial. We do not accept vendor-configured demo accounts as the basis for a score.',
  },
  {
    number: '02',
    title: 'Run the same tasks',
    description:
      'Each category has a fixed task list every product must attempt, so scores compare like with like.',
  },
  {
    number: '03',
    title: 'Verify the price',
    description:
      'Advertised price, renewal price and the cost at three times current usage, checked on the date shown on the page.',
  },
  {
    number: '04',
    title: 'Re-test on a schedule',
    description:
      'Pricing every 60 days, scores every 90. The date on the page is the date we last looked.',
  },
];

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScoringMethod() {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 px-6 py-16 sm:px-10 lg:px-15 lg:py-20"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 900px 500px at 100% 100%, rgba(0,211,203,0.16) 0%, rgba(0,211,203,0) 60%), linear-gradient(180deg, #061428 0%, #0a2338 100%)',
      }}
    >
      {/* Decorative dotted arcs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-40 h-96 w-96">
        <div className="absolute inset-0 rounded-full border border-dashed border-teal-600/40" />
        <div className="absolute inset-6 rounded-full border border-dashed border-teal-600/25" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="lg:self-center">
          <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-teal-600">
            The method
          </p>
          <h2 className="max-w-lg pt-4 font-(family-name:--font-sora) text-3xl font-extrabold leading-tight text-text-on-dark sm:text-4xl">
            Nothing gets a score until we have used it
          </h2>
          <p className="max-w-md pt-5 font-(family-name:--font-manrope) text-[16px] leading-7 text-text-on-dark-muted">
            Products sit in our directory with verified pricing and features from the
            moment we add them. A number only appears after hands-on testing against
            the same seven weighted criteria, and we publish the weighting.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-8">
            <Link
              href="/scoring-model"
              className="flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
            >
              Read the scoring model
              <ArrowUpRightIcon />
            </Link>
            <Link
              href="/how-we-test"
              className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-dark transition-colors hover:bg-white/10"
            >
              How we test
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          {steps.map((step) => (
            <div key={step.number} className="border-b border-white/10 py-6 first:pt-0 last:border-b">
              <span className="font-(family-name:--font-geist-mono) text-[12px] font-medium text-teal-600">
                {step.number}
              </span>
              <h3 className="pt-2 font-(family-name:--font-sora) text-[18px] font-bold text-text-on-dark">
                {step.title}
              </h3>
              <p className="pt-2 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-on-dark-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScoringMethod;
