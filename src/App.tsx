import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import { Inicio } from './sections/inicio/Inicio';
import { Projetos } from './sections/projetos/Projetos';
import { Curriculo } from './sections/curriculo/Curriculo';
import { Contato } from './sections/contato/Contato';
import { Footer } from './components/footer/Footer';
import { MobileNavBar } from './components/navBar/MobileNavBar';
import { GoBackTop } from './components/goBackTop/GoBackTop';
import { Sidebar } from './components/sidebar/Sidebar';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const sectionId = location.pathname.replace('/', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar />
      <MobileNavBar onClick={() => setSidebar(true)} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <ScrollToSection />
      <div className='pt-16 '>
        <section id='home' className='h-screen flex items-center justify-center'>
          <Inicio />
        </section>

        <section id='projetos' className='h-screen flex items-center justify-center'>
          <Projetos />
        </section>

        <section id='curriculo' className='h-screen flex items-center justify-center'>
          <Curriculo />
        </section>
        <section id='contato' className='h-screen flex items-center justify-center'>
          <Contato />
        </section>
      </div>
      <GoBackTop />
      <Footer />
    </>
  );
}

export default App;
