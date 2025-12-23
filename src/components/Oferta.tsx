import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const Oferta = () => {
    return (
        <section id="oferta" className="py-32 bg-brand-black relative flex items-center justify-center min-h-screen">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-brand-black">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Value Proposition */}
                    <div className="space-y-10">
                        <Reveal>
                            <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1]">
                                O Preço de um <br />
                                <span className="text-gradient-champagne">Erro Processual</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Quanto custa largar um processo no arquivo provisório? Quanto custa ver o devedor "ganhando tempo" enquanto seu cliente cobra resultados?
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mt-4">
                                Por menos de um almoço executivo, você acessa a inteligência de quem decide a execução há 12 anos.
                            </p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <ul className="space-y-6 border-l border-white/10 pl-6">
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-gold mt-1" />
                                    <span className="text-gray-300">Método Veredas de Execução Trabalhista (Vol. 1)</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-gold mt-1" />
                                    <span className="text-gray-300">Bônus: Fluxo Secreto de Investigação</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-gold mt-1" />
                                    <span className="text-gray-300">Atualizações Gratuitas da Edição 2025</span>
                                </li>
                            </ul>
                        </Reveal>
                    </div>

                    {/* Right: The Offer Card */}
                    <Reveal delay={0.5}>
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-white/50 to-brand-gold rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                            <div className="relative bg-[#080808] border border-white/10 rounded-2xl p-10 md:p-14 text-center transform group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">

                                <div className="uppercase tracking-widest text-xs text-brand-gold font-bold mb-8">Oferta Exclusiva de Lançamento</div>

                                <div className="flex justify-center items-end gap-2 mb-8 relative">
                                    <span className="text-gray-500 line-through text-xl absolute -top-6">R$ 97,00</span>
                                    <span className="text-7xl md:text-8xl font-serif text-white font-bold tracking-tighter">67</span>
                                    <span className="text-2xl text-brand-gold mb-2 font-bold">,00</span>
                                </div>

                                <a href="/?checkout" className="w-full btn-gold text-lg flex items-center justify-center gap-3 group mb-8">
                                    COMPRAR AGORA
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    <ShieldCheck className="w-4 h-4 text-green-500" />
                                    Garantia Blindada de 7 Dias
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};

export default Oferta;