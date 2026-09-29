import Image from 'next/image';
import Link from 'next/link';
import { heroStats } from './guidesData';
import { ArrowIcon } from './Icons';

function FloatCard({ pill, children, className = '', bars, textWidth = 'max-w-[300px]' }) {
  return (
    <div
      className={`absolute rounded-[18px] border border-white/15 bg-[#06203e]/80 px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md ${className}`}
    >
      <span className="inline-block rounded-full bg-brand-primary/15 px-3 py-1 font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary">
        {pill}
      </span>
      <p className={`pt-3 font-(family-name:--font-sora) text-[18px] font-bold leading-[22px] text-white ${textWidth}`}>
        {children}
      </p>
      <div className="flex flex-col gap-2.5 pt-3.5">
        {bars.map((bar, index) => (
          <span
            key={index}
            className={`h-[5px] rounded-full ${bar.teal ? 'bg-brand-primary' : 'bg-white'}`}
            style={{ width: `${bar.w}%`, opacity: bar.o ?? 1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function GuidesHero() {
  return (
    <section className="relative overflow-hidden bg-[#020a1f] text-white lg:min-h-[611px]">
      <Image
        src="/guides/guide hero sectoin.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#020a1f] via-[#020a1f]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-[99px] lg:min-h-[611px] lg:px-15">
        <div className="max-w-[540px]">
          <p className="flex items-center gap-2.5 font-(family-name:--font-manrope) text-[14px] font-medium text-brand-primary">
            <span className="h-0.5 w-3.5 bg-brand-primary" aria-hidden="true" />
            Guides &amp; practical knowledge
          </p>
          <h1 className="pt-5 font-(family-name:--font-sora) text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[56px] lg:text-[60px]">
            AI made simpler.
          </h1>
          <p className="max-w-[470px] pt-6 font-(family-name:--font-manrope) text-[18px] leading-[30px] text-white">
            Practical guides to help you understand AI, choose the right
            software, and make smarter technology decisions.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-[38px]">
            <Link
              href="#start-here"
              className="inline-flex h-[54px] items-center rounded-full bg-brand-primary px-[27px] font-(family-name:--font-manrope) text-[16px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
            >
              Explore Guides
            </Link>
            <Link
              href="#topics"
              className="inline-flex items-center gap-2 font-(family-name:--font-manrope) text-[16px] font-semibold text-white transition-colors hover:text-brand-primary"
            >
              Browse Topics
              <ArrowIcon className="h-[18px] w-[18px] text-brand-primary" />
            </Link>
          </div>

          <dl className="mt-[55px] flex flex-wrap gap-x-8 gap-y-5 border-t border-white/30 pt-[34px]">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-(family-name:--font-sora) text-[26px] font-bold leading-none">
                  {stat.value}
                </dd>
                <dt className="pt-3 font-(family-name:--font-manrope) text-[14px] text-white">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Floating guide cards */}
        <div
          className="pointer-events-none absolute right-[140px] top-[54px] hidden h-[500px] w-[500px] xl:block"
          aria-hidden="true"
        >
          <FloatCard
            pill="Automation"
            className="left-[5px] top-[18px] h-[230px] w-[395px] -rotate-[7deg]"
            bars={[{ w: 60, o: 0.5 }, { w: 25, teal: true }]}
          >
            Where to start automating your week
          </FloatCard>
          <FloatCard
            pill="AI Tools"
            className="left-[100px] top-[118px] h-[205px] w-[395px] rotate-[4deg]"
            textWidth="max-w-[250px]"
            bars={[{ w: 62 }, { w: 30, teal: true }]}
          >
            Reading a vendor’s{' '}
            <span className="rounded bg-brand-primary/25 px-1 text-[#8ff3ea]">pricing page</span>{' '}
            like a pro
          </FloatCard>
          <FloatCard
            pill="Decision guide"
            className="left-[28px] top-[262px] h-[225px] w-[415px] -rotate-[2deg]"
            textWidth="max-w-[290px]"
            bars={[{ w: 46 }, { w: 60 }, { w: 34, teal: true }]}
          >
            Choosing between two AI tools that look identical
          </FloatCard>
          <span className="absolute left-[97px] top-[92px] flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#020a1f] font-(family-name:--font-manrope) text-[13px] font-bold text-white">
            03
          </span>
        </div>
      </div>
    </section>
  );
}
