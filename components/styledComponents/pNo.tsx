

import { TextProps } from '@/lib/types';
import React from 'react';




const PNo: React.FC<TextProps> = ({ content }) => {
  return (
    <p

      className='text-lg font-normal text-center mt-8 mb-4'
    >
      {content}
    </p>
  );
};

export default PNo;
