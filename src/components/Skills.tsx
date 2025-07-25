import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = {
  "Frontend": [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 75 },
  ],
  "Backend": [
    { name: "Node.js", level: 88 },
    { name: "Python", level: 92 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "REST APIs", level: 90 },
  ],
  "Database": [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Redis", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Supabase", level: 85 },
  ],
  "AI & Data Science": [
    { name: "Machine Learning", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 75 },
    { name: "Pandas", level: 90 },
    { name: "Scikit-learn", level: 85 },
  ],
  "Game Development": [
    { name: "Unity", level: 70 },
    { name: "C#", level: 75 },
    { name: "Game Design", level: 65 },
    { name: "3D Modeling", level: 60 },
  ],
  "Linux": [
    { name: "Ubuntu", level: 85 },
    { name: "Shell Scripting", level: 80 },
    { name: "Docker", level: 85 },
    { name: "System Administration", level: 75 },
  ],
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>("Frontend");

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Skills & Expertise
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category as keyof typeof skillCategories)}
              className={`mb-2 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary/20 text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <Card className="bg-card/50 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              {activeCategory}
            </h3>
            <div className="grid gap-6">
              {skillCategories[activeCategory].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}