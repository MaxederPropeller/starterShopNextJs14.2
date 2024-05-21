

import React from 'react';
import { MotionP } from '@/lib/motionExport';
import { TextProps } from '@/lib/types';



const P: React.FC<TextProps> = ({ content }) => {
  return (
    <MotionP
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-lg font-normal text-center mt-8 mb-8'
    >
      {content}
    </MotionP>
  );
};

export default P;
