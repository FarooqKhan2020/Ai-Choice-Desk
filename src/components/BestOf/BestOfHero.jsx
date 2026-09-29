import Image from 'next/image';
import Link from 'next/link';
import { heroBoard, heroStats } from './bestOfData';
import { ArrowIcon, ClockIcon, MiniBars, ShieldCheckIcon, StarIcon } from './Icons';
import ProductLogo from './ProductLogo';

const cardOffsets = [
  'lg:mr-[71px]',
  'lg:ml-[81px]',
  'lg:ml-[22px] lg:mr-[71px]',
];

export default function BestOfHero() {
  return (
    <section
      className="relative overflow-hidden text-white lg:min-h-[728px]"
      style={{
        backgroundImage: [
          'radial-gradient(ellipse 45% 55% at 85% 45%, rgba(0,150,170,0.32) 0%, transparent 70%)',
          'linear-gradient(rgba(0,207,193,0.06) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(0,207,193,0.06) 1px, transparent 1px)',
          'linear-gradient(180deg, #020a1f 0%, #041530 60%, #04213a 100%)',
        ].join(', '),
        backgroundSize: 'auto, 64px 64px, 64px 64px, auto',
      }}
    >
      {/* Decorative ring */}
      <div
        className="pointer-events-none absolute -left-[150px] top-[30px] hidden size-[300px] rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-12 lg:grid-cols-[1fr_543px] lg:gap-8 lg:px-15 lg:pb-[60px] lg:pt-[69px]">
        {/* Left */}
        <div className="lg:pt-[44px]">
          <nav className="flex items-center gap-4 font-(family-name:--font-manrope) text-[13px]">
            <Link href="/" className="text-text-on-dark-muted transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white">Best Of</span>
          </nav>
          <p className="pt-2 font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            The AI Choice Desk Best Of
          </p>
          <h1 className="pt-4 font-(family-name:--font-sora) text-[40px] font-extrabold leading-[1.06] tracking-[-0.02em] sm:text-[48px] lg:text-[56px]">
            The best AI software,
            <br />
            <span className="text-brand-primary">
              actually worth
              <br />
              considering.
            </span>
          </h1>
          <p className="max-w-[700px] pt-8 font-(family-name:--font-manrope) text-[16px] leading-[27px] text-white">
            We research, compare and score software so you can spend less time
            searching and more time choosing.
          </p>

          <div className="flex flex-wrap gap-3.5 pt-8">
            <Link
              href="#winners"
              className="inline-flex h-12 min-w-[273px] items-center justify-center gap-2.5 rounded-full bg-brand-primary font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
            >
              Explore the winners
              <ArrowIcon className="h-4 w-4" strokeWidth={1.8} />
            </Link>
            <Link
              href="#research"
              className="inline-flex h-12 min-w-[273px] items-center justify-center gap-2.5 rounded-full border border-white/70 font-(family-name:--font-manrope) text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              How we rank
              <Image
                src="/Best-of/White arrow.svg"
                alt=""
                width={14}
                height={12}
                aria-hidden="true"
              />
            </Link>
          </div>

          <dl className="mt-8 grid max-w-[740px] grid-cols-3 gap-4 border-t border-white/15 pt-9">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-(family-name:--font-manrope) text-[24px] font-bold leading-none text-white">
                  {stat.value}
                </dd>
                <dt className="pt-3 font-(family-name:--font-manrope) text-[11px] font-medium uppercase tracking-[1.2px] text-text-on-dark-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: board */}
        <div>
          <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            The 2026 Best Of board
          </p>
          <div className="flex flex-col gap-[3px] pt-[18px]">
            {heroBoard.map((item, index) => (
              <article
                key={item.rank}
                className={`rounded-xl border border-white/15 bg-[#04132e]/85 px-5 pb-3.5 pt-[17px] backdrop-blur-sm ${cardOffsets[index]}`}
              >
                <div className="flex items-center justify-between">
                  <p className="flex items-baseline gap-3">
                    <span className="font-(family-name:--font-sora) text-[22px] font-bold text-brand-primary">
                      {item.rank}
                    </span>
                    <span className="font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[1.2px] text-text-on-dark-muted">
                      {item.label}
                    </span>
                  </p>
                  {item.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 font-(family-name:--font-manrope) text-[11px] font-semibold text-brand-primary">
                      <StarIcon />
                      {item.badge}
                    </span>
                  )}
                  {item.note && (
                    <span className="font-(family-name:--font-manrope) text-[12px] text-white">
                      {item.note}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 pt-[14px]">
                  <div className="flex items-center gap-3">
                    <ProductLogo src={item.logo} size={40} />
                    <div>
                      <h3 className="font-(family-name:--font-manrope) text-[17px] font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="font-(family-name:--font-manrope) text-[13px] text-text-on-dark-muted">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-(family-name:--font-manrope) text-[26px] font-bold leading-none text-white">
                      {item.score}
                    </p>
                    <p className="pt-1 font-(family-name:--font-manrope) text-[10px] text-text-on-dark-muted">
                      / 10
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 flex items-center justify-between border-t border-white/15 pt-3 text-brand-primary">
                  <span className="flex items-center gap-1.5 font-(family-name:--font-manrope) text-[11px]">
                    <ShieldCheckIcon />
                    Research verified
                  </span>
                  <MiniBars className="h-3.5 w-[22px]" />
                </div>
              </article>
            ))}
          </div>

          <p className="flex items-center gap-2 pt-6 font-(family-name:--font-manrope) text-[12px] text-text-on-dark-muted">
            <ClockIcon />
            Scores re-checked 12 Sep 2026 · Paid accounts, not vendor demos
          </p>
        </div>
      </div>
    </section>
  );
}
