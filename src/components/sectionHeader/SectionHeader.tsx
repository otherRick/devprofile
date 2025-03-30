import { TypingEffect } from '../typingEffect/TypingEffect';

interface SectionHeaderProps {
  title: string;
  isFixed: boolean;
}

export const SectionHeader = ({ title, isFixed }: SectionHeaderProps) => {
  return (
    <div
      className={`w-full flex justify-center ${
        isFixed ? 'fixed bg-white z-10 top-16 h-15 items-center shadow-xs' : 'absolute bg-white'
      } `}
    >
      <div className='text-4xl text-gray-800'>
        <TypingEffect daHidden={true} text={title} />
      </div>
    </div>
  );
};
