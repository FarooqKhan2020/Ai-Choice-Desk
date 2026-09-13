import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
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

function FinalCTA() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[620px] lg:min-h-[700px]">
      <Image
        src="/images/Softwaredecision.png"
        alt=""
        fill
        priority
        className="object-cover object-left lg:object-right"
      />
      <div className="relative w-full px-6 sm:px-10 lg:px-15">
        <div className="max-w-lg">
          <h2 className="font-(family-name:--font-sora) text-4xl font-extrabold leading-[1.15] text-navy-900 sm:text-5xl">
            Your next great software decision starts with one conversation.
          </h2>
          <p className="max-w-md pt-5 font-(family-name:--font-manrope) text-[16px] leading-7 text-navy-800">
            If the tool you are paying for is not pulling its weight, 30 minutes with
            our research desk will usually tell you why — and what to switch to.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 font-(family-name:--font-manrope) text-[14px] font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Book a free research call
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
