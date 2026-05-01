import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { MesGanhandoFormaSection } from "@/components/landing/MesGanhandoFormaSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FeaturesGridSection } from "@/components/landing/FeaturesGridSection";
import { RegistroSimplesSection } from "@/components/landing/RegistroSimplesSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { DifferentiationSection } from "@/components/landing/DifferentiationSection";
import { CarlaoSection } from "@/components/landing/CarlaoSection";
import { ActivationSection } from "@/components/landing/ActivationSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-linha">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <MesGanhandoFormaSection />
        <BenefitsSection />
        <FeaturesGridSection />
        <RegistroSimplesSection />
        <AudienceSection />
        <DifferentiationSection />
        <CarlaoSection />
        <ActivationSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
