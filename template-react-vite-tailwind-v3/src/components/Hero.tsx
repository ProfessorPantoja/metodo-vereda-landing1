import { ChevronDown, ShieldAlert } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-black/90 bg-gradient-to-b from-brand-black/95 via-brand-black/80 to-brand-black"></div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <ShieldAlert className="w-16 h-16 text-brand-gold animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-brand-gold-light">
          O Processo foi Ganho, a Sentença Transitou em Julgado... <br/>
          <span className="text-white">Mas o Dinheiro Não Caiu na Conta?</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubra o <strong className="text-brand-gold">Método Vereda</strong>: O passo a passo exato — criado por um Servidor Público com 12 anos de trincheira — para sair do labirinto da execução trabalhista e transformar direitos em dinheiro no bolso do seu cliente.
        </p>

        <a 
          href="#oferta" 
          className="inline-block btn-gold text-lg md:text-xl transform hover:-translate-y-1"
        >
          QUERO DESTRAVAR MINHAS EXECUÇÕES
        </a>

        <div className="mt-16 animate-bounce text-brand-gold/50">
          <ChevronDown className="w-10 h-10 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
