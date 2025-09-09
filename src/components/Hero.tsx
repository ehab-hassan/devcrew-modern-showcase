import { Button } from "@/components/ui/button";
import logo from '../assets/devcrew_logo.png'; // <-- replace with your logo path


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
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/bg_video5.mp4" type="video/mp4" />

      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-2"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
          <h1 className="text-5xl md:text-8xl font-bold mb-2 animate-fade-in">
            <span className="bg-clip-text">
              DevCrew
            </span>
          </h1>
          <p className="text-md capitalize">We turn technology into growth for your business.</p>
          </div>
          <p className="text-xl md:text-2xl text-white capitalize mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
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