import Image from 'next/image';

const description =
  'Use real workflows and likely call volumes, then confirm what happens at the edge cases.';

const guides = [
  { title: 'Understand the pricing model', description },
  { title: 'Test the AI with difficult calls', description },
  { title: 'Check human handoff', description },
  { title: 'Review integrations', description },
  { title: 'Test appointment handling', description },
];

const expectedFeatures = [
  '24/7 call answering',
  'Spam screening',
  'Appointment booking',
  'Call transcripts',
  'Lead qualification',
  'Analytics',
  'Call transfer',
  'Human handoff',
];

export default function BuyingGuide() {
  return (
    <section className="bg-white py-15">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-2 lg:px-15 xl:grid-cols-[576px_660px] xl:justify-between">
        {/* Left: Buying guide */}
        <div>
          <h2 className="font-(family-name:--font-sora) text-[24px] font-bold leading-8 text-text-primary">
            Buying guide
          </h2>
          <p className="pt-2 font-(family-name:--font-manrope) text-[16px] text-text-primary">
            What to check before you buy
          </p>

          <ol className="pt-10">
            {guides.map((guide, index) => (
              <li
                key={guide.title}
                className="border-b border-border-default py-5 last:border-b-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-(family-name:--font-manrope) text-[15px] font-bold text-brand-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary">
                    {guide.title}
                  </h3>
                </div>
                <p className="pl-8 pt-2 font-(family-name:--font-manrope) text-[13px] leading-5 text-text-secondary">
                  {guide.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: Expected as standard */}
        <div>
          <h2 className="font-(family-name:--font-sora) text-[24px] font-bold leading-8 text-text-primary">
            Expected as standard
          </h2>
          <p className="pt-2 font-(family-name:--font-manrope) text-[16px] text-text-primary">
            The baseline feature set
          </p>

          <ul className="grid gap-2.5 pt-10 sm:grid-cols-2">
            {expectedFeatures.map((feature) => (
              <li
                key={feature}
                className="flex h-20 items-center gap-3 rounded-lg border border-border-default bg-[#f5f8fb] px-4"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white">
                  <Image
                    src="/AI receptionist/icons/tick.svg"
                    alt=""
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                </span>
                <span className="font-(family-name:--font-manrope) text-[15px] font-semibold text-text-primary">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
