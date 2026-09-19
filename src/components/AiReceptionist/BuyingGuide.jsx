export default function BuyingGuide() {
  const guides = [
    {
      icon: '💰',
      title: 'Understand the pricing model',
      description: 'Per-minute or monthly plans. Then confirm what happens at the edge cases.',
    },
    {
      icon: '📱',
      title: 'Test the AI with difficult calls',
      description: 'Run real call scenarios with accent variation, technical jargon, and edge-case requests.',
    },
    {
      icon: '👤',
      title: 'Check human handoff',
      description: 'Test when and how callers can switch to live humans if the AI cannot help.',
    },
    {
      icon: '⚙️',
      title: 'Review integrations',
      description: 'See what calendar and ticketing tools you can connect. Then confirm what is edge-cases.',
    },
    {
      icon: '🔄',
      title: 'Test appointment handling',
      description: 'See if the platform can book, reschedule, and confirm. Then confirm what happens at edge cases.',
    },
  ];

  const expectedFeatures = [
    { icon: '📞', title: '24/7 call answering' },
    { icon: '🖥️', title: 'Spam screening' },
    { icon: '📅', title: 'Appointment booking' },
    { icon: '💬', title: 'Call transcripts' },
    { icon: '🔗', title: 'Lead qualification' },
    { icon: '📊', title: 'Analytics' },
    { icon: '📱', title: 'Call transfer' },
    { icon: '👥', title: 'Human/handoff' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Buying Guide */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1220] mb-4">
              Buying guide
            </h2>
            <p className="text-gray-600 mb-8">
              What to check before you buy
            </p>

            <div className="space-y-6">
              {guides.map((guide, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-xl">
                    {guide.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1220] mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {guide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Expected Features */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1220] mb-4">
              Expected as standard
            </h2>
            <p className="text-gray-600 mb-8">
              The baseline feature set
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {expectedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center text-lg">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
