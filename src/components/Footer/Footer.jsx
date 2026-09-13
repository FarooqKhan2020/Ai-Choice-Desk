import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'Our Brands', href: '/our-brands' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Partner With Us',
    links: [
      { name: 'Marketing Solutions', href: '/marketing-solutions' },
      { name: 'Our Audience', href: '/our-audience' },
      { name: 'Customer Stories', href: '/customer-stories' },
      { name: 'List Your Product', href: '/list-your-product' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Use', href: '/terms-of-use' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Do Not Sell My Info', href: '/do-not-sell-my-info' },
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    ],
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 px-6 pt-[60px] lg:px-[60px]">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-179px] top-[-51px] h-[506px] w-[499px] -rotate-[48.87deg]"
      >
        <div className="relative h-[318px] w-[394px] rounded-[160px] border-[0.8px] border-white/[0.14] opacity-60 shadow-[0px_30px_60px_0px_rgba(2,3,9,0.6)]">
          <div
            aria-hidden
            className="absolute inset-0 rounded-[160px]"
            style={{
              backgroundImage:
                'linear-gradient(141deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.008) 100%)',
            }}
          />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.18)]" />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col">
        {/* Brand */}
        <Link href="/" className="flex w-fit items-center gap-[10px]">
          <Image
            src="/logo/logo-mark.png"
            alt="AI Choice Desk"
            width={37}
            height={34}
            className="h-[34px] w-auto"
          />
          <span className="font-[family-name:var(--font-space-grotesk)] text-[18px] font-bold leading-[19.8px] whitespace-nowrap">
            <span className="text-white">AI CHOICE</span>
            <span className="text-teal-600"> DESK</span>
          </span>
        </Link>

        {/* Content */}
        <div className="flex flex-col gap-10 pt-12 lg:flex-row lg:justify-between lg:gap-8">
          <div className="max-w-[384px] shrink-0 font-[family-name:var(--font-dm-sans)]">
            <p className="text-[16px] leading-[26px] text-text-disabled">
              Independent research on AI software for small and mid-sized businesses. We
              test the tools, publish the pricing, and show our scoring.
            </p>
            <div className="pt-6 text-[14px] leading-[20px] text-text-disabled">
              <p>18904 Longhouse Pl, Leesburg, VA 20176</p>
              <p className="pt-1">
                <a href="tel:+15715712180" className="hover:text-white">
                  (571) 571-2180
                </a>
              </p>
              <p className="pt-1">
                <a href="mailto:info@aichoicedesk.com" className="hover:text-white">
                  info@aichoicedesk.com
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:flex-1 lg:justify-end lg:gap-16">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-[family-name:var(--font-dm-sans)] text-[14px] font-semibold tracking-[0.35px] text-[#f5f9fc]">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3 pt-5 font-[family-name:var(--font-dm-sans)]">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[16px] leading-[24px] whitespace-nowrap text-text-disabled transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start gap-2 border-t-[0.8px] border-[#263347] py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-dm-sans)] text-[14px] text-text-disabled">
            © {year} AI Choice Desk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
