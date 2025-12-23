import { AlertTriangle } from 'lucide-react';

const Dispersao = () => {
  return (
    <section className="py-20 bg-brand-black border-t border-brand-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Placeholder - Visual Chaos */}
          <div className="relative rounded-lg overflow-hidden border border-brand-gold/20 opacity-80">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-gray to-black flex items-center justify-center p-8">
              {/* Abstract representation of chaos */}
              <div className="grid grid-cols-2 gap-4 w-full h-full opacity-30">
                 <div className="border border-red-500/50 rounded-full w-full h-full animate-pulse"></div>
                 <div className="border border-red-500/50 w-full h-full rotate-45"></div>
                 <div className="border border-red-500/50 w-full h-full -rotate-12"></div>
                 <div className="border border-red-500/50 rounded-full w-full h-full scale-50"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-red-500 font-serif text-2xl font-bold tracking-widest border-4 border-red-500 p-4 transform -rotate-12 uppercase">
                   Execução Frustrada
                 </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-6">
              A "Dispersão": <span className="text-white">O Pesadelo da Advocacia</span>
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              A execução trabalhista se tornou um território hostil. De um lado, o devedor oculta patrimônio com sofisticação. Do outro, o advogado, desesperado, atira para todos os lados: pede <span className="text-brand-gold">Sisbajud, Renajud, Infojud</span>, tudo ao mesmo tempo, sem critério, sem ordem lógica.
            </p>

            <div className="bg-brand-gray/50 p-6 rounded-lg border-l-4 border-red-500 mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-2 flex items-center gap-2">
                <AlertTriangle size={20} />
                O Resultado? Dispersão.
              </h3>
              <p className="text-gray-400">
                O Juiz indefere por falta de fundamentação. O servidor trava na análise de pedidos desconexos. E você fica com a certidão de crédito na parede e um cliente frustrado te ligando toda semana.
              </p>
            </div>

            <p className="text-lg text-brand-gold-light italic">
              A culpa não é (só) do Judiciário. A culpa é da falta de Método.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dispersao;
