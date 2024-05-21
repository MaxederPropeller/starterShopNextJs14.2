'use client';

import { motion } from 'framer-motion';

const NavbarButton = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <motion.button
      className="text-black focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {isOpen ? (
        <svg className="w-6 h-6" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )}
    </motion.button>
  );
};

export default NavbarButton;
