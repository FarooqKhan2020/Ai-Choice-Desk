import Image from 'next/image';
import Link from 'next/link';
import { icons, sources } from './researchData';

export default function EvidenceLayers() {
  return (
    <section className="bg-surface-alt pb-[58px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
              Evidence
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.02] tracking-[-0.02em] text-text-primary lg:text-[44px]">
              What sits underneath
              <br />
              every number.
            </h2>
          </div>
          <p className="max-w-[320px] font-(family-name:--font-manrope) text-[16px] leading-[27px] text-text-secondary lg:pt-4">
            Six source types, weighted differently depending on the question.
            Hover a layer to bring it forward.
          </p>
        </div>

        <ul className="grid gap-4 pt-[52px] sm:grid-cols-2 md:grid-cols-3 lg:flex lg:gap-0 lg:pb-3">
          {sources.map((source, index) => {
            const isEven = index % 2 === 1;
            return (
              <li
                key={source.label}
                style={{ zIndex: index + 1 }}
                className={`relative transition-[transform,z-index] duration-200 lg:w-[250px] lg:shrink-0 lg:hover:!z-20 lg:hover:-translate-y-2 ${
                  index === 1 ? 'lg:-ml-[88px]' : index > 1 ? 'lg:-ml-[30px]' : ''
                } ${isEven ? 'lg:-translate-y-4 lg:hover:-translate-y-6' : ''}`}
              >
                <div className="flex min-h-[330px] flex-col rounded-2xl bg-white p-[25px] shadow-[-14px_16px_36px_rgba(0,18,41,0.14)]">
                  <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
                    {source.label}
                  </p>
                  <h3 className="max-w-[170px] pt-[18px] font-(family-name:--font-sora) text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-text-primary">
                    {source.title}
                  </h3>
                  <div className="flex flex-col gap-2 pt-6" aria-hidden="true">
                    <span className="h-2 w-[85%] rounded-full bg-[#eef3f8]" />
                    <span className="h-2 w-[60%] rounded-full bg-[#eef3f8]" />
                    <span className="h-2 w-[75%] rounded-full bg-[#eef3f8]" />
                  </div>
                  <div className="mt-auto border-t border-border-default pt-4">
                    <p className="font-(family-name:--font-sora) text-[20px] font-bold text-text-primary">
                      {source.value}
                    </p>
                    <p className="pt-1 font-(family-name:--font-manrope) text-[11px] text-text-secondary">
                      {source.caption}
                    </p>
                    <Link
                      href="#method"
                      className="mt-3 inline-flex items-center gap-1.5 font-(family-name:--font-manrope) text-[13px] font-semibold text-accent-secondary"
                    >
                      View source
                      <Image src={icons.blueArrow} alt="" width={10} height={6} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
