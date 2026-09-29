import { topics } from './researchData';

const CENTER = { x: 720, y: 267 };

function TopicCard({ topic, className = '', style }) {
  return (
    <div
      style={style}
      className={`group flex w-[196px] items-start justify-between gap-2 rounded-xl border border-border-default bg-white px-4 py-[17px] transition-all hover:-translate-y-0.5 hover:border-brand-primary/60 hover:shadow-[0_10px_24px_rgba(0,18,41,0.08)] ${className}`}
    >
      <span className="font-(family-name:--font-manrope) text-[17px] font-bold leading-5 text-text-primary">
        {topic.name}
      </span>
      <span className="pt-0.5 font-(family-name:--font-manrope) text-[12px] font-semibold leading-[18px] text-brand-primary">
        {topic.count} studies
      </span>
    </div>
  );
}

export default function TopicMap() {
  return (
    <section className="relative overflow-hidden bg-[#f0f5f9] pt-[68px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-15">
        <div>
          <p className="font-(family-name:--font-manrope) text-[11px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            Topic map
          </p>
          <h2 className="pt-3 font-(family-name:--font-sora) text-[36px] font-extrabold leading-[1.02] tracking-[-0.02em] text-text-primary lg:text-[44px]">
            Start anywhere.
            <br />
            Everything connects back.
          </h2>
        </div>
        <p className="max-w-[380px] font-(family-name:--font-manrope) text-[15px] leading-[27px] text-text-secondary lg:pt-7">
          Eight research tracks feeding one question: how software actually earns
          its place inside a small business. Hover a track to see what’s live.
        </p>
      </div>

      {/* Compact layout */}
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 min-[1240px]:hidden">
        <div className="mx-auto mb-6 flex size-[180px] flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,#0b3a5f_0%,#001229_75%)] text-center text-white">
          <span className="font-(family-name:--font-sora) text-[18px] font-bold leading-tight">
            Software
            <br />
            intelligence
          </span>
          <span className="pt-1.5 font-(family-name:--font-manrope) text-[9px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            Central index
          </span>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-4">
          {topics.map((topic) => (
            <TopicCard key={topic.name} topic={topic} />
          ))}
        </div>
      </div>

      {/* Orbit layout */}
      <div className="relative mx-auto mt-[82px] hidden h-[540px] w-[1440px] max-w-none min-[1240px]:block" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <svg
          className="absolute inset-0"
          width="1440"
          height="540"
          viewBox="0 0 1440 540"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx={CENTER.x} cy={CENTER.y} rx="515" ry="232" stroke="#b8c9d6" strokeOpacity="0.6" strokeDasharray="2 5" />
          <ellipse cx={CENTER.x} cy={CENTER.y} rx="331" ry="145" stroke="#b8c9d6" strokeOpacity="0.6" strokeDasharray="2 5" />
          {topics.map((topic) => (
            <line
              key={topic.name}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={topic.x}
              y2={topic.y}
              stroke="#d4dee7"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Halo + core */}
        <div
          className="absolute size-[290px] rounded-full bg-brand-primary/[0.07]"
          style={{ left: CENTER.x - 145, top: CENTER.y - 145 }}
          aria-hidden="true"
        />
        <div
          className="absolute size-[250px] rounded-full bg-brand-primary/[0.09]"
          style={{ left: CENTER.x - 125, top: CENTER.y - 125 }}
          aria-hidden="true"
        />
        <div
          className="absolute flex size-[210px] flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_15%,#0b4a78_0%,#062a4a_40%,#001229_85%)] text-center text-white"
          style={{ left: CENTER.x - 105, top: CENTER.y - 105 }}
        >
          <span className="font-(family-name:--font-sora) text-[20px] font-bold leading-[1.15]">
            Software
            <br />
            intelligence
          </span>
          <span className="pt-2 font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[1.5px] text-brand-primary">
            Central index
          </span>
        </div>

        {topics.map((topic) => (
          <TopicCard
            key={topic.name}
            topic={topic}
            className="absolute"
            style={{ left: topic.x - 98, top: topic.y - 27 }}
          />
        ))}

        {/* Decorative dashed arcs */}
        <svg
          className="absolute bottom-0 right-0"
          width="220"
          height="200"
          viewBox="0 0 220 200"
          fill="none"
          aria-hidden="true"
          style={{ bottom: -70 }}
        >
          <path d="M214 30C180 60 126 140 118 240" stroke="#00CFC1" strokeWidth="1.5" strokeDasharray="3 6" strokeLinecap="round" />
          <path d="M290 -10C240 20 200 100 186 240" stroke="#00CFC1" strokeWidth="1.5" strokeDasharray="3 6" strokeLinecap="round" />
        </svg>
      </div>
      <div className="hidden h-[97px] min-[1240px]:block" />
    </section>
  );
}
