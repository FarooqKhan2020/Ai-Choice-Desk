import ResearchHero from '@/components/Research/ResearchHero';
import TopicMap from '@/components/Research/TopicMap';
import DataSnapshot from '@/components/Research/DataSnapshot';
import ResearchLibrary from '@/components/Research/ResearchLibrary';
import MarketTrends from '@/components/Research/MarketTrends';
import EvidenceLayers from '@/components/Research/EvidenceLayers';
import Methodology from '@/components/Research/Methodology';
import KeyInsight from '@/components/Research/KeyInsight';
import LatestResearch from '@/components/Research/LatestResearch';
import ResearchCTA from '@/components/Research/ResearchCTA';

export const metadata = {
  title: 'Research - What the Data Says About the Software You Buy | AI Choice Desk',
  description:
    'Independent studies on how small and mid-sized businesses choose, use and drop AI software. Every figure is sourced, dated, and re-checked on a schedule.',
};

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <TopicMap />
      <DataSnapshot />
      <ResearchLibrary />
      <MarketTrends />
      <EvidenceLayers />
      <Methodology />
      <KeyInsight />
      <LatestResearch />
      <ResearchCTA />
    </>
  );
}
