import { snapshotStats, toolsPerBusiness } from './researchData';

const MAX_VALUE = 17.1;
const PLOT_HEIGHT = 208;

export default function DataSnapshot() {
  return (
    <section className="bg-[#f5f8fb] pb-[100px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
          Data snapshot · Q3 2026
        </p>
        <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.02] tracking-[-0.02em] text-text-primary lg:text-[44px]">
          Four numbers we keep
          <br />
          coming back to.
        </h2>

        <div className="grid gap-x-0 gap-y-14 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:pt-16">
          {snapshotStats.map((stat) => (
            <div key={stat.title} className={stat.low ? 'lg:pt-[62px]' : ''}>
              <p
                className={`flex items-baseline font-(family-name:--font-sora) font-extrabold leading-[0.9] tracking-[-0.05em] ${
                  stat.tone === 'teal' ? 'text-[#00b0a3]' : 'text-[#000a1c]'
                }`}
              >
                <span className="text-[96px] sm:text-[112px] lg:text-[124px]">{stat.value}</span>
                <span className="text-[44px] sm:text-[52px] lg:text-[60px]">{stat.unit}</span>
              </p>
              <h3 className="pt-6 font-(family-name:--font-manrope) text-[15px] font-medium text-text-primary">
                {stat.title}
              </h3>
              <p className="max-w-[215px] pt-3 font-(family-name:--font-manrope) text-[14px] leading-[21px] text-text-secondary">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[56px] border-t border-[#dfe7ee] pt-9">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-(family-name:--font-sora) text-[18px] font-bold text-text-primary">
              Tools per business, by headcount band
            </h3>
            <p className="font-(family-name:--font-manrope) text-[12px] text-text-secondary">
              n = 1,960 · collected Jun–Aug 2026
            </p>
          </div>

          <div className="relative pt-14">
            {/* Gridlines */}
            <div className="pointer-events-none absolute inset-x-0 top-14 flex flex-col justify-between" style={{ height: PLOT_HEIGHT }} aria-hidden="true">
              {[0, 1, 2, 3].map((line) => (
                <span key={line} className="h-px w-full bg-[#d5dde5]" />
              ))}
            </div>

            <div
              className="relative grid grid-cols-6 items-end gap-x-3 lg:grid-cols-[repeat(6,118px)] lg:gap-x-[90px] lg:pl-[60px]"
              style={{ height: PLOT_HEIGHT }}
            >
              {toolsPerBusiness.map((bar) => (
                <div key={bar.band} className="relative">
                  <span className="absolute inset-x-0 bottom-full pb-2 font-(family-name:--font-sora) text-[16px] font-bold text-text-primary">
                    {bar.value.toFixed(1)}
                  </span>
                  <div
                    style={{ height: (bar.value / MAX_VALUE) * 202, backgroundColor: bar.color }}
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-6 gap-x-3 pt-4 lg:grid-cols-[repeat(6,118px)] lg:gap-x-[90px] lg:pl-[60px]">
              {toolsPerBusiness.map((bar) => (
                <span
                  key={bar.band}
                  className="font-(family-name:--font-manrope) text-[12px] text-text-secondary"
                >
                  {bar.band}
                </span>
              ))}
            </div>
          </div>

          <p className="max-w-[560px] pt-9 font-(family-name:--font-manrope) text-[14px] leading-[22px] text-text-secondary">
            Stack size peaks just under 200 people, then falls — the point where
            most businesses hire someone whose job includes saying no to software.
          </p>
        </div>
      </div>
    </section>
  );
}
