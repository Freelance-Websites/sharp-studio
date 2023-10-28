import { useEffect } from 'react';
import Image from 'next/image';

import { StandardText, MainHeading } from '@/components/Typography';

export default function FullBleedImage({ image, title, imageTitle, imageCredit, isMap }: {
  image: string,
  title?: string,
  imageTitle?: string,
  imageCredit?: string,
  isMap?: boolean,
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
    <section className="relative w-full h-custom">
      {/* Gradient and overlay */}
      {isMap && isMap === true ?
        '' :
        <>
          <div className="bg-gradient-to-t from-black absolute w-full h-custom z-20 to-20% opacity-60" />
          <div className="bg-black/10 w-full h-custom z-10 absolute" />
        </>
      }
      <Image
        src={image}
        alt={`${imageTitle} – ${imageCredit}`}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className={`w-full h-full ${isMap && isMap === true ? 'object-contain' : 'object-cover'}`}
      />
      {/* Title */}
      {title &&
        <h1
          className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 md:-translate-x-0 md:left-16 z-10 flex items-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.85)]"
        >
          <MainHeading color="text-off-white" classes="max-w-[200px] md:max-w-lg mx-auto md:mx-0 text-center md:text-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
            {title}
          </MainHeading>
        </h1>
      }
      {/* Caption */}
      {imageTitle && imageCredit &&
        <div className="container mx-auto p-4 absolute bottom-0 md:bottom-4 z-30">
          <h2 className={isMap && isMap === true ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'}>
            <StandardText classes="drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" color={isMap && isMap === true ? 'text-black' : 'text-off-white'}>
              <span className="font-neue-bold">{imageTitle}</span>
            </StandardText>
            <StandardText color={isMap && isMap === true ? 'text-black' : 'text-off-white'}>
              &nbsp;&mdash; {imageCredit}
            </StandardText>
          </h2>
        </div>
      }
    </section>
  )
}