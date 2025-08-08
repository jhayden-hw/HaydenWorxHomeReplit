import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Hammer, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Hammer className="text-primary mr-2 h-8 w-8" />
              <span className="text-2xl font-bold text-primary">Haydenworx</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-charcoal hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-charcoal hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-charcoal hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-charcoal hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary w-full text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary w-full text-left"
            >
              Testimonials
            </button>
            <Link href="/contact" className="block px-3 py-2">
              <Button className="w-full bg-primary text-white">Contact</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
