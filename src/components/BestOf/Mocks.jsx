import { logos } from './bestOfData';
import ProductLogo from './ProductLogo';

const skeleton = 'rounded-full bg-[#e8f1f6]';

export function SupportMock() {
  return (
    <div className="m-5 mb-0 rounded-lg bg-[#f4f8fb] p-4" aria-hidden="true">
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-[#d8e2ea]" />
        <span className="size-1.5 rounded-full bg-[#d8e2ea]" />
        <span className="size-1.5 rounded-full bg-[#d8e2ea]" />
        <span className="ml-3 h-3.5 flex-1 rounded-sm bg-[#e4ecf6]" />
      </div>
      <div className="mt-3 h-[3px] bg-brand-primary" />
      <div className="mt-2 grid grid-cols-3 gap-2">
        <span className="h-11 rounded-md border border-brand-primary/25 bg-brand-primary/15" />
        <span className="h-11 rounded-md border border-border-default bg-[#eef3f8]" />
        <span className="h-11 rounded-md border border-border-default bg-[#eef3f8]" />
      </div>
      <div className="mt-2 h-2.5 rounded-sm bg-[#e4ecf6]" />
      <div className="mt-1.5 h-2.5 rounded-sm bg-[#e4ecf6]" />
    </div>
  );
}

const leadBars = [
  { h: 24, on: false },
  { h: 34, on: false },
  { h: 28, on: false },
  { h: 44, on: false },
  { h: 40, on: false },
  { h: 58, on: true },
  { h: 66, on: true },
];

export function LeadsMock() {
  return (
    <div
      className="m-5 mb-0 rounded-xl border border-border-default bg-white px-4 pb-4 pt-5"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
          Qualified leads
        </span>
        <span className="font-(family-name:--font-manrope) text-[15px] font-bold text-text-primary">
          +38%
        </span>
      </div>
      <div className="flex h-[70px] items-end gap-2 pt-3">
        {leadBars.map((bar, index) => (
          <span
            key={index}
            style={{ height: bar.h }}
            className={`flex-1 rounded-sm ${bar.on ? 'bg-brand-primary' : 'bg-[#e9f0fc]'}`}
          />
        ))}
      </div>
    </div>
  );
}

const goodcallBars = [
  { h: 26, on: false },
  { h: 38, on: false },
  { h: 32, on: false },
  { h: 48, on: false },
  { h: 60, on: true },
  { h: 36, on: false },
  { h: 66, on: true },
  { h: 46, on: false },
];

export function GoodcallMock() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl border border-border-default bg-white"
      aria-hidden="true"
    >
      <div className="bg-[#eef3f8] px-4 py-3.5">
        <div className="h-4 rounded-sm bg-[#e1e9f3]" />
      </div>
      <div className="px-8 pb-8 pt-5">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-md bg-[#0fb5a8] font-(family-name:--font-manrope) text-[11px] font-bold text-white">
            Gc
          </span>
          <span className={`h-2 w-28 ${skeleton}`} />
          <span className="ml-auto rounded-full border border-brand-primary/50 bg-brand-primary/10 px-3 py-0.5 font-(family-name:--font-manrope) text-[11px] font-semibold text-brand-primary">
            Live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-5">
          <span className="h-11 rounded-md bg-brand-primary" />
          <span className="h-11 rounded-md border border-border-default bg-[#f1f5f9]" />
          <span className="h-11 rounded-md border border-border-default bg-[#f1f5f9]" />
        </div>
        <div className="flex h-[70px] items-end gap-2.5 pt-5">
          {goodcallBars.map((bar, index) => (
            <span
              key={index}
              style={{ height: bar.h }}
              className={`flex-1 rounded-sm ${bar.on ? 'bg-brand-primary' : 'bg-[#e9f0fc]'}`}
            />
          ))}
        </div>
        <div className="space-y-2.5 pt-5">
          <div className="h-2.5 w-[88%] rounded-sm bg-[#e8f1f6]" />
          <div className="h-2.5 w-[70%] rounded-sm bg-[#e8f1f6]" />
          <div className="h-2.5 w-[36%] rounded-sm bg-gradient-to-r from-brand-primary to-brand-primary/20" />
        </div>
      </div>
    </div>
  );
}

export function FreshdeskMock() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl border border-border-default bg-white"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 bg-[#eef3f8] px-4 py-3">
        <span className="size-1.5 rounded-full bg-[#d8e2ea]" />
        <span className="size-1.5 rounded-full bg-[#d8e2ea]" />
        <span className="size-1.5 rounded-full bg-[#d8e2ea]" />
        <span className="ml-3 h-4 flex-1 rounded-sm bg-[#e1e9f3]" />
      </div>
      <div className="flex">
        <div className="hidden w-[78px] shrink-0 space-y-3 bg-[#f4f8fb] px-4 py-5 sm:block">
          <div className="h-2 w-10 rounded-full bg-brand-primary" />
          <div className="h-2 w-6 rounded-full bg-[#e4ecf6]" />
        </div>
        <div className="flex-1 px-5 pb-6 pt-4">
          <div className="flex items-center gap-3">
            <ProductLogo src={logos.freshdesk} size={32} />
            <span className={`h-2 w-32 ${skeleton}`} />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-md border border-border-default bg-white px-3 pb-3 pt-2.5">
              <div className={`h-1.5 w-14 ${skeleton}`} />
              <p className="pt-3 font-(family-name:--font-manrope) text-[16px] font-bold text-text-primary">
                41%
              </p>
            </div>
            <div className="rounded-md border border-brand-primary/20 bg-brand-primary/10 px-3 pb-3 pt-2.5">
              <div className="h-1.5 w-14 rounded-full bg-brand-primary/20" />
              <p className="pt-3 font-(family-name:--font-manrope) text-[16px] font-semibold text-brand-primary">
                2m 10s
              </p>
            </div>
          </div>
          <div className="space-y-2.5 pt-4">
            <div className="h-2 rounded-sm bg-[#e8f1f6]" />
            <div className="h-2 rounded-sm bg-[#e8f1f6]" />
            <div className="h-2.5 rounded-sm bg-gradient-to-r from-brand-primary to-brand-primary/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
