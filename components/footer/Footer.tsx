import React from 'react';
import { links, FirmenInformationen,SocialMedia, LegalLinks } from '@/lib/links';
import Link from 'next/link';

import Logo from '@/public/logo.png';

import FacebookIcon from '@/public/facebook.svg';
import LinkedInIcon from '@/public/linkedIn.svg';
import InstagramIcon from '@/public/instagram.svg';
import WhatsappIcon from '@/public/whatsapp.svg';



import Image from 'next/image';

const Footer: React.FC = () => {
    return (
    

<footer className="bg-white dark:bg-gray-900 mt-12">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href={"/"}
              className="flex items-center">
                  <Image src={Logo}
                    width={32}
                    height={32}

                  className="h-8 me-3 object-cover" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    {FirmenInformationen.firmenName}
                  </span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      {links.map((link) => (
                          <li key={link.href} className="mb-4">
                                <Link href={link.href
                                } className="hover:underline">{link.label}</Link>
                            </li>
                        ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                   {SocialMedia.map((link) => (
                          <li key={link.href} className="mb-4"> 
                                <Link href={link.href} className="hover:underline">{link.label}</Link>
                            </li>
                        ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rechtliches</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        {LegalLinks.map((link) => (
                            <li key={link.href} className="mb-4">
                                    <Link href={link.href} className="hover:underline">{link.label}</Link>
                                </li>
                            ))}
                  </ul>
              </div>
          </div>
      </div>


      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


      <div className="sm:flex sm:items-center sm:justify-between">
       

          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4  ">
          <Link href={SocialMedia[0].href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <Image src={InstagramIcon} 
                        alt={SocialMedia[0].label}
                    className="w-6 h-6 opacity-50 hover:opacity-100" 
                        width={16}
                        height={16}
                    />
                    <span className="sr-only">Instagram page</span>
                </Link>
              <Link href={SocialMedia[1].href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <Image src={FacebookIcon} 
                    alt={SocialMedia[1].label}
                  className="w-6 h-6 opacity-50 hover:opacity-100" 
                    width={16}
                    height={16}
                  />
                  <span className="sr-only">Facebook page</span>
              </Link>
                <Link href={SocialMedia[2].href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <Image src={LinkedInIcon} 
                        alt={SocialMedia[2].label}
                    className="w-6 h-6 opacity-50 hover:opacity-100" 
                        width={16}
                        height={16}
                    />
                    <span className="sr-only">LinkedIn page</span>
                </Link>
           
                <Link href={SocialMedia[3].href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <Image src={WhatsappIcon} 
                        alt={SocialMedia[3].label}
                    className="w-6 h-6 opacity-50 hover:opacity-100" 
                        width={16}
                        height={16}
                    />
                    <span className="sr-only">Whatsapp page</span>
                </Link>
                
              
          </div>
          <div className='flex gap-1 text-gray-500 dark:text-gray-400 text-sm mt-4 font-thin'>
                <p > Design von </p>
                <p> {FirmenInformationen.firmenName} </p>
              
          </div>
      </div>
    </div>
</footer>

    );
};

export default Footer;