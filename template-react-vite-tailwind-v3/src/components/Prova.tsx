import { TrendingUp, Award, Gavel } from 'lucide-react';

const Prova = () => {
  return (
    <section className="py-20 bg-brand-black text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-12">
          Mas será que funciona?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-brand-gray p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/40 transition-all">
            <TrendingUp className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Eficiência Comprovada</h3>
            <p className="text-sm text-gray-400">O método é base operacional da 12ª Vara do Trabalho do RJ.</p>
          </div>
          <div className="bg-brand-gray p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/40 transition-all">
            <Award className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Milhões Liberados</h3>
            <p className="text-sm text-gray-400">Resultados reais para reclamantes através de condução lógica.</p>
          </div>
          <div className="bg-brand-gray p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/40 transition-all">
            <Gavel className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Colaboração</h3>
            <p className="text-sm text-gray-400">Pare de brigar com o Judiciário. Comece a colaborar.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-gray via-brand-black to-brand-gray p-8 rounded-xl border border-brand-gold/20">
          <p className="text-xl md:text-2xl font-serif text-brand-gold-light italic">
            "Quando você usa o Método Vereda, você para de brigar com o Judiciário e passa a colaborar com ele. E o Judiciário retribui com celeridade."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prova;
