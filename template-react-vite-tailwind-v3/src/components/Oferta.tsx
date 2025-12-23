import { Check, ArrowRight, Gift } from 'lucide-react';

const Oferta = () => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-brand-gray to-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-6">
            Oferta Irresistível
          </h2>
          <p className="text-xl text-gray-300">
            Você poderia passar mais 5 anos errando... <br/>
            <span className="text-white font-bold">Ou você pode pegar o atalho agora.</span>
          </p>
        </div>

        <div className="bg-brand-black border-2 border-brand-gold rounded-2xl overflow-hidden shadow-2xl shadow-brand-gold/10 relative">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-brand-gold text-brand-black font-bold px-6 py-2 rounded-bl-xl z-10">
            OFERTA DE LANÇAMENTO
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-gold/20 bg-brand-gray/30">
              <h3 className="text-2xl font-bold text-white mb-6">Leve Hoje:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-brand-gold shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Ebook Método Vereda (Vol. 1)</strong> <br/>
                    <span className="text-sm line-through text-gray-500">Valor: R$ 97,00</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                   <Gift className="text-brand-gold shrink-0 mt-1" />
                   <span className="text-gray-300">
                     <strong className="text-brand-gold-light">BÔNUS EXCLUSIVO:</strong> <br/>
                     Fluxo de raciocínio para investigações patrimoniais avançadas (Sniper e Quebra de Sigilo).
                   </span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                 <h4 className="font-bold text-white text-sm uppercase tracking-wider">Adicione também (Opcional):</h4>
                 <div className="flex items-center gap-3 opacity-75">
                    <div className="w-5 h-5 border border-brand-gold rounded flex items-center justify-center"></div>
                    <span className="text-sm text-gray-400">Pack de Despachos Prontos (+R$ 19,90)</span>
                 </div>
                 <div className="flex items-center gap-3 opacity-75">
                    <div className="w-5 h-5 border border-brand-gold rounded flex items-center justify-center"></div>
                    <span className="text-sm text-gray-400">Aulão "Destravando a Execução" (+R$ 27,90)</span>
                 </div>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center items-center bg-gradient-to-br from-brand-black via-brand-gray to-brand-black">
              <span className="text-gray-500 line-through text-lg mb-2">De R$ 97,00</span>
              <div className="flex items-baseline gap-1 mb-2">
                 <span className="text-2xl text-white">Por</span>
                 <span className="text-6xl font-serif text-brand-gold font-bold">67</span>
                 <span className="text-xl text-brand-gold">,00</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">à vista</p>

              <button className="w-full btn-gold text-lg mb-4 flex items-center justify-center gap-2 group">
                QUERO O MANUAL AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-4">
                 <span>Compra Segura</span>
                 <span>Entrega Imediata</span>
                 <span>7 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oferta;
