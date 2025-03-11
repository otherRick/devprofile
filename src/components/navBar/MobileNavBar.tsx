import { IoMdMenu } from 'react-icons/io';

interface MobileNavBar {
  onClick?: React.MouseEventHandler<SVGElement>;
}
export const MobileNavBar = ({ onClick }: MobileNavBar) => {
  return (
    <div className='md:hidden rounded-2xl'>
      <nav className='px-14 py-5 bg-zinc-50 rounded-2xl text-black fixed w-full flex justify-between font-fira z-50 items-center'>
        <p className='text-2xl'>DA</p>
        <IoMdMenu onClick={onClick} className='text-4xl' />
      </nav>
    </div>
  );
};
