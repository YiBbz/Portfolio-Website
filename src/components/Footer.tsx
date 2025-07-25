import { SocialLinks } from "./SocialLinks";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-primary/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Tshepiso Rammala</h3>
            <p className="text-muted-foreground">
              Software Developer & Data Science Enthusiast
            </p>
            <p className="text-sm text-muted-foreground">
              Passionate about creating innovative solutions through code, 
              data science, and cloud technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>tshepiso.rammala@example.com</p>
              <p>+27 123 456 789</p>
              <p>Johannesburg, South Africa</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Tshepiso Rammala. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}