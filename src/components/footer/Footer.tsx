export const Footer = ({ year }) => {
  return (
    <div className='flex w-full bg-zinc-100 rounded-2xl px-10 py-2 mb-5 justify-end gap-2'>
      <p className='text-zinc-400'>Desenvolvido por:</p>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://derickabreu.com.br'
        className='text-zinc-700 font-bold'
      >
        Derick Abreu
      </a>
      <p className='text-xs text-zinc-400'>{year ? new Date().getFullYear() : ''}</p>
    </div>
  );
};
