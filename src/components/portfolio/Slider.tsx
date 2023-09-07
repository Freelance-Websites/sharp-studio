const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';
import Image from 'next/image';

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