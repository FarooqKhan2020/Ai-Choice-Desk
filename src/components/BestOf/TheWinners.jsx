import Link from 'next/link';
import { runnersUp, topWinner } from './bestOfData';
import { ArrowIcon, ShieldCheckIcon } from './Icons';
import ProductLogo from './ProductLogo';

export default function TheWinners() {
  const top = topWinner;

  return (
    <section id="winners" className="scroll-mt-24 bg-surface-alt pb-15 pt-[66px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
              Editor’s picks
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-none tracking-[-0.02em] text-text-primary lg:text-[44px]">
              The winners.
            </h2>
          </div>
          <p className="max-w-[400px] font-(family-name:--font-manrope) text-[16px] leading-[27px] text-text-secondary">
            Our strongest picks after comparing products across features,
            usability, value and real-world performance.
          </p>
        </div>

        <div className="relative pt-8">
          {/* Decorative ring, sits behind the runner-up row */}
          <div
            className="pointer-events-none absolute right-[37px] top-[473px] z-[5] hidden size-[260px] rounded-full border border-text-primary lg:block"
            aria-hidden="true"
          />

          {/* #01 */}
          <div className="relative grid overflow-hidden lg:grid-cols-[672fr_648fr]">
            <div className="bg-white px-6 py-10 lg:px-11">
              <div className="flex items-center gap-4">
                <p className="font-(family-name:--font-sora) text-[56px] font-extrabold leading-none text-text-primary lg:text-[64px]">
                  #<span className="text-brand-primary">{top.rank}</span>
                </p>
                <div>
                  <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
                    {top.label}
                  </p>
                  <p className="flex items-center gap-1.5 pt-1.5 font-(family-name:--font-manrope) text-[12px] text-brand-primary">
                    <ShieldCheckIcon />
                    {top.verified}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <ProductLogo src={top.logo} size={40} />
                <div className="flex flex-col items-start gap-1">
                  <h3 className="font-(family-name:--font-manrope) text-[26px] font-semibold leading-none text-text-primary">
                    {top.name}
                  </h3>
                  <span className="rounded-full bg-accent-secondary-light px-3 py-1 font-(family-name:--font-manrope) text-[11px] font-semibold text-text-secondary">
                    {top.category}
                  </span>
                </div>
              </div>

              <p className="pt-5 font-(family-name:--font-manrope) text-[16px] text-text-secondary">
                {top.tagline}
              </p>

              <div className="mt-6 max-w-[560px] border-y border-border-default py-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-(family-name:--font-sora) text-[44px] font-bold leading-none text-text-primary">
                    {top.score}
                    <span className="pl-2 text-[16px] font-medium text-text-muted">/ 10</span>
                  </p>
                  <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1.5 font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary">
                    {top.scoreNote}
                  </span>
                </div>
              </div>

              <p className="max-w-[512px] pt-6 font-(family-name:--font-manrope) text-[16px] leading-[27px] text-text-secondary">
                {top.review}
              </p>

              <div className="flex flex-wrap gap-3 pt-7">
                <Link
                  href={top.href}
                  className="inline-flex h-12 items-center gap-2.5 rounded-full bg-brand-primary px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
                >
                  Read review
                  <ArrowIcon className="h-4 w-4" strokeWidth={1.8} />
                </Link>
                <Link
                  href="/compare"
                  className="inline-flex h-12 items-center rounded-full border border-border-default px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary transition-colors hover:border-text-primary"
                >
                  Compare
                </Link>
              </div>
            </div>

            <div className="relative bg-[#edf8f9] px-6 py-10 lg:px-11 lg:pt-[46px]">
              <div
                className="absolute right-6 top-10 flex size-[72px] items-center justify-center rounded-full border-4 border-[#51DECD] font-(family-name:--font-manrope) text-[15px] font-bold text-text-primary lg:right-12 lg:top-[48px]"
                aria-label={`${top.percent} percent`}
              >
                {top.percent}%
              </div>

              <p className="flex items-baseline gap-3 pt-2 lg:pt-7">
                <span className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-text-muted">
                  Overall
                </span>
                <span className="font-(family-name:--font-sora) text-[48px] font-bold leading-none text-text-primary">
                  {top.score}
                </span>
              </p>

              <ul className="flex max-w-[433px] flex-col gap-[18px] pt-6">
                {top.criteria.map((item) => (
                  <li key={item.label}>
                    <div className="flex items-center justify-between font-(family-name:--font-manrope) text-[14px] text-text-primary">
                      <span>{item.label}</span>
                      <span className="text-[13px] font-semibold">{item.score}</span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-[#dbe6ec]">
                      <div
                        className="h-full rounded-full bg-brand-primary"
                        style={{ width: `${item.score * 10}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <p className="max-w-[400px] pt-6 font-(family-name:--font-manrope) text-[12px] leading-5 text-text-muted">
                {top.note}
              </p>
            </div>
          </div>

          {/* #02 – #05 */}
          <ul className="relative z-10 grid gap-[13px] pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {runnersUp.map((item) => (
              <li
                key={item.name}
                className="flex min-h-[235px] flex-col rounded-xl border border-border-default bg-white p-5"
              >
                <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
                  {item.label}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <ProductLogo src={item.logo} size={40} />
                  <h3 className="font-(family-name:--font-manrope) text-[16px] font-semibold text-text-primary">
                    {item.name}
                  </h3>
                </div>
                <p className="max-w-[240px] pb-4 pt-4 font-(family-name:--font-manrope) text-[13px] leading-5 text-text-secondary">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border-default pt-4">
                  <span className="font-(family-name:--font-manrope) text-[13px] text-text-muted">
                    {item.price}
                  </span>
                  <span className="font-(family-name:--font-manrope) text-[18px] font-bold text-text-primary">
                    {item.score}
                    <span className="pl-0.5 text-[10px] font-medium text-text-muted">/10</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
