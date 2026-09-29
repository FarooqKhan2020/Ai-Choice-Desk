'use client';

import { useState } from 'react';
import {
  trendLegend,
  trendMonths,
  trendSummary,
  trendYears,
} from './researchData';

const PLOT_W = 1320;
const PLOT_H = 340;
const X_START = 20;
const X_END = 1300;
const GRID = [0, 90, 180, 270, 332];

const yAt = (series, x) =>
  series[0] + ((series[1] - series[0]) * (x - X_START)) / (X_END - X_START);

const pct = (value, total) => `${(value / total) * 100}%`;

export default function MarketTrends() {
  const [year, setYear] = useState('2026');
  const data = trendYears[year];

  const aiTickX = 873;
  const supportTickX = 447;
  const aiLineY = yAt(data.ai, aiTickX);
  const supportLineY = yAt(data.support, supportTickX);

  return (
    <section
      className="text-white"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 60% 70% at 100% 100%, rgba(0,88,110,0.55) 0%, transparent 70%), linear-gradient(180deg, #050d2a 0%, #071a3d 60%, #012a44 100%)',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-[58px] pt-[64px] lg:px-15">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
              Market trends
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.02] tracking-[-0.02em] lg:text-[44px]">
              Where the market
              <br />
              is moving
            </h2>
          </div>
          <div
            className="flex rounded-full bg-[#0f1f3f] p-[5px] sm:mt-[58px]"
            role="group"
            aria-label="Year"
          >
            {Object.keys(trendYears).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setYear(key)}
                aria-pressed={year === key}
                className={`h-[37px] rounded-full px-[22px] font-(family-name:--font-manrope) text-[13px] font-semibold transition-colors ${
                  year === key ? 'bg-brand-primary text-text-on-primary' : 'text-white hover:bg-white/10'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Plot */}
        <div className="relative mt-[62px]" style={{ aspectRatio: `${PLOT_W} / ${PLOT_H}` }}>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${PLOT_W} ${PLOT_H}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#00cfc1" stopOpacity="0.28" />
                <stop offset="1" stopColor="#00cfc1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {GRID.map((y) => (
              <line key={y} x1="0" x2={PLOT_W} y1={y} y2={y} stroke="#fff" strokeOpacity="0.9" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            ))}
            <polygon
              points={`${X_START},${data.ai[0]} ${X_END},${data.ai[1]} ${X_END},${PLOT_H} ${X_START},${PLOT_H}`}
              fill="url(#trend-fill)"
            />
            <line x1={X_START} y1={data.stack[0]} x2={X_END} y2={data.stack[1]} stroke="#6f88a0" strokeWidth="1.2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
            <line x1={X_START} y1={data.support[0]} x2={X_END} y2={data.support[1]} stroke="#0d6be0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <line x1={X_START} y1={data.ai[0]} x2={X_END} y2={data.ai[1]} stroke="#00cfc1" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* End dots */}
          {[
            { y: data.ai[1], color: '#00cfc1' },
            { y: data.support[1], color: '#0d6be0' },
            { y: data.stack[1], color: '#ffffff' },
          ].map((dot) => (
            <span
              key={dot.color}
              className="absolute size-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: pct(X_END, PLOT_W), top: pct(dot.y, PLOT_H), backgroundColor: dot.color }}
              aria-hidden="true"
            />
          ))}

          {/* Callouts */}
          <div className="absolute hidden sm:block" style={{ left: pct(aiTickX, PLOT_W), top: pct(aiLineY - 60, PLOT_H) }}>
            <span className="absolute left-0 top-[16px] block h-[49px] w-px bg-white/40" />
            <span className="pl-2.5 font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary">
              AI adoption {data.summary[0]}
            </span>
          </div>
          <div className="absolute hidden sm:block" style={{ left: pct(supportTickX, PLOT_W), top: pct(supportLineY + 3, PLOT_H) }}>
            <span className="absolute left-0 top-0 block h-[46px] w-px bg-white/40" />
            <span className="absolute left-0 top-[47px] whitespace-nowrap pl-2.5 font-(family-name:--font-manrope) text-[12px] font-semibold text-[#9be4dd]">
              Customer support {data.summary[1]}
            </span>
          </div>
        </div>

        <div className="flex justify-between pt-4 font-(family-name:--font-manrope) text-[12px] text-text-on-dark-muted">
          {trendMonths.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-[26px] font-(family-name:--font-manrope) text-[13px] text-white">
          {trendLegend.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className="h-0.5 w-3" style={{ backgroundColor: item.color }} />
              {item.label}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {trendSummary.map((item, index) => (
            <div
              key={item.title}
              className={`py-6 lg:min-h-[120px] ${index > 0 ? 'lg:border-l lg:border-white/15 lg:pl-5' : ''} ${
                index === 3 ? 'lg:pr-0' : 'lg:pr-4'
              }`}
            >
              <dt className="font-(family-name:--font-sora) text-[17px] font-bold">{item.title}</dt>
              <dd className="pt-2.5 font-(family-name:--font-manrope) text-[14px] font-semibold text-brand-primary">
                {data.summary[index]}
              </dd>
              <dd className="pt-2.5 font-(family-name:--font-manrope) text-[14px] leading-[21px] text-text-on-dark-muted">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
