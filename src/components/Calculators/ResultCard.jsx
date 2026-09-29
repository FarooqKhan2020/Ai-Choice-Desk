'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCalculator } from './CalculatorProvider';
import { formatNumber, formatUsd } from './calculatorData';

export default function ResultCard() {
  const { inputs, results } = useCalculator();
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const summary = `AI ROI estimate: ${formatUsd(results.savings)} saved per year (${Math.round(results.roi)}% ROI, ${formatNumber(results.hoursSaved)} hrs saved) — ${inputs.team} people, $${inputs.hourly}/hr, ${inputs.hours} hrs/week, ${inputs.gain}% efficiency gain.`;

  const handleSave = () => {
    try {
      window.localStorage.setItem(
        'aicd-roi-estimate',
        JSON.stringify({ inputs, results, savedAt: new Date().toISOString() }),
      );
    } catch {
      // Storage can be unavailable (private mode); the button still confirms.
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`${summary} ${window.location.origin}/calculators`);
      setShared(true);
      window.setTimeout(() => setShared(false), 2000);
    } catch {
      window.prompt('Copy your estimate:', summary);
    }
  };

  return (
    <section className="bg-surface-alt pb-[60px] pt-[60px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="text-center">
          <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
            Your result
          </p>
          <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
            Keep this estimate
          </h2>
          <p className="pt-3 font-(family-name:--font-manrope) text-[16px] text-text-secondary">
            Save or share your result — or head back up to recalculate with
            different numbers.
          </p>
        </div>

        <div className="mx-auto mt-[36px] max-w-[518px] rounded-[28px] border border-border-default bg-white px-6 pb-10 pt-10 shadow-[0_20px_50px_rgba(0,18,41,0.1)] sm:px-10">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-(family-name:--font-manrope) text-[13px] font-semibold text-text-secondary">
              <Image src="/logo/logo-mark.png" alt="" width={20} height={20} className="h-5 w-auto" />
              AI Choice Desk
            </span>
            <span className="rounded-full border border-brand-primary/30 bg-[#dff7f4] px-3 py-1 font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary">
              ROI
            </span>
          </div>

          <h3 className="pt-[22px] font-(family-name:--font-sora) text-[22px] font-bold text-text-primary">
            Your AI ROI estimate
          </h3>
          <p className="pt-3 font-(family-name:--font-sora) text-[44px] font-extrabold leading-none tracking-[-0.02em] text-brand-primary sm:text-[48px]" aria-live="polite">
            {formatUsd(results.savings)}
          </p>

          <dl className="grid gap-3.5 pt-[26px] sm:grid-cols-2">
            <div className="rounded-xl bg-[#f5f8fb] px-4 py-3.5">
              <dt className="font-(family-name:--font-manrope) text-[13px] text-text-secondary">ROI</dt>
              <dd className="pt-1 font-(family-name:--font-sora) text-[18px] font-bold text-text-primary">
                {Math.round(results.roi)}%
              </dd>
            </div>
            <div className="rounded-xl bg-[#f5f8fb] px-4 py-3.5">
              <dt className="font-(family-name:--font-manrope) text-[13px] text-text-secondary">Time saved</dt>
              <dd className="pt-1 font-(family-name:--font-sora) text-[18px] font-bold text-text-primary">
                {formatNumber(results.hoursSaved)} hrs
              </dd>
            </div>
          </dl>

          <p className="mt-[22px] border-t border-border-default pt-[26px] font-(family-name:--font-manrope) text-[13px] leading-[21px] text-text-secondary">
            Based on {inputs.team} people, ${inputs.hourly}/hr, {inputs.hours}{' '}
            hrs/week on repetitive tasks, {inputs.gain}% efficiency gain.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-[26px]">
            <button
              type="button"
              onClick={handleSave}
              className="h-11 flex-1 rounded-full bg-[#001229] px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-white transition-colors hover:bg-navy-800"
            >
              {saved ? 'Saved ✓' : 'Save Result'}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="h-11 flex-1 rounded-full border border-brand-primary/30 bg-[#dff7f4] px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-brand-primary transition-colors hover:bg-[#c9f2ed]"
            >
              {shared ? 'Copied ✓' : 'Share Result'}
            </button>
            <Link
              href="#roi-calculator"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-border-default px-6 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary transition-colors hover:border-text-primary"
            >
              Recalculate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
