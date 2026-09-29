'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { icons, moreStudies, studies, tracks } from './researchData';

const ALL = 'All research';

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function ResearchLibrary() {
  const [query, setQuery] = useState('');
  const [track, setTrack] = useState(ALL);
  const [showMore, setShowMore] = useState(false);

  const visible = useMemo(() => {
    const pool = showMore ? [...studies, ...moreStudies] : studies;
    const term = query.trim().toLowerCase();
    return pool.filter(
      (study) =>
        (track === ALL || study.track === track) &&
        (!term || study.title.toLowerCase().includes(term)),
    );
  }, [query, track, showMore]);

  return (
    <section id="library" className="scroll-mt-24 bg-white pb-[76px] pt-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
              Research library
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.02] tracking-[-0.02em] text-text-primary lg:text-[44px]">
              Everything we’ve published.
            </h2>
          </div>
          <p className="max-w-[332px] font-(family-name:--font-manrope) text-[16px] leading-[27px] text-text-secondary">
            184 studies, filed by track. Each one lists its sample, its method
            and the date it was last checked.
          </p>
        </div>

        <div className="relative mt-11">
          <Image
            src={icons.search}
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-7 top-1/2 -translate-y-1/2"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search research..."
            aria-label="Search research"
            className="h-[52px] w-full rounded-lg border border-border-default bg-white pl-[50px] pr-4 font-(family-name:--font-manrope) text-[15px] text-text-primary placeholder:text-text-secondary focus:border-brand-primary focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2.5 pt-[22px]" role="group" aria-label="Filter by track">
          {[ALL, ...tracks].map((name) => {
            const active = name === track;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setTrack(name)}
                aria-pressed={active}
                className={`h-[38px] rounded-full border px-4 font-(family-name:--font-manrope) text-[14px] transition-colors ${
                  active
                    ? 'border-[#020a1f] bg-[#020a1f] font-semibold text-white'
                    : 'border-border-default bg-white text-text-secondary hover:border-text-primary hover:text-text-primary'
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        <ol className="mt-6 border-t border-border-default">
          {visible.map((study, index) => (
            <li key={study.title} className="border-b border-border-default">
              <Link
                href={`/research/${slugify(study.title)}`}
                className="group grid min-h-[82px] grid-cols-[32px_1fr_34px] items-center gap-x-4 gap-y-1 py-4 lg:gap-x-0 lg:grid-cols-[78px_minmax(0,1fr)_200px_150px_136px_34px] lg:gap-y-0"
              >
                <span className="font-(family-name:--font-manrope) text-[13px] text-text-secondary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-(family-name:--font-sora) text-[18px] font-bold leading-snug tracking-[-0.01em] text-text-primary transition-colors group-hover:text-brand-primary lg:text-[22px]">
                  {study.title}
                </h3>
                <span className="col-start-2 font-(family-name:--font-manrope) text-[12px] font-semibold uppercase tracking-[1.2px] text-brand-primary lg:col-start-auto">
                  {study.track}
                </span>
                <span className="col-start-2 font-(family-name:--font-manrope) text-[13px] text-text-secondary lg:col-start-auto">
                  {study.date}
                </span>
                <span className="col-start-2 font-(family-name:--font-manrope) text-[13px] text-text-secondary lg:col-start-auto">
                  {study.read} min read
                </span>
                <span className="col-start-3 row-start-1 flex size-[34px] items-center justify-center rounded-full border border-border-default text-text-primary transition-colors group-hover:border-text-primary lg:col-start-auto lg:row-start-auto">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {visible.length === 0 && (
          <p className="py-10 text-center font-(family-name:--font-manrope) text-[15px] text-text-secondary">
            No studies match that search yet.
          </p>
        )}

        {!showMore && (
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="mt-9 h-[46px] rounded-full border border-border-default bg-white px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary transition-colors hover:border-text-primary"
          >
            Load 12 more studies
          </button>
        )}
      </div>
    </section>
  );
}
