const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';
import Image from 'next/image';

import { StandardText } from '@/components/Typography';

interface Project {
  slides: Array<string>;
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
          {project.slides.map((slide: string, index: number) =>
            <SplideSlide
              key={index}
              className="w-full aspect-tv lg:aspect-video relative"
            >
              <Image
                src={slide}
                alt={`${project.title} – ${project.credit}`}
                fill={true}
                className="w-full h-full object-cover"
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