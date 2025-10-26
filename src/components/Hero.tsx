import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-developer.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-6 animate-slide-in-left">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Naika Navaneeth</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
              Software Engineer
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Passionate about AI-driven innovation and building scalable full-stack solutions. 
            Specializing in intelligent system development with a focus on modern technologies 
            and DevOps practices.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Right Column - Illustration */}
        <div className="relative animate-fade-in-up hidden lg:block">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
            <img 
              src={heroImage} 
              alt="Developer working on computer with headphones" 
              className="relative w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-75" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
