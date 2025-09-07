import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from '../assets/devcrew_logo.png'; // <-- replace with your logo path

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={logo}
              alt="ThreeFold Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-6' : 'h-6'
              }`}
            />
            {/* DevCrew */}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-foreground/100 text-md transition-colors"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-foreground/100 text-md transition-colors"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("values")}
              className="text-foreground/100 text-md transition-colors"
            >
              Values
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground/100 text-md transition-colors"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;