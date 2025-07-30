import { ExternalLink, Github, icons, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "C2C Ecommerce Webiste",
    description: "A comprehensive freelance marketplace platform where service providers can offer their services and customers can book them.",
    technologies: ["PHP", "TailwindCSS", "JS", "MySQL", "PusherAPI"],
    github: "https://github.com/YiBbz/C2C-Eccommerce-Website",
    demo: "https://mosomo.rf.gd/?i=1",
    image: "🛒",
    //icons: Store
  },
  {
    title: "Java RESTful APIs using JAX-RS",
    description: "A project showing my understanding of developing web services using Java RESTful APIs with JAX-RS. Unhosted",
    technologies: ["Java", "RESTful APIs", "JAX-RS", "Payara Server", "MySQL"],
    github: "https://github.com/YiBbz/ResfulAPI-using-JAX-RS",
    //demo: "#",
    image: "</>"
  },
  {
    title: "C# Data Structures and Algorithms",
    description: "Shows my understanding of C# data Structures and algorithms such as Kruskal’s algorithm and Prim's algorithm",
    technologies: ["C#", "Kruskal's Algorithm", "Prim's Algorithm"],
    github: "https://github.com/YiBbz/C-Data-Structures-and-Algorithms",
    //demo: "https://game-portfolio-demo.itch.io",
    image: "🧩"
  },
  {
    title: "3D-Printer Cost Calculator",
    description: "A cost estimation tool for 3D printing projects, Includes exportable PDF invoices and supports multiple currencies",
    technologies: ["Dart", "Flutter", "CMake", "PDF Generation", "Cross-platform"],
    github: "https://github.com/badtzmaruu/3d-Printer-Calculator",
    demo: "https://3d-calculator.fibco.co.za/",
    image: "📈"
  },
];

export function Projects() {
  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
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
                {project.github && (
                  <Button
                  variant="outline"
                  className="flex-1 border-primary/20 text-foreground hover:bg-primary/10"
                  onClick={(e) => handleLinkClick(project.github, e)}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                  
                )}  
                {project.demo && (
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={(e) => handleLinkClick(project.demo, e)}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}