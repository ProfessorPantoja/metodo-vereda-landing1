
const Footer = () => {
  return (
    <footer className="bg-brand-noir border-t border-white/5 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
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
