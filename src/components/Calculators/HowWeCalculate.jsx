import Image from 'next/image';
import { methodFacts, methodFlow } from './calculatorData';

export default function HowWeCalculate() {
  return (
    <section className="bg-white pb-[80px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-[#3dd9c9]">
              Transparency
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
              How we calculate
            </h2>
          </div>
          <p className="max-w-[440px] font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary lg:pt-6">
            Every calculator uses the same visible logic — no hidden weighting,
            no black-box scoring.
          </p>
        </div>

        <div className="grid gap-8 pt-[50px] lg:grid-cols-[628fr_628fr] lg:gap-x-6 lg:px-5">
          <ol>
            {methodFlow.map((step) => (
              <li key={step.label}>
                <div className="flex min-h-[49px] items-center rounded-xl border border-border-default bg-white px-5">
                  <span className="font-(family-name:--font-sora) text-[16px] font-semibold text-text-primary">
                    {step.label}
                  </span>
                  <span className="pl-3 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
                    — {step.note}
                  </span>
                </div>
                <div className="flex h-[35px] items-center pl-[26px]" aria-hidden="true">
                  {step.connector === 'plus' ? (
                    <Image src="/calculators/+.svg" alt="" width={8} height={8} />
                  ) : (
                    <Image src="/calculators/arrow down.svg" alt="" width={7} height={11} />
                  )}
                </div>
              </li>
            ))}
            <li>
              <div className="flex min-h-[49px] items-center rounded-xl bg-[#001229] px-5 font-(family-name:--font-sora) text-[16px] font-semibold text-white">
                Estimated Result
              </div>
            </li>
          </ol>

          <dl className="grid gap-3 sm:grid-cols-2">
            {methodFacts.map((fact) => (
              <div key={fact.label} className="min-h-[137px] rounded-2xl border border-border-default bg-white px-5 pb-5 pt-[19px]">
                <dt className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[0.6px] text-[#3c4d5e]">
                  {fact.label}
                </dt>
                <dd className="pt-3 font-(family-name:--font-manrope) text-[16px] font-semibold leading-[22px] text-text-primary">
                  {fact.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
