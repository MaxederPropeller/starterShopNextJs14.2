// 'use client';




  

//   import React, { useCallback, useEffect, useState, useRef } from 'react';
// import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';

// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
// };

// const InfinityCarousel: React.FC<PropType> = ({ slides, options }) => {
//   const autoplayOptions = { delay: 3000, stopOnInteraction: false };
//   const autoplay = useRef(Autoplay(autoplayOptions));
//   const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [autoplay.current]);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
//     const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
//     setScrollProgress(progress * 100);
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;

//     onScroll(emblaApi);
//     emblaApi.on('reInit', onScroll).on('scroll', onScroll).on('slideFocus', onScroll);
//   }, [emblaApi, onScroll]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">
//                 <span>{index + 1}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>

//         <div className="embla__progress">
//           <div
//             className="embla__progress__bar"
//             style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfinityCarousel;
