import { Check, ArrowRight, Gift, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const Oferta = () => {
  return (
    <section id="oferta" className="py-24 bg-brand-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-gold/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Oferta <span className="text-gradient-gold">Irresistível</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-400">
              O preço de um almoço para transformar sua carreira.
            </p>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.4}>
            <div className="relative bg-[#0F0F0F] border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {/* Top Badge */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-gold"></div>
            <div className="absolute top-0 right-8 bg-gradient-gold text-brand-black font-bold px-6 py-2 rounded-b-lg shadow-lg z-20 text-sm tracking-wider">
                LANÇAMENTO
            </div>

            <div className="grid lg:grid-cols-2">
                {/* Left Side: Value */}
                <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20"></div>
                    
                    <h3 className="text-3xl font-serif text-white mb-8 relative z-10">O que você leva:</h3>
                    
                    <ul className="space-y-6 relative z-10 mb-10">
                        <li className="flex items-start gap-4 group">
                            <div className="p-1 bg-brand-gold/20 rounded-full mt-1 group-hover:bg-brand-gold transition-colors">
                                <Check className="w-4 h-4 text-brand-gold group-hover:text-brand-black" />
                            </div>
                            <div>
                                <strong className="text-white text-lg block">Ebook Método Vereda (Vol. 1)</strong>
                                <span className="text-gray-500 text-sm">Manual de campo sem "juridiquês".</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="p-1 bg-brand-gold/20 rounded-full mt-1 group-hover:bg-brand-gold transition-colors">
                                <Gift className="w-4 h-4 text-brand-gold group-hover:text-brand-black" />
                            </div>
                            <div>
                                <strong className="text-brand-gold-light text-lg block">BÔNUS: Investigação Avançada</strong>
                                <span className="text-gray-500 text-sm">Fluxo de raciocínio para Sniper e Quebra de Sigilo.</span>
                            </div>
                        </li>
                    </ul>

                    <div className="p-6 bg-brand-surface rounded-xl border border-gray-800">
                        <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-4">Adicionais Opcionais no Checkout:</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-4 h-4 border border-brand-gold rounded opacity-50"></div>
                                Pack de Despachos Prontos (+R$ 19,90)
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-4 h-4 border border-brand-gold rounded opacity-50"></div>
                                Aulão "Destravando a Execução" (+R$ 27,90)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Price & CTA */}
                <div className="p-10 md:p-14 flex flex-col justify-center items-center bg-gradient-to-br from-[#151515] to-brand-black relative">
                    <div className="text-center mb-8">
                        <span className="text-gray-500 line-through text-lg block mb-2">De R$ 97,00</span>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl text-gray-300 font-light">Por</span>
                            <span className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-gold font-bold tracking-tight">67</span>
                            <div className="flex flex-col items-start">
                                <span className="text-xl text-brand-gold font-bold">,00</span>
                                <span className="text-xs text-gray-500 uppercase">à vista</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full btn-gold text-xl flex items-center justify-center gap-3 group mb-6 hover:brightness-110">
                        QUERO O MANUAL
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>

                    <div className="flex items-center gap-6 text-xs text-gray-500 font-medium tracking-wide">
                        <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Compra Segura</span>
                        <span className="flex items-center gap-2"><Gift className="w-4 h-4" /> Entrega Imediata</span>
                    </div>
                </div>
            </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Oferta;