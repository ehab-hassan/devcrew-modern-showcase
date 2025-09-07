import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-primary bg-clip-text text-transparent">
              DevCrew
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Your trusted outsourcing partner for world-class software development.
          </p>
          
          <Button
            onClick={scrollToContact}
            size="lg"
            className="gradient-primary text-white font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-400"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
    </section>
  );
};

export default Hero;