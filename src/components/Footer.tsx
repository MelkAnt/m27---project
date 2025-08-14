import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold font-space text-gradient mb-4">M27</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transformamos ideias em resultados visuais de alto impacto. 
                Especialistas em criar estratégias que convertem visualizações em vendas reais.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram da M27"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn da M27"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@m27.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email da M27"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">Produção de Vídeos</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">Edição de Conteúdo</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">Estratégia de Redes Sociais</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">Design para Campanhas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300">contato@m27.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Horário de Atendimento</h5>
              <p className="text-gray-300 text-sm">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} M27 Agency. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              Desenvolvido com 💜 para gerar resultados que realmente importam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;