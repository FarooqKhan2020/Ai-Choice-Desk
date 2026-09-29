import Image from 'next/image';
import Link from 'next/link';
import { moreGuides } from './guidesData';

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

function SideCard({ guide }) {
  return (
    <Link
      href={guide.href}
      className="group flex min-h-[227px] flex-col justify-center rounded-3xl border border-border-default bg-white px-[26px] py-8 transition-shadow hover:shadow-[0_8px_24px_rgba(0,18,41,0.08)]"
    >
      <span className="font-(family-name:--font-manrope) text-[14px] font-medium text-brand-primary">
        {guide.category}
      </span>
      <h3 className="pt-4 font-(family-name:--font-sora) text-[19px] font-bold text-text-primary transition-colors group-hover:text-brand-primary">
        {guide.title}
      </h3>
      <p className="pt-3 font-(family-name:--font-manrope) text-[16px] text-text-secondary">
        {guide.description}
      </p>
      <span className="flex items-center justify-between pr-[130px] pt-6 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
        {guide.readTime}
        <Arrow />
      </span>
    </Link>
  );
}

export default function MoreGuides() {
  const { lead, side, wide } = moreGuides;

  return (
    <section className="bg-white pb-[70px] pt-[60px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="grid gap-6 lg:grid-cols-[683fr_613fr] lg:gap-x-6">
          <Link
            href={lead.href}
            className="group block rounded-3xl border border-border-default bg-white p-[34px] transition-shadow hover:shadow-[0_8px_24px_rgba(0,18,41,0.08)]"
          >
            <Image
              src={lead.image}
              alt=""
              width={596}
              height={220}
              className="h-auto w-full rounded-[20px]"
            />
            <span className="block pt-7 font-(family-name:--font-manrope) text-[14px] font-medium text-brand-primary">
              {lead.category}
            </span>
            <h3 className="pt-4 font-(family-name:--font-sora) text-[24px] font-bold leading-tight tracking-[-0.01em] text-text-primary transition-colors group-hover:text-brand-primary sm:text-[26px]">
              {lead.title}
            </h3>
            <p className="max-w-[430px] pt-4 font-(family-name:--font-manrope) text-[17px] leading-[26px] text-text-secondary">
              {lead.description}
            </p>
            <span className="flex items-center justify-between pt-5 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
              {lead.readTime}
              <Arrow />
            </span>
          </Link>

          <div className="flex flex-col gap-[25px]">
            {side.map((guide) => (
              <SideCard key={guide.title} guide={guide} />
            ))}
          </div>
        </div>

        <Link
          href={wide.href}
          className="group mt-6 flex flex-col gap-5 rounded-3xl border border-border-default bg-white p-[30px] transition-shadow hover:shadow-[0_8px_24px_rgba(0,18,41,0.08)] sm:flex-row sm:items-center sm:gap-7"
        >
          <Image
            src={wide.image}
            alt=""
            width={150}
            height={104}
            className="h-[104px] w-[150px] shrink-0 rounded-xl object-cover"
          />
          <span className="flex-1">
            <span className="block font-(family-name:--font-manrope) text-[14px] font-medium text-brand-primary">
              {wide.category}
            </span>
            <span className="block pt-3 font-(family-name:--font-sora) text-[17px] font-bold text-text-primary transition-colors group-hover:text-brand-primary">
              {wide.title}
            </span>
            <span className="block pt-2 font-(family-name:--font-manrope) text-[16px] text-text-secondary">
              {wide.description}
            </span>
            <span className="flex items-center justify-between pt-3 font-(family-name:--font-manrope) text-[14px] text-text-secondary sm:pr-[120px]">
              {wide.readTime}
              <Arrow />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
