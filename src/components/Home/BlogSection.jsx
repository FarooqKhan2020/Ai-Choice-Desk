import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredPost = {
  tag: 'Best',
  date: 'Updated Aug 29, 2026',
  title: 'Best AI receptionists for small business in 2026',
  description:
    'We compare AI receptionists on cost per answered call, what happens when the AI fails, and which ones put a human behind the software when it matters.',
  href: '/blog/best-ai-receptionists-2026',
};

const recentPosts = [
  {
    tag: 'Best',
    date: 'Aug 28, 2026',
    title: 'Best free AI chatbots for websites, and where free runs out',
    description:
      'Every free AI chatbot tier has a ceiling. We map exactly where each one stops being useful, so you know what you are upgrading into before you commit.',
    href: '/blog/best-free-ai-chatbots',
  },
  {
    tag: 'Best',
    date: 'Aug 28, 2026',
    title: 'What is AEO? Answer engine optimisation explained',
    description:
      'AEO is optimising to be the answer an AI assistant gives, not just a link it might cite. Here is what actually changes, and what is the same as SEO with a new name.',
    href: '/blog/what-is-aeo',
  },
];

const freeTools = [
  { name: 'Ahrefs', logo: '/ai-tool-logos/AHrefs.png' },
  { name: 'Browse AI', logo: '/ai-tool-logos/browseAIt.png' },
  { name: 'Eleven Labs', logo: null },
  { name: 'Framer', logo: '/ai-tool-logos/framer.png' },
  { name: 'Fresh Desk', logo: '/ai-tool-logos/freshdesk.png' },
  { name: 'Hub Spot', logo: '/ai-tool-logos/hubspot.png' },
];

function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-text-secondary">
      {children}
    </p>
  );
}

function ReadLink({ href, children }) {
  return (
    <Link
      href={href}
      className="mt-4 inline-flex items-center gap-1.5 font-(family-name:--font-manrope) text-[14px] font-semibold text-accent-secondary transition-colors hover:text-accent-secondary-hover"
    >
      {children}
      <ArrowRightIcon />
    </Link>
  );
}

function BlogSection() {
  return (
    <section className="bg-bg-section px-6 py-14 sm:px-10 lg:px-15 lg:py-15">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-3">
        {/* Left: posts */}
        <div className="lg:col-span-2">
          <Eyebrow>Latest from the desk</Eyebrow>

          <Link
            href={featuredPost.href}
            className="mt-4 block overflow-hidden rounded-xl border border-card-border bg-card-bg transition-shadow hover:shadow-lg"
          >
            <div className="h-1 w-full bg-gradient-to-r from-accent-secondary to-teal-600" />
            <div className="p-8">
              <div className="flex items-center gap-3 font-(family-name:--font-geist-mono) text-[11px] font-bold uppercase tracking-[1.5px] text-text-primary">
                <span>{featuredPost.tag}</span>
                <span className="font-medium text-text-secondary">{featuredPost.date}</span>
              </div>
              <h3 className="pt-3 font-(family-name:--font-sora) text-2xl font-extrabold leading-tight text-text-primary">
                {featuredPost.title}
              </h3>
              <p className="max-w-xl pt-3 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-secondary">
                {featuredPost.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-(family-name:--font-manrope) text-[14px] font-semibold text-accent-secondary">
                Read the analysis
                <ArrowRightIcon />
              </span>
            </div>
          </Link>

          <div className="mt-8 flex flex-col divide-y divide-card-border">
            {recentPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group py-6 first:pt-0">
                <div className="flex items-center gap-3 font-(family-name:--font-geist-mono) text-[11px] font-bold uppercase tracking-[1.5px] text-text-primary">
                  <span>{post.tag}</span>
                  <span className="font-medium text-text-secondary">{post.date}</span>
                </div>
                <h3 className="pt-2 font-(family-name:--font-sora) text-lg font-bold text-text-primary transition-colors group-hover:text-accent-secondary">
                  {post.title}
                </h3>
                <p className="max-w-xl pt-2 font-(family-name:--font-manrope) text-[14px] leading-6 text-text-secondary">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: sidebar */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-card-border bg-card-bg p-6">
            <Eyebrow>Free plans that are actually free</Eyebrow>
            <div className="mt-4 flex flex-col gap-2">
              {freeTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 rounded-lg bg-state-hover px-3 py-2.5"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
                    {tool.logo ? (
                      <Image src={tool.logo} alt="" width={28} height={28} className="h-full w-full object-cover" />
                    ) : (
                      <span className="flex items-center gap-0.5">
                        <span className="h-3.5 w-0.5 bg-brand-elevenlabs" />
                        <span className="h-2 w-0.5 bg-brand-elevenlabs" />
                      </span>
                    )}
                  </div>
                  <span className="font-(family-name:--font-manrope) text-[14px] font-medium text-text-primary">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
            <ReadLink href="/guides/free-vs-paid">Free vs paid guides</ReadLink>
          </div>

          <div className="rounded-xl border border-card-border bg-card-bg p-6">
            <Eyebrow>Tools</Eyebrow>
            <h3 className="pt-3 font-(family-name:--font-sora) text-xl font-extrabold text-text-primary">
              Cost calculators
            </h3>
            <p className="pt-2 font-(family-name:--font-manrope) text-[14px] leading-6 text-text-secondary">
              Work out what an AI receptionist or an automation platform will really cost
              you at your volume.
            </p>
            <ReadLink href="/calculators">Open the calculators</ReadLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
