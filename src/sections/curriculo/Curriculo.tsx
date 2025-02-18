import { LuDownload } from 'react-icons/lu';

export const Curriculo = () => {
  const stacks = [
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'Redux',
    'HTML',
    'CSS',
    'StoryBook',
    'RESTapi',
    'Jest'
  ];
  return (
    <div className='md:h-5/6 h-full flex items-center justify-between  '>
      <div className='rounded-full md:w-60'></div>
      <div className='flex h-full flex-col items-center justify-between'>
        <div className='flex flex-col items-center w-96'>
          <p className='text-4xl font-bold'>Currículo</p>
          <p className='text-xs text-center'>
            Com mais de 3 anos de experiência no mercado, sou um desenvolvedor criativo com
            experiências anteriores em mídia e design. Na sua empresa usarei toda minha bagagem
            para otimizar seu código e agregar sua equipe.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-2xl font-semibold text-white bg-black'>Educação</p>
          <p className='font-semibold'>Universidade São Francisco (USF)</p>
          <p className='text-sm font-semibold'>Engenharia de Software</p>
          <p className='text-xs'>2024 - 2027</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <p className='text-2xl font-semibold text-white bg-black'>Experiencias</p>
          <div className='flex flex-col items-center'>
            <p className='font-semibold'>Junior Front-end dev</p>
            <p className='text-sm '>VALEPAY</p>
            <p className='text-xs'>04/2022 - 02/2023</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-semibold'>Pleno Front-end dev</p>
            <p className='text-sm '>ATIS WORK - CASHIN</p>
            <p className='text-xs'>04/2023 - 08/2023</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-semibold'>Pleno Front-end dev</p>
            <p className='text-sm '>TRIGAN</p>
            <p className='text-xs'>10/2023 - presente</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <p className='text-2xl font-semibold text-white bg-black'>Habilidades</p>
          <div className='grid grid-cols-3 gap-4 text-sm font-semibold'>
            {stacks.map((stack) => (
              <p className='text-sm font-semibold'>{stack}</p>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-xs '>Baixe meu curriculo em PDF</p>
          <a
            href='https://firebasestorage.googleapis.com/v0/b/portfoto-ac408.appspot.com/o/devPortfolio%2Ftabela_spa_precos.pdf?alt=media&token=5d701d33-2725-4b9c-9e45-be203aeeabb1'
            download
            target='_blank'
            rel='noopener noreferrer'
            className='bg-black rounded-md text-white px-4 py-2 shadow text-xs flex items-center gap-2'
          >
            <LuDownload />
            <p>Download (3MB)</p>
          </a>
        </div>
      </div>
      <div>
        <img
          className='rounded-full w-60 hidden md:block'
          src='https://firebasestorage.googleapis.com/v0/b/portfoto-ac408.appspot.com/o/derick%2F292580055_542349720922020_3344308867688049997_n.jpg?alt=media&token=a727b5df-4cf7-49e2-ad4c-f26e8aa497ca'
          alt='jack'
        />
      </div>
    </div>
  );
};
