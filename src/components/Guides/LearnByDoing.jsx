import Link from 'next/link';
import { walkthroughs } from './guidesData';

const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function LearnByDoing() {
  return (
    <section className="bg-[#f5f8fb] pb-[60px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-(family-name:--font-sora) text-[30px] font-bold leading-tight tracking-[-0.01em] text-text-primary sm:text-[36px]">
            Learn by doing
          </h2>
          <p className="font-(family-name:--font-manrope) text-[16px] text-text-secondary">
            Guides built around one specific task, start to finish.
          </p>
        </div>

        <ul className="grid items-start gap-3 pt-[48px] md:grid-cols-2">
          {walkthroughs.map((guide) => (
            <li key={guide.title}>
              <Link
                href={`/guides/${slug(guide.title)}`}
                className="group block min-h-[231px] bg-white px-[30px] pb-6 pt-[30px] transition-shadow hover:shadow-[0_8px_24px_rgba(0,18,41,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-(family-name:--font-manrope) text-[14px] font-medium text-brand-primary">
                    {guide.category}
                  </span>
                  <span
                    className={`rounded-full px-3.5 py-1 font-(family-name:--font-manrope) text-[13px] font-semibold ${
                      guide.level === 'Beginner'
                        ? 'bg-brand-primary text-text-on-primary'
                        : 'border border-border-default text-text-primary'
                    }`}
                  >
                    {guide.level}
                  </span>
                </div>
                <h3 className="pt-5 font-(family-name:--font-sora) text-[18px] font-bold text-text-primary transition-colors group-hover:text-brand-primary">
                  {guide.title}
                </h3>
                <p className="pt-3 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-secondary">
                  {guide.description}
                </p>

                <div className="flex gap-[5px] pt-[22px]" aria-hidden="true">
                  {Array.from({ length: guide.steps }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-[5px] flex-1 rounded-full ${
                        index < guide.done ? 'bg-brand-primary' : 'bg-[#dde3ea]'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between pt-3.5 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
                  <span>{guide.steps} steps</span>
                  <span className="pr-[55px]">{guide.minutes} min</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
