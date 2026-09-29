import { researchStats, researchSteps } from './compareData';
import { FeatureIcon } from './Icons';

export default function ResearchConfidence() {
  return (
    <section className="bg-tint-ice py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <p className="font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[0.5px] text-brand-primary">
          02 · Research confidence
        </p>
        <h2 className="pt-2 font-(family-name:--font-sora) text-[26px] font-bold text-text-primary sm:text-[30px]">
          Why this result is trustworthy
        </h2>
        <p className="pt-2 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
          The verdict is built from repeatable tasks—not launch-day claims or
          feature-counting.
        </p>

        {/* Stats */}
        <dl className="grid grid-cols-2 gap-y-8 pt-12 lg:grid-cols-4 lg:gap-y-0">
          {researchStats.map((stat, index) => (
            <div
              key={stat.label}
              className={index > 0 ? 'lg:border-l lg:border-border-default lg:pl-8' : 'lg:pl-0'}
            >
              <dd
                className={`font-(family-name:--font-sora) text-[32px] font-bold leading-none ${
                  stat.accent ? 'text-brand-primary' : 'text-text-primary'
                }`}
              >
                {stat.value}
              </dd>
              <dt className="pt-2 font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary">
                {stat.label}
              </dt>
              <p className="pt-1 font-(family-name:--font-manrope) text-[12px] text-text-muted">
                {stat.note}
              </p>
            </div>
          ))}
        </dl>

        {/* Steps */}
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
          {researchSteps.map((step, index) => (
            <li
              key={step.title}
              className={`md:px-8 ${
                index > 0 ? 'md:border-l md:border-border-default' : 'md:pl-0'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="flex size-8 items-center justify-center rounded-md bg-brand-primary/15 text-brand-primary">
                  <FeatureIcon name={step.icon} className="h-4 w-4" />
                </span>
                <span className="font-(family-name:--font-manrope) text-[12px] text-text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="pt-8 font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="pt-3 font-(family-name:--font-manrope) text-[13px] leading-6 text-text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-2 border-l-[3px] border-brand-primary bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary">
            Last research cycle: September 2026
          </p>
          <p className="font-(family-name:--font-manrope) text-[11px] text-text-muted">
            Next check triggered by major model or pricing changes
          </p>
        </div>
      </div>
    </section>
  );
}
