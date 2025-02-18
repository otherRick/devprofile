import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CgHome, CgWebsite } from 'react-icons/cg';
import { VscGist } from 'react-icons/vsc';
import { RiContactsLine } from 'react-icons/ri';
import { Footer } from '../footer/Footer';

type SidebarProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidebar = ({ sidebar, setSidebar }: SidebarProps) => {
  return (
    <div
      className={`fixed md:hidden top-0 left-0 bg-zinc-100 border-1 border-zinc-300 w-full h-full rounded-2xl z-50 shadow-xl sidebar-transition justify-between flex-col flex
          ${sidebar ? 'sidebar-visible' : 'sidebar-hidden'}`}
    >
      <div className='flex flex-col justify-evenly w-full p-4 border-b-1 border-zinc-200'>
        <div onClick={() => setSidebar(false)} className='flex items-center gap-2'>
          <div className='w-1/4'>
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 1,
                x: [-4, 4, -4]
              }}
              transition={{
                opacity: { duration: 0.3 },
                x: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut'
                }
              }}
              className='bottom-24 p-2 bg-zinc-900 text-white rounded-full w-fit cursor-pointer '
            >
              <FaArrowRight className='text-white text-xl' />
            </motion.div>
          </div>
          <p className='text-xl'>Menu</p>
        </div>
      </div>

      <ul className='flex flex-col h-full gap-14 px-6 py-14 text-xl'>
        <li>
          <Link
            to='/home'
            onClick={() => setSidebar(false)}
            className='hover:underline flex items-center gap-2'
          >
            <CgHome className='text-2xl' />
            <p>Início</p>
          </Link>
        </li>
        <li>
          <Link
            to='/projetos'
            onClick={() => setSidebar(false)}
            className='hover:underline flex items-center gap-2'
          >
            <CgWebsite />
            <p>Projetos</p>
          </Link>
        </li>
        <li>
          <Link
            to='/curriculo'
            onClick={() => setSidebar(false)}
            className='hover:underline flex items-center gap-2'
          >
            <VscGist />
            Currículo
          </Link>
        </li>
        <li>
          <Link
            to='/contato'
            onClick={() => setSidebar(false)}
            className='hover:underline flex items-center gap-2'
          >
            <RiContactsLine />
            Contato
          </Link>
        </li>
      </ul>
      <div className='flex text-2xl border-t-1 border-zinc-300 p-10 gap-10'>
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
      <div className='w-fit text-xs'>
        <Footer year />
      </div>
    </div>
  );
};
