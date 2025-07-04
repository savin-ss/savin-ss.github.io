import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Youtube, MapPin, Phone, Calendar, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "savinsreenu588@gmail.com",
      href: "mailto:savinsreenu588@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8714877597",
      href: "tel:+918714877597",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thrissur, Kerala / Karnataka, India",
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@savin-s-s",
      href: "https://www.linkedin.com/in/savin-s-s/",
      color: "hover:text-[#0077B5]",
      gradient: "bg-gradient-to-r from-[#0077B5] to-[#00A0DC]"
    },
    {
      icon: Github,
      label: "GitHub",
      username: "@savin-ss",
      href: "https://github.com/savin-ss/",
      color: "hover:text-foreground",
      gradient: "bg-gradient-to-r from-gray-700 to-gray-900"
    },
    {
      icon: Youtube,
      label: "YouTube",
      username: "@savintechhacks",
      href: "https://www.youtube.com/@savintechhacks",
      color: "hover:text-[#FF0000]",
      gradient: "bg-gradient-to-r from-[#FF0000] to-[#FF4500]"
    },
    {
      icon: Mail,
      label: "Email",
      username: "savinsreenu588@gmail.com",
      href: "mailto:savinsreenu588@gmail.com",
      color: "hover:text-[#1DA1F2]",
      gradient: "bg-gradient-to-r from-[#1DA1F2] to-[#1991DB]"
    }
  ];

  const researchAreas = [
    "Adversarial Robustness in Deep Learning",
    "Secure Multi-Party ML Training",
    "Neural Architecture Search for Edge Devices",
    "AI Ethics & Responsible AI",
    "Cybersecurity Automation",
    "Explainable AI Systems"
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            🌐 Connect & Collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's build the future together! Open to research collaborations, project partnerships, and innovative opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Mail className="h-5 w-5" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 group cursor-pointer hover:bg-muted/20 p-2 rounded-md transition-all"
                  onClick={() => contact.href !== '#' && window.open(contact.href, '_blank')}
                >
                  <contact.icon className={`h-4 w-4 ${contact.color} group-hover:scale-110 transition-transform`} />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-sm font-medium">{contact.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Linkedin className="h-5 w-5" />
                Social Media
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/10 hover:bg-muted/20 transition-all group cursor-pointer" onClick={() => window.open(social.href, '_blank')}>
                  <div className="flex items-center gap-3">
                    <social.icon className={`h-4 w-4 ${social.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.username}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:bg-primary/20 group-hover:text-primary"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Calendar className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="cyber" 
                className="w-full justify-start"
                onClick={() => window.open('https://docs.google.com/document/d/1zNIvJRuPAf0BcyCfILBY6_cLF4tpsiUz/edit?usp=sharing&ouid=113252526299384239046&rtpof=true&sd=true', '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <Button 
                variant="outline-cyber" 
                className="w-full justify-start"
                onClick={() => window.open('https://github.com/savin-ss/', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button 
                variant="tech" 
                className="w-full justify-start"
                onClick={() => window.open('mailto:savinsreenu588@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Research Areas */}
        <Card className="bg-card/20 backdrop-blur-sm border-primary/20 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl bg-gradient-ai bg-clip-text text-transparent">
              🔬 Current Research & Innovation Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-md bg-muted/10 hover:bg-primary/10 hover:border-primary transition-all border border-transparent">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gradient-cyber rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            💡 Want to collaborate on groundbreaking AI projects?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Whether you're interested in AI research, need a full-stack solution, or want to discuss cybersecurity innovations, I'm always excited to connect with fellow innovators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90"
              onClick={() => window.open('mailto:savinsreenu588@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Start Conversation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('https://www.linkedin.com/in/savin-s-s/', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl font-semibold text-muted-foreground italic">
            "In AI We Trust, In Code We Create, In Innovation We Thrive"
          </blockquote>
          <div className="flex justify-center mt-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
              - Savin S S
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;