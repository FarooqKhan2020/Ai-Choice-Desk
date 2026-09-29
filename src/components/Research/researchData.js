const dir = '/research';

export const icons = {
  question: `${dir}/green search.svg`,
  data: `${dir}/data icon.svg`,
  analysis: `${dir}/Analysis.svg`,
  evaluation: `${dir}/evaluation icon.svg`,
  validation: `${dir}/validation icon.svg`,
  insight: `${dir}/insight icon.svg`,
  search: `${dir}/Icon.svg`,
  blueArrow: `${dir}/blue arrow.svg`,
};

export const heroStats = [
  { value: '184', label: 'Studies published' },
  { value: '12,400', suffix: '+', label: 'Data points tracked' },
  { value: '1,960', label: 'Businesses surveyed' },
  { value: '18', label: 'Software categories' },
];

// Positions are design coordinates (px) inside a 1440 × 540 stage.
export const topics = [
  { name: 'AI', count: 41, x: 720, y: 37 },
  { name: 'Automation', count: 13, x: 353, y: 103 },
  { name: 'Software', count: 33, x: 1087, y: 104 },
  { name: 'Productivity', count: 18, x: 200, y: 267 },
  { name: 'Business', count: 24, x: 1240, y: 267 },
  { name: 'HR', count: 14, x: 353, y: 430 },
  { name: 'Sales', count: 19, x: 1087, y: 430 },
  { name: 'Marketing', count: 22, x: 720, y: 497 },
];

export const snapshotStats = [
  {
    value: '68',
    unit: '%',
    title: 'Stack review is now routine',
    description:
      'Businesses that audited their software at least twice in the last year.',
    tone: 'dark',
    low: false,
  },
  {
    value: '42',
    unit: '%',
    title: 'Dropped a tool they liked',
    description:
      'Removed a working product because it overlapped with something else.',
    tone: 'teal',
    low: true,
  },
  {
    value: '3.2',
    unit: 'x',
    title: 'Trial-to-decision speed',
    description:
      'Faster decisions when a team tested with real accounts, not demo data.',
    tone: 'dark',
    low: false,
  },
  {
    value: '27',
    unit: '%',
    title: 'Never reach full rollout',
    description:
      'Paid seats that stay unused three months after purchase.',
    tone: 'teal',
    low: true,
  },
];

export const toolsPerBusiness = [
  { band: '1–4 people', value: 6.1, color: '#cff1ef' },
  { band: '5–19', value: 9.0, color: '#a0e0d8' },
  { band: '20–49', value: 12.4, color: '#80dfc8' },
  { band: '50–99', value: 15.3, color: '#00cfc1' },
  { band: '100–199', value: 17.1, color: '#00b0a3' },
  { band: '200–499', value: 13.8, color: '#000a1c' },
];

export const tracks = [
  'AI adoption',
  'Buying behaviour',
  'Pricing',
  'Customer support',
  'Automation',
  'Productivity',
];

export const studies = [
  { title: 'The software a business keeps', track: 'AI adoption', date: 'Sep 2026', read: 24 },
  { title: 'Software buying trends 2026', track: 'Buying behaviour', date: 'Aug 2026', read: 16 },
  { title: 'AI customer support, measured against real tickets', track: 'Customer support', date: 'Jul 2026', read: 19 },
  { title: 'What automation breaks first', track: 'Automation', date: 'Jun 2026', read: 12 },
  { title: 'The true cost of a free plan', track: 'Pricing', date: 'May 2026', read: 14 },
  { title: 'Hours recovered, hours reported', track: 'Productivity', date: 'Apr 2026', read: 11 },
  { title: 'Buying committees in businesses under 50 people', track: 'Buying behaviour', date: 'Mar 2026', read: 15 },
  { title: 'Seat waste: the 27% nobody logs in', track: 'Pricing', date: 'Feb 2026', read: 9 },
  { title: 'AI features that never left the demo', track: 'AI adoption', date: 'Jan 2026', read: 13 },
  { title: 'Screening at scale, and where HR pulled back', track: 'Productivity', date: 'Dec 2025', read: 17 },
];

