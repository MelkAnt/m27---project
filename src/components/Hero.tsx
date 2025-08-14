import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5591999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Logo/Brand */}
        <div className="mb-8 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold font-space text-gradient mb-2"></h2>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space leading-tight mb-6 animate-slide-up">
          Transformamos <span className="text-gradient">ideias</span> em resultados visuais de <span className="text-gradient">alto impacto</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Produção criativa que gera <strong>clientes</strong>, não curtidas
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Chega de conteúdo que não converte! Nossa estratégia vai direto ao ponto: criar peças que fazem seu público virar cliente de verdade.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="group">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          
          <Button variant="elegant" size="xl" className="group">
            <Play className="w-5 h-5" />
            Ver Nossos Cases
          </Button>
        </div>

        {/* Social proof quick stats */}
        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
