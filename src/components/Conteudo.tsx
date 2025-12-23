import { BookOpen, Map, Eye, FileText, Brain } from 'lucide-react';

const Conteudo = () => {
  const items = [
    { 
      icon: <Map className="w-8 h-8 text-brand-black" />, 
      title: "O Mapa do Tesouro", 
      desc: "Entenda a lógica por trás do Sisbajud, Renajud, Infojud, Prevjud, Sniper, CNIB e ARISP." 
    },
    { 
      icon: <Eye className="w-8 h-8 text-brand-black" />, 
      title: "O 'Pulo do Gato' do Servidor", 
      desc: "O que nós olhamos antes de deferir ou indeferir um pedido." 
    },
    { 
      icon: <FileText className="w-8 h-8 text-brand-black" />, 
      title: "Fluxogramas Visuais", 
      desc: "Para você nunca mais se perder no rito processual." 
    },
    { 
      icon: <Brain className="w-8 h-8 text-brand-black" />, 
      title: "Modelos Mentais", 
      desc: "Como cruzar dados do Imposto de Renda com o Censec para achar laranjas." 
    },
  ];

  return (
    <section className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-xl text-gray-400">
            Ebook: <span className="text-white font-serif italic">Guia-me Pelas Veredas da Execução Trabalhista (Vol. 1)</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup Placeholder */}
          <div className="relative group perspective-1000">
            <div className="w-3/4 mx-auto aspect-[3/4] bg-gradient-to-br from-brand-gold via-brand-gold-light to-brand-gold-dark rounded-r-2xl rounded-l-md shadow-[20px_20px_60px_rgba(0,0,0,0.5)] transform group-hover:rotate-y-6 transition-transform duration-500 flex flex-col items-center justify-center p-8 border-l-8 border-brand-gold-dark/50">
               <BookOpen className="w-20 h-20 text-brand-black mb-4" />
               <h3 className="text-3xl font-serif text-brand-black font-bold text-center leading-tight mb-2">GUIA-ME PELAS VEREDAS</h3>
               <p className="text-brand-black/80 font-bold tracking-widest uppercase text-sm">Da Execução Trabalhista</p>
               <div className="mt-12 w-full h-1 bg-brand-black/20"></div>
               <p className="mt-4 text-brand-black/60 text-xs uppercase">Volume 1</p>
            </div>
            {/* Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-xl rounded-[50%]"></div>
          </div>

          <div className="grid gap-6">
            <div className="mb-8">
              <p className="text-lg text-gray-300">
                Um manual de campo, direto e sem "juridiquês" inútil, escrito para ser usado com o PJe aberto na sua frente.
              </p>
            </div>

            <div className="grid gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-brand-gray rounded-lg border border-brand-gold/5 hover:border-brand-gold/30 transition-colors">
                  <div className="bg-brand-gold p-2 rounded shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-gold-light mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conteudo;
