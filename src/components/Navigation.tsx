import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#cases", label: "Cases" },
    { href: "#depoimentos", label: "Depoimentos" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const whatsappLink = "https://wa.me/5591999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-space">
              <span className={`transition-colors ${
                isScrolled ? 'text-gradient' : 'text-white'
              }`}>
                M27
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-brand-dark' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant={isScrolled ? "default" : "elegant"} className="group">
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-brand-dark' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-card rounded-lg mt-2 py-4 animate-slide-up">
            <div className="flex flex-col gap-4 px-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-brand-dark font-medium py-2 text-left hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="w-full group">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
