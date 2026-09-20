import Image from 'next/image';
import Link from 'next/link';

const useCases = [
  {
    title: 'For small businesses',
    link: '/software/ai-receptionist/small-business',
  },
  {
    title: 'For agencies',
    link: '/software/ai-receptionist/agencies',
  },
  {
    title: 'For professional services',
    link: '/software/ai-receptionist/professional',
  },
  {
    title: 'For high call volume',
    link: '/software/ai-receptionist/high-volume',
  },
  {
    title: 'For appointment-heavy businesses',
    link: '/software/ai-receptionist/appointment',
  },
];

export default function FindRightFit() {
  return (
    <section className="bg-surface-alt py-15">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-(family-name:--font-sora) text-[40px] font-extrabold leading-[1.15] text-text-primary lg:text-[52px]">
              Find the right fit
            </h2>
            <p className="pt-2 font-(family-name:--font-manrope) text-[16px] text-text-primary">
              Which AI receptionist is right for you?
            </p>
          </div>
          <p className="font-(family-name:--font-manrope) text-[14px] text-text-secondary">
            Start with your operating model—not a generic ranking.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-2.5 pt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {useCases.map((useCase, index) => (
            <Link
              key={useCase.title}
              href={useCase.link}
              className="group flex min-h-[237px] flex-col rounded-2xl border border-border-default bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="font-(family-name:--font-manrope) text-[12px] font-semibold text-brand-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="pt-7 font-(family-name:--font-manrope) text-[17px] font-bold leading-6 text-text-primary">
                {useCase.title}
              </h3>
              <p className="pt-3 font-(family-name:--font-manrope) text-[12px] leading-5 text-text-secondary">
                Compare the capabilities and buying questions most relevant to
                this workflow.
              </p>
              <span className="mt-auto flex items-center gap-1.5 pt-4 font-(family-name:--font-manrope) text-[13px] font-semibold text-text-primary">
                Explore options
                <Image
                  src="/AI receptionist/icons/black arrow.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
