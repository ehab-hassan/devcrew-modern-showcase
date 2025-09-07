import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Managed Services",
      description: "End-to-end IT operations support to keep your business running smoothly."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Assigned Team",
      description: "Dedicated developers working as an extension of your in-house team."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Full Projects",
      description: "Complete software solutions delivered from idea to launch."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
            We provide comprehensive software development solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-500 hover:shadow-card hover:-translate-y-3 hover:scale-[1.02] shadow-soft border-border/50 animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 300}ms` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-500">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;