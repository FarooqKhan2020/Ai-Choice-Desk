import Image from 'next/image';
import Link from 'next/link';
import { categories } from './bestOfData';
import { ArrowIcon, HeadsetIcon, TrendIcon } from './Icons';

// Row pattern from the design: 2 wide, 3 narrow, 2 wide, 3 narrow.
const wideIndexes = new Set([0, 1, 5, 6]);

function CategoryIcon({ icon }) {
  if (icon === 'trend') return <TrendIcon className="h-[17px] w-[17px] text-[#51DECD]" />;
  if (icon === 'headset') return <HeadsetIcon className="h-[17px] w-[17px] text-[#51DECD]" />;
  return <Image src={icon} alt="" width={17} height={17} aria-hidden="true" />;
}

export default function CategoryPicks() {
  return (
    <section className="bg-surface-alt pb-15 pt-[66px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
              Explore the picks
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-primary lg:text-[44px]">
              Best software,
              <br />
              by category.
            </h2>
          </div>
          <Link
            href="/software"
            className="flex items-center gap-2 pt-3 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary sm:pt-9"
          >
            All 18 categories
            <ArrowIcon className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>

        <ul className="grid gap-3.5 pt-8 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => (
            <li
              key={category.title}
              className={wideIndexes.has(index) ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <Link
                href={category.href}
                className="group flex h-full min-h-[214px] flex-col rounded-xl border border-border-default bg-white p-[22px] transition-shadow hover:shadow-[0_8px_24px_rgba(0,18,41,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-[38px] items-center justify-center rounded-lg bg-brand-primary/15">
                    <CategoryIcon icon={category.icon} />
                  </span>
                  <span className="font-(family-name:--font-manrope) text-[12px] font-bold tracking-[1px] text-text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="pt-3 font-(family-name:--font-manrope) text-[18px] font-semibold text-text-primary">
                  {category.title}
                </h3>
                <p className="max-w-[560px] pb-2.5 pr-6 pt-3 font-(family-name:--font-manrope) text-[14px] leading-5 text-text-secondary">
                  {category.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border-default pt-[15px] transition-colors group-hover:border-brand-primary">
                  <span className="font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary">
                    {category.count}
                  </span>
                  <ArrowIcon className="h-4 w-4 text-brand-primary transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
