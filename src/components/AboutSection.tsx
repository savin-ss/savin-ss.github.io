import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const stats = [
    { label: "Years of Coding", value: "5+", color: "text-primary" },
    { label: "AI Projects", value: "20+", color: "text-secondary" },
    { label: "Tech Stack", value: "15+", color: "text-accent" },
    { label: "Certifications", value: "8+", color: "text-tech-green" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
            About Me - The AI Architect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate B.Tech AI student transforming ideas into intelligent solutions through code, 
            research, and innovation. Building the future one algorithm at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Daily Routine Code Block */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">💻 Current Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-muted/20 p-4 rounded-md overflow-x-auto">
                <code className="text-tech-green">{`def get_daily_routine(self):
    return {
        "morning": "Research breakthrough ideas",
        "afternoon": "Code AI solutions", 
        "evening": "Contribute to open source",
        "night": "Dream in algorithms"
    }`}</code>
              </pre>
            </CardContent>
          </Card>

          {/* Journey Metrics */}
          <Card className="bg-card/50 backdrop-blur-sm border-secondary/20">
            <CardHeader>
              <CardTitle className="text-secondary">📈 Journey Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>🐛 Creating bugs since:</span>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary">2019</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>📚 Currently mastering:</span>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">Advanced Deep Learning</Badge>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-accent">🎯 2025 Goals:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Build AI products that matter</li>
                  <li>• Publish impactful research</li>
                  <li>• Contribute to open-source community</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-border">
                <p>🎲 <span className="font-semibold">Fun fact:</span> I automate everything — even making coffee! 🤖☕</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-glow-primary transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;