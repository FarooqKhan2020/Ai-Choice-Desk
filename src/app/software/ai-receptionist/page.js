import HeroSection from '@/components/AiReceptionist/HeroSection';
import CategorySnapshot from '@/components/AiReceptionist/CategorySnapshot';
import ProductComparison from '@/components/AiReceptionist/ProductComparison';
import ConsistentLens from '@/components/AiReceptionist/ConsistentLens';
import FindRightFit from '@/components/AiReceptionist/FindRightFit';
import BuyingGuide from '@/components/AiReceptionist/BuyingGuide';
import RelatedReading from '@/components/AiReceptionist/RelatedReading';
import Newsletter from '@/components/AiReceptionist/Newsletter';

export const metadata = {
  title: 'AI Receptionists - AI Choice Desk',
  description: 'AI receptionists answer, route, and follow up on calls when your team cannot. Compare four tracked platforms for small businesses, agencies, and service teams.',
};

export default function AIReceptionistPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategorySnapshot />
      <ProductComparison />
      <ConsistentLens />
      <FindRightFit />
      <BuyingGuide />
      <RelatedReading />
      <Newsletter />
    </main>
  );
}
