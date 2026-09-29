import Image from 'next/image';
import Link from 'next/link';

export default function BestOfCTA() {
  return (
    <section className="grid lg:min-h-[341px] lg:grid-cols-[770fr_670fr]">
      <div className="relative flex items-center overflow-hidden bg-brand-primary px-6 py-14 lg:px-15">
        {/* Decorative circle */}
        <div
          className="pointer-events-none absolute -top-[109px] left-[358px] hidden size-[244px] rounded-full bg-white/20 lg:block"
          aria-hidden="true"
        />
        {/* Decorative dots */}
        <div
          className="pointer-events-none absolute bottom-[33px] right-[29px] hidden grid-cols-4 gap-[21px] lg:grid"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="size-[5px] rounded-full bg-navy-900/25" />
          ))}
        </div>

        <div className="relative">
          <h2 className="max-w-[480px] font-(family-name:--font-sora) text-[32px] font-extrabold leading-[1.2] text-navy-900 lg:text-[40px]">
            Make your next software decision with better data.
          </h2>
          <Link
            href="/contact"
            className="mt-9 inline-flex h-14 items-center rounded-full bg-text-primary px-8 font-(family-name:--font-manrope) text-[14px] font-medium text-white transition-colors hover:bg-navy-800"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <div className="relative h-[260px] lg:h-auto">
        <Image
          src="/Best-of/Best Of CTA.png"
          alt="Two colleagues comparing software options on a laptop"
          fill
          sizes="(min-width: 1024px) 47vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
