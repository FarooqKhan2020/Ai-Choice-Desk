'use client';

import { useCalculator } from './CalculatorProvider';
import { formatUsd, steps } from './calculatorData';

export default function HowItWorks() {
  const { inputs, results } = useCalculator();
  const pills = [
    `${inputs.team} ${inputs.team === 1 ? 'person' : 'people'} · $${inputs.hourly}/hr`,
    `${inputs.gain}% efficiency gain`,
    `${formatUsd(results.savings)} saved / year`,
  ];

  return (
    <section className="bg-white pb-[60px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
              How it works
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
              Three steps to a real number
            </h2>
          </div>
          <p className="max-w-[440px] font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary lg:pt-6">
            Every calculator on this page follows the same simple path, from
            raw inputs to an estimate you can act on.
          </p>
        </div>

        <ol className="grid gap-10 pt-[56px] md:grid-cols-3 md:gap-x-[42px]">
          {steps.map((step, index) => (
            <li key={step.key} className={index === 2 ? 'md:-mt-[11px]' : ''}>
              <span className="flex size-[52px] items-center justify-center rounded-full border border-brand-primary/40 bg-[#dff7f4] font-(family-name:--font-sora) text-[16px] font-bold text-brand-primary">
                {step.key}
              </span>
              <h3 className="pt-[28px] font-(family-name:--font-sora) text-[19px] font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="max-w-[290px] pt-3 font-(family-name:--font-manrope) text-[15px] leading-[22px] text-text-secondary">
                {step.description}
              </p>
              <span
                className={`inline-block rounded-[10px] border border-brand-primary/25 bg-[#dff7f4] px-3.5 py-[10px] font-(family-name:--font-manrope) text-[13px] font-semibold text-brand-primary ${
                  index === 2 ? 'mt-[43px]' : 'mt-[33px]'
                }`}
              >
                {pills[index]}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
