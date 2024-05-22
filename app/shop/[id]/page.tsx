import React from 'react';
import { ProductType, ProductTypeShort } from '../helpers/types';
import { readAllProductsShort, readProductById } from '../helpers/firebase/actionFirebase';
import { Props } from '@/lib/types';

import { TabsDescription } from './InfoContainer';
import ImageContainer from './imageContainer';

import DescriptionContainer from './DesContainer';
import { WeiteresContainer } from './weitereContainer';
import BackToStoreButton from './BackToStoreButton';




export  default async function ProductPage ({ params } : { params: Props & { id: string } }) {

    const id = params.id;
    const resData = await readProductById(id) as ProductType;
    const resDataShort =  await readAllProductsShort() as ProductTypeShort[];


    return (
        <div className=' flex items-center justify-center  '>
            <div className="grid grid-cols-1 lg:grid-cols-2  mt-4 w-full max-w-7xl
             space-y-4 lg:space-y-0 lg:gap-4 lg:space-x-4
            
            ">
                <ImageContainer resData={resData} />
                <DescriptionContainer resData={resData} />
                
                <div className="flex-grow  py-4 col-span-2 px-4 lg:px-0 ">
                    <TabsDescription resData={resData} />              
                </div>
                <div className="flex-grow  py-4 col-span-2 px-4 lg:px-0">
                    <h3 className="font-bold text-xl mb-2">
                        Weitere Produkte
                    </h3>
                    <WeiteresContainer resDataShort={resDataShort} />          
                    <BackToStoreButton />
                </div>
                  
            
            </div>
        </div>
    );
};

