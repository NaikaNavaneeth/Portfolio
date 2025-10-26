import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer (Java Developer)",
    company: "Cotiviti",
    duration: "Jan 2024 - Present",
    description: "Developed scalable backend APIs and CI/CD pipelines using Java, Spring Boot, Jenkins, and Docker. Improved deployment speed by 40%.",
    tags: ["Java", "Spring", "Spring Boot", "Angular"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8 relative before:absolute before:left-8 before:top-8 before:bottom-8 before:w-0.5 before:bg-gradient-primary before:hidden md:before:block">
          {experiences.map((exp, index) => (
            <div key={index} className="relative md:pl-20">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50" />
              
              <Card className="p-6 md:p-8 card-gradient border-border/50 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary/70"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
