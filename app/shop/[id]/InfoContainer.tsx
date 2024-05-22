import React from 'react';
import { ProductType } from '../helpers/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export function TabsDescription ({ resData } : { resData: ProductType }) {

   

    return (
   
           <Tabs defaultValue="Produktdetails" className='h-96    bg-gray-100  rounded-md shadow-md'     >
                <TabsList >
                    <TabsTrigger value="Produktdetails" className='w-full px-4 py-2 text-center'>
                        Produktdetails
                    </TabsTrigger>
                    <TabsTrigger value="Material" className='w-full px-4 py-2 text-center'>
                        Material
                    </TabsTrigger>

                    <TabsTrigger value="Lieferung" className='w-full px-4 py-2 text-center' >
                        Lieferung
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="Produktdetails" className=' w-full px-4 h-full  pt-6'>
                        <h3 className='font-bold'>
                            Titel Produktdetails
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem dicta ipsa, deleniti eius illo ab! Qui fugit incidunt non sit, nesciunt sed perferendis libero? Ullam possimus officia reiciendis cupiditate.
                        </p>
                </TabsContent>
                <TabsContent value="Material" className=' w-full px-4 h-full  pt-6'>
                <h3 className='font-bold'>
                            Titel Material
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem dicta ipsa, deleniti eius illo ab! Qui fugit incidunt non sit, nesciunt sed perferendis libero? Ullam possimus officia reiciendis cupiditate.
                        </p>
                </TabsContent>

                <TabsContent value="Lieferung" className=' w-full px-4 h-full  pt-6'>
                <h3 className='font-bold'>
                            Titel Lieferung
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem dicta ipsa, deleniti eius illo ab! Qui fugit incidunt non sit, nesciunt sed perferendis libero? Ullam possimus officia reiciendis cupiditate.
                        </p>
                </TabsContent>
            </Tabs>

    );
};

