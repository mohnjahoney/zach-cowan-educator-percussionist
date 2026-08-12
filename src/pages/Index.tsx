import Navigation from "@/components/Navigation";
import LeftAccent from "@/components/LeftAccent";
import HeroSection from "@/components/HeroSection";
import MathSection from "@/components/MathSection";
import DrummingSection from "@/components/DrummingSection";
// import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <LeftAccent />
    <Navigation />
    <main className="relative z-10">
      <HeroSection />
      <MathSection />
      <DrummingSection />
      {/* <AboutSection /> */}
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
