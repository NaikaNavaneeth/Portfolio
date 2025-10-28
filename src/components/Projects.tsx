import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "SmartClaim",
    description:
      "AI + Blockchain-powered health insurance claim system. Uses OCR, NLP, and smart contracts for instant, auditable claim processing.",
    tech: ["React", "Node.js", "Blockchain", "AI"],
    github: "https://github.com/NaikaNavaneeth/Smart_Insurance_Claims",
    impact: "Minutes vs. days processing",
  },
  {
    title: "Smart E-commerce Assistant",
    description:
      "AI-powered assistant using React, Supabase, and n8n; automated natural language product search, reducing order placement time by 30%.",
    tech: ["React", "n8n", "Supabase", "AI/ML"],
    github: "https://github.com/NaikaNavaneeth/Smart-Ecommerce",
    impact: "30% faster order placement",
  },
  {
    title: "TaskflowX",
    description:
      "Task management platform with live team coordination and analytics dashboards; improved coordination by 25%.",
    tech: ["Node.js", "SQL", "WebSockets", "React"],
    github:
      "https://github.com/NaikaNavaneeth/Employee_task_manager/tree/main/emp-power-plan-master",
    impact: "25% better coordination",
  },
  {
    title: "Library Management (CI/CD)",
    description:
      "Automated Java library system with Jenkins pipelines and JUnit testing; reduced errors by 35%.",
    tech: ["Java", "Jenkins", "JUnit", "Docker"],
    github: "https://github.com/NaikaNavaneeth/CI-CD-using-Jenkins",
    impact: "35% error reduction",
  },
  {
    title: "Farmer Guidance Interface",
    description:
      "Python-based GUI system for personalized crop advice; improved yield potential by 20%.",
    tech: ["Python", "SQL", "Tkinter", "ML"],
    github: "https://github.com/NaikaNavaneeth/Farmer-Guidance-Interface",
    impact: "20% yield improvement",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="relative h-[420px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full md:w-3/4"
            >
              <Card className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all group shadow-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {projects[current].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[current].description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projects[current].tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary/70"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <span className="text-sm text-primary font-medium">
                      {projects[current].impact}
                    </span>
                    {projects[current].github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:text-primary"
                        onClick={() =>
                          window.open(projects[current].github, "_blank")
                        }
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
