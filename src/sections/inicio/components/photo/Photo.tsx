import { motion } from 'motion/react';

export const Photo = () => {
  return (
    <div className='md:block items-center flex justify-center'>
      <motion.img
        src='https://firebasestorage.googleapis.com/v0/b/portfoto-ac408.appspot.com/o/derick%2FEu%20PB.jpeg?alt=media&token=4ba143df-b63b-4754-982b-38549801f426'
        alt='Your Photo'
        className='md:max-w-[400px] w-80 mb-4 z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      />
    </div>
  );
};
