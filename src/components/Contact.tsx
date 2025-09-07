import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Let's <span className="bg-clip-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up animation-delay-200">
              Ready to start your next project? Let's build something great together.
            </p>
          </div>
          
          <Card className="shadow-card border-border/50 animate-scale-in animation-delay-400">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up animation-delay-600">
                <div className="space-y-2 animate-fade-in animation-delay-800">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="transition-all duration-300 focus:shadow-soft hover:scale-[1.01]"
                  />
                </div>
                
                <div className="space-y-2 animate-fade-in animation-delay-1000">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="transition-all duration-300 focus:shadow-soft hover:scale-[1.01]"
                  />
                </div>
                
                <div className="space-y-2 animate-fade-in animation-delay-1200">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    className="resize-none transition-all duration-300 focus:shadow-soft hover:scale-[1.01]"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full gradient-primary text-white font-semibold py-3 shadow-glow hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-scale-in animation-delay-1400"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;