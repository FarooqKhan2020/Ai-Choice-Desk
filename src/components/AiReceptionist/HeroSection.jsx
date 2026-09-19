import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#123A52_0%,_#0D1F33_45%,_#0B1220_100%)]" />

      {/* Decorative ring on the left */}
      <div className="pointer-events-none absolute left-[-120px] top-[180px] h-[420px] w-[420px] rounded-full border border-white/10" />

      {/* Decorative dashed lines on the right */}
      <div className="pointer-events-none absolute right-[60px] top-[80px] hidden h-[420px] w-[200px] lg:block">
        <svg width="200" height="420" viewBox="0 0 200 420" fill="none">
          <path d="M40 0 L40 420" stroke="#00CFC1" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="6 8" />
          <path d="M120 0 L120 420" stroke="#00CFC1" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="6 8" />
          <path d="M0 40 L200 40" stroke="#00CFC1" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 8" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-7 pb-14 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[13px]">
          <Link href="/" className="text-[#94A3B8] transition-colors hover:text-white">
            Home
          </Link>
          <span className="text-[#475569]">/</span>
          <Link href="/categories" className="text-[#94A3B8] transition-colors hover:text-white">
            Categories
          </Link>
          <span className="text-[#475569]">/</span>
          <span className="text-[#E2E8F0]">AI Receptionists</span>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_540px]">
          {/* Left column */}
          <div className="relative z-10">
            <p className="mb-5 text-[17px] font-medium text-[#00CFC1]">
              Category · Customer experience
            </p>

            <h1 className="mb-6 text-[56px] font-bold leading-[1.05] tracking-[-0.02em] text-white lg:text-[64px]">
              AI Receptionists
            </h1>

            <p className="mb-9 max-w-[560px] text-[17px] leading-[1.7] text-[#B9C4D4]">
              AI receptionists answer, route, and follow up on calls when your team
              cannot. Compare four tracked platforms for small businesses, agencies,
              and service teams—using clear pricing and independently reviewed details.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#comparison"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#5EEAD4] px-7 py-3.5 text-[15px] font-semibold text-[#0B1220] transition-colors hover:bg-[#7CF0DD]"
              >
                Compare products
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 5h5M11 5h5M2 13h9M15 13h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>

              <Link
                href="#method"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See our method
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right column - card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#16243A] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            {/* Image with badge */}
            <div className="relative h-[250px]">
              <Image
                src="/images/AiReceptH.png"
                alt="Team reviewing AI receptionist software"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#0B1220]/90 px-4 py-2 backdrop-blur-sm">
                <svg className="h-4 w-4 text-[#00CFC1]" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2l6 2.5v4c0 3.8-2.5 7.2-6 8.3-3.5-1.1-6-4.5-6-8.3v-4L10 2z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <path d="M7.5 9.8l1.8 1.8 3.4-3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-medium text-[#00CFC1]">
                  Independent category research
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2">
              <div className="border-r border-white/[0.08] bg-[#1B2C45] px-7 py-6">
                <div className="mb-1.5 text-[38px] font-bold leading-none text-white">4</div>
                <div className="text-[13px] text-[#94A3B8]">Products tracked</div>
              </div>
              <div className="bg-[#1B2C45] px-7 py-6">
                <div className="mb-1.5 text-[38px] font-bold leading-none text-white">$29</div>
                <div className="text-[13px] text-[#94A3B8]">Lowest listed start</div>
              </div>
            </div>

            {/* Footer note */}
            <p className="px-7 py-6 text-[14px] leading-[1.65] text-[#94A3B8]">
              What you&apos;ll find: comparable pricing, best-fit use cases, product
              research status, and a practical buying framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
