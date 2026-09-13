import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tools = [
  { key: 'chatgpt', name: 'ChatGPT', logo: '/ai-tool-logos/gpt.png' },
  { key: 'claude', name: 'Claude', logo: '/ai-tool-logos/claude.png', bestOverall: true },
  { key: 'gemini', name: 'Gemini', logo: '/ai-tool-logos/gemini.png' },
];

const rows = [
  {
    label: 'Research & reasoning',
    values: { chatgpt: 9.4, claude: 9.2, gemini: 8.8 },
  },
  {
    label: 'Long-form writing',
    values: { chatgpt: 8.9, claude: 9.5, gemini: 8.4 },
  },
  {
    label: 'Everyday speed',
    values: { chatgpt: 9.3, claude: 8.7, gemini: 9.6 },
  },
  {
    label: 'Entry price',
    values: { chatgpt: '$20', claude: '$20', gemini: '$20' },
    isPrice: true,
  },
];

function getWinner(values) {
  return Object.entries(values).sort((a, b) => b[1] - a[1])[0][0];
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadToHead() {
  return (
    <section className="px-6 py-14 sm:px-10 lg:px-15 lg:py-15">
      <div className="mx-auto grid max-w-300 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left */}
        <div>
          <p className="font-(family-name:--font-geist-mono) text-[12px] font-medium uppercase tracking-[3px] text-text-secondary">
            Head-to-head · 03
          </p>
          <h2 className="pt-4 font-(family-name:--font-sora) text-4xl font-extrabold leading-[1.15] text-text-primary sm:text-5xl">
            The same task.
            <br />
            Three tools.
            <br />
            <span className="text-teal-600">
              One clearer
              <br />
              choice.
            </span>
          </h2>
          <p className="max-w-sm pt-5 font-(family-name:--font-manrope) text-[16px] leading-7 text-text-secondary">
            Our most-read comparison, scored under identical test conditions.
          </p>
        </div>

        {/* Right: comparison table */}
        <div className="overflow-hidden rounded-2xl border border-border-default">
          <div className="grid grid-cols-4">
            <div className="flex items-end bg-state-hover px-5 py-4">
              <span className="font-(family-name:--font-manrope) text-[13px] text-text-secondary">
                What matters
              </span>
            </div>
            {tools.map((tool) => (
              <div
                key={tool.key}
                className={`relative flex flex-col items-center gap-2 px-4 pb-4 pt-2 ${
                  tool.bestOverall ? 'bg-accent-secondary-light' : 'bg-state-hover'
                }`}
              >
                {tool.bestOverall && (
                  <span className="mb-1 w-full bg-accent-secondary py-1 text-center font-(family-name:--font-manrope) text-[10px] font-bold uppercase tracking-[1px] text-text-on-dark">
                    Best overall
                  </span>
                )}
                <div className="h-9 w-9 overflow-hidden rounded-lg">
                  <Image src={tool.logo} alt={tool.name} width={36} height={36} />
                </div>
                <span className="font-(family-name:--font-sora) text-[15px] font-bold text-text-primary">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {rows.map((row) => {
            const winner = row.isPrice ? null : getWinner(row.values);
            return (
              <div key={row.label} className="grid grid-cols-4 border-t border-border-default">
                <div
                  className={`flex items-center px-5 py-4 font-(family-name:--font-manrope) text-[14px] text-text-secondary ${
                    winner ? 'bg-state-hover' : ''
                  }`}
                >
                  {row.label}
                </div>
                {tools.map((tool) => (
                  <div
                    key={tool.key}
                    className={`flex items-center justify-center px-4 py-4 font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary ${
                      tool.bestOverall
                        ? 'bg-accent-secondary-light'
                        : winner === tool.key
                          ? 'bg-state-hover'
                          : ''
                    }`}
                  >
                    {row.values[tool.key]}
                  </div>
                ))}
              </div>
            );
          })}

          <div className="flex flex-col items-start justify-between gap-4 border-t border-border-default bg-accent-secondary-light px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-(family-name:--font-geist-mono) text-[11px] font-bold uppercase tracking-[1.5px] text-teal-600">
                Our verdict
              </p>
              <p className="pt-1 font-(family-name:--font-manrope) text-[15px] font-medium text-text-primary">
                Claude wins for thoughtful work. ChatGPT is the best all-rounder.
              </p>
            </div>
            <Link
              href="/compare/chatgpt-vs-claude-vs-gemini"
              className="flex shrink-0 items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover"
            >
              Open full comparison
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadToHead;
