import { User } from 'lucide-react';

const Autor = () => {
  return (
    <section className="py-20 bg-brand-gray relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-2">
              Quem é o Criador?
            </h2>
            <h3 className="text-xl text-white font-bold mb-6">Rogério Amaral <span className="text-gray-400 font-normal block text-sm mt-1">Servidor Público do TRT 1ª Região – 12ª VT/RJ</span></h3>
            
            <div className="space-y-6 text-gray-300">
              <p>
                Rogério não é um "guru de internet". Ele é o cara que está do outro lado do balcão, analisando as suas petições todos os dias há mais de 10 anos.
              </p>
              <p>
                Ele viu de perto a angústia de advogados excelentes perderem prazos ou oportunidades por falta de estratégia. E viu advogados medianos terem sucesso extraordinário apenas por seguirem a ordem certa das coisas.
              </p>
              <p>
                Ele atua em uma das Varas mais eficientes do Brasil (a 12ª VT/RJ), onde a celeridade não é um mito, é meta batida.
              </p>
              <p className="border-l-4 border-brand-gold pl-4 italic text-brand-gold-light">
                "Doutor, como eu faço para meus processos andarem assim?"
              </p>
              <p>
                Essa foi a pergunta que deu origem ao <strong className="text-white">Método Vereda</strong>.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            {/* Photo Placeholder */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 border-2 border-brand-gold rounded-full transform rotate-6"></div>
              <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-full transform -rotate-6"></div>
              <div className="absolute inset-2 bg-gradient-to-t from-brand-black to-gray-800 rounded-full overflow-hidden flex items-end justify-center grayscale contrast-125">
                 <User className="w-full h-full text-gray-600 p-8 transform translate-y-4" />
                 {/* This div mimics a photo overlay */}
                 <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
              </div>
              <div className="absolute bottom-0 right-10 bg-brand-gold text-brand-black font-bold px-4 py-1 rounded shadow-lg text-sm">
                10+ Anos de TRT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autor;
