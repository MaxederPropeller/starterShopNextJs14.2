'use client';

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { CURRENCY } from "../helpers/stripe/stripeHelpers";
import { ProductTypeShort } from "../helpers/types";
import Link from "next/link";
import { MotionDiv } from "@/lib/motionExport";

export function WeiteresContainer({ resDataShort }: { resDataShort: ProductTypeShort[] }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [currentChunk, setCurrentChunk] = React.useState(0);
  const [itemsPerChunk, setItemsPerChunk] = React.useState(2); // Default for smaller screens

  React.useEffect(() => {
      function handleResize() {
          const isLgScreen = window.innerWidth >= 1024; // Adjust breakpoint as needed
          setItemsPerChunk(isLgScreen ? 5 : 2);
      }

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  React.useEffect(() => {
      if (!api || !resDataShort.length) return;

      setCurrentChunk(Math.floor(api.selectedScrollSnap() / itemsPerChunk));

      api.on("select", () => {
          setCurrentChunk(Math.floor(api.selectedScrollSnap() / itemsPerChunk));
      });
  }, [api, resDataShort, itemsPerChunk]);

  const totalChunks = Math.ceil(resDataShort.length / itemsPerChunk);

  if (!resDataShort || resDataShort.length === 0) {
      return <div>No products available.</div>; // Or a loading state
  }

    return (
        <div>
            <Carousel setApi={setApi}>
                <CarouselContent className="-ml-1 gap-2">
                    {resDataShort.map((product, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/5 ">
                            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href={`/shop/${product.id}`} passHref>
                                    <Card className="p-0 m-0 ">
                                        <CardContent className="flex aspect-square items-end justify-center p-0 m-0 relative">
                                      <div className='absolute top-0 left-0 flex gap-1 z-20'>
                                    {product.isOnSale === true && (
                                        <div className=" bg-red-500 text-white text-lg font-bold  px-4 py-1">
                                        Sale
                                    </div>
                                     )}
                                    {product.isNew === true && (
                                        <div className=" bg-cyan-500 text-white text-lg font-bold  px-4 py-1">
                                        New
                                    </div>
                                     )}
                                    {product.isHit === true && (
                                        <div className=" bg-lime-500 text-white text-lg font-bold  px-4 py-1">
                                        Bestseller
                                    </div>
                                     )}
                                </div>

                                            <span className="absolute top-0 right-0 bg-slate-300 px-2 py-1 font-semibold z-10">
                                                
                                {product?.isOnSale === true && (
                                    <div className='flex flex-col justify-end items-end'>
                                        <div className="text-gray-500 text-sm font-semibold line-through">{CURRENCY} {product?.price}</div>
                                        <div className="text-red-500 text-lg font-bold">{CURRENCY} {product?.salePrice}</div>
                                    </div>
                                )}
                                {product?.isOnSale === false && (
                                    <div className="text-gray-500 text-lg font-bold">{CURRENCY} {product?.price}</div>
                                )}
                                            </span>
                                            <Image
                                                src={product.img}
                                                alt={product.name}
                                                width={500}
                                                height={500}
                                                className="object-fill absolute z-0"
                                            />
                                            <p className="text-start z-10 w-full bg-slate-300 px-2 py-1 font-semibold">
                                                {product.name}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </MotionDiv>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {totalChunks > 1 && ( // Conditionally render the dots
                <div className="flex justify-center items-center py-2 gap-2">
                    {[...Array(totalChunks)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentChunk === index ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
