import Image from 'next/image';
import Link from 'next/link';
import { featuredGuide as guide } from './guidesData';
import { ArrowIcon, SparkleIcon } from './Icons';

export default function FeaturedGuide() {
  return (
    <section className="bg-[#f5f8fb] pb-[59px] pt-[62px]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 lg:grid-cols-[648px_minmax(0,1fr)] lg:gap-x-6 lg:px-15">
        <div className="relative h-[300px] overflow-hidden rounded-2xl bg-[#0a2a4a] sm:h-[384px]">
          <Image
            src={guide.image}
            alt="Team reviewing an AI tool shortlist together"
            fill
            sizes="(min-width: 1024px) 648px, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0b3d5c]/70 via-[#0a6a80]/40 to-[#0b2a48]/70 mix-blend-multiply"
            aria-hidden="true"
          />
          <SparkleIcon className="absolute left-[510px] top-[42px] hidden h-6 w-6 text-brand-primary sm:block" />
          <div className="absolute inset-x-6 bottom-5 rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-md sm:left-[73px] sm:right-[57px]">
            <div className="flex gap-2" aria-hidden="true">
              <span className="size-2 rounded-full bg-brand-primary" />
              <span className="size-2 rounded-full bg-brand-primary/70" />
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white" />
            </div>
            <p className="pt-3.5 font-(family-name:--font-manrope) text-[15px] leading-6 text-white">
              {guide.caption}
            </p>
          </div>
        </div>

        <div className="lg:pl-0">
          <p className="flex items-center gap-3 font-(family-name:--font-manrope) text-[15px] font-medium">
            <span className="text-brand-primary">{guide.tag}</span>
            <span className="size-1 rounded-full bg-text-muted" aria-hidden="true" />
            <span className="text-text-secondary">{guide.readTime}</span>
          </p>
          <h2 className="max-w-[540px] pt-5 font-(family-name:--font-sora) text-[30px] font-bold leading-[1.1] tracking-[-0.01em] text-text-primary sm:text-[36px]">
            {guide.title}
          </h2>
          <p className="max-w-[470px] pt-5 font-(family-name:--font-manrope) text-[17px] leading-7 text-text-secondary">
            {guide.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-7">
            <Image
              src={guide.author.avatar}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <div>
              <p className="font-(family-name:--font-manrope) text-[15px] font-bold text-text-primary">
                {guide.author.name}
              </p>
              <p className="font-(family-name:--font-manrope) text-[13px] text-text-secondary">
                {guide.author.role}
              </p>
            </div>
          </div>

          <Link
            href={guide.href}
            className="mt-9 inline-flex items-center gap-2 font-(family-name:--font-manrope) text-[16px] font-semibold text-text-primary transition-colors hover:text-brand-primary"
          >
            Read guide
            <ArrowIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
