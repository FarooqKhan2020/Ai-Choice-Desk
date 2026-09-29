import Link from 'next/link';
import { startHere } from './guidesData';

const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function StartHere() {
  return (
    <section id="start-here" className="scroll-mt-24 bg-white pb-[58px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="pt-2 font-(family-name:--font-sora) text-[30px] font-bold leading-tight tracking-[-0.01em] text-text-primary sm:text-[36px]">
            New to AI? Start here.
          </h2>
          <p className="max-w-[400px] font-(family-name:--font-manrope) text-[16px] leading-[26px] text-text-secondary">
            A short, ordered path from “what is this?” to actually measuring
            whether it worked.
          </p>
        </div>

        <ol className="mt-[38px]">
          {startHere.map((item, index) => (
            <li key={item.title} className="border-t border-border-default">
              <Link
                href={`/guides/${slug(item.title)}`}
                className="group flex min-h-[141px] items-start gap-6 pb-6 pt-[42px]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border-default font-(family-name:--font-sora) text-[16px] font-bold text-text-primary transition-colors group-hover:border-brand-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="-mt-[6px]">
                  <span className="block font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary">
                    {item.time}
                  </span>
                  <span className="block pt-1.5 font-(family-name:--font-sora) text-[18px] font-bold text-text-primary transition-colors group-hover:text-brand-primary">
                    {item.title}
                  </span>
                  <span className="block pt-2.5 font-(family-name:--font-manrope) text-[15px] text-text-secondary">
                    {item.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