export const moreStudies = [
  { title: 'Who owns the software budget', track: 'Buying behaviour', date: 'Nov 2025', read: 12 },
  { title: 'Chatbot handoffs that customers actually finish', track: 'Customer support', date: 'Nov 2025', read: 14 },
  { title: 'Per-seat versus usage pricing, compared', track: 'Pricing', date: 'Oct 2025', read: 18 },
  { title: 'Automations still running a year later', track: 'Automation', date: 'Oct 2025', read: 10 },
  { title: 'Where AI note-takers save the most time', track: 'Productivity', date: 'Sep 2025', read: 13 },
  { title: 'What small teams trial before they buy', track: 'Buying behaviour', date: 'Sep 2025', read: 11 },
  { title: 'The second-year drop in AI tool usage', track: 'AI adoption', date: 'Aug 2025', read: 16 },
  { title: 'Response time versus resolution in support', track: 'Customer support', date: 'Aug 2025', read: 15 },
  { title: 'Hidden fees in annual software contracts', track: 'Pricing', date: 'Jul 2025', read: 9 },
  { title: 'Workflow builders and the maintenance tax', track: 'Automation', date: 'Jul 2025', read: 14 },
  { title: 'Meeting tools: adoption after the trial', track: 'AI adoption', date: 'Jun 2025', read: 12 },
  { title: 'How teams measure productivity gains', track: 'Productivity', date: 'Jun 2025', read: 17 },
];

// Chart y-values are px inside a 340px-tall plot (0 = top gridline).
export const trendYears = {
  2024: {
    ai: [180, 120],
    support: [240, 200],
    stack: [262, 214],
    summary: ['+27%', '+18%', '+21%', '+0.4'],
  },
  2025: {
    ai: [150, 78],
    support: [215, 165],
    stack: [246, 175],
    summary: ['+36%', '+24%', '+29%', '-0.7'],
  },
  2026: {
    ai: [116, 39],
    support: [194, 130],
    stack: [230, 141],
    summary: ['+42%', '+31%', '+38%', '-1.4'],
  },
};

export const trendMonths = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'];

export const trendLegend = [
  { label: 'AI adoption', color: '#00cfc1' },
  { label: 'Customer support automation', color: '#0d6be0' },
  { label: 'Stack consolidation', color: '#4b6178' },
];

export const trendSummary = [
  { title: 'AI adoption', description: 'Now measured on retained workflows, not signups.' },
  { title: 'Customer support', description: 'Automation concentrated at the top of the queue.' },
  { title: 'Consolidation', description: 'The fastest-moving line on the chart.' },
  { title: 'Net stack change', description: 'First year on record where stacks shrank.' },
];

export const sources = [
  { label: 'Source 01', title: 'Product documentation', value: '1,840', caption: 'Pages reviewed · Sep 2026' },
  { label: 'Source 02', title: 'Market data', value: '4,210', caption: 'Data points · Aug 2026' },
  { label: 'Source 03', title: 'Industry reports', value: '96', caption: 'Reports cited · 2024–2026' },
  { label: 'Source 04', title: 'User research', value: '1,960', caption: 'Businesses surveyed · 2026' },
  { label: 'Source 05', title: 'Hands-on testing', value: '310', caption: 'Paid accounts run · rolling' },
  { label: 'Source 06', title: 'Public data', value: '27', caption: 'Datasets tracked · quarterly' },
];

export const methodSteps = [
  {
    icon: icons.question,
    title: 'Question',
    description:
      'We start from something a buyer actually asked us — not a topic with search volume. The question is written down before any data is gathered.',
  },
  {
    icon: icons.data,
    title: 'Data',
    description:
      'Surveys with named respondents, paid product accounts, public filings and pricing captured on the date it was seen. Sample sizes are published, never rounded up.',
  },
  {
    icon: icons.analysis,
    title: 'Analysis',
    description:
      'Every cut is run against the raw set, including the ones that make the story less tidy. Outliers stay in unless we can say why they left.',
  },
  {
    icon: icons.evaluation,
    title: 'Evaluation',
    description:
      'Findings are tested against hands-on product use. If the data says one thing and the software does another, we go back to the data.',
  },
  {
    icon: icons.validation,
    title: 'Validation',
    description:
      'A second researcher reproduces the result from source files. Vendors get to correct facts about their product — never conclusions about it.',
  },
  {
    icon: icons.insight,
    title: 'Insight',
    description:
      'Published with the sample, the method, the date and the researcher’s name attached. Re-checked on a fixed schedule and marked when it changes.',
  },
];

export const insightStats = [
  { value: '-1.4', description: 'Average net change in tools per business, year over year.' },
  { value: '61%', description: 'Removed at least one paid tool in the last twelve months.' },
];

export const toolsChart = {
  years: ['2022', '2023', '2024', '2025', '2026'],
  added: [3.4, 3.7, 3.9, 3.9, 3.8],
  removed: [1.5, 2.0, 2.8, 3.4, 4.0],
};

export const latestResearch = [
  { date: 'September 2026', title: 'AI software adoption, measured', meta: 'Research report · 24 min' },
  { date: 'August 2026', title: 'Software buying trends', meta: 'Market analysis · 16 min' },
  { date: 'July 2026', title: 'AI customer support deflection', meta: 'Research · 19 min' },
  { date: 'June 2026', title: 'What automation breaks first', meta: 'Field study · 12 min' },
  { date: 'May 2026', title: 'The true cost of a free plan', meta: 'Pricing research · 14 min' },
];
