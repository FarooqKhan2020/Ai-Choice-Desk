import { insightStats, toolsChart } from './researchData';

const W = 350;
const H = 200;
const TOP = 0;
const BASE = 200;
const MAX = 5;

const xAt = (i) => 20 + (i * (W - 40)) / (toolsChart.years.length - 1);
const yAt = (v) => BASE - (v / MAX) * (BASE - TOP - 20);
const path = (values) =>
  values.map((v, i) => `${i === 0 ? 'M' : 'L'}${xAt(i)},${yAt(v)}`).join(' ');

function ToolsChart() {
  return (
    <figure className="w-full max-w-[350px]" aria-label="Tools added and removed per business, 2022 to 2026">
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" fill="none" role="img" aria-hidden="true">
          {[0, 70, 140, 200].map((y) => (
            <line key={y} x1="0" x2={W} y1={y} y2={y} stroke="#cfe0e6" strokeWidth="1" />
          ))}
          <path d={path(toolsChart.added)} stroke="#00cfc1" strokeWidth="2" strokeLinejoin="round" />
          <path d={path(toolsChart.removed)} stroke="#000a1c" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="absolute font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary" style={{ left: `${(xAt(2) / W) * 100 - 6}%`, top: yAt(3.9) - 26 }}>
          Tools added
        </span>
        <span className="absolute font-(family-name:--font-manrope) text-[12px] font-semibold text-text-primary" style={{ left: `${(xAt(1) / W) * 100 - 4}%`, top: yAt(1.6) + 6 }}>
          Tools removed
        </span>
      </div>
      <figcaption className="flex justify-between pt-3 font-(family-name:--font-manrope) text-[12px] text-text-secondary">
        {toolsChart.years.map((year) => (
          <span key={year}>{year}</span>
        ))}
      </figcaption>
    </figure>
  );
}

export default function KeyInsight() {
  return (
    <section className="bg-tint-ice pb-[70px] pt-[68px]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[minmax(0,926fr)_350px] lg:items-start lg:gap-x-[44px] lg:px-15">
        <div>
          <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            One thing we learned this year
          </p>
          <h2 className="max-w-[830px] pt-6 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[46px] lg:text-[52px]">
            Businesses aren’t buying more software. They’re becoming{' '}
            <span className="text-brand-primary">far more selective about what they keep.</span>
          </h2>

          <dl className="flex flex-wrap gap-x-[34px] gap-y-8 pt-[52px]">
            {insightStats.map((stat) => (
              <div key={stat.value} className="max-w-[260px]">
                <dt className="font-(family-name:--font-sora) text-[36px] font-bold leading-none tracking-[-0.02em] text-text-primary">
                  {stat.value}
                </dt>
                <dd className="pt-5 font-(family-name:--font-manrope) text-[14px] leading-[22px] text-text-secondary">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 border-t border-[#d5e5ea] pt-6 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
            Source: AI Choice Desk annual stack survey · n = 1,960 · fieldwork
            June–August 2026 · researcher: Michael Brooks
          </p>
        </div>

        <div className="lg:pt-[160px]">
          <ToolsChart />
        </div>
      </div>
    </section>
  );
}
