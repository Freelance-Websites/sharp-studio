const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';
import Image from 'next/image';

import { StandardText } from '@/components/Typography';

interface Slide {
  image: string;
  proportion: string;
}

interface Project {
  slides: Array<Slide>;
  title: string;
  credit: string;
}

export default function PortfolioSlider({ project }: {
  project: Project;
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
        }}
      >
        <SplideTrack>
          {project.slides.map((slide: Slide, index: number) =>
            <SplideSlide
              key={index}
              className={`w-full h-full max-h-[70vh] aspect-${slide.proportion} relative`}
            >
              <Image
                src={slide.image}
                alt={`${project.title} – ${project.credit}`}
                fill={true}
                className={`w-full h-full ${slide.proportion === 'vertical' ? 'object-contain' : 'object-cover'}`}
              />
            </SplideSlide>
          )}
        </SplideTrack>
      </Splide>
      <div className="container mx-auto py-4 md:pb-8">
        <h2 className="drop-shadow-md">
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