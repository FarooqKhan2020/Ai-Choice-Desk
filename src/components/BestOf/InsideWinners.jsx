import Image from 'next/image';
import Link from 'next/link';
import { insideWinners } from './bestOfData';
import { ArrowIcon } from './Icons';
import { FreshdeskMock, GoodcallMock } from './Mocks';
import ProductLogo from './ProductLogo';

function RankBadge({ rank, className = '' }) {
  return (
    <span
      className={`absolute z-10 inline-flex h-10 items-center rounded-lg bg-[#020a1f] px-3.5 font-(family-name:--font-manrope) text-[13px] font-bold text-white ${className}`}
    >
      #<span className="pl-0.5 text-brand-primary">{rank.slice(1)}</span>
    </span>
  );
}

function Media({ item, index }) {
  const { media } = item;

  if (media.type === 'image') {
    // The artwork already includes the rank badge, pill, rounded corners and shadow.
    return (
      <div className="-mx-[3.5%]">
        <Image
          src={media.src}
          alt={media.alt}
          width={686}
          height={453}
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <RankBadge
        rank={item.rank}
        className={index === 2 ? '-top-[39px] left-0' : 'left-[3px] top-[3px]'}
      />
      {media.type === 'goodcall-mock' ? <GoodcallMock /> : <FreshdeskMock />}
    </div>
  );
}

function ListBlock({ title, items, kind }) {
  const isPro = kind === 'pro';
  return (
    <div>
      <h4 className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-text-muted">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5 pt-4">
        {items.map((text) => (
          <li
            key={text}
            className="flex items-start gap-2.5 font-(family-name:--font-manrope) text-[13px] leading-[18px] text-text-secondary"
          >
            <span
              className={`w-2.5 shrink-0 text-center font-bold ${isPro ? 'text-brand-primary' : 'text-danger'}`}
              aria-hidden="true"
            >
              {isPro ? '+' : '–'}
            </span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WinnerRow({ item, index }) {
  const mediaOnRight = index === 1;
  const wide = index === 2;
  const isLast = index === insideWinners.length - 1;

  return (
    <article
      className={`grid items-start gap-10 pt-[21px] lg:grid-cols-2 lg:gap-x-[45px] ${
        isLast ? '' : 'border-b border-border-default pb-[50px]'
      }`}
    >
      <div className={mediaOnRight ? 'order-first lg:order-last' : ''}>
        <Media item={item} index={index} />
      </div>

      <div className={mediaOnRight ? 'lg:order-first' : ''}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <ProductLogo src={item.logo} size={52} />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-(family-name:--font-sora) text-[28px] font-semibold leading-none text-text-primary lg:text-[32px]">
                {item.name}
              </h3>
              <span className="rounded-full bg-accent-secondary-light px-3 py-1 font-(family-name:--font-manrope) text-[11px] font-semibold text-text-secondary">
                {item.tag}
              </span>
            </div>
          </div>
          <p className="shrink-0 pt-1 font-(family-name:--font-sora) text-[26px] font-bold leading-none text-text-primary lg:text-[28px]">
            {item.score}
            <span className="pl-1.5 font-(family-name:--font-manrope) text-[14px] font-medium text-text-muted">
              / 10
            </span>
          </p>
        </div>

        <h4 className="pt-6 font-(family-name:--font-manrope) text-[14px] font-bold text-text-primary">
          Why it stands out
        </h4>
        <p
          className={`pt-2 font-(family-name:--font-manrope) text-[15px] leading-6 text-text-secondary ${
            wide ? '' : 'max-w-[540px]'
          }`}
        >
          {item.why}
        </p>

        <div
          className={`mt-8 border-t border-border-default pt-8 ${
            wide ? '' : 'lg:ml-12 lg:max-w-[541px]'
          }`}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <ListBlock title="Pros" items={item.pros} kind="pro" />
            <ListBlock title="Watch out" items={item.watch} kind="watch" />
          </div>
        </div>

        <Link
          href={item.href}
          className="mt-8 inline-flex items-center gap-2 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary transition-colors hover:text-brand-primary"
        >
          Read full review
          <ArrowIcon className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}

export default function InsideWinners() {
  return (
    <section className="bg-[#f5f8fb] pb-[100px] pt-[66px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <h2 className="font-(family-name:--font-sora) text-[36px] font-extrabold leading-none tracking-[-0.02em] text-text-primary lg:text-[44px]">
          Inside the winners.
        </h2>
        <p className="max-w-[520px] pt-4 font-(family-name:--font-manrope) text-[16px] leading-[27px] text-text-secondary">
          What each one is genuinely good at, and the part the marketing page
          leaves out.
        </p>

        <div className="flex flex-col pt-[26px]">
          {insideWinners.map((item, index) => (
            <WinnerRow key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
