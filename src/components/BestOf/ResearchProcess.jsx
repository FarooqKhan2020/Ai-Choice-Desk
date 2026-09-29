import Image from 'next/image';
import Link from 'next/link';
import { researchStats, researchSteps } from './bestOfData';
import { SearchIcon } from './Icons';

export default function ResearchProcess() {
  return (
    <section
      id="research"
      className="scroll-mt-24 text-white"
      style={{ backgroundImage: 'linear-gradient(180deg, #050d2a 0%, #071a3d 55%, #003a4d 100%)' }}
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-15 pt-[66px] lg:px-15">
        <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
          Our research
        </p>
        <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] lg:text-[44px]">
          Why these products
          <br />
          made the list.
        </h2>
        <p className="max-w-[540px] pt-6 font-(family-name:--font-manrope) text-[16px] leading-[27px] text-white">
          We use a consistent research framework so our recommendations are
          based on more than popularity.
        </p>

        <ol className="grid gap-x-6 gap-y-10 pt-11 sm:grid-cols-2 lg:grid-cols-6">
          {researchSteps.map((step, index) => (
            <li key={step.title}>
              <span className="flex size-[38px] items-center justify-center rounded-full border border-brand-primary text-[#51DECD]">
                {step.icon === 'search' ? (
                  <SearchIcon className="h-[17px] w-[17px]" />
                ) : (
                  <Image src={step.icon} alt="" width={17} height={17} aria-hidden="true" />
                )}
              </span>
              <p className="pt-[34px] font-(family-name:--font-manrope) text-[10px] font-bold tracking-[1.5px] text-brand-primary">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="pt-1.5 font-(family-name:--font-manrope) text-[16px] font-semibold">
                {step.title}
              </h3>
              <p className="max-w-[175px] pt-2 font-(family-name:--font-manrope) text-[13px] leading-5 text-white/85">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-11 grid gap-6 rounded-lg border border-white/15 bg-white/[0.08] p-5 sm:grid-cols-2 lg:min-h-[166px] lg:grid-cols-[1.13fr_1.12fr_1.12fr_1fr] lg:gap-0">
          {researchStats.map((stat, index) => (
            <div key={stat.label} className={`relative ${index > 0 ? 'lg:pl-[57px]' : ''}`}>
              {index > 0 && (
                <span
                  className="absolute left-0 top-0 hidden h-[50px] w-px bg-white/40 lg:block"
                  aria-hidden="true"
                />
              )}
              <p className="font-(family-name:--font-manrope) text-[30px] font-bold leading-none">
                {stat.value}
              </p>
              <p className="pt-1.5 font-(family-name:--font-manrope) text-[11px] font-medium uppercase tracking-[1.2px] text-white/85">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="relative flex flex-col items-start gap-6 lg:pl-[57px]">
            <span
              className="absolute left-0 top-0 hidden h-[50px] w-px bg-white/40 lg:block"
              aria-hidden="true"
            />
            <p className="max-w-[260px] font-(family-name:--font-manrope) text-[13px] leading-[21px] text-white">
              No vendor pays for placement. Every score is signed by the
              researcher who ran the test.
            </p>
            <Link
              href="/research"
              className="inline-flex h-[38px] items-center self-start rounded-full border border-white/70 px-5 font-(family-name:--font-manrope) text-[13px] font-medium text-white transition-colors hover:bg-white/10 lg:self-end"
            >
              Read the scoring model
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
