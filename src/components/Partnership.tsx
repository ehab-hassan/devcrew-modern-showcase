import { Users2, Target, Handshake } from "lucide-react";

const Partnership = () => {
  return (
    <section id="Partnership" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Partnership <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> With </span>
          </h2>
          <img 
                src="/assets/odoo_logo.png" 
                alt="DevCrew team collaboration and innovation"
                className="mt-4 md:mt-0 mx-4 h-[40px] object-contain transition-transform duration-700 hover:scale-105"
              />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200 mt-4 mb-8">
            Empowering businesses with powerful ERP solutions
          </p>
          <div className="items-center space-y-8 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                <span className="text-foreground font-semibold">DevCrew</span> is proud to be an official <span className="text-foreground font-semibold">Odoo partner</span>. Through this collaboration, we bring businesses the flexibility and efficiency of one of the world’s most trusted ERP systems. From sales and inventory to HR and finance, Odoo provides an all-in-one platform that adapts to the unique needs of every organization
            </p>
          </div>
      </div>
    </section>
  );
};

export default Partnership;