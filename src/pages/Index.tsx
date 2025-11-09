import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Gasp from "@/components/Gasp";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
