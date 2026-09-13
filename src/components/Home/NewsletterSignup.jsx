'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="px-6 py-14 sm:px-10 lg:px-15">
      <div
        className="relative mx-auto max-w-300 overflow-hidden rounded-2xl border border-border-default"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(0,109,226,0.06) 0%, rgba(0,109,226,0) 60%), linear-gradient(180deg, #ffffff 0%, #f5f9fc 100%)',
        }}
      >
        <div className="h-0.75 w-full bg-linear-to-r from-accent-secondary to-teal-600" />

        {/* Decorative sparkle */}
        <div className="pointer-events-none absolute left-10 top-1/2 hidden h-20 w-20 -translate-y-1/2 sm:block">
          <Image src="/hero/sparkle.svg" alt="" fill />
        </div>

        {/* Decorative dotted arcs */}
        <div className="pointer-events-none absolute -right-12 top-0 hidden h-full w-56 opacity-70 lg:block">
          <Image src="/hero/dotted-arc.svg" alt="" fill className="object-cover object-left" />
        </div>

        <div className="relative mx-auto max-w-xl px-6 py-14 text-center sm:px-10">
          <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-text-muted">
            Every Thursday
          </p>
          <h2 className="pt-3 font-(family-name:--font-sora) text-3xl font-extrabold text-text-primary sm:text-4xl">
            The Choice Desk
          </h2>
          <p className="pt-4 font-(family-name:--font-manrope) text-[16px] leading-7 text-text-secondary">
            One email a week: what we tested, what changed price, and what is actually
            worth buying.
          </p>

          {submitted ? (
            <p className="mt-8 font-(family-name:--font-manrope) text-[15px] font-semibold text-teal-600">
              You&apos;re on the list. First issue lands Thursday.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full max-w-xs rounded-full border border-border-default bg-bg-input px-5 py-3 font-(family-name:--font-manrope) text-[14px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-secondary/30 sm:w-64"
              />
              <button
                type="submit"
                className="w-full max-w-xs rounded-full bg-accent-secondary px-7 py-3 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-dark transition-colors hover:bg-accent-secondary-hover sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="pt-4 font-(family-name:--font-manrope) text-[13px] text-text-muted">
            No spam. Unsubscribe in one click.{' '}
            <Link href="/privacy-policy" className="underline hover:text-text-primary">
              Privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;
