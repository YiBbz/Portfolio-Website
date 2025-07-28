import { Code, Server, Database, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern technologies"
    },
    {
      icon: Server,
      title: "Network Security",
      description: "Creating secure and scalable network infrastructure "
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Crafting efficient and scalable database architectures"
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Writing efficient code and optimizing system performance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a young and enthusiastic software developer with a love for optimal code and secure systems.
              My journey began with a thirst for knowledge about the inner workings of computers, 
              which led me to develop a deep interest in network infrastructure and database technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy problem solving, coding ,and optimizing database performance, exploring network protocols, 
              or spending time honing my craft in building robust, scalable systems.
              I believe in writing code that not only works but is maintainable, scalable, and efficient
            </p>

            
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-gradient-card border border-border hover:shadow-elevated transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;