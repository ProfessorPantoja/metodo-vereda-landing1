import Hero from './components/Hero';
import VideoAuthority from './components/VideoAuthority';
import Dispersao from './components/Dispersao';
import Solucao from './components/Solucao';
import Conteudo from './components/Conteudo';
import Autor from './components/Autor';
import Prova from './components/Prova';
import Oferta from './components/Oferta';
import Footer from './components/Footer';

function App() {
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
      <Footer />
    </div>
  );
}

export default App;