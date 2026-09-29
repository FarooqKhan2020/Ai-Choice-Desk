export const TOOL_COST_PER_USER_MONTH = 40;

export const DEFAULT_INPUTS = {
  team: 14,
  hourly: 45,
  hours: 9,
  task: '',
  gain: 40,
};

export const taskTypes = [
  'Customer support',
  'Writing & content',
  'Data entry',
  'Scheduling',
  'Reporting',
];

export function calculate({ team, hourly, hours, gain }) {
  const currentAnnual = team * hourly * hours * 52;
  const savings = currentAnnual * (gain / 100);
  const aiAnnual = currentAnnual - savings;
  const toolCost = team * TOOL_COST_PER_USER_MONTH * 12;
  const roi = toolCost > 0 ? ((savings - toolCost) / toolCost) * 100 : 0;
  return {
    currentAnnual,
    aiAnnual,
    savings,
    monthly: savings / 12,
    hoursSaved: team * hours * 52 * (gain / 100),
    roi,
  };
}

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

export const formatUsd = (value) => usd.format(Math.round(value));
export const formatNumber = (value) => num.format(Math.round(value));

export const heroCard = {
  team: '14 people',
  savings: '$96,400',
};

export const steps = [
  {
    key: '01',
    title: 'Enter your numbers',
    description:
      'Team size, hourly cost, current spend — whatever the calculator needs to work with your reality.',
  },
  {
    key: '02',
    title: 'Adjust assumptions',
    description:
      'Drag sliders to test efficiency gains, adoption speed, or pricing tiers and watch the result move.',
  },
  {
    key: '03',
    title: 'Get your result',
    description:
      'A clear estimate — savings, time, or ROI — with the assumptions shown alongside it.',
  },
];

export const quickCalculators = {
  cost: {
    icon: 'doc',
    title: 'AI Cost Calculator',
    description:
      'Estimate monthly and annual spend across the AI tools your team actually uses.',
    href: '/calculators/ai-cost-calculator',
  },
  time: {
    title: 'Time Saved Calculator',
    description: 'Hours reclaimed per week, per role.',
    tag: 'hrs × gain%',
    href: '/calculators/time-saved-calculator',
  },
  productivity: {
    stat: '3.4×',
    statLabel: 'Typical productivity multiplier',
    title: 'Productivity Calculator',
    href: '/calculators/productivity-calculator',
  },
  adoption: {
    title: 'Team AI Adoption Calculator',
    description: 'Model rollout pace across departments.',
    tag: 'teams × weeks',
    href: '/calculators/team-ai-adoption-calculator',
  },
  software: {
    title: 'Software Cost Calculator',
    description: 'Compare per-seat pricing across plans.',
    tag: 'seats × $/mo',
    href: '/calculators/software-cost-calculator',
  },
  roi: {
    icon: 'chart',
    title: 'ROI Calculator',
    description:
      'The full featured model above — team size, cost, and efficiency gain in one view.',
    href: '#roi-calculator',
  },
};

export const impactChart = {
  sessions: 'Based on 1,240 calculator sessions',
  groups: [
    { label: 'Weekly hours on task', delta: '−42%', before: 100, after: 58 },
    { label: 'Cost per task', delta: '−34%', before: 100, after: 66 },
    { label: 'Tasks completed / week', delta: '+91%', before: 52, after: 100 },
    { label: 'Reported team capacity', delta: '+64%', before: 38, after: 100 },
  ],
};

export const allCalculators = [
  {
    icon: 'chart',
    title: 'AI ROI Calculator',
    description: 'Estimate savings and return from adopting an AI tool across your team.',
    minutes: 3,
    tag: 'ROI',
    href: '#roi-calculator',
  },
  {
    icon: 'ring',
    title: 'AI Cost Calculator',
    description: 'Add up subscription and usage costs across every AI tool in your stack.',
    minutes: 2,
    tag: 'Cost',
    href: '/calculators/ai-cost-calculator',
  },
  {
    icon: 'bolt',
    title: 'Time Saved Calculator',
    description: 'See how many hours automation could return to your week.',
    minutes: 2,
    tag: 'Quick estimate',
    href: '/calculators/time-saved-calculator',
  },
  {
    icon: 'people',
    title: 'Productivity Calculator',
    description: 'Model output gains from AI-assisted workflows, by role.',
    minutes: 4,
    tag: 'Advanced',
    href: '/calculators/productivity-calculator',
  },
  {
    icon: 'network',
    title: 'Team AI Adoption Calculator',
    description: 'Plan a realistic rollout timeline across departments and teams.',
    minutes: 5,
    tag: 'Advanced',
    href: '/calculators/team-ai-adoption-calculator',
  },
  {
    icon: 'coin',
    title: 'Software Cost Calculator',
    description: 'Compare per-seat pricing and total cost across plan tiers.',
    minutes: 2,
    tag: 'Cost',
    href: '/calculators/software-cost-calculator',
  },
];

export const methodFlow = [
  { label: 'Inputs', note: 'team size, cost, hours', connector: 'plus' },
  { label: 'Assumptions', note: 'efficiency gain, tool cost', connector: 'arrow' },
  { label: 'Calculation', note: 'applied consistently', connector: 'arrow' },
];

export const methodFacts = [
  {
    label: 'Data sources',
    body: 'Published vendor pricing and independently reported usage benchmarks.',
  },
  {
    label: 'Calculation logic',
    body: 'Plain arithmetic — no weighting or scoring model, so results stay easy to check.',
  },
  {
    label: 'Core assumption',
    body: '$40/user/month average AI tool cost, unless a calculator asks otherwise.',
  },
  {
    label: 'Last reviewed',
    body: '12 September 2026 — assumptions checked quarterly.',
  },
];
