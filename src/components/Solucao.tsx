import { CheckCircle2, GitMerge, Lock, Search } from 'lucide-react';

const Solucao = () => {
  const steps = [
    { icon: <CheckCircle2 className="text-brand-gold" />, text: "1ª Ativação do Sisbajud (e a teimosinha correta)" },
    { icon: <GitMerge className="text-brand-gold" />, text: "IDPJ Direto e Inverso (sócio oculto)" },
    { icon: <Search className="text-brand-gold" />, text: "Inteligência (Sniper, Censec, CCS)" },
    { icon: <Lock className="text-brand-gold" />, text: "Expropriação Final" },
  ];

  return (
    <section className="py-20 bg-brand-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.9),rgba(20,20,20,0.9)),url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-6">
            O Algoritmo da Eficiência
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Existe uma "ordem procedimental empiricamente validada". Não é sorte. É <strong className="text-white">engenharia processual</strong>. 
            Eu chamo isso de <span className="text-brand-gold font-bold">Método Vereda</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              Ao longo de uma década na 12ª Vara do Trabalho do Rio de Janeiro, mapeei exatamente o que separa uma execução que termina em pagamento de uma execução que termina em arquivo provisório.
            </p>
            <p className="text-brand-gold-light font-medium text-lg">
              O Método Vereda não é uma "tese jurídica abstrata". É um mapa tático que te guia:
            </p>

            <ul className="space-y-4 mt-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center gap-4 bg-brand-black/50 p-4 rounded border border-brand-gold/10 hover:border-brand-gold/50 transition-colors">
                  {step.icon}
                  <span className="text-gray-200">{step.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-brand-gold/20 blur-xl rounded-full"></div>
             <div className="relative bg-brand-black border border-brand-gold/30 p-8 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-serif text-white mb-4 text-center">O Segredo</h3>
                <p className="text-center text-gray-400 mb-6">Cada pedido prepara o terreno para o próximo.</p>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-full h-2 bg-brand-gray rounded overflow-hidden">
                     <div className="h-full bg-brand-gold w-full animate-[shimmer_2s_infinite]"></div>
                   </div>
                   <span className="text-brand-gold uppercase text-sm tracking-widest font-bold mt-2">Sem Pontas Soltas</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucao;
