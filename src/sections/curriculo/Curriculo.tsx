import { LuDownload } from 'react-icons/lu';

export const Curriculo = () => {
  return (
    <div className='h-5/6 flex items-center justify-between'>
      <div className='flex h-full flex-col items-center justify-between'>
        <div className='flex flex-col items-center w-96'>
          <p className='text-4xl font-bold'>Currículo</p>
          <p className='text-xs text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat pariatur nihil
            debitis unde, hic facilis dolor dolore illo. Possimus dolor ut quibusdam consequatur
            deserunt excepturi nam assumenda voluptatum rem?
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-2xl font-semibold text-white bg-black'>Educação</p>
          <p className='font-semibold'>Subtitulo</p>
          <p className='text-sm font-semibold'>Descrição</p>
          <p className='text-xs'>Detalhe</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-2xl font-semibold text-white bg-black'>Experiencias</p>
          <p className='font-semibold'>Subtitulo</p>
          <p className='text-sm font-semibold'>Descrição</p>
          <p className='text-xs'>Detalhe</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-2xl font-semibold text-white bg-black'>Habilidades</p>
          <p className='font-semibold'>Subtitulo</p>
          <p className='text-sm font-semibold'>Descrição</p>
          <p className='text-xs'>Detalhe</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xs '>Baixe meu curriculo em PDF</p>
          <button className='bg-black rounded-md text-white px-4 py-2 shadow text-xs flex items-center gap-2'>
            <LuDownload />
            <p>Download (3MB)</p>
          </button>
        </div>
      </div>
      <div>
        <img
          className='rounded-full w-60'
          src='https://i.scdn.co/image/ab6761610000e5eb9555a0b3231117c8cde1fca7'
          alt='jack'
        />
      </div>
    </div>
  );
};
