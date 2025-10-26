import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Zap } from "lucide-react";

const hackathons = [
  {
    icon: Trophy,
    event: "GenAI Buildathon",
    year: "2025",
    project: "SmartClaim",
    description: "Built a blockchain + AI-powered health insurance claims platform that automates claims processing using AI and BT.",
    achievement: "Selected to State Level Buildathon"
  },
  {
    icon: Award,
    event: "Walmart Hackathon",
    year: "2025",
    project: "Smart E-commerce",
    description: "Built a smart e-commerce site with AI-based personalized recommendations; improved interface efficiency by 30%.",
    achievement: "Good Idea Recognition"
  },
  {
    icon: Zap,
    event: "Amazon ML Hackathon",
    year: "2024",
    project: "OCR Data Extractor",
    description: "Developed OCR-based data extractor for automated claim form structuring using Tesseract and regex.",
    achievement: "In top 300 teams"
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 px-4 bg-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathon <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hack, index) => {
            const Icon = hack.icon;
            return (
              <Card 
                key={index} 
                className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all hover-lift group"
              >
                <div className="text-center mb-4">
                  <div className="inline-block p-4 bg-gradient-primary rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {hack.year}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center">
                  {hack.event}
                </h3>
                
                <div className="text-center mb-3">
                  <span className="text-accent font-medium">{hack.project}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {hack.description}
                </p>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-primary text-sm font-medium text-center">
                    🏆 {hack.achievement}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
