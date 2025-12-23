import { ChevronDown, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center"
        style={{ filter: 'brightness(0.3) saturate(0)' }}
      ></div>
      
      {/* Luxury Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold-dark/10 via-brand-black/80 to-brand-black"></div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        
        {/* Floating Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold blur-2xl opacity-20 animate-pulse"></div>
            <ShieldAlert className="w-20 h-20 text-brand-gold animate-float drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight text-white"
        >
          O Processo foi Ganho... <br/>
          <span className="text-gradient-gold">Mas o Dinheiro Não Caiu?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Descubra o <strong className="text-brand-gold-light">Método Vereda</strong>: A engenharia processual exata para sair do labirinto da execução e transformar direitos em dinheiro no bolso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#oferta" 
            className="inline-block btn-gold text-lg md:text-xl"
          >
            QUERO DESTRAVAR MINHAS EXECUÇÕES
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;