import { Play, Edit3, TrendingUp, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoProduction from "@/assets/video-production.jpg";

const Services = () => {
  const services = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Produção de Vídeos",
      description: "Do roteiro à edição final, criamos conteúdo que prende a atenção e gera conversão.",
      number: "01"
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Edição de Conteúdo",
      description: "Transformamos suas ideias em peças visuais que falam a língua do seu público.",
      number: "02"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Estratégia de Redes Sociais",
      description: "Planejamento completo para engajar sua audiência e converter seguidores em clientes.",
      number: "03"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design para Campanhas",
      description: "Identidade visual consistente que fortalece sua marca e aumenta o reconhecimento.",
      number: "04"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-brand-dark mb-6">
            Como Podemos Te Ajudar
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossos serviços são pensados para <strong className="text-brand-purple">gerar resultados reais</strong> no seu negócio. 
            Nada de firula, só estratégia que funciona.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-card hover-lift transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                {service.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-brand-dark mb-4 font-space">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom section with image and CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary rounded-2xl opacity-20 blur-lg"></div>
            <img 
              src={videoProduction} 
              alt="Estúdio de produção de vídeos M27 com equipamentos profissionais"
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-card"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark font-space">
              Pronto para revolucionar sua presença digital?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não importa se você quer <strong className="text-brand-purple">aumentar vendas online</strong>, 
              <strong className="text-brand-purple"> construir autoridade</strong> ou 
              <strong className="text-brand-purple"> lançar um produto</strong> - 
              temos a solução certa para seu momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                Vamos Conversar
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Portfolio Completo
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Consultoria gratuita:</strong> Analisamos seu negócio e sugerimos as melhores estratégias, sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;