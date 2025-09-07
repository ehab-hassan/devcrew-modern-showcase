import { CheckCircle, Shield, Lightbulb } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: <CheckCircle className="w-10 h-10 text-accent" />,
      title: "Commitments",
      description: "We don’t just meet deadlines — we honor our promises. Our team is dedicated to delivering projects on time, with quality that consistently exceeds expectations. Every milestone is treated with care, ensuring reliability you can trust."
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Integrity",
      description: "We believe in building relationships on a foundation of honesty and transparency. From clear communication to ethical practices, integrity shapes the way we work with clients, partners, and team members alike."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-accent" />,
      title: "Innovation",
      description: "Technology moves fast, and so do we. By embracing modern tools and fresh ideas, we craft solutions that aren’t just relevant today, but ready for the future. Innovation is at the core of everything we create."
    }
  ];

  return (
    <section id="values" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-clip-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
            These core principles drive everything we do and shape our approach to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 300}ms` }}
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 rounded-full bg-card shadow-soft group-hover:shadow-card transition-all duration-300">
                  {value.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;