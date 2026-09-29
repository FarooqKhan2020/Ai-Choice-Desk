import CompareHero from '@/components/Compare/CompareHero';
import HeadToHeadResult from '@/components/Compare/HeadToHeadResult';
import PopularComparisons from '@/components/Compare/PopularComparisons';
import ExploreTools from '@/components/Compare/ExploreTools';
import WorkflowFit from '@/components/Compare/WorkflowFit';
import ResearchConfidence from '@/components/Compare/ResearchConfidence';
import CompareCTA from '@/components/Compare/CompareCTA';
import { getWinner, resolvePair } from '@/components/Compare/compareData';

export const metadata = {
  title: 'Compare AI Tools Side by Side - AI Choice Desk',
  description:
    'Choose any two AI tools to compare pricing, ratings, workflow fit, strengths, limitations, and our verdict.',
};

export default async function ComparePage({ searchParams }) {
  const { a, b } = await searchParams;
  const [first, second] = resolvePair(a, b);
  const result = getWinner(first, second);

  return (
    <>
      <CompareHero key={`${first.id}-${second.id}`} firstId={first.id} secondId={second.id} />
      <HeadToHeadResult first={first} second={second} result={result} />
      <PopularComparisons />
      <ExploreTools />
      <WorkflowFit key={`${first.id}-${second.id}`} first={first} second={second} />
      <ResearchConfidence />
      <CompareCTA />
    </>
  );
}
