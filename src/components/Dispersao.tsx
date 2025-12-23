import { AlertTriangle } from 'lucide-react';
import { Reveal } from './Reveal';

const Dispersao = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Abstract Chaos Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform rotate-45 translate-y-32"></div>
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform -rotate-12 translate-y-96"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-950/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-950 to-brand-black rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-xl overflow-hidden border border-brand-gold/5 bg-brand-graphite aspect-square flex items-center justify-center p-4 md:p-8 shadow-2xl">
                {/* Visual Chaos Representation */}
                <div className="relative w-full h-full border border-dashed border-gray-800 rounded-full animate-[spin_30s_linear_infinite] opacity-40 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 border border-gray-700 rotate-45"></div>
                  <div className="absolute w-full h-[1px] bg-red-800/20 rotate-12"></div>
                  <div className="absolute w-full h-[1px] bg-red-800/20 -rotate-45"></div>
                  <div className="absolute w-full h-[1px] bg-red-800/20 rotate-90"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <AlertTriangle className="w-12 h-12 md:w-20 md:h-20 text-red-700/80 mb-4 md:mb-6 animate-pulse" />
                  <span className="text-lg md:text-2xl font-serif text-red-500/80 font-bold uppercase tracking-widest text-center shadow-black drop-shadow-lg leading-tight">Execução<br />Travada</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                A "Dispersão": <br /><span className="text-red-600">O Pesadelo do Advogado</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="card-glass border-l-4 border-l-red-900/60 mb-8 bg-brand-surface/60">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  De um lado, o devedor oculta patrimônio com sofisticação. Do outro, o advogado atira para todos os lados: <span className="text-brand-gold font-medium">Sisbajud, Renajud, Infojud...</span> tudo ao mesmo tempo.
                </p>
                <p className="text-red-400 font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Resultado: Indeferimento e cliente frustrado.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-brand-gold font-serif italic border-l-2 pl-6 border-brand-gold/30">
                "A culpa não é (só) do Judiciário. A culpa é da falta de Método."
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dispersao;