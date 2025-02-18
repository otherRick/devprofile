import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export const GoBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, -10, 0] : 0
      }}
      transition={{
        opacity: { duration: 0.3 },
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }}
      style={{ background: 'rgba(0,0,0,0.6)' }}
      className='fixed  bottom-24 flex items-center justify-center w-10 h-10 right-10 p-3 bg-zinc-700 text-white rounded-full cursor-pointer'
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp size={24} />
      </button>
    </motion.div>
  );
};
