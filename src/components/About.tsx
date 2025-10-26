import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 card-gradient border-border/50 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Profile</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Final-year Computer Science student with a strong foundation in Java, Python, 
                  and full-stack development. Experienced in DevOps and AI-based automation tools. 
                  Passionate about building scalable and impactful software solutions that solve 
                  real-world problems.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient border-border/50 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To leverage cutting-edge technologies and innovative thinking to create 
                  intelligent systems that enhance productivity and drive digital transformation. 
                  Committed to continuous learning and contributing to open-source communities.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
