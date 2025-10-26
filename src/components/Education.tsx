import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 card-gradient border-border/50 hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-lg text-primary mb-2">
                  Mahatma Gandhi Institute of Technology
                </p>
                <p className="text-muted-foreground">2022 - Present</p>
              </div>
            </div>
            <div className="pt-4 border-t border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">CGPA</span>
                <Badge className="bg-gradient-primary text-white text-lg px-4 py-1">
                  9.1 / 10.0
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient border-border/50 hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Publications</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                <h4 className="font-semibold mb-1">
                  TaskflowX – Intelligent Task Management System
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  HBRP Publications
                </p>
                <Badge variant="secondary" className="text-xs">
                  July 2025
                </Badge>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                <h4 className="font-semibold mb-1">
                  Farmer Guidance Interface
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  HBRP Publications
                </p>
                <Badge variant="secondary" className="text-xs">
                  July 2024
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
