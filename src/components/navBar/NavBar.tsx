import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='px-14 py-5 bg-zinc-50 text-black fixed w-full md:flex justify-between font-fira z-50 items-center hidden'>
      <p className='text-2xl'>DA</p>
      <ul className='flex gap-10 items-center'>
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
      <div className='flex gap-4 text-2xl'>
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
