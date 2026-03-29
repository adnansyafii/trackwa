import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import LossSection from "@/components/sections/LossSection";
import SolutionIntroSection from "@/components/sections/SolutionIntroSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PlatformSection from "@/components/sections/PlatformSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TrustSection from "@/components/sections/TrustSection";
import AboutFounderSection from "@/components/sections/AboutFounderSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <LossSection />
    <SolutionIntroSection />
    <PlatformSection />
    <SolutionSection />
    <HowItWorksSection />
    <BenefitsSection />
    <TrustSection />
    <AboutFounderSection />
    <CTASection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
