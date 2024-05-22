'use client';
import Image from 'next/image';
import { ProductType } from '../helpers/types';
import React, { useState } from 'react';

export default function ImageContainer({ resData }: { resData: ProductType }) {
  const { image: mainImage, images } = resData;
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleThumbnailClick = (newImage: string) => {
    setSelectedImage(newImage);
  };

  return (

    <div className="flex-grow relative ">
    <div className="flex flex-col items-center">

      {/* Main Image */}
      <div className="relative w-full h-[350px]">
        <Image
          src={selectedImage}
          alt={resData.name}
          className="object-contain w-full h-full"
          width={500}
          height={500}
          priority
        />

        {/* Fullscreen Button */}
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 border-2"
          onClick={() => setShowOverlay(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </button>
      </div>

      {/* Image Thumbnails */}
      <div className="flex mt-4 w-full justify-center">
        <Image src={resData.image} alt={resData.name} 
        className={`object-cover w-24 h-24 cursor-pointer mr-2  ${resData.image === selectedImage ? 'border-2 border-slate-500/20' : ''}`}
        
        width={500} height={500} onClick={() => handleThumbnailClick(resData.image)} />
        

        {images?.map((img, index) => (
          <div
            key={index}
            className={`w-24 h-24 mr-2 ${img === selectedImage ? 'border-2 border-slate-500/20' : ''}`}
          >
            <Image
              src={img}
              alt={resData.name}
              className="object-cover w-full h-full cursor-pointer"
              width={500}
              height={500}
              onClick={() => handleThumbnailClick(img)}
            />
          </div>
        ))}
      </div>
    </div>
        {/* Fullscreen Overlay */}
        {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center z-50">
          <div className="h-full max-h-[700px] flex flex-col justify-center items-center"> {/* Fixed height to avoid shift */}
            <div className="relative max-h-[90%] w-full"> {/* Limit image to 90% of parent, keep aspect ratio */}
              <Image
                src={selectedImage}
                alt={resData.name}
                className="max-w-full max-h-full object-contain" 
                width={1200}
                height={1200}
              />
            </div>
                  {/* Image Thumbnails */}
                  <div className="flex mt-4 w-full justify-center h-[10%]">
                                <Image src={resData.image} alt={resData.name} className={`object-cover w-24 h-24 cursor-pointer ${resData.image === selectedImage ? 'border-2 border-slate-500/20' : ''}`} width={500} height={500} onClick={() => handleThumbnailClick(resData.image)} />
          {images?.map((img, index) => (
            <div 
              key={index} 
              className={`w-24 h-24 mr-2 ${img === selectedImage ? 'border-2 border-slate-500/20' : ''}`} // Conditional border
            >
              <Image
                src={img}
                alt={resData.name}
                className="object-cover w-full h-full cursor-pointer"
                width={500}
                height={500}
                onClick={() => handleThumbnailClick(img)}
              />
            </div>
          ))}
        </div>
   
                    {/* Close Button (You'll need to add an appropriate icon) */}
                    <button
                      className="absolute top-4 right-4 md:right-1/4 bg-white  p-2  px-4 rounded-full"
                      onClick={() => setShowOverlay(false)}
                    >X</button>
                </div>
            </div>
       
        )}
      </div>

  );
}
