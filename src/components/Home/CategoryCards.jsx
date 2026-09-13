import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const gradientTextStyle = {
  backgroundImage:
    'linear-gradient(178deg, rgb(8,19,42) 8.5%, rgb(8,28,68) 54%, rgb(0,60,82) 92%)',
};

const categories = [
  {
    slug: 'voice-agents',
    icon: '/category/voice-agents.svg',
    iconSize: 18,
    eyebrow: 'Customer experience',
    title: 'AI Voice Agents',
    description: 'Answer every call, qualify prospects, and book appointments around the clock.',
    count: 4,
  },
  {
    slug: 'receptionists',
    icon: '/category/receptionists.svg',
    iconSize: 18,
    eyebrow: 'Customer experience',
    title: 'AI Receptionists',
    description: 'Natural voice support for service teams and sales.',
    count: 3,
  },
  {
    slug: 'customer-service',
    icon: '/category/customer-service.svg',
    iconSize: 24,
    eyebrow: 'Customer experience',
    title: 'AI Customer Service',
    description: 'Resolve routine questions without losing the human touch.',
    count: 3,
  },
  {
    slug: 'website-builders',
    icon: '/category/website-builders.svg',
    iconSize: 24,
    eyebrow: 'Customer experience',
    title: 'AI Website Builders',
    description: 'Turn a simple brief into a credible working website.',
    count: 4,
  },
  {
    slug: 'workflow-automation',
    icon: '/category/workflow-automation.svg',
    iconSize: 20,
    eyebrow: 'Customer experience',
    title: 'AI Workflow Automation',
    description: 'Connect the tools your team already uses every day.',
    count: 14,
  },
  {
    slug: 'bookkeeping',
    icon: '/category/bookkeeping.svg',
    iconSize: 22,
    eyebrow: 'Customer experience',
    title: 'AI Bookkeeping',
    description: 'Organize expenses and keep financial admin moving.',
    count: 6,
  },
  {
    slug: 'aeo-geo-tools',
    icon: '/category/aeo-geo.svg',
    iconSize: 18,
    eyebrow: 'Customer experience',
    title: 'AEO & GEO Tools',
    description: 'Understand visibility across AI answer engines.',
    count: 7,
  },
];

function CategoryCards() {
  return (
    <section className="px-6 py-14 sm:px-10 lg:px-15 lg:py-15">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h2 className="font-(family-name:--font-sora) text-4xl font-extrabold leading-[1.2] text-text-primary sm:text-5xl">
            What are you trying{' '}
            <span className="bg-clip-text text-transparent" style={gradientTextStyle}>
              to{' '}
            </span>
            <span className="text-teal-600">fix</span>
            <span className="bg-clip-text text-transparent" style={gradientTextStyle}>
              ?
            </span>
          </h2>
          <p className="pt-4 font-(family-name:--font-manrope) text-[18px] leading-7 text-text-secondary">
            Choose the challenge on your desk. We&apos;ll show you the AI tools that
            solve it — independently reviewed and clearly compared.
          </p>
        </div>
        <Link
          href="/categories"
          className="flex shrink-0 items-center gap-2 font-(family-name:--font-manrope) text-[14px] font-bold uppercase text-text-primary transition-colors hover:text-teal-600"
        >
          All categories
          <Image src="/category/arrow.svg" alt="" width={16} height={16} />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-[10px] border-[0.8px] border-card-border bg-white p-7 transition-shadow hover:shadow-lg"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-teal-600" />

            <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-state-hover">
              <Image
                src={category.icon}
                alt=""
                width={category.iconSize}
                height={category.iconSize}
              />
            </div>

            <p
              className="bg-clip-text pt-6 font-(family-name:--font-manrope) text-[10px] font-bold uppercase tracking-[1.8px] text-transparent"
              style={gradientTextStyle}
            >
              {category.eyebrow}
            </p>
            <h3 className="pt-2 font-(family-name:--font-sora) text-[20px] font-bold leading-snug text-text-primary">
              {category.title}
            </h3>
            <p className="pt-3 font-(family-name:--font-manrope) text-[14px] leading-6 text-text-secondary">
              {category.description}
            </p>

            <div className="mt-auto flex items-center justify-between pt-7">
              <span className="font-(family-name:--font-manrope) text-[12px] font-semibold text-text-secondary">
                {category.count} products
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-[0.8px] border-card-border bg-card-bg transition-colors group-hover:bg-teal-600">
                <Image
                  src="/category/arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="transition group-hover:brightness-0 group-hover:invert"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;
