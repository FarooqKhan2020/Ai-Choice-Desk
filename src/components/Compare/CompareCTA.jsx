import Image from 'next/image';
import Link from 'next/link';

export default function CompareCTA() {
  return (
    <section className="grid lg:min-h-[340px] lg:grid-cols-2">
      <div className="relative h-[260px] lg:h-auto">
        <Image
          src="/AI receptionist/images/Image (Customer support team collaborating around a laptop).png"
          alt="Colleagues working through a software decision together"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="relative flex items-center overflow-hidden bg-brand-primary px-6 py-14 sm:px-10 lg:px-15">
        {/* Decorative circle */}
        <div
          className="pointer-events-none absolute -right-[60px] -top-[120px] hidden size-[300px] rounded-full bg-white/20 lg:block"
          aria-hidden="true"
        />
        {/* Decorative dots */}
        <div
          className="pointer-events-none absolute bottom-6 right-16 hidden grid-cols-4 gap-[21px] lg:grid"
          aria-hidden="true"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="size-[5px] rounded-full bg-navy-900/25" />
          ))}
        </div>

        <div className="relative max-w-[420px]">
          <h2 className="font-(family-name:--font-sora) text-[32px] font-extrabold leading-[1.2] text-navy-900 lg:text-[40px]">
            Still deciding? Ask us what fits your workflow.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-text-primary px-7 py-3.5 font-(family-name:--font-manrope) text-[13px] font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
