import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Phone, Mail, MapPin, Hammer } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We will contact you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Hammer className="text-primary mr-2 h-8 w-8" />
              <span className="text-2xl font-bold text-primary">Haydenworx</span>
            </Link>
            <Link href="/" className="flex items-center text-charcoal hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Contact Haydenworx</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch for a free consultation and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-charcoal">Phone</h3>
                    <p className="text-gray-600">(770) 905-9343</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-charcoal">Email</h3>
                    <p className="text-gray-600">info@haydenworx.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-charcoal">Service Area</h3>
                    <p className="text-gray-600">3629 Gainesville, GA 30506</p>
                    <p className="text-sm text-gray-500">Serving North Georgia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Free Consultation</h3>
                <p className="text-gray-200">
                  Schedule a complimentary consultation to discuss your project goals, timeline, and budget. 
                  No obligation, just expert advice tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-charcoal mb-3">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Gainesville</div>
                  <div>• Flowery Branch</div>
                  <div>• Buford</div>
                  <div>• Oakwood</div>
                  <div>• Cumming</div>
                  <div>• Lake Lanier</div>
                  <div>• Commerce</div>
                  <div>• Dahlonega</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We will contact you within 24 hours.</p>
                  </div>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="home-design">Home Design Consulting</SelectItem>
                              <SelectItem value="project-management">Residential Project Management</SelectItem>
                              <SelectItem value="interior-design">Interior Design Services</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us about your project, timeline, and any specific requirements..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
