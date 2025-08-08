import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Modern Kitchen Renovation",
      description: "Complete kitchen remodel featuring custom cabinetry, quartz countertops, and modern appliances.",
      location: "Gainesville, GA",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Luxury Master Bath",
      description: "Spa-like master bathroom with marble finishes, custom vanity, and rainfall shower system.",
      location: "Flowery Branch, GA",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Open Concept Living",
      description: "Contemporary living space featuring custom built-ins, stone fireplace, and vaulted ceilings.",
      location: "Buford, GA",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Outdoor Living Space",
      description: "Multi-level deck and patio area perfect for entertaining and outdoor relaxation.",
      location: "Lake Lanier, GA",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Custom Home Office",
      description: "Productive workspace with custom built-in desk, storage solutions, and natural lighting.",
      location: "Oakwood, GA",
      image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Elegant Dining Room",
      description: "Sophisticated dining space featuring coffered ceilings, custom millwork, and designer lighting.",
      location: "Cumming, GA",
      image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent successful projects that showcase our commitment to quality, 
            innovation, and client satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-neutral shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{project.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
