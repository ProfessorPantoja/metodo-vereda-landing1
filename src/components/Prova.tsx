import { TrendingUp, Award, Gavel } from 'lucide-react';

const Prova = () => {
  return (
    <section className="py-24 bg-brand-noir text-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-16">
          Mas será que <span className="text-gradient-gold">funciona?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-graphite p-8 rounded-2xl border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group">
            <TrendingUp className="w-12 h-12 text-brand-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Eficiência Comprovada</h3>
            <p className="text-sm text-gray-400 leading-relaxed">O método é a base operacional da 12ª Vara do Trabalho do Rio de Janeiro.</p>
          </div>
          <div className="bg-brand-graphite p-8 rounded-2xl border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group">
            <Award className="w-12 h-12 text-brand-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Milhões Liberados</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Resultados reais para reclamantes alcançados através de condução lógica e não aleatória.</p>
          </div>
          <div className="bg-brand-graphite p-8 rounded-2xl border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group">
            <Gavel className="w-12 h-12 text-brand-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Colaboração</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Pare de brigar com o Judiciário. Comece a colaborar, e ele retribuirá com celeridade.</p>
          </div>
        </div>

        <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-brand-gold/20 relative">
          <div className="text-4xl text-brand-gold absolute top-4 left-6 opacity-30 font-serif">"</div>
          <p className="text-xl md:text-2xl font-serif text-brand-champagne italic leading-relaxed relative z-10">
            Quando você usa o Método Vereda, você para de brigar com o Judiciário e passa a colaborar com ele. E o Judiciário retribui com celeridade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prova;
