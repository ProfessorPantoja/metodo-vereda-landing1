
const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/10 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8 mb-8 text-left max-w-4xl mx-auto">
          <div>
            <h4 className="text-brand-gold font-bold mb-4">Dúvidas Frequentes</h4>
            <ul className="space-y-2 text-sm text-gray-400">
               <li><strong>Serve para advogados de reclamada?</strong> Sim, o conhecimento do rito beneficia ambos os lados.</li>
               <li><strong>Serve para outros tribunais?</strong> Sim, o CPC e a CLT são federais, o método é universal.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-gold font-bold mb-4">Contato</h4>
            <p className="text-sm text-gray-400">suporte@metodovereda.com.br</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Método Vereda. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não possui vínculo oficial com o TRT ou qualquer órgão público.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
