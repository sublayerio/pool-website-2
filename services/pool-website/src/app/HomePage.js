import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import SpecsSection from "./SpecsSection";
import WhyMeSection from "./WhyMeSection";
import AboutMeSection from "./AboutMeSection";
import Layout from "./Layout";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AboutMeSection />
      <WhyMeSection />
      <SpecsSection />
      <FAQSection />
    </Layout>
  );
}
