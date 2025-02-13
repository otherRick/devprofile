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
    <div className='flex flex-col items-center justify-start h-full'>
      <div className='flex flex-col w-96 items-center gap-2 mt-44'>
        <p className='text-xl'>Projetos</p>
        <p className='text-xs flex text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure beatae officia culpa, id
          saepe in necessitatibus dolorem laboriosam, commodi amet, quisquam reiciendis incidunt
          qui deserunt reprehenderit assumenda quibusdam pariatur molestias.
        </p>
      </div>
      <div className='p-6 flex flex-col items-center max-w-[1000px]'>
        <div className='relative w-full overflow-x-auto no-scrollbar'>
          <div className='flex gap-4 px-4 py-2 w-max'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='p-4 rounded-lg shadow w-60 flex flex-col snap-start group justify-between'
              >
                <div className='bg-zinc-50 p-2 flex items-center justify-center rounded-xl'>
                  <img src={project.image} alt={project.title} className='w-60' />
                </div>
                <h3 className='font-bold'>{project.title}</h3>
                <div className='flex gap-2'>
                  {project.categories.map((item) => (
                    <div
                      key={item}
                      className='bg-zinc-50 px-2 py-1 text-xs flex items-center justify-center w-fit rounded-md'
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className='text-xs'>{project.description}</p>

                <div className='flex justify-between mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.preview}
                    className='bg-black rounded-md text-white px-2 py-1 shadow-md text-xs flex items-center justify-between w-fit gap-2'
                  >
                    <FaEye />
                    <p>Preview</p>
                  </a>
                  <a
                    href={project.repo}
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
  );
};
