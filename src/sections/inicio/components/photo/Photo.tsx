import { BandAind } from '../../../../components/bandAind/BandAind';
import { motion } from 'motion/react';

export const Photo = () => {
  return (
    <div>
      <BandAind top={'top-14'} right={'right-24'} />
      <motion.img
        src='https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg'
        // src='https://firebasestorage.googleapis.com/v0/b/portfoto-ac408.appspot.com/o/derick%2FEu%20PB.jpeg?alt=media&token=4ba143df-b63b-4754-982b-38549801f426'
        alt='Your Photo'
        className='max-w-[600px] mb-4 z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      />
      <BandAind top={'-top-24'} right={'-right-72'} />
    </div>
  );
};
