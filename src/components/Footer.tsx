import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-section">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Building innovative solutions with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/NaikaNavaneeth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/navaneeth-naika-32b4a3281/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary/50 rounded-lg hover:bg-accent/10 hover:text-accent transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:naikanavaneeth@gmail.com"
                className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Naika Navaneeth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
