import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

import { StandardText } from '@/components/Typography';

interface Slide {
  image: string;
  title: string;
  credit: string;
}

export default function FullPageSlider({ slides }: {
  slides: Array<Slide>
}) {
  return (
    <Splide
      hasTrack={false}
      options={{
        speed: '400',
        autoplay: true,
        rewind: true,
      }}
    >
      <SplideTrack>
        {slides.map((slide, index) =>
          <SplideSlide
            key={index}
            className="w-full h-screen relative"
          >
            {/* Image, gradient and overlay */}
            <div className="bg-gradient-to-t from-black absolute w-full h-screen z-20 to-20% opacity-60" />
            <div className="bg-black/10 w-full h-screen z-10 absolute" />
            <Image
              src={slide.image}
              alt={`${slide.title} – ${slide.credit}`}
              fill={true}
              className="w-full h-full object-cover"
            />
            {/* Caption */}
            <div className="container mx-auto p-4 absolute bottom-8 md:bottom-4 z-30">
              <h2 className="drop-shadow-md">
                <StandardText color="text-off-white">
                  <span className="font-neue-bold">{slide.title}</span>
                </StandardText>
                <StandardText color="text-off-white">
                  &nbsp;&mdash; {slide.credit}
                </StandardText>
              </h2>
            </div>
          </SplideSlide>
        )}
      </SplideTrack>
    </Splide>
  )
}