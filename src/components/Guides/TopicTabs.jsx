import Link from 'next/link';
import { topics } from './guidesData';
import { ArrowIcon } from './Icons';

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function TopicTabs() {
  return (
    <section id="topics" className="scroll-mt-24 bg-surface-alt pt-[38px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between lg:px-[60px]">
          <h2 className="font-(family-name:--font-sora) text-[22px] font-bold text-text-primary">
            Explore by topic
          </h2>
          <p className="font-(family-name:--font-manrope) text-[15px] text-text-secondary">
            10 topics · updated weekly
          </p>
        </div>

        <ul className="mt-9 flex overflow-x-auto border-b-[3px] border-[#e1e8ee] border-t border-t-border-default [scrollbar-width:none]">
          {topics.map((topic, index) => (
            <li
              key={topic.name}
              className={`shrink-0 ${index > 0 ? 'border-l border-border-default' : ''}`}
            >
              <Link
                href={`/guides?topic=${slug(topic.name)}`}
                className="group block px-[30px] pb-6 pt-8 transition-colors hover:bg-white/60"
              >
                <span className="flex items-center gap-2.5 whitespace-nowrap font-(family-name:--font-sora) text-[17px] font-semibold text-text-primary">
                  {topic.name}
                  <ArrowIcon className="h-4 w-4 text-text-secondary transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="block pt-3 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
                  {topic.count} guides
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
