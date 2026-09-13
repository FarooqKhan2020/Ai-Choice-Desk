'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Software', href: '/software', hasDropdown: true },
  { name: 'Compare', href: '/compare' },
  { name: 'Best Of', href: '/best-of' },
  { name: 'Research', href: '/research' },
  { name: 'Guides', href: '/guides' },
  { name: 'Calculators', href: '/calculators' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-[0.8px] border-[rgba(11,18,32,0.06)] bg-surface-nav/95 backdrop-blur-[14px]">
      <nav className="flex w-full flex-col items-center py-[18px]">
        <div className="flex w-full max-w-[1200px] items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-[10px]">
            <Image
              src="/logo/logo-mark.png"
              alt="AI Choice Desk"
              width={37}
              height={34}
              className="h-[34px] w-auto"
              priority
            />
            <span className="font-[family-name:var(--font-space-grotesk)] text-[18px] font-bold leading-[19.8px] whitespace-nowrap">
              <span className="text-[#0b1220]">AI CHOICE</span>
              <span className="text-[#108983]"> DESK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-[6px] rounded-lg px-2 py-[6px] font-[family-name:var(--font-inter)] text-[14px] font-semibold text-text-primary transition-colors hover:text-accent-secondary"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5.25L7 8.75L10.5 5.25"
                        stroke="currentColor"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side - Desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="h-6 w-px bg-white/20" />
            <Link
              href="/for-vendors"
              className="font-[family-name:var(--font-inter)] text-[14px] font-semibold text-text-muted transition-colors hover:text-text-primary"
            >
              For vendors
            </Link>
            <Link
              href="#subscribe"
              className="relative flex w-[112px] items-center justify-center overflow-hidden rounded-full bg-accent-secondary px-5 py-[10px] font-[family-name:var(--font-inter)] text-[14px] font-semibold whitespace-nowrap text-text-on-dark transition-colors hover:bg-accent-secondary-hover"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-black/[0.03] transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 w-full max-w-[1200px] border-t border-[rgba(11,18,32,0.06)] px-6 py-4 lg:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block font-[family-name:var(--font-inter)] text-[14px] font-semibold text-text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/for-vendors"
                  className="block font-[family-name:var(--font-inter)] text-[14px] font-semibold text-text-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For vendors
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="#subscribe"
                  className="block w-full rounded-full bg-accent-secondary px-5 py-[10px] text-center font-[family-name:var(--font-inter)] text-[14px] font-semibold text-text-on-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
