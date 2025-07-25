import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Powered Data Analytics Dashboard",
    description: "A comprehensive dashboard that uses machine learning to analyze business data and provide actionable insights. Built with React, Python, and TensorFlow.",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    github: "https://github.com/tshepiso-rammala/ai-analytics",
    demo: "https://ai-analytics-demo.vercel.app",
    image: "🤖"
  },
  {
    title: "Cloud-Native E-commerce Platform",
    description: "Scalable microservices-based e-commerce platform deployed on AWS with automated CI/CD pipeline and real-time inventory management.",
    technologies: ["Node.js", "React", "AWS", "Docker", "Kubernetes"],
    github: "https://github.com/tshepiso-rammala/cloud-ecommerce",
    demo: "https://cloud-ecommerce-demo.netlify.app",
    image: "☁️"
  },
  {
    title: "Game Development Portfolio",
    description: "Collection of 2D and 3D games built with Unity, featuring physics-based gameplay, AI opponents, and multiplayer functionality.",
    technologies: ["Unity", "C#", "Blender", "Photon Network"],
    github: "https://github.com/tshepiso-rammala/game-portfolio",
    demo: "https://game-portfolio-demo.itch.io",
    image: "🎮"
  },
  {
    title: "Real-time Chat Application",
    description: "Modern chat application with end-to-end encryption, file sharing, and video calling capabilities. Built with Socket.io and WebRTC.",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github: "https://github.com/tshepiso-rammala/realtime-chat",
    demo: "https://realtime-chat-demo.herokuapp.com",
    image: "💬"
  },
];

export function Projects() {
  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-primary/20 text-foreground hover:bg-primary/10"
                  onClick={(e) => handleLinkClick(project.github, e)}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={(e) => handleLinkClick(project.demo, e)}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}