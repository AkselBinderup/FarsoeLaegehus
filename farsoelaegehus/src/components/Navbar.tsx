import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              Farsø Lægehus
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("forside")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Forside
            </button>
            <button
              onClick={() => scrollToSection("om-os")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Om os
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              Book tid
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("forside")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Forside
            </button>
            <button
              onClick={() => scrollToSection("om-os")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Om os
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              Book tid
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
