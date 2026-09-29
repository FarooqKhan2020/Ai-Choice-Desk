import Image from 'next/image';
import Link from 'next/link';
import { heroCard } from './calculatorData';
import { MiniBars } from './MiniBars';

export default function CalculatorsHero() {
  return (
    <section className="relative overflow-hidden bg-[#020a1f] text-white lg:min-h-[486px]">
      <Image
        src="/calculators/calculators hero section.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#020a1f] via-[#020a1f]/55 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-start gap-10 px-6 py-14 lg:min-h-[486px] lg:grid-cols-[1fr_632px] lg:gap-x-[56px] lg:px-15 lg:py-0">
        <div className="lg:pt-[81px]">
          <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
            Interactive tools · Updated Sep 2026
          </p>
          <h1 className="max-w-[520px] pt-[18px] font-(family-name:--font-sora) text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[48px] lg:text-[52px]">
            AI calculators for smarter decisions
          </h1>
          <p className="max-w-[430px] pt-6 font-(family-name:--font-manrope) text-[18px] leading-7 text-white">
            Use simple, practical calculators to estimate costs, compare
            options, measure impact, and make better software decisions.
          </p>
          <div className="flex items-center gap-6 pt-[38px]">
            <Link
              href="#roi-calculator"
              className="inline-flex h-[50px] items-center rounded-full bg-brand-primary px-[29px] font-(family-name:--font-manrope) text-[16px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
            >
              Explore Calculators
            </Link>
            <span className="hidden h-px w-[182px] bg-brand-primary sm:block" aria-hidden="true" />
          </div>
        </div>

        {/* Preview card */}
        <div
          className="hidden rounded-3xl border border-white/15 bg-[#061a34]/60 p-[24px] pb-[22px] lg:mt-[93px] shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block"
          aria-hidden="true"
        >
          <div className="flex items-center justify-between">
            <span className="flex gap-1.5">
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white" />
            </span>
            <span className="h-[25px] w-[124px] rounded-full bg-brand-primary" />
          </div>

          <p className="pt-[20px] font-(family-name:--font-manrope) text-[14px] font-medium text-white">
            Team size
          </p>
          <div className="mt-2 flex h-11 items-center rounded-[10px] border border-white/15 bg-white/5 px-4 font-(family-name:--font-manrope) text-[16px] text-white">
            {heroCard.team}
          </div>

          <p className="pt-[14px] font-(family-name:--font-manrope) text-[14px] font-medium text-white">
            AI efficiency gain
          </p>
          <div className="relative mt-3.5 h-1 rounded-full bg-white">
            <span className="absolute inset-y-0 left-0 w-[64%] rounded-full bg-brand-primary" />
            <span className="absolute left-[64%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand-primary bg-white" />
          </div>

          <div className="mt-[18px] flex items-center justify-between rounded-2xl bg-[#001229]/85 px-[18px] py-[18px]">
            <div>
              <p className="font-(family-name:--font-manrope) text-[12px] font-medium uppercase tracking-[1px] text-white">
                Est. annual savings
              </p>
              <p className="pt-2 font-(family-name:--font-sora) text-[34px] font-bold leading-none">
                {heroCard.savings}
              </p>
            </div>
            <MiniBars className="h-[33px] w-[47px] text-brand-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
