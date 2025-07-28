import { useEffect, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Developer",
  "Data Enthusiast", 
  "Cloud Engineer",
  "Full Stack Developer",
  "AI/ML Engineer"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRoleIndex]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // In a real implementation, you would link to your actual CV file
    const link = document.createElement('a');
    link.href = '/CV/TshepisoRammalaCV.pdf'; // Replace with actual CV path
    link.download = 'Tshepiso_Rammala_CV.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-hero-gradient px-4">
      <div className="text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-primary animate-glow">Tshepiso Rammala</span>
        </h1>
        
        <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 flex items-center justify-center">
          <span className="text-foreground">I am a </span>
          <span className="text-primary ml-2 min-w-0">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science student with a strong foundation in programming (Python, Java, C++), data
          structures & algorithms, and software development methodologies. Hands-on experience in web/mobile
          apps, databases, AI/ML. Skilled in collaborative teamwork, agile practices, and debugging complex systems.
          Eager to apply academic knowledge to real-world challenges in a dynamic tech role.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleDownloadCV}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
}