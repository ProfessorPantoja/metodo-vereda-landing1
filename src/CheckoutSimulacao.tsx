
import { useState } from 'react';
import { Lock, CheckCircle2, CreditCard, ArrowRight } from 'lucide-react';
import './index.css';

const CheckoutSimulacao = () => {
    const [bumps, setBumps] = useState({
        pack: false,
        video: false
    });

    const basePrice = 67.00;
    const packPrice = 19.90;
    const videoPrice = 27.90;

    const total = basePrice + (bumps.pack ? packPrice : 0) + (bumps.video ? videoPrice : 0);

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-gray-200 font-sans p-4 md:p-8 flex justify-center items-start">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left Column: Product & Bumps */}
                <div className="space-y-6">
                    {/* Header Logo */}
                    <div className="flex items-center gap-3 mb-8">
                        <a href="/" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <ArrowRight className="w-5 h-5 rotate-180" />
                        </a>
                        <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center text-brand-black font-bold text-xl">V</div>
                        <span className="text-xl font-serif text-white">Checkout Seguro</span>
                    </div>

                    {/* Main Product */}
                    <div className="bg-[#151516] border border-white/5 rounded-2xl p-6 flex gap-4 shadow-lg">
                        <img
                            src="https://i.ibb.co/My1C7SzK/Gemini-Generated-Image-wuffrcwuffrcwuff.png"
                            alt="Ebook"
                            className="w-24 h-32 object-cover rounded-lg border border-white/10"
                        />
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Método Veredas de Execução Trabalhista</h3>
                            <p className="text-gray-400 text-sm mb-2">Volume 1 • Edição Limitada</p>
                            <div className="text-brand-gold font-bold text-xl">R$ 67,00</div>
                        </div>
                    </div>

                    {/* Order Bumps Container */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-black flex items-center justify-center text-sm font-bold">!</span>
                            Complete seu pedido (Opcional):
                        </h3>

                        {/* Bump 1: Pack de Despachos */}
                        <div
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 relative overflow-hidden ${bumps.pack ? 'border-brand-gold bg-brand-gold/5' : 'border-dashed border-gray-700 hover:border-brand-gold/50'}`}
                            onClick={() => setBumps({ ...bumps, pack: !bumps.pack })}
                        >
                            <div className="flex items-start gap-4 z-10 relative">
                                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-1 transition-colors ${bumps.pack ? 'bg-brand-gold border-brand-gold' : 'border-gray-500'}`}>
                                    {bumps.pack && <CheckCircle2 className="w-4 h-4 text-black" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg">SIM! Quero economizar 10 horas de trabalho.</h4>
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        Adicionar o <strong className="text-white">Pack de Despachos Prontos</strong>. Copie e cole modelos validados de pedidos de Sisbajud, IDPJ e Pesquisa Patrimonial que já foram testados e aprovados.
                                    </p>
                                    <div className="mt-2 text-sm">
                                        <span className="text-red-400 line-through mr-2">De R$ 47,90</span>
                                        <span className="text-brand-gold font-bold">Por R$ 19,90</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bump 2: Aulão Vídeo */}
                        <div
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 relative overflow-hidden ${bumps.video ? 'border-brand-gold bg-brand-gold/5' : 'border-dashed border-gray-700 hover:border-brand-gold/50'}`}
                            onClick={() => setBumps({ ...bumps, video: !bumps.video })}
                        >
                            <div className="flex items-start gap-4 z-10 relative">
                                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-1 transition-colors ${bumps.video ? 'bg-brand-gold border-brand-gold' : 'border-gray-500'}`}>
                                    {bumps.video && <CheckCircle2 className="w-4 h-4 text-black" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg">SIM! Quero a explicação em vídeo.</h4>
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        Adicionar o <strong className="text-white">Aulão "Destravando a Execução"</strong>. Rogério Amaral explica em vídeo os pontos cegos que o eBook revela, ideal para ouvir no carro ou no escritório.
                                    </p>
                                    <div className="mt-2 text-sm">
                                        <span className="text-red-400 line-through mr-2">De R$ 57,90</span>
                                        <span className="text-brand-gold font-bold">Por R$ 27,90</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Column: Payment & Summary */}
                <div className="bg-[#151516] border border-white/5 rounded-2xl p-8 h-fit sticky top-8 shadow-2xl">
                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <CreditCard className="text-brand-gold" />
                        Pagamento
                    </h3>

                    <div className="space-y-4 mb-8">
                        <input type="text" placeholder="Nome Completo no Cartão" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-gold outline-none" />
                        <input type="text" placeholder="Número do Cartão" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-gold outline-none" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM/AA" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-gold outline-none" />
                            <input type="text" placeholder="CVV" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-gold outline-none" />
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6 space-y-3">
                        <div className="flex justify-between text-gray-400">
                            <span>Método Veredas (Vol. 1)</span>
                            <span>R$ {basePrice.toFixed(2).replace('.', ',')}</span>
                        </div>
                        {bumps.pack && (
                            <div className="flex justify-between text-brand-gold/80 text-sm">
                                <span>+ Pack de Despachos</span>
                                <span>R$ {packPrice.toFixed(2).replace('.', ',')}</span>
                            </div>
                        )}
                        {bumps.video && (
                            <div className="flex justify-between text-brand-gold/80 text-sm">
                                <span>+ Aulão em Vídeo</span>
                                <span>R$ {videoPrice.toFixed(2).replace('.', ',')}</span>
                            </div>
                        )}
                    </div>

                    <div className="border-t border-gray-800 mt-6 pt-6 mb-8">
                        <div className="flex justify-between items-end">
                            <span className="text-gray-400">Total:</span>
                            <span className="text-3xl font-bold text-white">
                                <small className="text-sm font-normal text-gray-400 mr-1">R$</small>
                                {total.toFixed(2).replace('.', ',')}
                            </span>
                        </div>
                    </div>

                    <a href="/" className="w-full btn-gold py-4 text-brand-black font-bold uppercase rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                        Finalizar Compra
                        <ArrowRight className="w-5 h-5" />
                    </a>

                    <div className="mt-6 flex justify-center gap-4 text-gray-600">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider">Ambiente Criptografado</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutSimulacao;
