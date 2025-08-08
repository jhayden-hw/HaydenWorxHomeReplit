import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
