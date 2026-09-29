import { buildVerdict } from './compareData';
import ToolLogo from './ToolLogo';
import {
  CheckIcon,
  CrossIcon,
  PricingIcon,
  TargetIcon,
  TrophyIcon,
} from './Icons';

function ToolCard({ tool }) {
  return (
    <article className="rounded-xl border border-border-default bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <ToolLogo tool={tool} size={44} className="rounded-lg" />
          <div>
            <h3 className="font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
              {tool.name}
            </h3>
            <p className="font-(family-name:--font-manrope) text-[11px] text-text-muted">
              {tool.category}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-(family-name:--font-sora) text-[26px] font-bold leading-none text-text-primary">
            {tool.score.toFixed(1)}
          </p>
          <p className="pt-1 font-(family-name:--font-manrope) text-[9px] uppercase text-text-muted">
            Out of 10
          </p>
        </div>
      </div>

      <p className="pt-5 font-(family-name:--font-manrope) text-[13px] leading-5 text-text-secondary">
        {tool.description}
      </p>

      <div className="mt-5 grid gap-4 rounded-md bg-tint-ice px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="flex items-center gap-1.5 font-(family-name:--font-manrope) text-[10px] text-text-muted">
            <PricingIcon className="h-3 w-3 text-brand-primary" /> Pricing
          </p>
          <p className="pt-1.5 font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary">
            {tool.pricing}
          </p>
        </div>
        <div>
          <p className="flex items-center gap-1.5 font-(family-name:--font-manrope) text-[10px] text-text-muted">
            <TargetIcon className="h-3 w-3 text-brand-primary" /> Best for
          </p>
          <p className="pt-1.5 font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary">
            {tool.bestFor}
          </p>
        </div>
      </div>

      <h4 className="pt-6 font-(family-name:--font-manrope) text-[12px] font-semibold text-text-primary">
        Core features
      </h4>
      <ul className="grid grid-cols-2 gap-2 pt-3 sm:grid-cols-4">
        {tool.features.map((feature) => (
          <li
            key={feature}
            className="truncate rounded-sm border border-border-default bg-[#f5f8fb] px-2.5 py-1.5 font-(family-name:--font-manrope) text-[11px] text-text-secondary"
          >
            {feature}
          </li>
        ))}
      </ul>

      <div className="grid gap-6 pt-6 sm:grid-cols-2">
        <div>
          <h4 className="font-(family-name:--font-manrope) text-[12px] font-semibold text-[#0f9d58]">
            Strengths
          </h4>
          <ul className="flex flex-col gap-2 pt-3">
            {tool.strengths.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-(family-name:--font-manrope) text-[11px] leading-4 text-text-secondary"
              >
                <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-brand-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-(family-name:--font-manrope) text-[12px] font-semibold text-danger">
            Limitations
          </h4>
          <ul className="flex flex-col gap-2 pt-3">
            {tool.limitations.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-(family-name:--font-manrope) text-[11px] leading-4 text-text-secondary"
              >
                <CrossIcon className="mt-0.5 h-3 w-3 shrink-0 text-danger" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function HeadToHeadResult({ first, second, result }) {
  const { winner, loser } = result;

  return (
    <section className="bg-surface-alt pb-16 pt-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[0.5px] text-brand-primary">
              Head-to-head result
            </p>
            <h2 className="pt-2 font-(family-name:--font-sora) text-[26px] font-bold leading-tight text-text-primary sm:text-[30px]">
              {winner.name} vs {loser.name}
            </h2>
            <p className="pt-2 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
              A practical comparison based on capabilities, value, and everyday
              workflow fit.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-primary px-4 py-2.5 font-(family-name:--font-manrope) text-[12px] font-semibold text-text-on-primary">
            <TrophyIcon className="h-4 w-4" />
            Overall winner: {winner.name}
          </span>
        </div>

        <div className="grid items-start gap-6 pt-8 lg:grid-cols-2">
          <ToolCard tool={first} />
          <ToolCard tool={second} />
        </div>

        <div className="mt-6 flex items-center justify-between gap-6 rounded-lg bg-[#0b1220] px-6 py-6">
          <div>
            <h3 className="font-(family-name:--font-manrope) text-[15px] font-bold text-white">
              The short verdict
            </h3>
            <p className="pt-2 font-(family-name:--font-manrope) text-[13px] leading-5 text-text-on-dark-muted">
              {buildVerdict(result)}
            </p>
          </div>
          <TrophyIcon className="hidden h-7 w-7 shrink-0 text-brand-primary sm:block" />
        </div>
      </div>
    </section>
  );
}
