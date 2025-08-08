import { Link } from "wouter";
import { Hammer, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Hammer className="text-accent mr-2 h-8 w-8" />
              <h3 className="text-2xl font-bold">Haydenworx</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional home design consulting, residential project management, and interior design services 
              in Gainesville, GA. Your trusted partner from vision to reality.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="text-accent mr-2">📍</span>
                3629 Gainesville, GA 30506
              </p>
              <p className="flex items-center">
                <span className="text-accent mr-2">📞</span>
                (770) 905-9343
              </p>
              <p className="flex items-center">
                <span className="text-accent mr-2">✉️</span>
                info@haydenworx.com
              </p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-accent transition-colors"
                >
                  Home Design Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-accent transition-colors"
                >
                  Project Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-accent transition-colors"
                >
                  Interior Design
                </button>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-accent transition-colors"
                >
                  About Jeff
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-accent transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Haydenworx. All rights reserved. | Licensed & Insured
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent transition-colors" title="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors" title="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors" title="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
