import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-secondary text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="bg-black bg-opacity-75 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              From Vision to Reality
              <span className="block text-accent">Your Dream Home Awaits</span>
            </h1>
            <p className="text-lg mb-6 text-gray-100">
              Expert home design consulting, residential project management, and interior design services in Gainesville, GA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button className="bg-accent text-charcoal hover:bg-accent/90 px-6 py-3">
                  Get Free Consultation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("services")}
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-6 py-3"
              >
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col sm:flex-row gap-4 text-gray-100 text-sm">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-accent" />
                <span>(770) 905-9343</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-accent" />
                <span>info@haydenworx.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-accent" />
                <span>Gainesville, GA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
