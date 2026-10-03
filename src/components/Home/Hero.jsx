import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const popularSearches = [
  { name: 'AI receptionists', slug: 'ai-receptionists' },
  { name: 'Voice agents', slug: 'voice-agents' },
  { name: 'Workflow automation', slug: 'workflow-automation' },
  { name: 'AI bookkeeping', slug: 'ai-bookkeeping' },
];

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#00061a_0%,#000f2e_62%,#00466d_100%)] px-6 pt-14 pb-20 sm:px-8 lg:px-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 100%, rgba(0,208,235,0.22) 0%, rgba(0,208,235,0) 55%), linear-gradient(180deg,#00061a 0%,#000f2e 62%,#00466d 100%)",
      }}
    >
      {/* Decorative dotted arcs (right side) */}
      <div className="pointer-events-none absolute -right-24 top-0 hidden h-[854px] w-[448px] lg:block">
        <Image src="/hero/dotted-arc.svg" alt="" fill className="object-contain" />
      </div>

      {/* Decorative teal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[163px] w-[214px] -translate-x-[120px] blur-[60px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(0,207,193,0.5) 0%, rgba(0,207,193,0) 65%)",
        }}
      />

      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 hidden h-[506px] w-[499px] -translate-y-1/2 -rotate-[48.87deg] sm:block"
      >
        <div className="relative h-[318px] w-[394px] rounded-[160px] border-[0.8px] border-white/[0.14] opacity-60 shadow-[0px_30px_60px_0px_rgba(2,3,9,0.6)]">
          <div
            aria-hidden
            className="absolute inset-0 rounded-[160px]"
            style={{
              backgroundImage:
                'linear-gradient(141deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.008) 100%)',
            }}
          />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.18)]" />
        </div>
      </div>

      {/* Decorative sparkle */}
      <div className="pointer-events-none absolute left-[4%] top-[28%] hidden h-[99px] w-[98px] -rotate-[18.25deg] sm:block">
        <Image src="/hero/sparkle.svg" alt="" fill />
      </div>

      <div className="relative mx-auto flex max-w-[896px] flex-col items-center text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border-[0.8px] border-[rgba(105,181,200,0.24)] bg-white/30 px-3 py-1.5 backdrop-blur-[10px]">
          <Image src="/hero/badge-check.svg" alt="" width={14} height={14} />
          <span className="font-[family-name:var(--font-dm-sans)] text-[12px] font-medium leading-4 text-white">
            Independent, expert-led research
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[896px] pt-5 font-[family-name:var(--font-sora)] text-4xl font-bold leading-[1.05] text-[#f1f8fb] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84.8px]">
          Every AI tool promises results.{' '}
          <span className="text-teal-600">We verify them.</span>
        </h1>

        {/* Description */}
        <p className="max-w-[672px] pt-5 font-[family-name:var(--font-dm-sans)] text-[18px] leading-[28px] text-text-on-dark">
          Skip the marketing claims. We score AI software for small and mid-sized
          businesses on one published framework — renewal prices next to the advertised
          ones, honest comparisons, and a straight answer on who each tool isn&apos;t
          for.
        </p>

        {/* Search */}
        <form
          action="/search"
          method="GET"
          className="mt-7 flex w-full max-w-[672px] items-center gap-2 rounded-full border-[0.8px] border-white/[0.16] bg-surface-nav p-[6px] drop-shadow-[0px_20px_32.5px_rgba(0,1,11,0.34)]"
        >
          <Image src="/hero/search-icon.svg" alt="" width={20} height={20} className="ml-3 shrink-0" />
          <input
            type="text"
            name="q"
            placeholder="What software are you looking for?"
            className="h-11 min-w-0 flex-1 bg-transparent p-1 font-[family-name:var(--font-dm-sans)] text-[14px] text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          <button
            type="submit"
            className="relative h-10 w-[112px] shrink-0 overflow-hidden rounded-full bg-teal-600 px-6 py-2 font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-[#000716] transition-colors hover:bg-mint-400"
          >
            Search
          </button>
        </form>

        {/* Popular tags */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-[10px]">
          <span className="font-[family-name:var(--font-inter)] text-[14px] font-semibold text-text-on-dark">
            Popular:
          </span>
          {popularSearches.map((item) => (
            <Link
              key={item.slug}
              href={`/search?category=${item.slug}`}
              className="rounded-full bg-white/10 px-4 py-1.5 font-[family-name:var(--font-inter)] text-[14px] font-medium text-text-on-dark transition-colors hover:bg-white/20"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
