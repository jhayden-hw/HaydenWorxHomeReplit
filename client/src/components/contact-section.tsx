import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch today for a free consultation. Let's discuss your vision and how we can bring it to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent text-charcoal p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-200">(770) 905-9343</p>
                  <p className="text-sm text-gray-300">Available Mon-Fri, 8am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent text-charcoal p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-200">info@haydenworx.com</p>
                  <p className="text-sm text-gray-300">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent text-charcoal p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Service Area</h4>
                  <p className="text-gray-200">3629 Gainesville, GA 30506</p>
                  <p className="text-sm text-gray-300">Serving North Georgia</p>
                </div>
              </div>
            </div>
            
            <Card className="mt-8 bg-white bg-opacity-10 border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Free Consultation</h4>
                <p className="text-gray-200">
                  Schedule a complimentary consultation to discuss your project goals, timeline, and budget. 
                  No obligation, just expert advice tailored to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Start Your Project Today</h3>
            <p className="text-gray-600 mb-8">
              Ready to transform your home? Contact us for a detailed consultation where we'll discuss your vision, 
              timeline, and budget. Our comprehensive contact form on the next page will help us understand your 
              specific needs and provide you with the most accurate project assessment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-charcoal">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center text-charcoal">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Detailed project assessment</span>
              </div>
              <div className="flex items-center text-charcoal">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center text-charcoal">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Licensed and insured</span>
              </div>
            </div>
            
            <Link href="/contact" className="block">
              <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                Get Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
