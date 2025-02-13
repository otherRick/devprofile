import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='px-14 py-5 bg-zinc-50 text-black fixed w-full flex justify-between font-fira z-50'>
      <p className='text-xl'>DA</p>
      <ul className='flex gap-4'>
        <li>
          <Link to='/home' className='hover:underline'>
            Início
          </Link>
        </li>
        <li>
          <Link to='/projetos' className='hover:underline'>
            Projetos
          </Link>
        </li>
        <li>
          <Link to='/curriculo' className='hover:underline'>
            Currículo
          </Link>
        </li>
        <li>
          <Link to='/contato' className='hover:underline'>
            Contato
          </Link>
        </li>
      </ul>
      <div className='flex gap-2 text-xl'>
        <button>
          <FaGithub />
        </button>
        <button>
          <FaLinkedin />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
