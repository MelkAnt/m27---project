import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, MessageCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Análise gratuita do seu negócio",
    "Estratégia personalizada sem compromisso", 
    "Proposta transparente com ROI projetado",
    "Suporte dedicado durante todo o projeto"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-elegant p-8 md:p-12 mb-12 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-brand-dark mb-6 leading-tight">
                    Vamos conversar sobre seus <span className="text-gradient">objetivos</span>?
                  </h2>
                  <div className="w-20 h-1 gradient-primary rounded-full mb-6"></div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Não importa se você quer <strong className="text-brand-purple">dobrar suas vendas</strong>, 
                    <strong className="text-brand-purple"> lançar um produto</strong> ou 
                    <strong className="text-brand-purple"> construir autoridade</strong> - 
                    temos a experiência e as ferramentas para te ajudar a chegar lá.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 animate-slide-up"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <Button variant="hero" size="xl" className="group flex-1">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Orçamento Gratuito
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="xl" className="flex-1">
                    <Clock className="w-5 h-5" />
                    Agendar Reunião
                  </Button>
                </div>
              </div>

              {/* Stats side */}
              <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="gradient-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-brand-dark mb-6 text-center">
                    Por que escolher a M27?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Projetos entregues</span>
                      <span className="text-2xl font-bold text-primary">+150</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Taxa de sucesso</span>
                      <span className="text-2xl font-bold text-primary">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">ROI médio dos clientes</span>
                      <span className="text-2xl font-bold text-primary">280%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tempo de resposta</span>
                      <span className="text-2xl font-bold text-primary">24h</span>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        ⭐
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>4.9/5</strong> - Avaliação média dos nossos clientes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact options */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white p-6 rounded-xl shadow-card text-center hover-lift">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">WhatsApp</h4>
              <p className="text-sm text-muted-foreground mb-3">Resposta em até 1 hora</p>
              <Button variant="outline" size="sm" className="w-full">
                Chamar no Whats
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card text-center hover-lift">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Agendamento</h4>
              <p className="text-sm text-muted-foreground mb-3">Escolha o melhor horário</p>
              <Button variant="outline" size="sm" className="w-full">
                Agendar Reunião
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card text-center hover-lift">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Formulário</h4>
              <p className="text-sm text-muted-foreground mb-3">Conte mais sobre seu projeto</p>
              <Button variant="outline" size="sm" className="w-full">
                Enviar Briefing
              </Button>
            </div>
          </div>

          {/* Final guarantee */}
          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;