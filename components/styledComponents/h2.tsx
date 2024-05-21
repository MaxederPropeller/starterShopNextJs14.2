

import { MotionH2 } from '@/lib/motionExport';
import React from 'react';
import { TextProps } from '@/lib/types';



const H2: React.FC<TextProps> = ({ content }) => {
  return (
    <MotionH2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-xl font-bold text-center mt-8 mb-4'
    >
      {content}
    </MotionH2>

  );
};

export default H2;
