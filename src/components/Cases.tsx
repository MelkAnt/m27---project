import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Eye } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      client: "Tai",
      subtitle: "Tai hori",
      description: "Consultor para marcas",
      challenge: "Precisava de autoridade no mercado de consultoria",
      solution: "Estratégia de conteúdo + produção de vídeos educativos",
      results: [
        { metric: "+300%", label: "Aumento em leads qualificados" },
        { metric: "50k", label: "Seguidores em 6 meses" },
        { metric: "R$ 2M", label: "Em novos contratos" }
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      client: "Ozzy",
      subtitle: "Ozzy",
      description: "Estratégia de redes sociais",
      challenge: "Brand awareness praticamente zero",
      solution: "Rebranding completo + campanha multi-plataforma",
      results: [
        { metric: "+500%", label: "Crescimento orgânico" },
        { metric: "1.2M", label: "Impressões mensais" },
        { metric: "25%", label: "Taxa de conversão" }
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      client: "WebFitX",
      subtitle: "WebFitX",
      description: "Plataforma fitness online",
      challenge: "Lançamento de produto em mercado competitivo",
      solution: "Campanha de lançamento + conteúdo viral",
      results: [
        { metric: "10k", label: "Usuários na primeira semana" },
        { metric: "3.5M", label: "Visualizações totais" },
        { metric: "+150%", label: "ROI em marketing" }
      ],
      gradient: "from-green-500 to-blue-600"
    },
    {
      client: "Ricardo Carvalho",
      subtitle: "Ricardo Carvalho",
      description: "Coach executivo",
      challenge: "Migrar de palestras presenciais para digital",
      solution: "Ecossistema digital completo + automação",
      results: [
        { metric: "R$ 500k", label: "Faturamento primeiro mês" },
        { metric: "80%", label: "Redução em custos" },
        { metric: "95%", label: "Satisfação dos clientes" }
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-brand-dark mb-6">
            Cases de Sucesso
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estes são apenas alguns dos nossos clientes que <strong className="text-brand-purple">transformaram seus negócios</strong> com nossas estratégias.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-card hover-lift overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${caseStudy.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-space mb-2">{caseStudy.client}</h3>
                  <p className="text-white/90 mb-1">{caseStudy.subtitle}</p>
                  <p className="text-white/80 text-sm">{caseStudy.description}</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Desafio
                    </h4>
                    <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Nossa Solução
                    </h4>
                    <p className="text-muted-foreground text-sm">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-brand-dark mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Resultados
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary mb-1">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 font-space">
              Seu negócio pode ser o próximo case de sucesso! 🎯
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não acredita? Que tal uma <strong className="text-brand-purple">consultoria gratuita</strong> onde mostramos 
              exatamente como aplicar essas estratégias no seu negócio?
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="group">
              <a href="https://wa.me/5581997237051/" target="_blank" rel="noopener noreferrer">
    Quero Minha Consultoria Grátis
  </a>
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <a href="https://www.instagram.com/mdois7/" target="_blank" rel="noopener noreferrer">
    Ver Mais Cases
  </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            ⚡ <strong>Sem pegadinhas:</strong> É realmente gratuito e sem compromisso. Nosso objetivo é mostrar valor antes de qualquer proposta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cases;