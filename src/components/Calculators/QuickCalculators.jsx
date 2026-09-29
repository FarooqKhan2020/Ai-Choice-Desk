import Link from 'next/link';
import { quickCalculators as q } from './calculatorData';
import { CalcIcon } from './Icons';

const card =
  'group block rounded-2xl border border-border-default bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(0,18,41,0.08)]';

function Tag({ children }) {
  return (
    <span className="shrink-0 rounded-[10px] border border-brand-primary/40 bg-[#dff7f4] px-3 py-1.5 font-(family-name:--font-manrope) text-[13px] font-semibold text-brand-primary">
      {children}
    </span>
  );
}

function IconTile({ name }) {
  return (
    <span className="flex size-[38px] items-center justify-center rounded-[10px] border border-brand-primary/40 bg-[#dff7f4] text-brand-primary">
      <CalcIcon name={name} className="h-[17px] w-[17px]" />
    </span>
  );
}

export default function QuickCalculators() {
  return (
    <section className="bg-[#f5f8fb] pb-[60px] pt-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-(family-name:--font-manrope) text-[13px] font-semibold uppercase tracking-[1.3px] text-brand-primary">
              More tools
            </p>
            <h2 className="pt-3 font-(family-name:--font-sora) text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary sm:text-[36px]">
              Quick calculators
            </h2>
          </div>
          <p className="max-w-[440px] font-(family-name:--font-manrope) text-[16px] leading-6 text-text-secondary lg:pt-6">
            Shorter, focused tools for specific questions — most take under two
            minutes.
          </p>
        </div>

        <div className="grid gap-3 pt-[52px] lg:grid-cols-[432fr_429fr_432fr]">
          <Link href={q.cost.href} className={`${card} flex min-h-[202px] flex-col px-[22px] pb-6 pt-[22px]`}>
            <IconTile name={q.cost.icon} />
            <h3 className="pt-[22px] font-(family-name:--font-sora) text-[18px] font-bold text-text-primary">
              {q.cost.title}
            </h3>
            <p className="max-w-[370px] pt-2.5 font-(family-name:--font-manrope) text-[15px] leading-[22px] text-text-secondary">
              {q.cost.description}
            </p>
            <span className="mt-auto pt-3 font-(family-name:--font-manrope) text-[15px] font-semibold text-brand-primary">
              Calculate
            </span>
          </Link>

          <Link href={q.time.href} className={`${card} flex min-h-[202px] items-center justify-between gap-4 px-[20px]`}>
            <span>
              <span className="block font-(family-name:--font-sora) text-[16px] font-bold text-text-primary">
                {q.time.title}
              </span>
              <span className="block pt-1.5 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
                {q.time.description}
              </span>
            </span>
            <Tag>{q.time.tag}</Tag>
          </Link>

          <Link href={q.productivity.href} className={`${card} flex min-h-[202px] flex-col justify-center px-[22px]`}>
            <span className="font-(family-name:--font-sora) text-[34px] font-extrabold leading-none tracking-[-0.02em] text-text-primary">
              {q.productivity.stat}
            </span>
            <span className="pt-3 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
              {q.productivity.statLabel}
            </span>
            <span className="pt-6 font-(family-name:--font-sora) text-[17px] font-bold text-text-primary">
              {q.productivity.title}
            </span>
            <span className="pt-2.5 font-(family-name:--font-manrope) text-[15px] font-semibold text-brand-primary">
              Calculate →
            </span>
          </Link>
        </div>

        <div className="grid gap-3 pt-3 lg:grid-cols-[631fr_677fr]">
          <div className="flex flex-col gap-[13px] lg:mt-[11px]">
            {[q.adoption, q.software].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`${card} flex min-h-[73px] items-center justify-between gap-4 px-[20px] py-3`}
              >
                <span>
                  <span className="block font-(family-name:--font-sora) text-[16px] font-bold text-text-primary">
                    {item.title}
                  </span>
                  <span className="block pt-1 font-(family-name:--font-manrope) text-[14px] text-text-secondary">
                    {item.description}
                  </span>
                </span>
                <Tag>{item.tag}</Tag>
              </Link>
            ))}
          </div>

          <Link href={q.roi.href} className={`${card} flex min-h-[181px] flex-col px-[22px] pb-6 pt-[22px]`}>
            <IconTile name={q.roi.icon} />
            <h3 className="pt-[22px] font-(family-name:--font-sora) text-[18px] font-bold text-text-primary">
              {q.roi.title}
            </h3>
            <p className="pt-2.5 font-(family-name:--font-manrope) text-[15px] text-text-secondary">
              {q.roi.description}
            </p>
            <span className="mt-auto pt-3 font-(family-name:--font-manrope) text-[15px] font-semibold text-brand-primary">
              Calculate
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
