const dir = '/Best-of';

export const logos = {
  goodcall: `${dir}/good call.png`,
  synthflow: `${dir}/synth flow AI.png`,
  freshdesk: `${dir}/fresh desk.png`,
  gohighlevel: `${dir}/go high level AI.png`,
  smith: `${dir}/smit ai.png`,
  hubspot: `${dir}/hubspot.png`,
  ahrefs: `${dir}/ahrefs.png`,
  browseai: `${dir}/Browse AI.png`,
};

export const heroStats = [
  { value: '120+', label: 'Products researched' },
  { value: '18', label: 'Categories' },
  { value: 'Monthly', label: 'Re-evaluation' },
];

export const heroBoard = [
  {
    rank: '01',
    label: 'Best overall',
    name: 'Goodcall',
    category: 'AI Receptionists',
    score: '9.6',
    logo: logos.goodcall,
    badge: 'Winner',
  },
  {
    rank: '02',
    label: 'Best value',
    name: 'Synthflow AI',
    category: 'Voice agents',
    score: '9.3',
    logo: logos.synthflow,
    note: 'From $29/mo',
  },
  {
    rank: '03',
    label: 'Best for small business',
    name: 'Freshdesk',
    category: 'Customer support',
    score: '9.1',
    logo: logos.freshdesk,
  },
];

export const categories = [
  {
    title: 'AI Receptionists',
    description:
      'AI-powered phone answering, routing and appointment handling for teams that can’t staff a front desk.',
    count: '24 products researched',
    icon: `${dir}/Ai receptionist.svg`,
    href: '/software/ai-receptionist',
  },
  {
    title: 'AI Chatbots',
    description:
      'Website and in-app assistants that deflect tickets and qualify leads without sounding scripted.',
    count: '19 products researched',
    icon: `${dir}/AI chat bots.svg`,
    href: '/software/ai-chatbot',
  },
  {
    title: 'AI Meeting Assistants',
    description:
      'Recording, transcription and follow-up actions across calls.',
    count: '16 products',
    icon: `${dir}/AI meeting assistanta.svg`,
    href: '/best-of/ai-meeting-assistants',
  },
  {
    title: 'AI Writing',
    description:
      'Drafting, editing and brand-voice tools for content teams.',
    count: '22 products',
    icon: `${dir}/AI  writing.svg`,
    href: '/best-of/ai-writing',
  },
  {
    title: 'AI Sales',
    description:
      'Prospecting, outreach and pipeline scoring for revenue teams.',
    count: '21 products',
    icon: 'trend',
    href: '/best-of/ai-sales',
  },
  {
    title: 'AI Customer Support',
    description:
      'Ticket triage, macros and self-service deflection — scored on how much work they actually remove from the queue on demo transcripts.',
    count: '27 products researched',
    icon: 'headset',
    href: '/best-of/ai-customer-support',
  },
  {
    title: 'AI Marketing',
    description:
      'Campaign planning, SEO and creative production tools.',
    count: '18 products',
    icon: `${dir}/AI marketing.svg`,
    href: '/best-of/ai-marketing',
  },
  {
    title: 'AI HR',
    description:
      'Screening, scheduling and onboarding for people teams.',
    count: '12 products',
    icon: `${dir}/AI HR.svg`,
    href: '/best-of/ai-hr',
  },
  {
    title: 'AI Productivity',
    description:
      'Notes, tasks and inbox tools that cut admin time.',
    count: '25 products',
    icon: `${dir}/AI productivity.svg`,
    href: '/best-of/ai-productivity',
  },
  {
    title: 'AI Automation',
    description:
      'Workflow builders that connect the rest of your stack.',
    count: '23 products',
    icon: `${dir}/AI automation.svg`,
    href: '/best-of/ai-automation',
  },
];

