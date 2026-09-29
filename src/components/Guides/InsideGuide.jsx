import { guidePreview as guide, guideSections } from './guidesData';

export default function InsideGuide() {
  return (
    <section className="bg-white pb-[60px] pt-[66px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-(family-name:--font-sora) text-[30px] font-bold leading-tight tracking-[-0.01em] text-text-primary sm:text-[36px]">
            Inside a guide
          </h2>
          <p className="font-(family-name:--font-manrope) text-[16px] text-text-secondary">
            What the reading experience actually looks like.
          </p>
        </div>

        <div className="mx-auto mt-[52px] grid max-w-[1200px] gap-8 rounded-[20px] border border-border-default bg-white px-6 pb-12 pt-[46px] shadow-[0_30px_60px_rgba(0,18,41,0.14)] md:grid-cols-[261px_minmax(0,1fr)] md:gap-x-14 lg:px-[48px]">
          <nav aria-label="In this guide">
            <p className="font-(family-name:--font-manrope) text-[13px] text-text-secondary">
              In this guide
            </p>
            <ul className="mt-[18px] border-l-2 border-[#e5ebf1]">
              {guideSections.map((section) => {
                const active = section === 'Step 1';
                return (
                  <li key={section} className="-ml-0.5">
                    <span
                      className={`block h-[42px] border-l-2 pl-[18px] font-(family-name:--font-manrope) text-[16px] font-medium leading-[42px] ${
                        active
                          ? 'rounded-r-[10px] border-brand-primary bg-[#dff7f4] text-brand-primary'
                          : 'mb-0.5 border-transparent text-text-secondary'
                      }`}
                    >
                      {section}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article>
            <h3 className="font-(family-name:--font-sora) text-[22px] font-bold leading-tight text-text-primary sm:text-[26px]">
              {guide.title}
            </h3>
            <p className="max-w-[580px] pt-5 font-(family-name:--font-manrope) text-[17px] leading-[26px] text-text-secondary">
              {guide.body}
            </p>

            <div className="mt-8 rounded-2xl bg-brand-primary px-6 pb-[18px] pt-11">
              <p className="font-(family-name:--font-manrope) text-[17px] leading-6 text-text-primary">
                {guide.callout}
              </p>
            </div>

            <ol className="pt-8">
              {guide.steps.map((step, index) => (
                <li key={step.title} className="relative pb-9 pl-[46px] last:pb-8">
                  <span className="absolute left-0 top-0 flex size-[30px] items-center justify-center rounded-full bg-[#020a1f] font-(family-name:--font-manrope) text-[13px] font-bold text-white">
                    {index + 1}
                  </span>
                  <h4 className="pt-[7px] font-(family-name:--font-sora) text-[16px] font-bold text-text-primary">
                    {step.title}
                  </h4>
                  <p className="pt-[18px] font-(family-name:--font-manrope) text-[16px] text-text-secondary">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex h-[109px] items-end gap-2.5 rounded-xl border border-border-default bg-surface-alt px-[18px] pb-[18px]" aria-hidden="true">
              {guide.bars.map((height, index) => (
                <span
                  key={index}
                  style={{ height }}
                  className="w-7 rounded-t-sm bg-gradient-to-b from-brand-primary to-[#00a89f]"
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
