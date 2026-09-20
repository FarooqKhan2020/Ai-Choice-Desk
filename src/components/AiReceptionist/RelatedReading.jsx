'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    tag: 'Research',
    title: 'Best AI receptionists for small business in 2026',
    meta: 'Aug 29, 2026',
    link: '/research/best-ai-receptionists-small-business',
  },
  {
    tag: 'Guide',
    title: 'How to test an AI receptionist before you commit',
    meta: 'Research data',
    link: '/guides/test-ai-receptionist',
  },
  {
    tag: 'Methodology',
    title: 'What we look for in voice AI software',
    meta: 'Research data',
    link: '/research/rating-ai-software',
  },
];

const commonQuestions = [
  {
    question: 'Can an AI receptionist replace a human receptionist entirely?',
    answer:
      'Not always. It can handle routine calls around the clock, while sensitive, complex, or unusual conversations may still need a person.',
  },
  {
    question: 'How much does an AI receptionist cost?',
    answer:
      'Pricing varies widely from $29/mo to $1,500+/mo depending on call volume, features, and whether you want hybrid human support.',
  },
  {
    question: 'Will callers know they are talking to AI?',
    answer:
      'Most products let you decide. Some businesses prefer transparency (announcing AI), while others configure the system to sound natural without explicit disclosure.',
  },
];

export default function RelatedReading() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f5f8fb] pb-15 pt-14">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-2 lg:px-15 xl:grid-cols-[minmax(0,662fr)_minmax(0,628fr)] xl:gap-[30px]">
        {/* Left: Common questions */}
        <div className="lg:pt-12">
          <h2 className="font-(family-name:--font-sora) text-[24px] font-bold leading-8 text-text-primary">
            Common questions
          </h2>
          <p className="pt-2 font-(family-name:--font-manrope) text-[16px] text-text-primary">
            Before you shortlist
          </p>

          <div className="pt-8">
            {commonQuestions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="relative mr-[34px] border-t border-border-default last:border-b"
                >
                  <h3 className="flex min-h-[68px] items-center font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary">
                    {item.question}
                  </h3>
                  {isOpen && (
                    <p
                      id={`faq-answer-${index}`}
                      className="pb-5 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-secondary"
                    >
                      {item.answer}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    aria-label={item.question}
                    className="absolute -right-[34px] top-[34px] flex size-7 -translate-y-1/2 items-center justify-center rounded-md border border-border-default bg-white"
                  >
                    {isOpen ? (
                      <span className="h-[1.5px] w-[7px] bg-brand-primary" />
                    ) : (
                      <Image
                        src="/AI receptionist/icons/plus.svg"
                        alt=""
                        width={7}
                        height={7}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Related reading */}
        <div>
          <h2 className="font-(family-name:--font-sora) text-[24px] font-bold leading-8 text-text-primary">
            Related reading
          </h2>

          <div className="flex flex-col gap-3 pt-5">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.link}
                className="group flex min-h-32 flex-col justify-between gap-4 rounded-xl border border-border-default bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div>
                  <p className="font-(family-name:--font-manrope) text-[10px] font-semibold uppercase text-brand-primary">
                    {article.tag}
                  </p>
                  <h3 className="pt-3 font-(family-name:--font-manrope) text-[17px] font-bold leading-6 text-text-primary">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-(family-name:--font-manrope) text-[12px] text-text-disabled">
                    {article.meta}
                  </span>
                  <Image
                    src="/AI receptionist/icons/muted arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
