const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';
import Image from 'next/image';

import { StandardText } from '@/components/Typography';

interface Slide {
  image: string;
  proportion: string;
}

interface LanguageProject {
  slides: Array<Slide>;
  title: string;
  credit: string;
  thumbnail: string;
  order: number;
}

interface Project {
  id: string;
  en: LanguageProject;
  es: LanguageProject;
  contentHtml: string;
}

export default function PortfolioSlider({ project, language }: {
  project: Project;
  language: string;
}) {
  const translatedProject = language === 'en' ? project.en : project.es;
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
          {translatedProject.slides.map((slide: Slide, index: number) =>
            <SplideSlide
              key={index}
              className={`w-full h-full max-h-[70vh] aspect-${slide.proportion} relative`}
            >
              <Image
                src={slide.image}
                alt={`${translatedProject.title} – ${translatedProject.credit}`}
                fill={true}
                className={`w-full h-full ${slide.proportion === 'vertical' ? 'object-contain' : 'object-cover'}`}
              />
            </SplideSlide>
          )}
        </SplideTrack>
      </Splide>
      <div className="container mx-auto py-4 md:pb-8">
        <h2>
          <StandardText color="text-black">
            <span className="font-neue-bold">{translatedProject.title}</span>
          </StandardText>
          <StandardText color="text-black">
            &nbsp;&mdash; {translatedProject.credit}
          </StandardText>
        </h2>
      </div>
    </>
  )
}