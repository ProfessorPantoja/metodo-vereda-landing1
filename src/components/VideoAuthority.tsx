import { useState } from 'react';
import { Play } from 'lucide-react';
import { Reveal } from './Reveal';

const VideoAuthority = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-12 md:py-24 bg-brand-black relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Video Placeholder */}
                    <Reveal width="100%">
                        <div className="relative group rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] aspect-video bg-brand-graphite">
                            {!isPlaying ? (
                                <div
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-brand-noir/80 transition-colors duration-500"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer pointer-events-none"></div>

                                    {/* Play Button - Enhanced */}
                                    <div className="relative z-10 w-24 h-24 rounded-full bg-brand-gold/20 backdrop-blur-md border-[3px] border-brand-gold text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(198,168,124,0.4)]">
                                        <Play className="w-10 h-10 ml-2 fill-current" />
                                        <div className="absolute inset-0 rounded-full border border-brand-gold/50 animate-ping opacity-20"></div>
                                    </div>

                                    <span className="absolute bottom-6 text-gray-300 text-sm tracking-widest uppercase font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                        Assista ao recado do Rogério
                                    </span>
                                </div>
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/fOBTND6D1iU?autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            )}
                        </div>
                    </Reveal>

                    {/* Text Content */}
                    <div className="space-y-8">
                        <Reveal delay={0.2}>
                            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                                Execução não é <span className="text-gradient-champagne italic">sorte</span>. <br />
                                É campo de batalha.
                            </h2>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                <span className="text-brand-gold font-bold">12 anos de trincheira.</span> Não sou teórico de manual. Sou quem entra no PJe todo dia para brigar pelo crédito.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Neste vídeo rápido, eu te mostro por que você continua ganhando o processo mas perdendo o dinheiro — e como o <strong className="text-white">Método</strong> muda esse jogo em semanas.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-brand-black/80 border border-brand-gold/30 overflow-hidden p-2 flex items-center justify-center shadow-lg">
                                    <img
                                        src="/veredas-logo.png"
                                        alt="Logo Veredas"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-white font-bold font-serif text-lg">Rogério Amaral</p>
                                    <p className="text-brand-gold/60 text-xs uppercase tracking-widest">Servidor Federal & Especialista em Execução</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideoAuthority;
