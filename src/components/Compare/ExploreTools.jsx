import Link from 'next/link';
import { exploreLinks } from './compareData';
import { ArrowIcon, FeatureIcon } from './Icons';

export default function ExploreTools() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <h2 className="font-(family-name:--font-sora) text-[24px] font-bold text-text-primary sm:text-[28px]">
          Not sure which tools to compare?
        </h2>
        <p className="pt-2 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
          Start with your workflow, shortlist the strongest matches, then return
          here for the final head-to-head.
        </p>

        <ul className="grid gap-3.5 pt-8 md:grid-cols-2">
          {exploreLinks.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group flex h-full items-start gap-4 rounded-md border border-border-default bg-tint-ice px-5 py-5 transition-shadow hover:shadow-md"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-primary/40 text-brand-primary">
                  <FeatureIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary">
                    {item.title}
                  </span>
                  <span className="block pt-1.5 font-(family-name:--font-manrope) text-[12px] leading-5 text-text-muted">
                    {item.description}
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
