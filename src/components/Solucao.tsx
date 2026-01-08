import { CheckCircle2, GitMerge, Lock, Search, ArrowRight, Activity } from 'lucide-react';
import { Reveal } from './Reveal';

const Solucao = () => {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center md:text-left mb-20 max-w-3xl">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">O Método Veredas: Estrutura e Lógica</h2>
            <p className="text-4xl md:text-6xl font-serif text-white leading-[1.1]">
              Não é decorar fórmulas. <br />É <span className="text-gradient-champagne italic">entender a razão</span> de cada etapa.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Card 1: Intro (Large) */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="h-full p-10 bg-brand-graphite rounded-3xl border border-white/5 relative overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-48 h-48 text-brand-gold" />
              </div>

              <h3 className="text-2xl text-white font-bold mb-6">Metodologia Estruturada</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                O Método Veredas organiza os procedimentos de execução trabalhista em 4 fases estratégicas,
                explicando não apenas o "como fazer", mas principalmente o "por que fazer" cada ato processual
                em determinado momento.
              </p>

              <div className="mt-12 flex items-center gap-4 text-brand-gold font-medium">
                <div className="w-12 h-1 bg-brand-gold"></div>
                <span>Conhecimento Sistematizado</span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Step 1 */}
          <Reveal delay={0.1} className="md:col-span-1">
            <div className="h-full p-8 bg-brand-noir rounded-3xl border border-white/5 hover:bg-brand-graphite transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl text-white font-serif mb-2">1. Ativação</h4>
              <p className="text-gray-400 text-sm">Por que iniciar pelo Sisbajud e qual estratégia de teimosinha usar em cada cenário.</p>
            </div>
          </Reveal>

          {/* Card 3: Step 2 */}
          <Reveal delay={0.2} className="md:col-span-1">
            <div className="h-full p-8 bg-brand-noir rounded-3xl border border-white/5 hover:bg-brand-graphite transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GitMerge className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl text-white font-serif mb-2">2. IDPJ</h4>
              <p className="text-gray-400 text-sm">A lógica do rastreamento direto e inverso de sócios e suas aplicações práticas.</p>
            </div>
          </Reveal>

          {/* Card 4: Step 3 */}
          <Reveal delay={0.3} className="md:col-span-1">
            <div className="h-full p-8 bg-brand-noir rounded-3xl border border-white/5 hover:bg-brand-graphite transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl text-white font-serif mb-2">3. Inteligência</h4>
              <p className="text-gray-400 text-sm">Como cruzar dados entre Sniper, Censec e CCS para investigação patrimonial eficiente.</p>
            </div>
          </Reveal>

          {/* Card 5: Step 4 */}
          <Reveal delay={0.4} className="md:col-span-1">
            <div className="h-full p-8 bg-brand-noir rounded-3xl border border-white/5 hover:bg-brand-graphite transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl text-white font-serif mb-2">4. Expropriação</h4>
              <p className="text-gray-400 text-sm">Requisitos técnicos específicos para hastas, adjudicação e bloqueio de recebíveis.</p>
            </div>
          </Reveal>

          {/* Card 6: Call to Action (Stat) */}
          <Reveal delay={0.5} className="md:col-span-1 bg-brand-gold relative overflow-hidden rounded-3xl group cursor-pointer">
            <a href="#oferta" className="block h-full p-8 relative z-10 flex flex-col justify-between">
              <div>
                <span className="text-brand-black/60 font-bold tracking-widest uppercase text-xs">Conteúdo</span>
                <div className="text-5xl font-serif font-bold text-brand-black mt-2">100%</div>
                <div className="text-brand-black/80 font-medium">Estruturado & Didático</div>
              </div>
              <div className="self-end p-3 bg-brand-black/10 rounded-full group-hover:bg-brand-black/20 transition-colors">
                <ArrowRight className="w-6 h-6 text-brand-black" />
              </div>
            </a>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Solucao;