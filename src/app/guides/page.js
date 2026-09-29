import GuidesHero from '@/components/Guides/GuidesHero';
import TopicTabs from '@/components/Guides/TopicTabs';
import FeaturedGuide from '@/components/Guides/FeaturedGuide';
import StartHere from '@/components/Guides/StartHere';
import LearnByDoing from '@/components/Guides/LearnByDoing';
import MoreGuides from '@/components/Guides/MoreGuides';
import InsideGuide from '@/components/Guides/InsideGuide';
import QuickAnswers from '@/components/Guides/QuickAnswers';
import GuidesCTA from '@/components/Guides/GuidesCTA';

export const metadata = {
  title: 'AI Guides - AI Made Simpler | AI Choice Desk',
  description:
    'Practical guides to help you understand AI, choose the right software, and make smarter technology decisions.',
};

export default function GuidesPage() {
  return (
    <>
      <GuidesHero />
      <TopicTabs />
      <FeaturedGuide />
      <StartHere />
      <LearnByDoing />
      <MoreGuides />
      <InsideGuide />
      <QuickAnswers />
      <GuidesCTA />
    </>
  );
}
