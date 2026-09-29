import Image from 'next/image';
import { methodSteps } from './researchData';

export default function Methodology() {
  return (
    <section
      id="method"
      className="relative scroll-mt-24 overflow-hidden text-white"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 45% 40% at 0% 65%, rgba(13,90,110,0.55) 0%, transparent 70%), linear-gradient(180deg, #001229 0%, #021a30 55%, #041f34 100%)',
      }}
    >
      {/* Decorative blob */}
      <div
        className="pointer-events-none absolute left-[843px] top-0 hidden h-[215px] w-[252px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] border border-white/15 bg-white/[0.03] lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-[62px] lg:px-15">
        <div className="text-center">
          <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            Methodology
          </p>
          <h2 className="pt-3 font-(family-name:--font-sora) text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[44px]">
            How a question becomes a finding
          </h2>
          <p className="pt-4 font-(family-name:--font-manrope) text-[16px] text-white">
            Six stages, every study, no exceptions. If a stage fails, the study
            doesn’t publish.
          </p>
        </div>

        <ol className="relative mx-auto mt-[58px] max-w-[880px]">
          {/* Spine */}
          <span
            className="absolute bottom-6 left-[25px] top-[25px] w-px bg-brand-primary/40 md:left-1/2"
            aria-hidden="true"
          />
          {methodSteps.map((step, index) => {
            const left = index % 2 === 0;
            return (
              <li
                key={step.title}
                className="relative grid min-h-[207px] grid-cols-[50px_1fr] gap-x-5 md:grid-cols-[1fr_50px_1fr] md:gap-x-8"
              >
                <div
                  className={`order-2 md:order-none ${
                    left ? 'md:col-start-1 md:text-right' : 'md:col-start-3'
                  } md:row-start-1`}
                >
                  <Image
                    src={step.icon}
                    alt=""
                    width={22}
                    height={22}
                    aria-hidden="true"
                    className={`mb-3 mt-1 ${left ? 'md:ml-auto' : ''}`}
                  />
                  <h3 className="font-(family-name:--font-sora) text-[26px] font-bold leading-none tracking-[-0.01em] sm:text-[28px]">
                    {step.title}
                  </h3>
                  <p
                    className={`max-w-[370px] pt-3 font-(family-name:--font-manrope) text-[15px] leading-[23px] text-white/90 ${
                      left ? 'md:ml-auto' : ''
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                <span className="relative z-10 order-1 mt-[50px] flex size-[50px] items-center justify-center rounded-full border border-brand-primary bg-[#031a2e] font-(family-name:--font-manrope) text-[13px] font-bold text-brand-primary md:order-none md:col-start-2 md:row-start-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
