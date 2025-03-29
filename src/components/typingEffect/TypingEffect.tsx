import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text?: string;
}

export const TypingEffect = ({ text = 'Derick Abreu' }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!expanded) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, expanded]);

  return (
    <div className='flex md:w-1/3 transition-all duration-300'>
      {expanded ? (
        <motion.p
          className='text-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayedText}
        </motion.p>
      ) : (
        <p className='text-2xl'>DA</p>
      )}
    </div>
  );
};
