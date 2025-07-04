import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "AI Bug Bounty Triage Tool",
      description: "Flask + React app using NLP for vulnerability classification and real-time security alerts",
      category: "AI/ML + Cybersecurity",
      tech: ["Python", "Flask", "React", "NLP", "TensorFlow"],
      status: "Live",
      gradient: "bg-gradient-cyber",
      icon: "🤖"
    },
    {
      title: "NLP Essay Scoring System", 
      description: "Web app analyzing grammar, coherence, and vocabulary using advanced NLP techniques",
      category: "Natural Language Processing",
      tech: ["React", "TypeScript", "Python", "scikit-learn"],
      status: "Live",
      gradient: "bg-gradient-tech",
      icon: "📝"
    },
    {
      title: "Smart Indoor Plant Care",
      description: "ML-driven system using sensors for automated plant monitoring and care",
      category: "IoT + Machine Learning",
      tech: ["Python", "IoT Sensors", "Machine Learning", "Arduino"],
      status: "Live",
      gradient: "bg-gradient-ai",
      icon: "🌱"
    },
    {
      title: "Facial Recognition Cybersecurity System",
      description: "Hackathon project for secure access and real-time security alerts",
      category: "Computer Vision + Security", 
      tech: ["Python", "OpenCV", "Deep Learning", "Flask"],
      status: "Demo",
      gradient: "bg-gradient-dark",
      icon: "🔐"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing neural network architectures and training processes",
      category: "Data Visualization",
      tech: ["JavaScript", "D3.js", "Python", "TensorFlow"],
      status: "Beta",
      gradient: "bg-gradient-cyber",
      icon: "🧠"
    },
    {
      title: "Flutter AI Chat Assistant",
      description: "Cross-platform mobile app with integrated AI chat capabilities",
      category: "Mobile Development",
      tech: ["Flutter", "Dart", "Firebase", "AI APIs"],
      status: "Live",
      gradient: "bg-gradient-tech",
      icon: "💬"
    }
  ];

  const achievements = [
    { title: "Best AI Innovation Award", year: "2024", category: "Research" },
    { title: "Top Open Source Contributor", year: "2024", category: "Community" },
    { title: "Cybersecurity Excellence", year: "2023", category: "Security" },
    { title: "Student Researcher of the Year", year: "2023", category: "Academic" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
            🚀 Featured Projects & Innovations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI solutions, full-stack applications, and cybersecurity tools built with passion and precision
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-cyber transition-all duration-300 group overflow-hidden">
              <CardHeader className="relative">
                <div className={`absolute inset-0 ${project.gradient} opacity-10`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {project.icon}
                    </span>
                    <Badge 
                      variant={project.status === 'Live' ? 'default' : 'secondary'}
                      className={project.status === 'Live' ? 'bg-tech-green' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-2">
                    {project.category}
                  </CardDescription>
                  <p className="text-sm text-foreground/80">{project.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-muted/20 hover:bg-primary/20 hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn"
                    onClick={() => window.open('https://github.com/savin-ss/', '_blank')}
                  >
                    <Play className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                    Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn"
                    onClick={() => window.open('https://github.com/savin-ss/', '_blank')}
                  >
                    <Github className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn"
                    onClick={() => window.open('https://github.com/savin-ss/', '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-dark rounded-lg p-8">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-cyber bg-clip-text text-transparent">
            🏆 Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/20 backdrop-blur-sm border-border/30 text-center hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{achievement.year}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;