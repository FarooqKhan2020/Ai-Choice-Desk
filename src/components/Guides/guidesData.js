export const heroStats = [
  { value: '120+', label: 'Guides & walkthroughs' },
  { value: '10', label: 'Topics covered' },
  { value: '4 min', label: 'Median read time' },
];

export const topics = [
  { name: 'AI Basics', count: 14 },
  { name: 'AI Tools', count: 22 },
  { name: 'Productivity', count: 11 },
  { name: 'Business Software', count: 9 },
  { name: 'Marketing', count: 8 },
  { name: 'Sales', count: 7 },
  { name: 'HR', count: 6 },
  { name: 'Finance', count: 8 },
  { name: 'Customer Experience', count: 12 },
  { name: 'Automation', count: 23 },
];

export const featuredGuide = {
  tag: 'Decision guide',
  readTime: '8 min read',
  title: 'How to choose the right AI tool for your business',
  excerpt:
    'Most teams shortlist AI software by reputation alone, then discover the fit is wrong three months in. This guide walks through the six questions worth answering before you ever book a demo.',
  caption:
    'A framework for narrowing dozens of AI tools down to the two or three worth a real trial.',
  image: '/images/researchers.png',
  author: {
    name: 'Sarah Mitchell',
    role: 'Lead Analyst, Customer Experience',
    avatar: '/images/sarahmitchel.png',
  },
  href: '/guides/how-to-choose-the-right-ai-tool',
};

export const startHere = [
  {
    time: '4 min',
    title: 'What is AI?',
    description:
      'The handful of ideas worth knowing before any of the rest of this makes sense — in plain language, no math.',
  },
  {
    time: '6 min',
    title: 'How AI tools work',
    description:
      'What’s actually happening when a piece of software calls itself “AI-powered,” and why that matters for how you evaluate it.',
  },
  {
    time: '8 min',
    title: 'Choosing the right AI tool',
    description:
      'A repeatable way to compare options against your actual workflow, not a vendor’s feature list.',
  },
  {
    time: '5 min',
    title: 'Using AI safely',
    description:
      'What to check before you connect a tool to real customer data, and the questions worth asking a vendor first.',
  },
  {
    time: '7 min',
    title: 'Measuring AI impact',
    description:
      'How to tell, with real numbers, whether the tool you adopted is actually paying for itself.',
  },
];

export const walkthroughs = [
  {
    category: 'Automation',
    level: 'Beginner',
    title: 'How to automate repetitive tasks with AI',
    description: 'Identify the tasks worth automating first, then wire up your first workflow.',
    steps: 6,
    done: 2,
    minutes: 12,
  },
  {
    category: 'AI Tools',
    level: 'Beginner',
    title: 'How to compare AI software',
    description: 'A structured way to shortlist tools without getting lost in feature lists.',
    steps: 5,
    done: 3,
    minutes: 9,
  },
  {
    category: 'Automation',
    level: 'Intermediate',
    title: 'How to build an AI workflow',
    description: 'Connect tools, set triggers, and handle the edge cases that break automations.',
    steps: 8,
    done: 3,
    minutes: 18,
  },
  {
    category: 'Decision Guide',
    level: 'Intermediate',
    title: 'How to evaluate an AI tool',
    description: 'A trial framework that surfaces real limitations before you commit budget.',
    steps: 7,
    done: 4,
    minutes: 14,
  },
  {
    category: 'Team & Change',
    level: 'Beginner',
    title: 'How to introduce AI to your team',
    description:
      'Get buy-in, set expectations, and avoid the rollout mistakes that stall adoption.',
    steps: 6,
    done: 2,
    minutes: 11,
  },
];

export const moreGuides = {
  lead: {
    category: 'AI Basics',
    title: 'How AI tools actually save your team time',
    description:
      'The three places automation reliably pays off — and the two where it quietly costs you more than it saves.',
    readTime: '9 min read',
    image: '/guides/ai basics.png',
    href: '/guides/how-ai-tools-save-your-team-time',
  },
  side: [
    {
      category: 'Customer Experience',
      title: 'Choosing between AI chatbots for support',
      description: 'A short checklist for the handoff moments that actually matter.',
      readTime: '5 min read',
      href: '/guides/choosing-between-ai-chatbots-for-support',
    },
    {
      category: 'Automation',
      title: 'A field guide to workflow automation',
      description: 'Where to start when everything feels automatable.',
      readTime: '6 min read',
      href: '/guides/field-guide-to-workflow-automation',
    },
  ],
  wide: {
    category: 'Business Software',
    title: 'What free AI plans really include',
    description:
      'Reading the fine print on “free forever” tiers before you build a workflow around one.',
    readTime: '4 min read',
    image: '/Best-of/Busness software.png',
    href: '/guides/what-free-ai-plans-really-include',
  },
};

export const guideSections = [
  'Introduction',
  'What you need',
  'Step 1',
  'Step 2',
  'Step 3',
  'Common mistakes',
  'Final checklist',
];

export const guidePreview = {
  title: 'Step 1 — Map what you actually spend time on',
  body: 'Before touching any software, spend a week noting every task that eats more than ten minutes and repeats at least weekly. This list becomes the shortlist you’ll test tools against.',
  callout:
    'Tasks that feel tedious but vary every time are usually poor automation candidates — look for the ones that are boring because they’re identical.',
  steps: [
    {
      title: 'Keep it low-effort',
      description:
        'A sticky note or a single spreadsheet column is enough — the goal is coverage, not precision.',
    },
    {
      title: 'Note the trigger',
      description:
        'Write down what kicks each task off — a new email, a form submission, the start of the week.',
    },
  ],
  bars: [22, 40, 29, 58, 43, 69],
};

export const faqs = [
  {
    question: 'What should I look for when choosing AI software?',
    answer:
      'Start with the workflow it needs to fit, not the feature list — then check pricing at the volume you’ll actually use, not the demo tier.',
  },
  {
    question: 'Is AI worth it for a small business?',
    answer:
      'Usually, yes — when it removes a repeated task that costs real hours each week. Start with one workflow, measure the time saved, and only then expand.',
  },
  {
    question: 'How do I compare software features?',
    answer:
      'List the tasks you need done, score each product on those tasks only, and ignore features that don’t map to a task on your list.',
  },
  {
    question: 'What makes a good AI workflow?',
    answer:
      'A clear trigger, one well-defined output, and a human check at the point where a mistake would be expensive.',
  },
  {
    question: 'What should I consider before adopting AI?',
    answer:
      'Data sensitivity, who owns the outcome, how you’ll measure success, and what happens when the tool gets it wrong.',
  },
];
