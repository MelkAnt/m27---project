import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Atendimento personalizado que entende seu negócio",
    "Estratégia + execução em um só lugar",
    "Resultados mensuráveis que impactam sua receita",
    "Experiência com marcas reconhecidas no mercado"
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center max-w-3xl animate-slide-up">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-brand-dark mb-4">
          Quem Somos
        </h2>
        <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-8"></div>

        {/* Texto */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
          <p>
            Somos uma equipe apaixonada por <strong className="text-brand-purple">resultados de verdade</strong>. 
            Não acreditamos em marketing só para impressionar — acreditamos em estratégias que 
            <strong className="text-brand-purple"> transformam visualizações em vendas</strong>.
          </p>
          <p>
            Com mais de 5 anos no mercado, já ajudamos dezenas de empresas a 
            <strong className="text-brand-purple"> multiplicar sua presença digital</strong> e, 
            mais importante, seu faturamento. Porque no fim das contas, é isso que importa, né?
          </p>
        </div>

        {/* Lista de benefícios */}
        <div className="grid sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div>
          <p className="text-xl font-medium text-brand-purple mb-4">
            Pronto para ver sua marca decolar? 🚀
          </p>
          <p className="text-muted-foreground">
            Vamos conversar sobre como podemos acelerar seus resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
