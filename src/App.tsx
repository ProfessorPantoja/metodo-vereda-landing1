import Hero from './components/Hero';
import VideoAuthority from './components/VideoAuthority';
import Dispersao from './components/Dispersao';
import Solucao from './components/Solucao';
import Conteudo from './components/Conteudo';
import Autor from './components/Autor';
import Prova from './components/Prova';
import Oferta from './components/Oferta';
import Comments from './components/Comments';
import Footer from './components/Footer';

import CheckoutSimulacao from './CheckoutSimulacao';

function App() {
  const isCheckout = window.location.search.includes('checkout');

  if (isCheckout) {
    return <CheckoutSimulacao />;
  }
  return (
    <div className="min-h-screen bg-brand-black text-gray-200 font-sans selection:bg-brand-gold selection:text-brand-black">
      <Hero />
      <VideoAuthority />
      <Dispersao />
      <Solucao />
      <Conteudo />
      <Autor />
      <Prova />
      <Oferta />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;