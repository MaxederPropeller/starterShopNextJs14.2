
import { MotionH1 } from '@/lib/motionExport';
import React from 'react';
import { TextProps } from '@/lib/types';



const H1: React.FC<TextProps> = ({ content }) => {
  return (
    <MotionH1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-4xl font-bold text-center mt-8 mb-4'
    >
      {content}
    </MotionH1>
  );
};

export default H1;
