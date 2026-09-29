import Link from 'next/link';
import { tools, popularComparisons, compareHref } from './compareData';
import ToolLogo from './ToolLogo';
import { ArrowIcon, SearchIcon } from './Icons';

export default function PopularComparisons() {
  return (
    <section className="bg-surface-alt pb-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <SearchIcon className="h-[18px] w-[18px] text-brand-primary" />
          <h2 className="font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
            Popular comparisons
          </h2>
        </div>

        <ul className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularComparisons.map(([a, b]) => (
            <li key={`${a}-${b}`}>
              <Link
                href={compareHref(a, b)}
                className="group flex items-center justify-between gap-4 rounded-md border border-border-default bg-white px-4 py-4 transition-shadow hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center">
                    <ToolLogo tool={tools[a]} size={28} className="ring-2 ring-white" />
                    <ToolLogo tool={tools[b]} size={28} className="-ml-1.5 ring-2 ring-white" />
                  </span>
                  <span className="font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary">
                    {tools[a].name}{' '}
                    <span className="font-normal text-text-muted">vs</span>{' '}
                    {tools[b].name}
                  </span>
                </span>
                <ArrowIcon className="h-4 w-4 shrink-0 text-brand-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
