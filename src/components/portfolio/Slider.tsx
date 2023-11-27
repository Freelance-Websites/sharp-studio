import { useState, useEffect } from 'react';
import Image from 'next/image';
const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import '@splidejs/react-splide/css';

import { StandardText } from '@/components/Typography';

interface Slide {
  image: string;
  proportion: string;
}

interface Project {
  id: string;
  slides: Array<Slide>;
  title: string;
  credit: string;
  thumbnail: string;
  order: number;
  contentHtml: string;
}

export default function PortfolioSlider({ project, language }: {
  project: Project;
  language: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    if (!window.matchMedia) {
      return false;
    }

    const isMobile = window.innerWidth <= 768;
    setIsMobile(isMobile);
  }

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
        window.removeEventListener('resize', checkIsMobile);
    }
  }, [isMobile]);

  return (
    <>
      <Splide
        hasTrack={false}
        options={{
          speed: '400',
          autoplay: true,
          rewind: true,
          drag: true,
          rewindByDrag: true,
          arrows: project.slides.length > 1 ? true : false,
          preloadPages: 2,
          lazyLoad: 'nearby',
        }}
      >
        <SplideTrack>
          {project.slides.map((slide: Slide, index: number) =>
            <SplideSlide
              key={index}
              className={`
                w-full h-full relative self-center top-4
                ${
                  slide.proportion === 'vertical' ?
                    `aspect-[9/16]`
                  :
                    `aspect-${slide.proportion}
                `}
                ${slide.proportion !== 'video' && 'max-h-[90vh]'}
              `}
            >
              {isMobile ?
                <InnerImageZoom
                  data-splide-lazy={slide.image}
                  src={slide.image}
                  hideHint={true}
                  fullscreenOnMobile={true}
                  mobileBreakpoint={640}
                  className={`
                    w-full h-full
                    ${slide.proportion === 'vertical' || slide.proportion === 'square' ? `object-contain` : `object-cover`}
                  `}
                />
                :
                <Image
                  data-splide-lazy={slide.image}
                  src={slide.image}
                  alt={`${project.title} – ${project.credit}`}
                  fill={true}
                  className={`
                    w-full h-full
                    ${slide.proportion === 'vertical' || slide.proportion === 'square' ? 'object-contain' : 'object-cover'}
                  `}
                />
              }
            </SplideSlide>
          )}
        </SplideTrack>
      </Splide>
      <div className="container mx-auto py-4 md:pb-8">
        <h2>
          <StandardText color="text-black">
            <span className="font-neue-bold">{project.title}</span>
          </StandardText>
          <StandardText color="text-black">
            &nbsp;&mdash; {project.credit}
          </StandardText>
        </h2>
      </div>
    </>
  )
}