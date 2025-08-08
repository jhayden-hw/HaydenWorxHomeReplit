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
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            From Vision to Reality
            <span className="block text-accent">Your Dream Home Awaits</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expert home design consulting, residential project management, and interior design services in Gainesville, GA. 
            Led by Jeff Hayden with years of construction expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-charcoal hover:bg-accent/90 text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("services")}
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4"
            >
              Our Services
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-gray-200">
            <div className="flex items-center">
              <Phone className="mr-3 h-5 w-5 text-accent" />
              <span>(770) 905-9343</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 h-5 w-5 text-accent" />
              <span>info@haydenworx.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 h-5 w-5 text-accent" />
              <span>Gainesville, GA 30506</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
