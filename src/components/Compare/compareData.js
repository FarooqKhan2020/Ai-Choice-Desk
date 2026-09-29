export const tools = {
  chatgpt: {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI assistant',
    logo: '/ai-tool-logos/gpt.png',
    score: 9.3,
    description:
      'A flexible all-rounder for writing, research, coding, and multimodal work.',
    pricing: 'Free · Plus $20/mo',
    bestFor: 'Everyday research and creation',
    features: ['Web research', 'Image generation', 'Data analysis', 'Custom GPTs'],
    strengths: [
      'Excellent all-round capability',
      'Broad integrations and ecosystem',
      'Strong multimodal experience',
    ],
    limitations: ['Best models need a paid plan', 'Usage limits can vary'],
    workflow: { research: 93, writing: 88, ideation: 94, team: 90 },
  },
  claude: {
    id: 'claude',
    name: 'Claude',
    category: 'AI assistant',
    logo: '/ai-tool-logos/claude.png',
    score: 9.1,
    description:
      'A thoughtful assistant known for natural writing and handling long documents.',
    pricing: 'Free · Pro $20/mo',
    bestFor: 'Long-form thinking and writing',
    features: ['Long context', 'Artifacts', 'Document analysis', 'Coding help'],
    strengths: [
      'Natural, nuanced writing',
      'Strong document understanding',
      'Clean project workflow',
    ],
    limitations: ['Fewer image tools', 'Availability varies by region'],
    workflow: { research: 90, writing: 96, ideation: 82, team: 88 },
  },
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    category: 'AI assistant',
    logo: '/ai-tool-logos/gemini.png',
    score: 8.9,
    description:
      'A Google-connected assistant suited to multimodal tasks and Workspace workflows.',
    pricing: 'Free · Advanced $19.99/mo',
    bestFor: 'Google-powered workflows',
    features: ['Google Workspace', 'Multimodal input', 'Long context', 'Deep research'],
    strengths: [
      'Deep Google integration',
      'Fast everyday responses',
      'Strong multimodal input',
    ],
    limitations: ['Writing tone can feel generic', 'Best features need a paid plan'],
    workflow: { research: 89, writing: 84, ideation: 87, team: 92 },
  },
  runway: {
    id: 'runway',
    name: 'Runway',
    initials: 'R',
    category: 'AI video',
    score: 8.7,
    description:
      'A generative video studio for creating and editing clips from text and images.',
    pricing: 'Free · Standard $15/mo',
    bestFor: 'Creative video generation',
    features: ['Text to video', 'Image to video', 'Motion brush', 'Video editing'],
    strengths: [
      'Cinematic output quality',
      'Powerful editing toolset',
      'Frequent model updates',
    ],
    limitations: ['Credits run out quickly', 'Clips are short'],
    workflow: { research: 60, writing: 55, ideation: 91, team: 70 },
  },
  pika: {
    id: 'pika',
    name: 'Pika',
    initials: 'P',
    category: 'AI video',
    score: 8.3,
    description:
      'A fast, playful video generator built for short, social-ready clips.',
    pricing: 'Free · Standard $8/mo',
    bestFor: 'Short social video',
    features: ['Text to video', 'Effects', 'Lip sync', 'Scene ingredients'],
    strengths: [
      'Easy to learn',
      'Fun creative effects',
      'Affordable entry price',
    ],
    limitations: ['Less control over detail', 'Limited clip length'],
    workflow: { research: 58, writing: 52, ideation: 88, team: 66 },
  },
  midjourney: {
    id: 'midjourney',
    name: 'Midjourney',
    initials: 'M',
    category: 'AI image',
    score: 9.0,
    description:
      'A high-end image generator known for distinctive, artistic visuals.',
    pricing: 'Basic $10/mo',
    bestFor: 'Stylized concept art',
    features: ['Image generation', 'Style references', 'Upscaling', 'Variations'],
    strengths: [
      'Distinctive aesthetic',
      'Rich style control',
      'Active community',
    ],
    limitations: ['No free plan', 'Learning curve for prompts'],
    workflow: { research: 55, writing: 50, ideation: 96, team: 68 },
  },
  dalle: {
    id: 'dalle',
    name: 'DALL-E',
    initials: 'D',
    category: 'AI image',
    score: 8.6,
    description:
      'OpenAI’s image model, built into ChatGPT for simple prompt-to-image work.',
    pricing: 'Included with ChatGPT Plus',
    bestFor: 'Quick, prompt-faithful images',
    features: ['Text to image', 'Image editing', 'ChatGPT integration', 'Variations'],
    strengths: [
      'Follows prompts closely',
      'Easy conversational workflow',
      'Good text inside images',
    ],
    limitations: ['Less artistic range', 'Usage is tied to your plan'],
    workflow: { research: 57, writing: 54, ideation: 90, team: 72 },
  },
};

