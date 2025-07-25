import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software developer with a deep love for data science and cloud technologies. 
              My journey in tech started with curiosity about how things work, and has evolved into a 
              career focused on building scalable, innovative solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new machine learning algorithms, 
              experimenting with cloud architectures, or contributing to open-source projects. 
              I believe in the power of technology to solve real-world problems and make a positive impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl text-primary/50">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}