export const bestForCards = [
  {
    key: 'small-business',
    title: 'Small businesses',
    description:
      'One person wearing four hats. You need something live this week, not a three-month rollout.',
    media: {
      type: 'image',
      src: `${dir}/Image (Small team working together at a shared desk).png`,
      alt: 'Small team working together at a shared desk',
    },
    winner: { name: 'Goodcall', score: '9.4', logo: logos.goodcall },
    quote: 'Simple setup plus strong automation — running in under an hour.',
  },
  {
    key: 'enterprise',
    title: 'Enterprise',
    description:
      'Multi-team routing, SSO, retention controls and an audit trail your security review will actually accept.',
    bars: [
      { label: 'Admin controls', score: '9.6', fill: 81 },
      { label: 'Integrations', score: '9.4', fill: 70 },
    ],
    winner: { name: 'GoHighLevel', score: '9.0', logo: logos.gohighlevel },
  },
  {
    key: 'customer-support',
    title: 'Customer support',
    description:
      'High ticket volume, repetitive questions, and a queue that never fully clears.',
    media: { type: 'support-mock' },
    winner: { name: 'Freshdesk', score: '9.1', logo: logos.freshdesk },
    quote: 'Deflected 41% of tier-one tickets in our test inbox.',
  },
  {
    key: 'sales',
    title: 'Sales teams',
    description:
      'Inbound that arrives at all hours and a rep team that can’t answer all of it.',
    media: { type: 'leads-mock' },
    winner: { name: 'HubSpot', score: '9.2', logo: logos.hubspot },
    quote: 'Best CRM handoff of anything we scored this year.',
  },
  {
    key: 'marketing',
    title: 'Marketing',
    description:
      'Campaign research, briefs and on-brand drafts — measured on how much editing the output still needs, which is the part most tools quietly skip.',
    winner: { name: 'Ahrefs', score: '8.8', logo: logos.ahrefs },
    quote: 'Strongest research data behind every draft.',
  },
  {
    key: 'automation',
    title: 'Automation',
    description:
      'Work that spans five tools and currently lives in someone’s head.',
    media: {
      type: 'image',
      src: `${dir}/automation image.png`,
      alt: 'Two colleagues reviewing automation workflows on a monitor',
    },
    winner: { name: 'Browse AI', score: '8.7', logo: logos.browseai },
    quote: 'No-code builders that survive a real workflow.',
  },
];

export const topWinner = {
  rank: '01',
  label: 'Best overall',
  verified: 'Tested on a paid account for 90 days',
  name: 'Goodcall',
  category: 'AI Receptionists',
  tagline: 'Best overall for growing businesses',
  logo: logos.goodcall,
  score: '9.6',
  scoreNote: 'Highest score in category',
  review:
    'Goodcall answers, qualifies and books without the scripted feel that gives most voice agents away. Setup took under an hour on a real account, pricing stayed predictable at 400 calls a month, and the human handoff rules were the clearest of anything we tested. It is not the cheapest option — it is the one we’d put in front of customers.',
  percent: 96,
  criteria: [
    { label: 'Ease of use', score: 9.4 },
    { label: 'Features', score: 9.7 },
    { label: 'Value', score: 9.2 },
    { label: 'Reliability', score: 9.8 },
  ],
  note: 'Weighted across four criteria applied identically to every product in the category. Last re-checked 12 Sep 2026.',
  href: '/software/ai-receptionist',
};

export const runnersUp = [
  {
    label: '#02 · Best value',
    name: 'Synthflow AI',
    logo: logos.synthflow,
    description:
      'Lowest entry price of anything we’d actually recommend, with no-code voice agents that hold up on inbound.',
    price: 'From $29/mo',
    score: '9.3',
  },
  {
    label: '#03 · Small business',
    name: 'Freshdesk',
    logo: logos.freshdesk,
    description:
      'The fastest path from signup to a working support desk, and the free tier is genuinely usable.',
    price: 'Free plan',
    score: '9.1',
  },
  {
    label: '#04 · Enterprise',
    name: 'GoHighLevel',
    logo: logos.gohighlevel,
    description:
      'Deep permissions, multi-location routing and the audit trail procurement teams ask for.',
    price: 'From $97/mo',
    score: '9.0',
  },
  {
    label: '#05 · Easiest to use',
    name: 'Smith.ai',
    logo: logos.smith,
    description:
      'Human backup behind the AI, so nothing lands in a dead end. Onboarding is done for you.',
    price: '$97.50/mo',
    score: '8.9',
  },
];

