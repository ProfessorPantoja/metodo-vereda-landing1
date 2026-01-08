import { ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-black">
      {/* Background Image with Cinematic Noir effect */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80')] bg-cover bg-center"
        style={{ filter: 'grayscale(100%) brightness(0.2) contrast(1.2)' }}
      ></div>

      {/* Luxury Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">

          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-medium">Método Veredas de Execução Trabalhista • Vol. 1</span>
          </motion.div>

          {/* Main Title - Display Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] text-white"
          >
            Execução Trabalhista: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold-dark italic pr-4">
              O Mapa Que Faltava
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light border-l border-white/10 pl-6"
          >
            Aprenda a <strong className="text-white">lógica estratégica</strong> por trás do Sisbajud, IDPJ, Sniper e Expropriação. O conhecimento prático de 12 anos sistematizado em um método passo a passo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <a
              href="#oferta"
              className="btn-gold group relative overflow-hidden"
            >
              <span className="relative z-10 block group-hover:-translate-y-[150%] transition-transform duration-500">
                ACESSAR O MÉTODO
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 text-brand-black">
                COMEÇAR AGORA
              </span>
            </a>

            <div className="flex items-center gap-4 py-4 px-6 rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm">
              <ShieldAlert className="w-6 h-6 text-brand-gold" />
              <span className="text-sm text-gray-300">Conhecimento de +12 anos</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 right-10 flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-widest text-brand-gold/50 [writing-mode:vertical-rl] rotate-180">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;