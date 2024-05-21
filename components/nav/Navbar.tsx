'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NavbarButton from './navbar-button';
import { WarenKorbSheet } from '@/app/shop/components/cart/cart';



const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: '-100%',
    transition: {
      when: 'afterChildren',
    },
  },
};

const linkVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement).closest('.sidebar') &&
        !(event.target as HTMLElement).closest('.navbar-button')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const links = [
    { href: '/', label: 'About Me' },
    { href: '/shop', label: 'Shop' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Kontakt' },
  ];

  const renderLinks = (isMobile: boolean) =>
    links.map((link) => (
      <motion.div
        key={link.href}
        variants={linkVariants}
        className={`text-black h-fit text-xl font-bold  ${isMobile ? 'block' : 'inline-block px-4 py-2 text-lg'}`}
        >
        <Link 
        
        className={`text-black h-fit my-4 ${isMobile ? 'block' : 'inline-block px-4 py-2 text-lg'}`}
        
        href={link.href} onClick={() => isMobile && setIsOpen(false)}>
          {link.label}
        </Link>
      </motion.div>
    ));

  return (
    <div className="sticky w-full top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='w-full flex flex-col lg:justify-center lg:items-center py-4'>
                <div className='w-full flex justify-between relative lg:justify-center lg:items-center lg:text-center
                 '>
                    <h1 className="text-black text-xl lg:text-3xl font-bold w-full">My View Photography</h1>
                    <div className="lg:hidden flex gap-4">
                    
                        <WarenKorbSheet />

                        <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>

                    {/* Shopping Cart Trigger Button */}
                    <div className='absolute right-0 hidden lg:block'>
                        

                        <WarenKorbSheet />

                    </div>


                </div>
                <div className="flex items-center justify-between h-2 bg-black w-full my-2" />
                <div className="hidden lg:flex space-x-4 items-center">
                    <div className=" w-full">{renderLinks(false)}</div>
                </div>
            </div>
      

      </div>

      <motion.div
        className="fixed top-0 left-0 w-64 bg-gray-200/90 h-full overflow-auto sidebar"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
      >
        
        <div className="px-2 pt-2 pb-3 space-y-1 h-full flex flex-col justify-center items-center text-center">
    
            {renderLinks(true)}</div>
      </motion.div>
    </div>
  );
};

export default Navbar;
