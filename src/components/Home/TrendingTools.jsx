import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tools = [
  {
    slug: 'ahrefs',
    name: 'Ahrefs',
    logo: '/ai-tool-logos/AHrefs.png',
    rating: 8.7,
    category: 'AEO & GEO',
    description: 'Best for tracking AI answer visibility alongside classic rankings.',
    price: '$129',
    unit: '/mo',
    cardBg: 'bg-brand-ahrefs-fill',
    badgeBorder: 'border-brand-ahrefs/25',
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    logo: null,
    rating: 9.1,
    category: 'VOICE AGENTS',
    description: 'Most natural outbound voice we tested, but watch the per-minute maths.',
    price: '$0.08',
    unit: '/min',
    cardBg: 'bg-brand-elevenlabs-fill',
    badgeBorder: 'border-brand-elevenlabs/20',
  },
  {
    slug: 'freshdesk',
    name: 'Freshdesk',
    logo: '/ai-tool-logos/freshdesk.png',
    rating: 8.2,
    category: 'CUSTOMER SERVICE',
    description: 'Solid AI deflection once you get past the add-on pricing tiers.',
    price: '$15',
    unit: '/agent',
    cardBg: 'bg-brand-freshdesk-fill',
    badgeBorder: 'border-brand-freshdesk/25',
  },
  {
    slug: 'hubspot',
    name: 'HubSpot',
    logo: '/ai-tool-logos/hubspot.png',
    rating: 8.5,
    category: 'GROWTH SUITE',
    description: 'The free tier is real; the jump to Professional is where it bites.',
    price: '$20',
    unit: '/seat',
    cardBg: 'bg-brand-hubspot-fill',
    badgeBorder: 'border-brand-hubspot/25',
  },
  {
    slug: 'browse-ai',
    name: 'Browse AI',
    logo: '/ai-tool-logos/browseAIt.png',
    rating: 7.9,
    category: 'AUTOMATION',
    description: 'Fastest set-up for scraping workflows without an engineer.',
    price: '$48',
    unit: '/mo',
    cardBg: 'bg-brand-browseai-fill',
    badgeBorder: 'border-brand-browseai/25',
  },
];

const trustPoints = [
  'Paid accounts, not vendor demos',
  'Renewal price shown next to list price',
  'Re-scored every 90 days',
];

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
      <path d="M8 0.667 9.933 5.1l4.734.42-3.6 3.14 1.084 4.673L8 10.9l-4.151 2.433 1.084-4.673-3.6-3.14 4.734-.42L8 .667Z" />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-teal-600">
      <path
        d="M13.333 4 6 11.333 2.667 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendingTools() {
  return (
    <section className="bg-tint-ice px-6 py-14 sm:px-10 lg:px-15 lg:py-15">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <p className="font-(family-name:--font-manrope) text-[12px] font-bold uppercase tracking-[2px] text-text-muted">
            Most tested this month
          </p>
          <h2 className="max-w-135 pt-3 font-(family-name:--font-sora) text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Trending <span className="text-teal-600">AI tools</span>, with the number we
            actually gave them
          </h2>
        </div>
        <p className="max-w-85 font-(family-name:--font-manrope) text-[14px] leading-6 text-text-secondary lg:pt-2 lg:text-right">
          Every score below comes from a paid account and the same seven weighted
          criteria. Prices were verified in the last 60 days.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className={`flex flex-col rounded-2xl p-5 ${tool.cardBg} transition-shadow hover:shadow-md`}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white">
                {tool.logo ? (
                  <Image src={tool.logo} alt={tool.name} width={48} height={48} className="h-full w-full object-cover" />
                ) : (
                  <span className="flex items-center gap-0.75">
                    <span className="h-5 w-0.75 bg-brand-elevenlabs" />
                    <span className="h-3 w-0.75 bg-brand-elevenlabs" />
                  </span>
                )}
              </div>
              <span
                className={`flex items-center gap-1 rounded-full border bg-white/70 px-2 py-1 font-(family-name:--font-manrope) text-[12px] font-bold text-text-primary ${tool.badgeBorder}`}
              >
                <StarIcon />
                {tool.rating}
              </span>
            </div>

            <p className="pt-4 font-(family-name:--font-manrope) text-[11px] font-bold uppercase tracking-[1.5px] text-text-muted">
              {tool.category}
            </p>
            <h3 className="pt-1 font-(family-name:--font-sora) text-[18px] font-bold text-text-primary">
              {tool.name}
            </h3>
            <p className="pt-2 font-(family-name:--font-manrope) text-[14px] leading-6 text-text-secondary">
              {tool.description}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-black/10 pt-4">
              <span className="font-(family-name:--font-sora) text-[16px] font-bold text-text-primary">
                {tool.price}
                <span className="font-(family-name:--font-manrope) text-[13px] font-normal text-text-muted"> {tool.unit}</span>
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-text-primary">
                <ExternalArrowIcon />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm sm:flex-row sm:gap-10">
        {trustPoints.map((point) => (
          <span
            key={point}
            className="flex items-center gap-2 font-(family-name:--font-manrope) text-[14px] text-text-primary"
          >
            <CheckIcon />
            {point}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TrendingTools;
