import BestOfHero from '@/components/BestOf/BestOfHero';
import CategoryPicks from '@/components/BestOf/CategoryPicks';
import BestForWork from '@/components/BestOf/BestForWork';
import TheWinners from '@/components/BestOf/TheWinners';
import ResearchProcess from '@/components/BestOf/ResearchProcess';
import InsideWinners from '@/components/BestOf/InsideWinners';
import BestOfCTA from '@/components/BestOf/BestOfCTA';

export const metadata = {
  title: 'Best AI Software, Actually Worth Considering - AI Choice Desk',
  description:
    'We research, compare and score AI software so you can spend less time searching and more time choosing. Browse the best picks by category and workflow.',
};

export default function BestOfPage() {
  return (
    <>
      <BestOfHero />
      <CategoryPicks />
      <BestForWork />
      <TheWinners />
      <ResearchProcess />
      <InsideWinners />
      <BestOfCTA />
    </>
  );
}
