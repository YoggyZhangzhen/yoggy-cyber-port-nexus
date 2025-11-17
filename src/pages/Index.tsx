import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mail, Phone, MapPin, Download } from "lucide-react";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I am Yoggy";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    "Python", "C++", "PyTorch", "Machine Learning", "Deep Learning",
    "MySQL", "Redis", "Linux", "TCP/IP", "Git", "Data Structures", "Algorithms"
  ];

  const projects = [
    {
      title: "Text Summarization System",
      description: "BERT, Seq2Seq, Attention mechanism, Pointer-Generator Network, and Beam Search for automotive text summarization with 99% accuracy.",
      tech: ["BERT", "Seq2Seq", "Attention", "Beam Search"],
      github: "https://github.com/IAmYoggy/Abstract"
    },
    {
      title: "Intelligent Medical Consultation System",
      description: "Online medical consultation platform using knowledge graphs with PyTorch, Flask, Redis, and Neo4j for disease analysis and diagnosis.",
      tech: ["PyTorch", "Flask", "Redis", "Neo4j"],
      github: "https://github.com/IAmYoggy/AIDoctor"
    },
    {
      title: "C++ Plants vs. Zombies Game",
      description: "Complete game implementation with Qt framework, advanced memory management, and OOP design patterns.",
      tech: ["C++", "Qt", "Memory Management"],
      github: "https://github.com/YoggyZhangzhen/PVZ"
    },
    {
      title: "QT Cloud Storage Platform",
      description: "Full-stack cloud storage solution with C++, Qt, MySQL backend, and TCP/IP network communication.",
      tech: ["C++", "Qt", "MySQL", "TCP/IP"],
      github: "https://github.com/L-Y-D-0129/YouLian-Cloud-"
    }
  ];

  const experiences = [
    {
      role: "Undergraduate Researcher",
      company: "Agricultural AI Research Lab",
      period: "01/2025 - 06/2025",
      description: "Implemented SWIN Transformer model achieving 99% accuracy for 102 flower species classification with transfer learning optimization."
    },
    {
      role: "Algorithm Engineer",
      company: "Zhejiang Sunny Optoelectronics",
      period: "01/2024 - 03/2024",
      description: "Developed YOLOv5-based QR code recognition system achieving 95% accuracy for industrial applications."
    }
  ];

  const awards = [
    "National Award, Blue Bridge Cup C/C++ Programming Competition (June 2024)",
    "Provincial First Prize, CUMCM (December 2023)",
    "Provincial First Prize, Northeast China Mathematical Contest in Modeling (September 2023)"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cyberpunk city skyline */}
      <div className="fixed bottom-0 left-0 w-full h-64 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center gap-2 px-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-primary/20 to-transparent border-2 border-primary/40 animate-neon-flicker"
              style={{
                height: `${Math.random() * 150 + 50}px`,
                width: `${Math.random() * 30 + 20}px`,
                boxShadow: "0 0 10px hsl(var(--neon-cyan))",
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section - Terminal Style */}
        <section className="mb-20 animate-slide-up">
          <div className="border-2 border-primary rounded-lg p-8 bg-card/50 backdrop-blur-sm"
            style={{
              boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3), inset 0 0 20px hsl(var(--neon-cyan) / 0.1)"
            }}>
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary"
              style={{
                textShadow: "0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))"
              }}>
              {typedText}
              <span className="animate-blink">|</span>
            </h1>
            <p className="text-2xl md:text-3xl text-secondary mb-8"
              style={{
                textShadow: "0 0 10px hsl(var(--neon-magenta))"
              }}>
              Machine Learning Engineer | Top 1% Academic Record
            </p>
            <Button 
              className="bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-primary animate-glow font-bold text-lg px-8 py-6"
              onClick={() => window.open("/Yoggy_CV.pdf", "_blank")}
            >
              <Download className="mr-2" />
              VIEW RESUME
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"
            style={{ textShadow: "0 0 10px hsl(var(--neon-cyan))" }}>
            &gt; About Me
          </h2>
          <div className="border-2 border-secondary rounded-lg p-6 bg-card/30 backdrop-blur-sm"
            style={{ boxShadow: "0 0 15px hsl(var(--neon-magenta) / 0.2)" }}>
            <p className="text-lg leading-relaxed text-foreground/90">
              Top-tier Machine Learning Engineer with a top 1% academic record (top 1/85 in undergraduate class). 
              Currently pursuing Master of Science in Data Science at the University of Glasgow. 
              Proficient in Python (ML development) and C++ (software engineering), skilled at translating complex math into scalable solutions. 
              Led a 20k+ fan technical community on CSDN, demonstrating strong communication and thought leadership.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"
            style={{ textShadow: "0 0 10px hsl(var(--neon-cyan))" }}>
            &gt; Core Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 border-2 border-accent rounded-md bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-all cursor-default"
                style={{
                  boxShadow: "0 0 10px hsl(var(--neon-green) / 0.3)",
                  textShadow: "0 0 5px hsl(var(--neon-green))"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"
            style={{ textShadow: "0 0 10px hsl(var(--neon-cyan))" }}>
            &gt; Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-secondary rounded-lg p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all group cursor-pointer"
                style={{
                  boxShadow: "0 0 15px hsl(var(--neon-magenta) / 0.2)"
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors"
                    style={{ textShadow: "0 0 8px hsl(var(--neon-magenta))" }}>
                    {project.title}
                  </h3>
                  <Github className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-primary/50 rounded bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"
            style={{ textShadow: "0 0 10px hsl(var(--neon-cyan))" }}>
            &gt; Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-2 border-accent rounded-lg p-6 bg-card/30 backdrop-blur-sm"
                style={{ boxShadow: "0 0 15px hsl(var(--neon-green) / 0.2)" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-accent"
                    style={{ textShadow: "0 0 8px hsl(var(--neon-green))" }}>
                    {exp.role}
                  </h3>
                  <span className="text-primary text-sm">{exp.period}</span>
                </div>
                <p className="text-secondary mb-3">{exp.company}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "1s" }}>
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"
            style={{ textShadow: "0 0 10px hsl(var(--neon-cyan))" }}>
            &gt; Awards &amp; Honors
          </h2>
          <div className="border-2 border-secondary rounded-lg p-6 bg-card/30 backdrop-blur-sm"
            style={{ boxShadow: "0 0 15px hsl(var(--neon-magenta) / 0.2)" }}>
            <ul className="space-y-3">
              {awards.map((award, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 text-xl">▸</span>
                  <span className="text-foreground/90">{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "1.2s" }}>
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"
            style={{ textShadow: "0 0 10px hsl(var(--neon-cyan))" }}>
            &gt; Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:yoggyzh@gmail.com"
              className="flex items-center gap-4 border-2 border-primary rounded-lg p-4 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all group"
              style={{ boxShadow: "0 0 15px hsl(var(--neon-cyan) / 0.2)" }}
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <span className="text-foreground/90">yoggyzh@gmail.com</span>
            </a>
            <a
              href="https://github.com/IAmYoggy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border-2 border-primary rounded-lg p-4 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all group"
              style={{ boxShadow: "0 0 15px hsl(var(--neon-cyan) / 0.2)" }}
            >
              <Github className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <span className="text-foreground/90">github.com/IAmYoggy</span>
            </a>
            <div className="flex items-center gap-4 border-2 border-secondary rounded-lg p-4 bg-card/30 backdrop-blur-sm"
              style={{ boxShadow: "0 0 15px hsl(var(--neon-magenta) / 0.2)" }}>
              <Phone className="text-secondary" size={24} />
              <span className="text-foreground/90">+44 7920 437670</span>
            </div>
            <div className="flex items-center gap-4 border-2 border-secondary rounded-lg p-4 bg-card/30 backdrop-blur-sm"
              style={{ boxShadow: "0 0 15px hsl(var(--neon-magenta) / 0.2)" }}>
              <MapPin className="text-secondary" size={24} />
              <span className="text-foreground/90">Glasgow, G3 8QP, UK</span>
            </div>
            <a
              href="https://blog.csdn.net/YoggyCSDN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border-2 border-accent rounded-lg p-4 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all group"
              style={{ boxShadow: "0 0 15px hsl(var(--neon-green) / 0.2)" }}
            >
              <ExternalLink className="text-accent group-hover:scale-110 transition-transform" size={24} />
              <span className="text-foreground/90">CSDN Profile: YoggyCSDN</span>
            </a>
            <Button
              className="flex items-center gap-4 border-2 border-accent rounded-lg p-4 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all h-auto justify-start"
              style={{ boxShadow: "0 0 15px hsl(var(--neon-green) / 0.2)" }}
              onClick={() => window.open("/Yoggy_CV.pdf", "_blank")}
            >
              <Download className="text-accent" size={24} />
              <span className="text-foreground/90 font-normal">Download Resume</span>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-primary/60 py-8 border-t-2 border-primary/20">
          <p className="font-mono">© 2025 Yoggy Zhang | Built with cyberpunk aesthetics</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
