'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toolList, compareHref } from './compareData';
import { ArrowIcon } from './Icons';

function ToolSelect({ id, label, value, onChange, disabledId }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary"
      >
        {label}
      </label>
      <div className="relative mt-3">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[42px] w-full appearance-none rounded-md border border-border-default bg-white pl-4 pr-10 font-(family-name:--font-manrope) text-[13px] text-text-primary focus:border-brand-primary focus:outline-none"
        >
          {toolList.map((tool) => (
            <option key={tool.id} value={tool.id} disabled={tool.id === disabledId}>
              {tool.name} · {tool.category}
            </option>
          ))}
        </select>
        <Image
          src="/AI receptionist/icons/down arrow.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default function CompareHero({ firstId, secondId }) {
  const router = useRouter();
  const [first, setFirst] = useState(firstId);
  const [second, setSecond] = useState(secondId);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(compareHref(first, second));
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 60% 90% at 0% 100%, #00596b 0%, transparent 70%), linear-gradient(180deg, #040c25 0%, #071a3a 100%)',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-8 lg:px-15">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-(family-name:--font-manrope) text-[11px]">
          <Link href="/" className="text-text-on-dark-muted transition-colors hover:text-white">
            Home
          </Link>
          <span className="text-text-on-dark-muted">›</span>
          <span className="text-text-on-dark">Compare tools</span>
        </nav>

        <p className="pt-7 font-(family-name:--font-manrope) text-[16px] text-brand-primary">
          AI comparison finder
        </p>
        <h1 className="pt-2 font-(family-name:--font-sora) text-[32px] font-extrabold leading-[1.15] text-text-on-dark sm:text-[40px] lg:text-[48px]">
          Compare two AI tools side by side
        </h1>
        <p className="pt-4 font-(family-name:--font-manrope) text-[14px] text-text-on-dark">
          Choose any two tools to compare pricing, ratings, workflow fit,
          strengths, limitations, and our verdict.
        </p>

        {/* Selector */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid items-end gap-5 rounded-md bg-tint-ice p-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.13fr] lg:gap-[60px]"
        >
          <ToolSelect
            id="first-tool"
            label="First tool"
            value={first}
            onChange={setFirst}
            disabledId={second}
          />
          <ToolSelect
            id="second-tool"
            label="Second tool"
            value={second}
            onChange={setSecond}
            disabledId={first}
          />
          <button
            type="submit"
            className="flex h-[42px] items-center justify-center gap-2 rounded-full bg-brand-primary font-(family-name:--font-manrope) text-[13px] font-semibold text-text-on-primary transition-colors hover:bg-brand-primary-hover md:col-span-2 lg:col-span-1"
          >
            Compare
            <ArrowIcon className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
