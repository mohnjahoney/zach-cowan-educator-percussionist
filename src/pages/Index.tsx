import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MathSection from "@/components/MathSection";
import DrummingSection from "@/components/DrummingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <HeroSection />
      <MathSection />
      <DrummingSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
