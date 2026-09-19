import Link from 'next/link';

export default function RelatedReading() {
  const articles = [
    {
      tag: 'RESEARCH',
      title: 'Best AI receptionists for small business in 2026',
      link: '/research/best-ai-receptionists-small-business',
    },
    {
      tag: 'GUIDES',
      title: 'How to test an AI receptionist before you commit',
      link: '/guides/test-ai-receptionist',
    },
    {
      tag: 'RESEARCH',
      title: 'What we look for in rating AI software',
      link: '/research/rating-ai-software',
    },
  ];

  const commonQuestions = [
    {
      question: 'Can an AI receptionist replace a human receptionist entirely?',
      answer: 'Not always. AI can handle routine tasks, simple filtering, voicemail, and scheduling—which is invaluable for high-frequency calls. But for complex queries that require judgment, empathy, or dealing with upset callers, most platforms offer a "handoff to human" option.',
    },
    {
      question: 'How much does an AI receptionist cost?',
      answer: 'Pricing varies widely from $29/mo to $1,500+/mo depending on call volume, features, and whether you want hybrid human support.',
    },
    {
      question: 'Will callers know they are talking to AI?',
      answer: 'Most products let you decide. Some businesses prefer transparency (announcing AI), while others configure the system to sound natural without explicit disclosure.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Related Reading */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1220] mb-8">
              Related reading
            </h2>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  className="group block p-6 border-2 border-gray-200 rounded-lg hover:border-cyan-500 hover:shadow-md transition-all"
                >
                  <div className="text-cyan-600 text-xs font-semibold mb-2">
                    {article.tag}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1220] group-hover:text-cyan-600 transition-colors">
                    {article.title}
                  </h3>
                  <svg className="w-5 h-5 text-cyan-600 mt-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Common Questions */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1220] mb-4">
              Common questions
            </h2>
            <p className="text-gray-600 mb-8">Before you enroll:</p>

            <div className="space-y-6">
              {commonQuestions.map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0">
                  <h3 className="font-bold text-[#0B1220] mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
