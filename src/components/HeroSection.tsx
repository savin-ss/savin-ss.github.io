import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Youtube, FileText } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-cyber bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                Savin S S
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
                <p className="bg-gradient-ai bg-clip-text text-transparent font-semibold">
                  AI Architect & Universe Builder
                </p>
                <p>Shaping Tomorrow with AI & Innovation</p>
              </div>
            </div>

            {/* Animated Typing Effect */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center space-x-2 text-sm font-mono">
                <span className="text-tech-green">$</span>
                <span className="text-muted-foreground">whoami</span>
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">●</span>
                  <span>AI & ML Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-secondary">●</span>
                  <span>Cybersecurity Explorer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-accent">●</span>
                  <span>Full-stack & Flutter Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-tech-green">●</span>
                  <span>B.Tech AI Student @ P.A. College of Engineering</span>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="cyber" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://docs.google.com/document/d/1zNIvJRuPAf0BcyCfILBY6_cLF4tpsiUz/edit?usp=sharing&ouid=113252526299384239046&rtpof=true&sd=true', '_blank')}
              >
                <FileText className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View Resume
              </Button>
              <Button 
                variant="outline-cyber" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://github.com/savin-ss/', '_blank')}
              >
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                GitHub Profile
              </Button>
              <Button 
                variant="tech" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://www.linkedin.com/in/savin-s-s/', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:shadow-glow-primary"
                onClick={() => window.open('https://www.linkedin.com/in/savin-s-s/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:shadow-glow-primary"
                onClick={() => window.open('mailto:savinsreenu588@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:shadow-glow-primary"
                onClick={() => window.open('https://www.youtube.com/@savintechhacks', '_blank')}
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:shadow-glow-primary"
                onClick={() => window.open('https://github.com/savin-ss/', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-first">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Neural Network" 
                className="w-full h-auto rounded-lg shadow-cyber animate-pulse-glow"
              />
              <div className="absolute inset-0 bg-gradient-cyber opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;