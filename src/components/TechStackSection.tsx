import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "AI/ML & Deep Learning",
      icon: "🧠",
      gradient: "bg-gradient-cyber",
      techs: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras", "Pandas", "NumPy"]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "bg-gradient-tech",
      techs: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Dart", "SQL", "Bash"]
    },
    {
      title: "Web & Mobile Development",
      icon: "📱",
      gradient: "bg-gradient-ai",
      techs: ["React", "Flutter", "Node.js", "Express", "FastAPI", "React Native", "HTML5", "CSS3"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      gradient: "bg-gradient-dark",
      techs: ["Azure", "AWS", "Docker", "Kubernetes", "Git", "GitHub Actions", "Linux", "Firebase"]
    },
    {
      title: "Databases & Tools",
      icon: "🗄️",
      gradient: "bg-gradient-cyber",
      techs: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Postman", "VS Code", "Jupyter", "Figma"]
    },
    {
      title: "Cybersecurity",
      icon: "🔒",
      gradient: "bg-gradient-tech",
      techs: ["OWASP", "Penetration Testing", "Network Security", "Cryptography", "Wireshark", "Metasploit", "Nmap", "Burp Suite"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            💻 Tech Arsenal & AI Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology stack spanning AI/ML, full-stack development, cybersecurity, and cloud computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-cyber transition-all duration-300 group overflow-hidden">
              <CardHeader className="relative">
                <div className={`absolute inset-0 ${category.gradient} opacity-10`}></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.techs.length} technologies
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="bg-muted/20 hover:bg-primary/20 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tech Highlights */}
        <div className="mt-16 text-center">
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">🔥 Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Python", "TensorFlow", "React", "Flutter", "Azure", "Docker"].map((tech, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-base bg-gradient-ai hover:shadow-glow-primary transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;