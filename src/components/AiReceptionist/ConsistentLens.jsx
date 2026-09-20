import Image from 'next/image';

const features = [
  {
    icon: '/AI receptionist/icons/call quality.svg',
    title: 'Call quality',
    description: 'Natural conversation, accuracy, and handling interruptions.',
  },
  {
    icon: '/AI receptionist/icons/appointment handling.svg',
    title: 'Appointment handling',
    description: 'Booking, rescheduling, and calendar context.',
  },
  {
    icon: '/AI receptionist/icons/human handoff.svg',
    title: 'Human handoff',
    description: 'Clear transfer rules when automation reaches its limit.',
  },
  {
    icon: '/AI receptionist/icons/pricing transparency.svg',
    title: 'Pricing transparency',
    description: 'Predictable costs based on realistic call volume.',
  },
  {
    icon: '/AI receptionist/icons/Resultreliability.svg',
    title: 'Reliability',
    description: 'Consistent routing, uptime, and operational safeguards.',
  },
  {
    icon: '/AI receptionist/icons/setup experience.svg',
    title: 'Setup experience',
    description: 'Time to launch, train, test, and maintain the agent.',
  },
];

export default function ConsistentLens() {
  return (
    <section
      className="relative overflow-hidden py-15"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #08112a 0%, #0a1642 55%, #003e4d 100%)',
      }}
    >
      {/* Decorative dashed arcs */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 hidden h-[200px] w-[240px] lg:block"
        viewBox="0 0 240 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 8 L232 200"
          stroke="#00CFC1"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <path
          d="M0 92 L140 200"
          stroke="#00CFC1"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1440px] items-start gap-10 px-6 lg:grid-cols-2 lg:px-15 xl:grid-cols-[minmax(0,1fr)_minmax(0,760px)]">
        {/* Left content */}
        <div className="max-w-[480px] pt-1">
          <p className="font-(family-name:--font-manrope) text-[15px] text-brand-primary">
            How we evaluate
          </p>
          <h2 className="pt-6 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.15] text-text-on-dark xl:text-[40px] min-[1400px]:text-[52px]">
            A consistent lens
            <br className="hidden lg:block" /> for every product.
          </h2>
          <p className="pt-6 font-(family-name:--font-manrope) text-[14px] leading-6 text-white">
            We review the factors that shape day-to-day performance and
            purchasing risk. Research status is shown without turning
            incomplete evidence into a score.
          </p>
        </div>

        {/* Criteria card */}
        <div className="grid overflow-hidden rounded-[20px] bg-[#021428]/90 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col p-5 ${
                index % 2 === 1 ? 'sm:border-l sm:border-white/5' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <Image
                  src={feature.icon}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                <span className="font-(family-name:--font-manrope) text-[12px] text-text-on-dark-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="pt-5 font-(family-name:--font-manrope) text-[15px] font-bold text-text-on-dark">
                {feature.title}
              </h3>
              <p className="pt-2 font-(family-name:--font-manrope) text-[12px] leading-[18px] text-text-on-dark-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
