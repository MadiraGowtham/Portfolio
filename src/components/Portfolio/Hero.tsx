import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            Welcome to my portfolio
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Gowtham Madira
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Full Stack Developer & Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and building scalable applications. 
            Experienced in modern technologies and committed to delivering high-quality software.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/MadiraGowtham"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-lg hover:shadow-glow"
          >
            <Github className="w-6 h-6 text-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/gowtham-madira-8478521b4"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-lg hover:shadow-glow"
          >
            <Linkedin className="w-6 h-6 text-foreground" />
          </a>
          <a
            href="mailto:madiragowtham19@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-lg hover:shadow-glow"
          >
            <Mail className="w-6 h-6 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;