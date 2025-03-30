import { FaEye } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import { projectsData } from './projectsData';

export const Projetos = () => {
  const selectedCategory = 'All';

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.categories.includes(selectedCategory));

  return (
    <div className='flex justify-center h-full relative'>
      <div className='flex flex-col items-center justify-start h-full md:mt-52 mt-36 w-96'>
        <div className='flex flex-col w-96 items-center gap-2 mt-20'>
          <p className='text-xs flex text-center'>
            Confira os meu projetos comerciais e não comerciais. Se você tiver alguma duvida,
            sinta-se a vontade para me enviar qualquer pergunta.
          </p>
        </div>
        <div className='p-6 flex flex-col items-center md:max-w-[1000px] md:w-max w-full'>
          <div className='relative md:w-full max-h-[500px] md:overflow-x-auto overflow-y-auto shadow-inner bg-zinc-200'>
            <div className='md:flex md:flex-row flex-col gap-4 px-4 py-2 w-max space-y-4 md:space-y-0'>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className='p-4 rounded-lg shadow md:w-60 w-80 flex flex-col gap-2 snap-start group justify-between bg-white'
                >
                  <div className='bg-zinc-50 p-2 flex items-center justify-center rounded-xl'>
                    <img src={project.image} alt={project.title} className='w-60' />
                  </div>
                  <h3 className='font-bold'>{project.title}</h3>
                  <div className='flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar'>
                    {project.categories.map((item) => (
                      <div
                        key={item}
                        className='bg-zinc-100 shadow-2xl shadow-black px-2 py-1 text-xs flex items-center justify-center w-fit rounded-md '
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className='text-xs'>{project.description}</p>

                  <div className='flex justify-between mt-5 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={project.preview}
                      className='bg-black rounded-md text-white px-2 py-1 shadow-md text-xs flex items-center justify-between w-fit gap-2'
                    >
                      <FaEye />
                      <p>Preview</p>
                    </a>
                    <a
                      href={project.repo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white rounded-md text-black px-2 py-1 shadow-md text-xs flex items-center w-fit gap-2'
                    >
                      <LuGithub />
                      <p>Github Repo</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
