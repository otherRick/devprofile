import { Link } from 'react-router-dom';
import { Photo } from './components/photo/Photo';

export const Inicio = () => {
  return (
    <div className='md:flex items-center gap-20 md:w-4/6 space-y-10'>
      <Photo />
      <div className='flex flex-col gap-4 md:w-full w-80'>
        <div>
          <p className='md:text-4xl text-2xl'>Olá, sou Derick Abreu</p>
          <p className='md:text-4xl text-2xl bg-black text-white w-fit'>Desenvolvedor Front-End</p>
        </div>
        <p>
          Sou um desenvolvedor front-end, natural do Rio de Janeiro, Brasil, com 4 anos de
          experiência comercial. Sou especializado na criação de aplicativos web e estou aberto a
          novas oportunidades e projetos interessantes.
        </p>

        <div className='flex gap-4'>
          <Link to='/contato' className='bg-black rounded-md text-white px-4 py-2 shadow text-xs'>
            Entre em contato
          </Link>
          <Link
            to='/projetos'
            className='bg-transparent border border-gray-400 rounded-md text-black px-4 py-2 shadow text-xs'
          >
            Confira alguns projetos
          </Link>
        </div>
      </div>
    </div>
  );
};
