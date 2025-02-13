import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import { Inicio } from './sections/inicio/Inicio';
import { Projetos } from './sections/projetos/Projetos';
import { Curriculo } from './sections/curriculo/Curriculo';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const sectionId = location.pathname.replace('/', ''); // Remove a barra inicial
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <Navbar />
      <ScrollToSection />
      <div className='pt-16'>
        <section id='home' className='h-screen flex items-center justify-center'>
          <Inicio />
        </section>

        <section id='projetos' className='h-screen flex items-center justify-center'>
          <Projetos />
        </section>

        <section id='curriculo' className='h-screen flex items-center justify-center'>
          <Curriculo />
        </section>
        <section id='contato' className='h-screen flex items-center justify-center bg-yellow-200'>
          <h1 className='text-3xl font-bold'>Contato</h1>
        </section>
      </div>
    </>
  );
}

export default App;
