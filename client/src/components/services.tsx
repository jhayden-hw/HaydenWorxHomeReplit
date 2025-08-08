import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, CheckSquare, Palette, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: "Home Design Consulting",
      description: "Transform your ideas into detailed plans. Our expert design consultation helps you visualize and plan your dream home with professional architectural guidance and creative solutions.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: [
        "Initial Design Consultation",
        "Space Planning & Layout",
        "Material Selection Guidance",
        "Budget Planning"
      ]
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-primary" />,
      title: "Residential Project Management",
      description: "From groundbreaking to final inspection, we oversee every aspect of your construction project. Ensuring timelines, quality, and budget adherence throughout the entire process.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: [
        "Timeline Management",
        "Quality Control",
        "Contractor Coordination",
        "Progress Reporting"
      ]
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Interior Design Services",
      description: "Create stunning interior spaces that reflect your style and enhance your lifestyle. From concept to completion, we handle all aspects of interior design and furnishing.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: [
        "Color Scheme Selection",
        "Furniture & Fixture Planning",
        "Lighting Design",
        "Final Styling"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction consulting services to bring your vision to life with expertise, 
            precision, and attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-neutral shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
