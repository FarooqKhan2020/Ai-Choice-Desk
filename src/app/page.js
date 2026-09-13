import Hero from "../components/Home/Hero";
import CategoryCards from "../components/Home/CategoryCards";
import TrendingTools from "../components/Home/TrendingTools";
import ScoringMethod from "../components/Home/ScoringMethod";
import ToolFinder from "../components/Home/ToolFinder";
import TheDesk from "../components/Home/TheDesk";
import NewsletterSignup from "../components/Home/NewsletterSignup";
import BlogSection from "../components/Home/BlogSection";
import TrustSection from "../components/Home/TrustSection";
import HeadToHead from "../components/Home/HeadToHead";
import FinalCTA from "../components/Home/FinalCTA";

const HomePage = () => {
  return (
    <>
        <Hero />
        <CategoryCards />
        <TrendingTools />
        <ScoringMethod />
        <TrustSection />
        <BlogSection />
        <ToolFinder />
        <TheDesk />
        <NewsletterSignup />
        <HeadToHead />
        <FinalCTA />
    </>
  );
};

export default HomePage;    