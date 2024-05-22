
'use client';
import React from 'react';
import { ProductType } from '../helpers/types';

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import AddShoppingCartButtonSingle from './addToCartButton';

import { CheckoutFormSingle } from '../helpers/stripe/CheckoutFormSingle';
import { CURRENCY } from '../helpers/stripe/stripeHelpers';





export  default  function DescriptionContainer ({ resData }: { resData: ProductType
 }) {



    return (
            <div className="flex-grow  col-span-2 lg:col-span-1 flex flex-col gap-4 px-4 lg:px-2">
                            <div className='relative flex justify-around h-24'>
                                <div className='w-full'>
                                    <h2 className="font-bold text-xl mb-2">{resData?.name}</h2>
                                    <h3 className="text-gray-700 text-base">{resData?.shortDes}</h3>
                                </div>
                                <div className='flex justify-end items-end w-full'> 
                                {resData?.isOnSale === true && (
                                    <div className='flex flex-col justify-end items-end'>
                                        <div className="text-gray-500 text-sm font-semibold line-through">{CURRENCY} {resData?.price}</div>
                                        <div className="text-red-500 text-lg font-bold">{CURRENCY} {resData?.salePrice}</div>
                                    </div>
                                )}
                                {resData?.isOnSale === false && (
                                    <div className="text-gray-500 text-lg font-bold">{CURRENCY} {resData?.price}</div>
                                )}

                                </div>
                                <div className='absolute top-0 right-0 flex gap-1'>
                                    {resData.isOnSale === true && (
                                        <div className=" bg-red-500 text-white text-lg font-bold  px-4 py-1">
                                        Sale
                                    </div>
                                     )}
                                    {resData.isNew === true && (
                                        <div className=" bg-cyan-500 text-white text-lg font-bold  px-4 py-1">
                                        New
                                    </div>
                                     )}
                                    {resData.isHit === true && (
                                        <div className=" bg-lime-500 text-white text-lg font-bold  px-4 py-1">
                                        Bestseller
                                    </div>
                                     )}
                                </div>
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h2 className="font-bold text-xl mb-2">Kategorie 1</h2>
                                <ToggleGroup type="single" className='w-full'>
                                    <ToggleGroupItem value="bold" aria-label="Toggle bold"
                                        className='w-full'
                                    >
                                        Auswahl 1
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="italic" aria-label="Toggle italic"
                                        className='w-full'
                                    >
                                        Auswahl 2
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough"
                                        className='w-full'
                                    >
                                        Auswahl 3
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                          
                            <div className='flex flex-col justify-start'>
                                <h2 className="font-bold text-xl mb-2">Kategorie 2</h2>
                                <ToggleGroup type="single" className='w-full'>
                                    <ToggleGroupItem value="bold" aria-label="Toggle bold"
                                        className='w-full'
                                        
                                    >
                                        Auswahl 1
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="italic" aria-label="Toggle italic"
                                        className='w-full'
                                    >
                                        Auswahl 2
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough"
                                        className='w-full'
                                    >
                                        Auswahl 3
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                            
                            <div>
              
                                <h3 className="text-gray-700 text-base">{resData?.description}</h3>


                            </div>
                           <div className='flex gap-2'>
                                <AddShoppingCartButtonSingle resData={resData} />
                                <CheckoutFormSingle params={resData} uiMode='hosted' />

                            </div>

                            
                        </div>
                      
    );
};

