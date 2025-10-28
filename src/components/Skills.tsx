import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench, Lightbulb, CodeSquare } from "lucide-react";

const skillCategories = [
  { icon: Code2, title: "Languages", skills: ["Java", "Python"] },
  { icon: CodeSquare, title: "Frameworks", skills: ["Spring", "Springboot"] },
  { icon: Database, title: "Databases", skills: ["MySQL", "MongoDB", "Supabase"] },
  { icon: Cloud, title: "DevOps & Cloud", skills: ["Git", "Jenkins", "CI/CD"] },
  { icon: Wrench, title: "Tools", skills: ["Postman", "XAMPP", "PowerBI"] },
  { icon: Lightbulb, title: "Core Concepts", skills: ["DSA", "DBMS", "OOP"] },
];

const Skills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".float-card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("paused");
      });
    });
  }, []);

  return (
    <section id="skills" className="py-24 px-4 bg-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="float-card p-6 card-gradient border-border/50 hover:border-primary/50 transition-all hover-lift group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
