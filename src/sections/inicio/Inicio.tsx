import { Photo } from './components/photo/Photo';

export const Inicio = () => {
  return (
    <div className='flex items-center gap-20 w-4/6'>
      <Photo />
      <div className='w-96 flex flex-col gap-4'>
        <p className='text-4xl'>Text top and great as large font it has to have</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ratione earum. Soluta
          voluptate odio, perspiciatis nesciunt nostrum impedit minima laudantium doloribus!
          Pariatur odit voluptate commodi praesentium sapiente deserunt eos eaque.
        </p>
        <div className='flex gap-4'>
          <button className='bg-black rounded-md text-white px-4 py-2 shadow text-xs'>
            Contacte me
          </button>
          <button className='bg-transparent border border-gray-400 rounded-md text-black px-4 py-2 shadow text-xs'>
            Check my work
          </button>
        </div>
      </div>
    </div>
  );
};
