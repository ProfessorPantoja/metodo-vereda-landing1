import { BookOpen, Map, Eye, FileText, Brain } from 'lucide-react';
import { Reveal } from './Reveal';

const Conteudo = () => {
  const items = [
    {
      icon: <Map className="w-6 h-6 text-brand-gold" />,
      title: "O Mapa do Tesouro",
      desc: "Entenda a lógica por trás do Sisbajud, Renajud, Infojud, Prevjud, Sniper, CNIB e ARISP."
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-gold" />,
      title: "O 'Pulo do Gato' do Servidor",
      desc: "O que nós olhamos antes de deferir ou indeferir um pedido."
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-gold" />,
      title: "Fluxogramas Visuais",
      desc: "Para você nunca mais se perder no rito processual."
    },
    {
      icon: <Brain className="w-6 h-6 text-brand-gold" />,
      title: "Modelos Mentais",
      desc: "Como cruzar dados do Imposto de Renda com o Censec para achar laranjas."
    },
  ];

  return (
    <section className="py-24 bg-brand-noir relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              O Que Você Vai <span className="text-gradient-champagne">Receber</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-400">
              Ebook: <span className="text-brand-gold font-serif italic">Guia-me Pelas Veredas da Execução Trabalhista (Vol. 1)</span>
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup Refined */}
          <div className="relative group perspective-1000 flex justify-center">
            <Reveal>
              <div className="relative w-[300px] h-[420px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-r-2xl rounded-l-md shadow-[20px_20px_60px_rgba(0,0,0,0.5)] transform group-hover:rotate-y-12 transition-transform duration-700 flex flex-col items-center justify-center p-8 border border-white/5 border-l-8 border-l-brand-gold">
                {/* Cover Texture */}
                {/* Cover Texture */}
                <div className="absolute inset-0 bg-[url('https://i.ibb.co/My1C7SzK/Gemini-Generated-Image-wuffrcwuffrcwuff.png')] bg-cover bg-center rounded-r-xl opacity-90 mix-blend-normal"></div>

                <div className="relative z-10 text-center">
                  <BookOpen className="w-16 h-16 text-brand-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-serif text-white font-bold leading-tight mb-2 tracking-wide">GUIA-ME PELAS VEREDAS</h3>
                  <p className="text-brand-gold/80 text-[10px] tracking-[0.3em] uppercase mb-12">Da Execução Trabalhista</p>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
                  <p className="mt-4 text-gray-500 text-[10px] uppercase">Edição Limitada • Volume 1</p>
                </div>

                {/* Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </Reveal>

            {/* Shadow Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-12 bg-brand-gold/10 blur-3xl rounded-[50%]"></div>
          </div>

          <div className="space-y-12">
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Um manual de campo, direto e sem "juridiquês" inútil, escrito para ser usado com o <strong className="text-white font-medium">PJe aberto na sua frente</strong>.
              </p>
            </Reveal>

            <div className="grid gap-6">
              {items.map((item, idx) => (
                <Reveal key={idx} delay={0.3 + (idx * 0.1)}>
                  <div className="flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                    <div className="bg-brand-gold/10 p-3 rounded-lg shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conteudo;