export const toolList = Object.values(tools);

export const DEFAULT_PAIR = ['chatgpt', 'claude'];

// Editorial calls that override the plain score comparison for a given pair.
const pairWinners = {
  'chatgpt-claude': 'claude',
};

const pairKey = (a, b) => [a, b].sort().join('-');

export function resolvePair(a, b) {
  const first = tools[a] ?? tools[DEFAULT_PAIR[0]];
  let second = tools[b] ?? tools[DEFAULT_PAIR[1]];
  if (second.id === first.id) {
    second = toolList.find((tool) => tool.id !== first.id);
  }
  return [first, second];
}

export function getWinner(first, second) {
  const override = pairWinners[pairKey(first.id, second.id)];
  const winner = override
    ? tools[override]
    : first.score >= second.score
      ? first
      : second;
  const loser = winner.id === first.id ? second : first;
  return { winner, loser };
}

const lower = (text) => text.charAt(0).toLowerCase() + text.slice(1);

export function buildVerdict({ winner, loser }) {
  return `Choose ${winner.name} for the strongest overall score. ${winner.name} is best for ${lower(winner.bestFor)}, while ${loser.name} is the better fit for ${lower(loser.bestFor)}.`;
}

export const popularComparisons = [
  ['chatgpt', 'claude'],
  ['claude', 'gemini'],
  ['chatgpt', 'gemini'],
  ['runway', 'pika'],
  ['midjourney', 'dalle'],
];

export const compareHref = (a, b) => `/compare?a=${a}&b=${b}`;

export const exploreLinks = [
  {
    icon: 'compass',
    title: 'Workflow quiz',
    description: 'Answer four quick questions and get a shortlist matched to your work.',
    href: '/quiz',
  },
  {
    icon: 'sparkle',
    title: 'AI tool directory',
    description: 'Browse verified tools by category, use case, and pricing model.',
    href: '/software',
  },
  {
    icon: 'bolt',
    title: 'Creative AI picks',
    description:
      'Find strong options for video, images, writing, and campaign production.',
    href: '/best-of',
  },
  {
    icon: 'shield',
    title: 'Verified reviews',
    description: 'Use transparent scores and practical strengths before you decide.',
    href: '/research',
  },
];

export const workflowTasks = [
  {
    key: 'research',
    icon: 'search',
    title: 'Research & synthesis',
    subtitle: 'Source-heavy analysis and structured findings',
    label: 'Research & synthesis',
    summary: 'Deeper source analysis and clearer, structured findings.',
  },
  {
    key: 'writing',
    icon: 'doc',
    title: 'Long-form writing',
    subtitle: 'Reports, strategy documents and nuanced edits',
    label: 'Long-form writing',
    summary: 'More natural drafts and better control over tone and length.',
  },
  {
    key: 'ideation',
    icon: 'sparkle',
    title: 'Rapid ideation',
    subtitle: 'Fast concepts, variations and visual thinking',
    label: 'Rapid ideation',
    summary: 'Faster multimodal exploration and more creative pathways.',
  },
  {
    key: 'team',
    icon: 'users',
    title: 'Team knowledge work',
    subtitle: 'Shared context, review and repeatable workflows',
    label: 'Team knowledge work',
    summary: 'Better shared context and repeatable workflows across a team.',
  },
];

export const researchStats = [
  { value: '24', label: 'matched tasks', note: 'Same brief, same constraints' },
  { value: '72', label: 'output reviews', note: 'Blind-scored for quality' },
  { value: '3', label: 'review passes', note: 'Checked for consistency' },
  { value: 'High', label: 'confidence', note: 'Clear result across runs', accent: true },
];

export const researchSteps = [
  {
    icon: 'doc',
    title: 'Matched evaluation',
    description: 'Both tools receive identical prompts, documents and time limits.',
  },
  {
    icon: 'clock',
    title: 'Freshness check',
    description:
      'Pricing and capabilities are rechecked before every verdict update.',
  },
  {
    icon: 'shield',
    title: 'Editorial review',
    description:
      'Scores are reviewed against the real output, not vendor marketing.',
  },
];
