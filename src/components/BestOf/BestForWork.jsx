import Image from 'next/image';
import Link from 'next/link';
import { bestForCards } from './bestOfData';
import { ArrowIcon } from './Icons';
import { LeadsMock, SupportMock } from './Mocks';
import ProductLogo from './ProductLogo';

function CardMedia({ media }) {
  if (!media) return null;
  if (media.type === 'image') {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        width={427}
        height={132}
        className="h-[132px] w-full object-cover"
      />
    );
  }
  if (media.type === 'support-mock') return <SupportMock />;
  if (media.type === 'leads-mock') return <LeadsMock />;
  return null;
}

function BestForCard({ card }) {
  const { winner } = card;
  const hasBleedMedia = card.media?.type === 'image';

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border-default bg-white">
      <CardMedia media={card.media} />

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-text-muted">
          Best for
        </p>
        <h3 className={`font-(family-name:--font-manrope) text-[20px] font-semibold text-text-primary ${hasBleedMedia ? 'pt-3' : 'pt-4'}`}>
          {card.title}
        </h3>
        <p className="pt-3 font-(family-name:--font-manrope) text-[14px] leading-5 text-text-secondary">
          {card.description}
        </p>

        {card.bars && (
          <div className="flex flex-col gap-4 pt-5">
            {card.bars.map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between font-(family-name:--font-manrope) text-[14px] text-text-primary">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.score}</span>
                </div>
                <div className="mt-2 h-[3px] rounded-full bg-[#dfe7ee]">
                  <div
                    className="h-full rounded-full bg-brand-primary"
                    style={{ width: `${bar.fill}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between rounded-lg bg-accent-secondary-light px-3.5 py-3">
            <div className="flex items-center gap-3">
              <ProductLogo src={winner.logo} size={32} className="rounded-md" />
              <div>
                <p className="font-(family-name:--font-manrope) text-[9px] font-bold uppercase tracking-[1px] text-brand-primary">
                  Winner
                </p>
                <p className="font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary">
                  {winner.name}
                </p>
              </div>
            </div>
            <p className="font-(family-name:--font-manrope) text-[20px] font-bold text-text-primary">
              {winner.score}
              <span className="pl-0.5 text-[10px] font-medium text-text-muted">/10</span>
            </p>
          </div>

          {card.quote && (
            <p className="mt-3 border-l-2 border-brand-primary/50 pl-3 font-(family-name:--font-manrope) text-[14px] leading-5 text-text-secondary">
              {card.quote}
            </p>
          )}
        </div>
      </div>

      <Link
        href="/best-of"
        className="flex items-center gap-2 border-t border-border-default px-5 py-4 font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary transition-colors hover:text-brand-primary"
      >
        View recommendation
        <ArrowIcon className="h-4 w-4" strokeWidth={1.8} />
      </Link>
    </article>
  );
}

export default function BestForWork() {
  return (
    <section className="bg-[#eef4f8] py-15">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <h2 className="pt-2 font-(family-name:--font-sora) text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary sm:text-[40px] lg:text-[44px]">
          Best for the way you work.
        </h2>
        <p className="pt-4 font-(family-name:--font-manrope) text-[16px] text-text-secondary">
          The best software depends on your team, workflow and priorities.
        </p>

        <div className="grid gap-x-5 gap-y-6 pt-9 md:grid-cols-2 lg:grid-cols-3">
          {bestForCards.map((card) => (
            <BestForCard key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
