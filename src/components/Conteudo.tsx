import { Map, Eye, FileText, Brain } from 'lucide-react';
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
          {/* Mockup Image */}
          <div className="relative group perspective-1000 flex justify-center text-center items-center">
            <Reveal>
              <div className="relative inline-block">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-brand-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <img
                  src="https://i.ibb.co/My1C7SzK/Gemini-Generated-Image-wuffrcwuffrcwuff.png"
                  alt="Advogada com o Guia Definitivo"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl border border-white/10 transform transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
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
