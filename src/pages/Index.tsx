import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturesGridSection } from "@/components/landing/FeaturesGridSection";
import { CarlaoSection } from "@/components/landing/CarlaoSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ActivationSection } from "@/components/landing/ActivationSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-background selection:bg-[#F7E135] selection:text-black pb-32 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesGridSection />
        <CarlaoSection />
        <TestimonialsSection />
        <ActivationSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
