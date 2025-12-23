import { CheckCircle2, GitMerge, Lock, Search, ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

const Solucao = () => {
  const steps = [
    { 
        icon: <CheckCircle2 className="w-6 h-6 text-brand-black" />, 
        title: "1ª Ativação", 
        desc: "Sisbajud estratégico e a teimosinha correta.",
        color: "from-brand-gold-light to-brand-gold"
    },
    { 
        icon: <GitMerge className="w-6 h-6 text-brand-black" />, 
        title: "IDPJ Direto e Inverso", 
        desc: "Atingindo o sócio oculto com precisão.",
        color: "from-brand-gold to-brand-gold-dark"
    },
    { 
        icon: <Search className="w-6 h-6 text-brand-black" />, 
        title: "Inteligência", 
        desc: "Sniper, Censec, CCS revelando o rastro do dinheiro.",
        color: "from-brand-gold-dark to-brand-gold-dark"
    },
    { 
        icon: <Lock className="w-6 h-6 text-brand-black" />, 
        title: "Expropriação", 
        desc: "O xeque-mate final na execução.",
        color: "from-brand-gold-dark to-black"
    },
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif text-gradient-gold mb-6 inline-block pb-2 border-b border-brand-gold/20">
                O Algoritmo da Eficiência
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-400 text-xl leading-relaxed">
                Não é sorte. É <strong className="text-white">engenharia processual</strong>. 
                Bem-vindo ao <span className="text-brand-gold font-bold">Método Vereda</span>.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
                <p className="text-lg text-gray-300 leading-relaxed">
                Mapeei exatamente o que separa uma execução que termina em pagamento de uma que vai para o arquivo provisório. É um mapa tático onde <strong className="text-brand-gold">cada pedido prepara o terreno para o próximo.</strong>
                </p>
            </Reveal>

            <div className="relative pl-8 border-l border-brand-gold/20 space-y-12">
                {steps.map((step, index) => (
                    <Reveal key={index} delay={index * 0.2}>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-gray shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">{step.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
          </div>

          <Reveal delay={0.4}>
            <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-brand-gold/20 blur-[80px] rounded-full group-hover:bg-brand-gold/30 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-brand-surface to-black border border-brand-gold/30 p-10 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                            <ArrowDown className="text-brand-gold" />
                        </div>
                        <div className="text-right">
                            <span className="block text-brand-gold text-5xl font-serif font-bold">100%</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Lógico</span>
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif text-white mb-4">Sem Pontas Soltas</h3>
                    <p className="text-gray-400 mb-8">
                        Ao seguir o fluxo correto, você impede que o juiz indefira por falta de pré-requisito e encurrala o devedor.
                    </p>

                    <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                        <div className="bg-brand-gold h-full w-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                    </div>
                </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Solucao;