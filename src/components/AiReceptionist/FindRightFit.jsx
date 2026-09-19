import Link from 'next/link';

export default function FindRightFit() {
  const useCases = [
    {
      tag: 'For small businesses',
      title: 'For small businesses',
      description: 'Compare the capabilities and cost-to-volume fit ideal for smaller businesses with lower call rates.',
      icon: '💼',
      link: '/software/ai-receptionist/small-business',
    },
    {
      tag: 'For agencies',
      title: 'For agencies',
      description: 'Compare the capabilities and cost-fit options ideal for agencies with higher call volumes.',
      icon: '🏢',
      link: '/software/ai-receptionist/agencies',
    },
    {
      tag: 'For professional services',
      title: 'For professional services',
      description: 'Compare the capabilities and cost-fit ideal for professional-service firms.',
      icon: '⚖️',
      link: '/software/ai-receptionist/professional',
    },
    {
      tag: 'For high call volume',
      title: 'For high call volume',
      description: 'Compare the capabilities and cost-to-volume fit ideal for businesses with high call rates.',
      icon: '📞',
      link: '/software/ai-receptionist/high-volume',
    },
    {
      tag: 'For appointment-heavy businesses',
      title: 'For appointment-heavy businesses',
      description: 'Compare the capabilities ideal for appointment-heavy businesses with complex scheduling.',
      icon: '📅',
      link: '/software/ai-receptionist/appointment',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#0B1220] mb-4">
            Find the right fit
          </h2>
          <p className="text-gray-600 text-lg">
            Which AI receptionist is right for you?
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              href={useCase.link}
              className="group p-8 border-2 border-gray-200 rounded-xl hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{useCase.icon}</div>

              {/* Tag */}
              <div className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full mb-4">
                {useCase.tag}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {useCase.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Explore options
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Start with your operating model—not a payment runway or aesthetic pick.
          </p>
        </div>
      </div>
    </section>
  );
}
