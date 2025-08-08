import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Jeff Hayden</h2>
            <p className="text-xl text-gray-200 mb-6">
              With over a decade of experience in construction and design, Jeff Hayden founded Haydenworx 
              to provide homeowners with expert guidance throughout their construction journey.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From initial design concepts to final project completion, Jeff's hands-on approach and 
              attention to detail ensure that every project meets the highest standards of quality and craftsmanship. 
              His commitment to clear communication and transparent processes has earned the trust of homeowners 
              throughout Gainesville and the surrounding areas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-accent text-lg mb-2">Years of Experience</h4>
                  <p className="text-3xl font-bold">10+</p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-accent text-lg mb-2">Projects Completed</h4>
                  <p className="text-3xl font-bold">150+</p>
                </CardContent>
              </Card>
            </div>
            
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-charcoal hover:bg-accent/90">
                Schedule Consultation
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Jeff Hayden, Construction Consultant" 
              className="rounded-xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
