
const Autor = () => {
  return (
    <section className="py-20 bg-brand-graphite relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-2">
              Sobre o Autor
            </h2>
            <h3 className="text-xl text-white font-bold mb-6">Rogério Amaral <span className="text-gray-400 font-normal block text-sm mt-1">Servidor Público Federal | 12 Anos em Execução Trabalhista</span></h3>

            <div className="space-y-6 text-gray-300">
              <p>
                Rogério Amaral não é influencer, guru ou consultor.
              </p>
              <p>
                Ele é um profissional que, ao longo de <strong className="text-white">12 anos atuando em execução trabalhista</strong>,
                percebeu um padrão: muitos processos travavam não por má-fé ou incompetência, mas por <strong className="text-white">falta
                  de conhecimento técnico estruturado</strong> sobre a sequência correta de atos processuais.
              </p>
              <p>
                Ao ser questionado repetidamente sobre "como fazer os processos andarem melhor", ele decidiu organizar
                esse conhecimento de forma sistemática.
              </p>
              <p className="border-l-4 border-brand-gold pl-4 italic text-brand-gold-light">
                "Celeridade não é improviso. Efetividade não é acaso. É consequência de método."
              </p>
              <p>
                O <strong className="text-white">Método Veredas</strong> é o resultado: uma compilação educacional de procedimentos,
                requisitos técnicos e lógica processual que qualquer profissional do direito pode estudar e aplicar em sua prática.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            {/* Logo Veredas */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 p-8 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                <img
                  src="/veredas-logo.png"
                  alt="Método Vereda Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(198,168,124,0.3)]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-brand-gold/20');
                  }}
                />
                {/* Fallback Icon (Only shows if image fails/is missing) */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <div className="text-brand-gold/20 font-serif text-6xl">V</div>
                </div>
              </div>

              <div className="absolute bottom-10 right-0 bg-brand-gold text-brand-black font-bold px-6 py-2 rounded shadow-lg text-sm border border-white/20 backdrop-blur-md">
                10+ Anos de Prática
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autor;
