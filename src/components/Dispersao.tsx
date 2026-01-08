import { AlertTriangle } from 'lucide-react';
import { Reveal } from './Reveal';

const Dispersao = () => {
  return (
    <section className="py-12 md:py-24 bg-brand-black relative overflow-hidden">
      {/* Abstract Chaos Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform rotate-45 translate-y-32"></div>
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform -rotate-12 translate-y-96"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-950/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <Reveal width="100%">
            <div className="relative flex justify-center">
              {/* Abstract Visual Representation - No heavy containers */}
              <div className="relative w-full max-w-[400px] aspect-square">

                {/* Center Pulse Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-[60px] rounded-full animate-pulse"></div>
                    <AlertTriangle className="w-24 h-24 text-red-500/80 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-1">Execução</h3>
                    <div className="text-red-500 font-bold tracking-[0.2em] text-sm animate-pulse">TRAVADA</div>
                  </div>
                </div>

                {/* Orbiting Elements to Show Dispersion */}
                <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-900/30 to-transparent"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent"></div>
                </div>

                {/* Floating "System" Nodes */}
                <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-red-900/50 rounded-full blur-[2px] animate-ping"></div>
                <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-brand-gold/30 rounded-full blur-[2px] animate-ping delay-700"></div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                O Desafio da <br /><span className="text-brand-gold">Execução Trabalhista</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="card-glass border-l-4 border-l-brand-gold/60 mb-8 bg-brand-surface/60">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A execução trabalhista envolve múltiplos sistemas (<span className="text-brand-gold font-medium">Sisbajud, Renajud, Infojud, IDPJ, Sniper</span>) e uma sequência específica de atos processuais. Sem um método estruturado, é comum:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                    <span>Pedidos protocolados fora do momento processual adequado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                    <span>Requisitos técnicos não atendidos completamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                    <span>Retrabalho por falta de documentação correta</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-brand-gold font-serif italic border-l-2 pl-6 border-brand-gold/30">
                "O desafio não é falta de esforço. É falta de um mapa claro."
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dispersao;