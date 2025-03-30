import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { TypingEffect } from '../typingEffect/TypingEffect';

const Navbar = () => {
  const location = useLocation();

  // Função para verificar se o link está ativo
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className='px-14 py-5 shadow-inner shadow-zinc-400 bg-zinc-100 text-black fixed w-full md:flex justify-between font-fira z-50 items-center hidden'>
      <TypingEffect text='Derick Abreu' />
      <ul className='flex gap-10 items-center w-1/3'>
        <li>
          <Link
            to='/home'
            className={`hover:underline ${isActive('/home') ? 'underline text-zinc-600' : ''}`}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to='/projetos'
            className={`hover:underline ${isActive('/projetos') ? 'underline text-zinc-600' : ''}`}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to='/curriculo'
            className={`hover:underline ${
              isActive('/curriculo') ? 'underline text-zinc-600' : ''
            }`}
          >
            Currículo
          </Link>
        </li>
        <li>
          <Link
            to='/contato'
            className={`hover:underline ${isActive('/contato') ? 'underline text-zinc-600' : ''}`}
          >
            Contato
          </Link>
        </li>
      </ul>
      <div className='flex gap-4 text-2xl w-1/3 justify-end'>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/otherRick'>
          <FaGithub />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/derick-abreu/'
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
