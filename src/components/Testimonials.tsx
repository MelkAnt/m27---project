import { Star, Quote } from "lucide-react";
import testimonialImage from "@/assets/testimonial-1.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO, TechStart",
      image: testimonialImage,
      rating: 5,
      text: "A M27 não só entendeu nossa visão, como conseguiu traduzi-la em resultados concretos. Em 3 meses, nosso faturamento triplicou e nossa marca ganhou reconhecimento nacional. Recomendo de olhos fechados!",
      highlight: "faturamento triplicou em 3 meses"
    },
    {
      name: "Carlos Eduardo",
      role: "Diretor, InovaCorp",
      image: testimonialImage,
      rating: 5,
      text: "Trabalhar com a M27 foi um divisor de águas. Eles não apenas criaram conteúdo incrível, mas desenvolveram uma estratégia que realmente converte. Nossa taxa de conversão aumentou 280%!",
      highlight: "taxa de conversão +280%"
    },
    {
      name: "Marina Costa",
      role: "Fundadora, EcoLife",
      image: testimonialImage,
      rating: 5,
      text: "O que mais me impressiona na M27 é a capacidade de entender nosso público e criar conteúdo que ressoa de verdade. Nosso engajamento explodiu e, mais importante, as vendas vieram junto!",
      highlight: "vendas e engajamento explodiram"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-brand-dark mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Não acredite só na nossa palavra. Veja o que quem já trabalhou conosco tem a dizer sobre os 
            <strong className="text-brand-purple"> resultados reais</strong> que alcançamos juntos.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover-lift relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Highlight box */}
              <div className="gradient-primary text-white p-3 rounded-lg mb-6 text-center">
                <div className="text-sm font-semibold">Resultado destaque:</div>
                <div className="text-lg font-bold">{testimonial.highlight}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - Cliente satisfeita da M27`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className="absolute inset-0 gradient-primary opacity-5 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4.9★</div>
            <div className="text-muted-foreground">Avaliação média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Projetos entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-muted-foreground">Clientes retornam</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">48h</div>
            <div className="text-muted-foreground">Resposta média</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-brand-dark mb-4 font-space">
              Pronto para ser nosso próximo case de sucesso? 🚀
            </h3>
            <p className="text-muted-foreground mb-6">
              Vamos descobrir juntos como multiplicar seus resultados. A primeira conversa é sempre gratuita!
            </p>
            <div className="text-sm text-muted-foreground">
              ⭐ <strong>Garantia de satisfação:</strong> Se não ficar satisfeito com nossa proposta inicial, devolvemos 100% do investimento.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;