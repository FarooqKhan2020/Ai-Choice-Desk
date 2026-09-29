import Link from 'next/link';
import { latestResearch } from './researchData';

export default function LatestResearch() {
  return (
    <section className="bg-surface-alt pb-[86px] pt-[66px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-[#0d9488]">
              Latest research
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[32px] font-extrabold leading-none tracking-[-0.02em] text-[#0b1f3a] lg:text-[44px]">
              The last six months
            </h2>
          </div>
          <Link
            href="#library"
            className="inline-flex h-[46px] shrink-0 items-center rounded-full border border-border-default bg-white px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary transition-colors hover:border-text-primary"
          >
            All 184 studies
          </Link>
        </div>

        <ol className="relative mt-[52px] grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          <span
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-[#dfe7ee] lg:block"
            aria-hidden="true"
          />
          {latestResearch.map((item) => (
            <li key={item.title} className="relative pr-6">
              <span className="relative z-10 block size-3.5 rounded-full border-[1.5px] border-brand-primary bg-surface-alt" aria-hidden="true" />
              <p className="pt-9 font-(family-name:--font-manrope) text-[13px] font-bold uppercase tracking-[1.5px] text-[#8996a6]">
                {item.date}
              </p>
              <h3 className="max-w-[230px] pt-4 font-(family-name:--font-sora) text-[20px] font-bold leading-6 tracking-[-0.01em] text-[#0b1f3a]">
                {item.title}
              </h3>
              <p className="pt-3 font-(family-name:--font-manrope) text-[12px] font-semibold text-[#0d9488]">
                {item.meta}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
