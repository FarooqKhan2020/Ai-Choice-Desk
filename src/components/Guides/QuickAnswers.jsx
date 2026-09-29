'use client';

import { useState } from 'react';
import { faqs } from './guidesData';
import { MinusIcon, PlusIcon } from './Icons';

export default function QuickAnswers() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface-alt pb-[60px] pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-bold leading-tight tracking-[-0.01em] text-text-primary sm:text-[36px]">
            Quick answers from our guides
          </h2>
          <p className="max-w-[400px] font-(family-name:--font-manrope) text-[16px] leading-[26px] text-text-secondary">
            Short answers pulled from the longer guides, for when you just need
            the gist.
          </p>
        </div>

        <div className="mt-[46px] max-w-[820px] border-t border-border-default">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className="border-b border-border-default">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                    aria-controls={`quick-answer-${index}`}
                    className="flex min-h-[71px] w-full items-center justify-between gap-4 px-1 text-left"
                  >
                    <span className="font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
                      {item.question}
                    </span>
                    <span
                      className={`flex size-[26px] shrink-0 items-center justify-center rounded-full ${
                        open
                          ? 'bg-brand-primary text-text-primary'
                          : 'border border-border-default text-text-secondary'
                      }`}
                    >
                      {open ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                </h3>
                {open && (
                  <p
                    id={`quick-answer-${index}`}
                    className="max-w-[600px] px-1 pb-6 font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
