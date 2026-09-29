'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allCalculators } from './calculatorData';
import { CalcIcon, SearchIcon } from './Icons';

const tags = [...new Set(allCalculators.map((item) => item.tag))];
const times = [...new Set(allCalculators.map((item) => item.minutes))].sort((a, b) => a - b);

function FilterSelect({ label, value, onChange, children }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[46px] w-full appearance-none rounded-[10px] border border-border-default bg-white pl-4 pr-9 font-(family-name:--font-manrope) text-[14px] text-text-primary focus:border-brand-primary focus:outline-none"
      >
        {children}
      </select>
      <Image
        src="/calculators/arrow down.svg"
        alt=""
        width={7}
        height={11}
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default function AllCalculators() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');
  const [time, setTime] = useState('');

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return allCalculators.filter(
      (item) =>
        (!term ||
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)) &&
        (!tag || item.tag === tag) &&
        (!time || item.minutes <= Number(time)),
    );
  }, [query, tag, time]);

  return (
    <section className="bg-white pb-[60px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
              Browse everything
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
              All calculators
            </h2>
          </div>
          <p className="max-w-[440px] font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary lg:pt-6">
            Search or filter by category to find the right tool for the
            decision in front of you.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-[minmax(0,1fr)_100px_100px]">
          <div className="relative sm:col-span-1">
            <SearchIcon className="pointer-events-none absolute left-[18px] top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search calculators..."
              aria-label="Search calculators"
              className="h-[46px] w-full rounded-[10px] border border-border-default bg-white pl-11 pr-4 font-(family-name:--font-manrope) text-[15px] text-text-primary placeholder:text-text-secondary focus:border-brand-primary focus:outline-none"
            />
          </div>
          <FilterSelect label="Filter by category" value={tag} onChange={setTag}>
            <option value="" />
            {tags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect label="Filter by time" value={time} onChange={setTime}>
            <option value="" />
            {times.map((item) => (
              <option key={item} value={item}>
                Up to {item} min
              </option>
            ))}
          </FilterSelect>
        </div>

        <ul className="flex flex-col gap-3 pt-6">
          {visible.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-border-default bg-white px-[22px] py-[19px] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[#dff7f4] text-brand-primary">
                  <CalcIcon name={item.icon} className="h-[19px] w-[19px]" />
                </span>
                <div>
                  <h3 className="font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="pt-1 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2.5 sm:gap-2">
                <span className="rounded-full bg-[#eef3f8] px-3 py-1 font-(family-name:--font-manrope) text-[13px] font-semibold text-text-secondary">
                  {item.minutes} min
                </span>
                <span className="rounded-full bg-[#dff7f4] px-3 py-1 font-(family-name:--font-manrope) text-[13px] font-semibold text-brand-primary">
                  {item.tag}
                </span>
                <Link
                  href={item.href}
                  className="ml-2 inline-flex h-[38px] items-center rounded-full border border-border-default px-4 font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary transition-colors hover:border-text-primary"
                >
                  Open Calculator
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="py-10 text-center font-(family-name:--font-manrope) text-[15px] text-text-secondary">
            No calculators match those filters.
          </p>
        )}
      </div>
    </section>
  );
}
