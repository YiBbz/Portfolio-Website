import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/tshepiso-rammala",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tshepiso-rammala",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/tshepiso.rammala",
    icon: Instagram,
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 py-8">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.name}
            variant="outline"
            size="icon"
            asChild
            className="w-12 h-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}