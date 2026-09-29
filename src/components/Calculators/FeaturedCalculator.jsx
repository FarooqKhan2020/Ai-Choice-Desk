'use client';

import Image from 'next/image';
import { useCalculator } from './CalculatorProvider';
import { formatNumber, formatUsd, taskTypes } from './calculatorData';

const sliderClass =
  'h-1 w-full cursor-pointer appearance-none rounded-full bg-[#d7e2ea] focus:outline-none [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-brand-primary [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-brand-primary [&::-webkit-slider-thumb]:bg-white focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-brand-primary/25';

function SliderField({ id, label, value, display, min, max, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="font-(family-name:--font-manrope) text-[14px] font-medium text-text-body">
          {label}
        </label>
        <output htmlFor={id} className="font-(family-name:--font-manrope) text-[14px] font-semibold text-brand-primary">
          {display}
        </output>
      </div>
      <div className="pt-[13px]">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={sliderClass}
        />
      </div>
    </div>
  );
}

export default function FeaturedCalculator() {
  const { inputs, setInput, results } = useCalculator();
  const { team, hourly, hours, task, gain } = inputs;

  const savingsShare = results.currentAnnual > 0 ? results.savings / results.currentAnnual : 0;
  const bars = [
    { label: 'Current', height: 100, color: 'bg-[#22405f]' },
    { label: 'AI-assisted', height: Math.max(6, (1 - savingsShare) * 100), color: 'bg-[#2d6a9f]' },
    { label: 'Savings', height: Math.max(6, savingsShare * 100), color: 'bg-brand-primary' },
  ];

  return (
    <section id="roi-calculator" className="scroll-mt-24 bg-surface-alt pb-[60px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
              Featured calculator
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
              Try the AI ROI Calculator
            </h2>
          </div>
          <p className="max-w-[440px] font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary lg:pt-6">
            Estimate what an AI tool could save your team, based on headcount,
            hourly cost, and time spent on repetitive work.
          </p>
        </div>

        <div className="mt-[52px] grid overflow-hidden rounded-3xl border border-border-default bg-white lg:grid-cols-[723fr_597fr]">
          {/* Inputs */}
          <div className="px-6 pb-10 pt-[40px] sm:px-[41px]">
            <span className="inline-block rounded-full bg-brand-primary px-3.5 py-[5px] font-(family-name:--font-manrope) text-[12px] font-semibold text-text-on-primary">
              AI ROI Calculator
            </span>
            <h3 className="max-w-[500px] pt-[22px] font-(family-name:--font-sora) text-[24px] font-bold leading-[1.25] tracking-[-0.01em] text-text-primary sm:text-[28px]">
              What could AI save your team this year?
            </h3>
            <p className="max-w-[380px] pt-4 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-secondary">
              Adjust the inputs below — the result panel updates instantly as
              you type or drag.
            </p>

            <div className="flex flex-col gap-[23px] pt-9">
              <SliderField
                id="calc-team"
                label="Team size"
                value={team}
                min={1}
                max={50}
                display={`${team} ${team === 1 ? 'person' : 'people'}`}
                onChange={(v) => setInput('team', v)}
              />

              <div>
                <label htmlFor="calc-hourly" className="font-(family-name:--font-manrope) text-[14px] font-medium text-text-body">
                  Average hourly cost
                </label>
                <input
                  id="calc-hourly"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  value={hourly}
                  onChange={(e) => setInput('hourly', Math.max(0, Number(e.target.value) || 0))}
                  className="mt-[15px] h-[46px] w-full rounded-[10px] border border-border-default bg-white px-4 font-(family-name:--font-manrope) text-[16px] font-medium text-text-primary focus:border-brand-primary focus:outline-none"
                />
              </div>

              <SliderField
                id="calc-hours"
                label="Hours/week on repetitive tasks"
                value={hours}
                min={1}
                max={40}
                display={`${hours} hrs`}
                onChange={(v) => setInput('hours', v)}
              />

              <div>
                <label htmlFor="calc-task" className="font-(family-name:--font-manrope) text-[14px] font-medium text-text-body">
                  Primary task type
                </label>
                <div className="relative mt-[15px]">
                  <select
                    id="calc-task"
                    value={task}
                    onChange={(e) => setInput('task', e.target.value)}
                    className="h-[46px] w-full appearance-none rounded-[10px] border border-border-default bg-white pl-4 pr-10 font-(family-name:--font-manrope) text-[16px] text-text-primary focus:border-brand-primary focus:outline-none"
                  >
                    <option value="" />
                    {taskTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <Image
                    src="/calculators/arrow down.svg"
                    alt=""
                    width={7}
                    height={11}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[19px] top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              <SliderField
                id="calc-gain"
                label="Expected AI efficiency gain"
                value={gain}
                min={10}
                max={90}
                display={`${gain}%`}
                onChange={(v) => setInput('gain', v)}
              />
            </div>
          </div>

          {/* Result */}
          <div
            className="relative flex flex-col px-6 pb-8 pt-[38px] text-white sm:px-10"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 45% 35% at 90% 0%, rgba(0,150,170,0.32) 0%, transparent 70%), linear-gradient(180deg, #001229 0%, #021a30 100%)',
            }}
          >
            <p className="font-(family-name:--font-manrope) text-[13px] font-medium uppercase tracking-[1.2px] text-text-on-dark-muted">
              Estimated annual savings
            </p>
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-[22px]" aria-live="polite">
              <p className="font-(family-name:--font-sora) text-[44px] font-extrabold leading-none tracking-[-0.02em] sm:text-[56px]">
                {formatUsd(results.savings)}
              </p>
              <span className="rounded-full bg-brand-primary px-3 py-[6px] font-(family-name:--font-manrope) text-[13px] font-semibold text-text-on-primary">
                {Math.round(results.roi)}% ROI
              </span>
            </div>

            <dl className="mt-auto grid gap-3 pt-[60px] sm:grid-cols-2">
              {[
                { label: 'Monthly savings', value: formatUsd(results.monthly) },
                { label: 'Time saved / year', value: `${formatNumber(results.hoursSaved)} hrs` },
                { label: 'Current annual cost', value: formatUsd(results.currentAnnual) },
                { label: 'AI-assisted cost', value: formatUsd(results.aiAnnual) },
              ].map((tile) => (
                <div key={tile.label} className="rounded-xl border border-white/10 bg-[#14203a] px-4 pb-[14px] pt-4">
                  <dt className="font-(family-name:--font-manrope) text-[13px] text-text-on-dark-muted">
                    {tile.label}
                  </dt>
                  <dd className="pt-1.5 font-(family-name:--font-sora) text-[22px] font-bold leading-none">
                    {tile.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="pt-[26px] font-(family-name:--font-manrope) text-[13px] text-text-on-dark-muted">
              Current cost → AI-assisted cost → Savings
            </p>

            <div className="grid grid-cols-3 pt-7 text-center" aria-hidden="true">
              {bars.map((bar) => (
                <div key={bar.label} className="flex flex-col items-center justify-end">
                  <span className={`w-10 rounded-t-md ${bar.color}`} style={{ height: bar.height * 0.6 }} />
                  <span className="pt-3 font-(family-name:--font-manrope) text-[12px] text-text-on-dark-muted">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
