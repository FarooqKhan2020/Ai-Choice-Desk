import { CalculatorProvider } from '@/components/Calculators/CalculatorProvider';
import CalculatorsHero from '@/components/Calculators/CalculatorsHero';
import FeaturedCalculator from '@/components/Calculators/FeaturedCalculator';
import HowItWorks from '@/components/Calculators/HowItWorks';
import QuickCalculators from '@/components/Calculators/QuickCalculators';
import ImpactSnapshot from '@/components/Calculators/ImpactSnapshot';
import AllCalculators from '@/components/Calculators/AllCalculators';
import HowWeCalculate from '@/components/Calculators/HowWeCalculate';
import ResultCard from '@/components/Calculators/ResultCard';
import CalculatorsCTA from '@/components/Calculators/CalculatorsCTA';

export const metadata = {
  title: 'AI Calculators for Smarter Decisions | AI Choice Desk',
  description:
    'Use simple, practical calculators to estimate costs, compare options, measure impact, and make better software decisions.',
};

export default function CalculatorsPage() {
  return (
    <CalculatorProvider>
      <CalculatorsHero />
      <FeaturedCalculator />
      <HowItWorks />
      <QuickCalculators />
      <ImpactSnapshot />
      <AllCalculators />
      <HowWeCalculate />
      <ResultCard />
      <CalculatorsCTA />
    </CalculatorProvider>
  );
}