export const researchSteps = [
  {
    icon: 'search',
    title: 'Research',
    description:
      'Map every product in the category and record what it claims to do.',
  },
  {
    icon: `${dir}/test.svg`,
    title: 'Test',
    description:
      'Buy a real account and run the same tasks on each product.',
  },
  {
    icon: `${dir}/comapre.svg`,
    title: 'Compare',
    description: 'Line up pricing, limits and features on identical conditions.',
  },
  {
    icon: `${dir}/evaluate.svg`,
    title: 'Evaluate',
    description:
      'Weigh the trade-offs against the workflows buyers actually have.',
  },
  {
    icon: `${dir}/score.svg`,
    title: 'Score',
    description:
      'Apply the same weighted criteria across the whole category.',
  },
  {
    icon: `${dir}/select.svg`,
    title: 'Select',
    description:
      'Name a winner, and say plainly who it is not right for.',
  },
];

export const researchStats = [
  { value: '120+', label: 'Products researched' },
  { value: '18', label: 'Categories' },
  { value: 'Monthly', label: 'Research updates' },
];

export const insideWinners = [
  {
    rank: '#01',
    name: 'Goodcall',
    logo: logos.goodcall,
    tag: 'Best overall',
    score: '9.6',
    why: 'Goodcall was the only receptionist in the category that handled an interruption mid-sentence without losing the thread. Its handoff rules are explicit rather than probabilistic, so you know exactly when a call reaches a person. Pricing held steady across three separate volume tiers we checked.',
    pros: [
      'Natural handling of interruptions',
      'Clear, rule-based human handoff',
      'Predictable cost at real call volume',
    ],
    watch: ['Limited customization on call scripts', 'No free plan to trial first'],
    media: { type: 'goodcall-mock' },
    href: '/software/ai-receptionist',
  },
  {
    rank: '#02',
    name: 'Synthflow AI',
    logo: logos.synthflow,
    tag: 'Best value',
    score: '9.3',
    why: 'At $29 a month Synthflow undercuts everything else we’d recommend, and it does not feel like a stripped-back tier. The no-code builder is the fastest way we found to get an inbound agent live, and outbound campaigns run from the same workspace instead of a separate product.',
    pros: [
      'Lowest credible entry price',
      'Inbound and outbound in one place',
      'Builder is genuinely no-code',
    ],
    watch: [
      'Reporting is thin compared to rivals',
      'Support is email-only on lower tiers',
    ],
    media: {
      type: 'image',
      src: `${dir}/synth flow image.png`,
      alt: 'Colleagues celebrating with a high five at a shared table',
    },
    href: '/software/ai-receptionist',
  },
  {
    rank: '#03',
    name: 'Freshdesk',
    logo: logos.freshdesk,
    tag: 'Best for small business',
    score: '9.1',
    why: 'Freshdesk gets a support desk running the same afternoon you sign up, and its free tier is the only one in the category we’d let a real customer email land in. Average first response in our test inbox dropped to two minutes ten, with 41% of tier-one tickets closed without an agent.',
    pros: [
      'Free plan you can actually ship on',
      'Fast setup with sensible defaults',
      'Strong ticket deflection out of the box',
    ],
    watch: [
      'Per-agent pricing climbs with the team',
      'Voice is an add-on, not included',
    ],
    media: { type: 'freshdesk-mock' },
    href: '/software/ai-chatbot',
  },
];
