import { Users2, Target, Handshake } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-scale-in animation-delay-200">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto animate-fade-in animation-delay-400"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up animation-delay-200">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-400">
                At <span className="text-foreground font-semibold">DevCrew</span>, we are a team of experienced engineers and developers dedicated to the success of our customers. With a strong commitment to quality and innovation, we work side by side with our clients to design, build, and deliver reliable software solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-500">
                Our main goal is to help businesses harness the power of technology to achieve their objectives, streamline operations, and create real value. Whether through managed services, assigned teams, or complete project delivery, we ensure that every solution is tailored to meet our clients' unique needs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-600">
                With integrity, expertise, and a customer-first approach, DevCrew is your trusted partner in turning ideas into impactful results.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid gap-4 mt-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 transition-all duration-500 hover:bg-card hover:shadow-md hover:scale-[1.02] animate-slide-up animation-delay-700">
                <Users2 className="w-6 h-6 text-primary mt-1 flex-shrink-0 animate-scale-in animation-delay-800" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experienced Team</h4>
                  <p className="text-sm text-muted-foreground">Engineers and developers with proven expertise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 transition-all duration-500 hover:bg-card hover:shadow-md hover:scale-[1.02] animate-slide-up animation-delay-800">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0 animate-scale-in animation-delay-900" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">Focused on helping businesses achieve their objectives</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 transition-all duration-500 hover:bg-card hover:shadow-md hover:scale-[1.02] animate-slide-up animation-delay-900">
                <Handshake className="w-6 h-6 text-primary mt-1 flex-shrink-0 animate-scale-in animation-delay-1000" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Trusted Partnership</h4>
                  <p className="text-sm text-muted-foreground">Customer-first approach with integrity and expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-up animation-delay-600">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-scale-in animation-delay-700 hover:shadow-glow transition-all duration-700">
              <img 
                src="/src/assets/about_3.png" 
                alt="DevCrew team collaboration and innovation"
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105 animate-fade-in animation-delay-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent animate-fade-in animation-delay-900"></div>
            </div>
            
            {/* Floating Stats Cards - Enabled with animations */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border animate-slide-up animation-delay-1000 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary animate-scale-in animation-delay-1100">50+</div>
                <div className="text-sm text-muted-foreground animate-fade-in animation-delay-1200">Projects Delivered</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border animate-slide-up animation-delay-1100 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent animate-scale-in animation-delay-1200">10+</div>
                <div className="text-sm text-muted-foreground animate-fade-in animation-delay-1300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;