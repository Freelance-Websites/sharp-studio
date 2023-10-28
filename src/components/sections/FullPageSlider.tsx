import { useEffect } from 'react';
const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

import BoxedImage from '@/components/sections/BoxedImage';
import TwoColumnImages from '@/components/sections/TwoColumnImages';
import VirtualStaging from '@/components/sections/VirtualStaging';
import TextOnly from '@/components/sections/TextOnly';

import { MediumText, StandardText } from '@/components/Typography';

interface Slide {
  type: string;
  image?: string;
  color?: string;
  imageTwo?: string;
  title: string;
  description?: string;
  credit: string;
  theme?: string;
  titleTwo?: string;
  creditTwo?: string;
  imageMobile?: string;
  imageFit?: string;
  percentage?: number;
  imageOneCaption?: string;
  imageTwoCaption?: string;
}

export default function FullPageSlider({ slides, drag, hasArrows, slideUp, slideDown }: {
  slides: Array<Slide>;
  drag: Boolean;
  hasArrows?: Boolean;
  slideUp?: () => void;
  slideDown?: () => void;
}) {
  const updateViewportHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', () => updateViewportHeight());

    // Cleanup
    return () => {
      document.removeEventListener('resize', updateViewportHeight);
    }
  }, []);

  return (
    <Splide
      hasTrack={false}
      options={{
        speed: '400',
        autoplay: true,
        rewind: true,
        drag,
        rewindByDrag: drag,
      }}
    >
      <SplideTrack>
        {slides.map((slide, index) =>
          <SplideSlide
            key={index}
            className="w-full h-custom relative"
          >
            {/* Image, gradient and overlay. We only show these for images and video overlays, and for places where we have text to add. */}
            {slide.type === 'video' || slide.type === 'image' &&
              <>
                <div className="bg-gradient-to-t from-black absolute w-full h-custom z-20 to-20% opacity-60" />
                <div className="bg-black/10 w-full h-custom z-10 absolute" />
              </>
            }
            {slide.type === 'video' ?
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                data-autoplay
              >
                <source src={slide.image} type="video/mp4" />
              </video>
            : slide.type === 'panoram' && slide.image ?
              <>
                <ReactPhotoSphereViewer
                  src={slide.image}
                  height={'100vh'}
                  width={"100%"}
                  navbar={false}
                  container={""}
                />
              </>
            : slide.type === 'two-column' && slide.image ?
              <TwoColumnImages
                imageUrl={slide.image}
                title={slide.title}
                credit={slide.credit}
                titleTwo={slide.titleTwo ? slide.titleTwo : ''}
                creditTwo={slide.creditTwo ? slide.creditTwo : ''}
                imageMobile={slide.imageMobile ? slide.imageMobile : undefined}
              />
            : slide.type === 'one-column' && slide.image ?
              <BoxedImage
                color={slide.color ? slide.color : 'bg-off-white'}
                imageUrl={slide.image}
                title={slide.title}
                credit={slide.credit}
              />
            : slide.type === 'slide' && slide.image && slide.imageTwo ?
              <VirtualStaging
                leftImage={slide.image}
                rightImage={slide.imageTwo}
                title={slide.title}
                credit={slide.credit}
                percentage={slide.percentage ? slide.percentage : 0.25}
                imageOneCaption={slide.imageOneCaption ? slide.imageOneCaption : undefined}
                imageTwoCaption={slide.imageTwoCaption ? slide.imageTwoCaption : undefined}
                theme={slide.theme ? slide.theme : undefined}
              />
            : slide.type === 'walking' ?
              <iframe
                src={slide.image}
                className="w-full h-custom"
              />
            : slide.image || slide.type === 'map' && slide.image ?
              <>
                <Image
                  src={slide.image}
                  alt={`${slide.title} – ${slide.credit}`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  className={`w-full h-full ${slide.imageFit ? slide.imageFit : 'object-cover'} ${slide.imageMobile ? 'hidden lg:block' : ''}`}
                />
                {slide.imageMobile &&
                  <Image
                    src={slide.imageMobile}
                    alt={`${slide.title} – ${slide.credit}`}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    className="w-full h-full object-contain block lg:hidden"
                  />
                }
              </>
            :
              <TextOnly
                title={slide.title ? slide.title : undefined}
                content={slide.description ? slide.description : slide.title}
                color={slide.theme && slide.theme === 'dark' ? 'text-white' : 'text-black'}
                classes="px-12 md:px-0"
              />
            }
            {/* Captions */}
            {slide.imageOneCaption &&
              <p className={`${slide.type === 'two-column' || slide.type === 'one-column' ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'} absolute top-20 left-4 z-10`}>
                <MediumText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                  <span className="font-neue-bold">{slide.imageOneCaption}</span>
                </MediumText>
              </p>
            }
            {slide.imageTwoCaption &&
              <p className={`${slide.type === 'two-column' || slide.type === 'one-column' ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'} absolute top-20 right-4 z-10`}>
                <MediumText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                  <span className="font-neue-bold">{slide.imageTwoCaption}</span>
                </MediumText>
              </p>
            }
            {slide.titleTwo ?
              <>
                <div className="w-full p-4 absolute bottom-8 md:bottom-4 z-30">
                  <ul className="grid md:grid-cols-2 md:gap-4">
                    <li>
                      <h2 className={`${slide.type === 'two-column' || slide.type === 'one-column' ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'}`}>
                        <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          <span className="font-neue-bold">{slide.title}</span>
                        </StandardText>
                        <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          &nbsp;&mdash; {slide.credit}
                        </StandardText>
                      </h2>
                    </li>
                    {/* Hide the second one on mobile */}
                    <li className="hidden md:block">
                      <h2 className={`${slide.type === 'two-column' || slide.type === 'one-column' ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'}`}>
                        <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          <span className="font-neue-bold">{slide.titleTwo}</span>
                        </StandardText>
                        <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          &nbsp;&mdash; {slide.creditTwo}
                        </StandardText>
                      </h2>
                    </li>
                  </ul>
                </div>
              </>
              : slide.type !== 'text' ?
              <div className="container mx-auto p-4 absolute bottom-8 md:bottom-4 z-30">
                <h2 className={`${slide.type === 'two-column' || slide.type === 'one-column' ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'}`}>
                  <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                    <span className="font-neue-bold">{slide.title}</span>
                  </StandardText>
                  <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                    &nbsp;&mdash; {slide.credit}
                  </StandardText>
                </h2>
              </div>
              : ''
            }
          </SplideSlide>
        )}
      </SplideTrack>
      {hasArrows === true &&
        <>
          <button
            className="z-10 absolute top-24 w-full"
            onClick={slideUp}
          >
            <svg className="mx-auto" fill="none" height="42" viewBox="0 0 42 42" width="42" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" fill="#fff" r="21" transform="matrix(0 -1 1 0 0 42)"/><path d="m28.2758 19.9854-1.3274 1.3424-4.6608-4.6609v11.7081h-1.939v-11.7081l-4.6534 4.6609-1.3348-1.3424 6.9577-6.9577z" fill="#000"/></svg>
          </button>
          <button
            className="z-10 absolute bottom-24 md:bottom-10 w-full"
            onClick={slideDown}
          >
            <svg className="mx-auto" fill="none" height="42" viewBox="0 0 42 42" width="42" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" fill="#fff" r="21" transform="matrix(0 1 -1 0 42 0)"/><path d="m13.7242 22.0146 1.3274-1.3424 4.6608 4.6609v-11.7081h1.939v11.7081l4.6534-4.6609 1.3348 1.3424-6.9577 6.9577z" fill="#000"/></svg>
          </button>
        </>
      }
    </Splide>
  )
}