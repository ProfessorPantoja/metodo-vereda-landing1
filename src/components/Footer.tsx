
const Footer = () => {
  return (
    <footer className="bg-brand-noir border-t border-white/5 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8 mb-8 text-left max-w-4xl mx-auto">
          <div>
            <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-wider text-xs">Dúvidas Frequentes</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="p-4 bg-white/5 rounded-lg border border-white/5">
                <strong className="block text-white mb-1">Serve para advogados de reclamada?</strong>
                Sim, o conhecimento do rito beneficia ambos os lados.
              </li>
              <li className="p-4 bg-white/5 rounded-lg border border-white/5">
                <strong className="block text-white mb-1">Serve para outros tribunais?</strong>
                Sim, a CLT e o CPC são leis federais. O núcleo do método é universal.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-wider text-xs">Contato & Suporte</h4>
            <p className="text-sm text-gray-400 mb-4">
              Precisa de ajuda com a compra? <br />
              <a href="mailto:suporte@metodovereda.com.br" className="text-white hover:text-brand-champagne transition-colors">suporte@metodovereda.com.br</a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Método Vereda. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não possui vínculo oficial com o TRT ou qualquer órgão público.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
