

import React from 'react';
import { TextProps } from '@/lib/types';



const H2No: React.FC<TextProps> = ({ content }) => {
  return (
    <h2
      className='text-2xl font-bold text-center mt-8 mb-4'
    >
      {content}
    </h2>
  );
};

export default H2No;
