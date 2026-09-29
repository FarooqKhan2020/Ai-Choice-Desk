import Image from 'next/image';
import Link from 'next/link';
import { heroStats } from './researchData';

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-[#020a1f] text-white lg:min-h-[782px]">
      <Image
        src="/research/Research hero section image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#020a1f] via-[#020a1f]/70 to-transparent lg:via-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col px-6 pb-12 pt-[57px] lg:min-h-[782px] lg:px-15">
        <nav className="font-(family-name:--font-manrope) text-[13px] text-text-on-dark-muted">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>{' '}
          / <span className="text-white">Research</span>
        </nav>

        <p className="flex items-center gap-2 pt-[52px] font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
          <span className="size-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
          Research desk · Updated today
        </p>
        <h1 className="max-w-[760px] pt-1 font-(family-name:--font-sora) text-[44px] font-extrabold leading-[1.05] tracking-[-0.01em] sm:text-[60px] lg:text-[72px]">
          What the data
          <br />
          says about the
          <br />
          <span className="text-brand-primary">software you buy.</span>
        </h1>
        <p className="max-w-[640px] pt-9 font-(family-name:--font-manrope) text-[17px] leading-[27px] text-white">
          Independent studies on how small and mid-sized businesses choose, use
          and drop AI software. Every figure is sourced, dated, and re-checked
          on a schedule.
        </p>

        <div className="flex flex-wrap gap-3.5 pt-8">
          <Link
            href="#library"
            className="inline-flex h-[46px] items-center rounded-full bg-brand-primary px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
          >
            Browse the research
          </Link>
          <Link
            href="#method"
            className="inline-flex h-[46px] items-center rounded-full border border-white/70 px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            How we research
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-white/15 lg:mt-auto lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-6 pl-5 ${index > 0 ? 'lg:border-l lg:border-white/15' : ''} ${
                index === 2 ? 'border-t border-white/15 lg:border-t-0' : ''
              } ${index === 3 ? 'border-t border-white/15 lg:border-t-0' : ''}`}
            >
              <dd className="font-(family-name:--font-sora) text-[36px] font-bold leading-none tracking-[-0.02em] text-white lg:text-[44px]">
                {stat.value}
                {stat.suffix && <span className="text-brand-primary">{stat.suffix}</span>}
              </dd>
              <dt className="pt-3 font-(family-name:--font-manrope) text-[12px] font-medium uppercase tracking-[1.2px] text-white">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
