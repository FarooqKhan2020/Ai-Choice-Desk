import { impactChart } from './calculatorData';

const BAR_MAX = 180;

export default function ImpactSnapshot() {
  return (
    <section className="bg-white pb-[70px] pt-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
              Impact snapshot
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
              See the impact at a glance
            </h2>
          </div>
          <p className="max-w-[440px] font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary lg:pt-6">
            Average results across teams who ran the ROI calculator this
            quarter, before and after adopting an AI tool.
          </p>
        </div>

        <figure className="mt-[52px] rounded-[20px] border border-border-default bg-white px-6 pb-[26px] pt-6 lg:px-[44px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-[#eef3f8]" /> Before AI
              </span>
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-brand-primary" /> After AI
              </span>
            </div>
            <span className="self-start rounded-full border border-border-default bg-[#eef3f8] px-3.5 py-1 font-(family-name:--font-manrope) text-[12px] font-semibold text-text-secondary sm:self-auto">
              {impactChart.sessions}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-y-10 pt-8 lg:grid-cols-4">
            {impactChart.groups.map((group) => (
              <div key={group.label} className="flex flex-col items-center">
                <div className="flex items-end gap-2.5" style={{ height: BAR_MAX }}>
                  <span
                    className="w-[34px] rounded-t-md bg-[#eef3f8]"
                    style={{ height: (group.before / 100) * BAR_MAX }}
                  />
                  <span
                    className="w-[34px] rounded-t-md bg-brand-primary"
                    style={{ height: (group.after / 100) * BAR_MAX }}
                  />
                </div>
                <figcaption className="pt-[22px] text-center">
                  <span className="block font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary">
                    {group.label}
                  </span>
                  <span className="block pt-1 font-(family-name:--font-manrope) text-[13px] font-semibold text-[#2a9d94]">
                    {group.delta}
                  </span>
                </figcaption>
              </div>
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
