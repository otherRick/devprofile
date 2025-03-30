import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text?: string;
  daHidden?: boolean;
}

export const TypingEffect = ({ text = 'Derick Abreu', daHidden }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setExpanded(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = expanded ? 0 : text.length; // Define o índice inicial dependendo do estado
    setDisplayedText(expanded ? '' : text); // Define o texto inicial

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i = expanded ? i + 1 : i - 1; // Incrementa ou decrementa baseado no estado

      if (expanded ? i > text.length : i < 0) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, expanded]);

  return (
    <div className='flex md:w-1/3 transition-all duration-300'>
      {expanded || displayedText ? (
        <motion.p
          className='text-2xl text-center w-full md:w-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayedText}
        </motion.p>
      ) : (
        <p className={`text-2xl ${daHidden && 'hidden'}`}>DA</p>
      )}
    </div>
  );
};
