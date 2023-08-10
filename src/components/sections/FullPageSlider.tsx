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

import TwoColumnImages from '@/components/sections/TwoColumnImages';
import VirtualStaging from '@/components/sections/VirtualStaging';
import { StandardText } from '@/components/Typography';

interface Slide {
  type: string;
  image: string;
  imageTwo?: string;
  title: string;
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

export default function FullPageSlider({ slides, drag }: {
  slides: Array<Slide>;
  drag: Boolean;
}) {
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
            className="w-full h-screen relative"
          >
            {/* Image, gradient and overlay. We only show these for images and video overlays, and for places where we have text to add. */}
            {slide.type === 'video' || slide.type === 'image' &&
              <>
                <div className="bg-gradient-to-t from-black absolute w-full h-screen z-20 to-20% opacity-60" />
                <div className="bg-black/10 w-full h-screen z-10 absolute" />
              </>
            }
            {slide.type === 'video' ?
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              >
                <source src={slide.image} type="video/mp4" />
              </video>
            : slide.type === 'panoram' ?
              <ReactPhotoSphereViewer
                src={slide.image}
                height={'100vh'}
                width={"100%"}
                navbar={false}
                container={""}
              />
            : slide.type === 'two-column' ?
              <TwoColumnImages
                imageUrl={slide.image}
                title={slide.title}
                credit={slide.credit}
                titleTwo={slide.titleTwo ? slide.titleTwo : ''}
                creditTwo={slide.creditTwo ? slide.creditTwo : ''}
                imageMobile={slide.imageMobile ? slide.imageMobile : undefined}
              />
            : slide.type === 'slide' && slide.imageTwo ?
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
            :
              <>
                <Image
                  src={slide.image}
                  alt={`${slide.title} – ${slide.credit}`}
                  fill={true}
                  className={`w-full h-full ${slide.imageFit ? slide.imageFit : 'object-cover'} ${slide.imageMobile ? 'hidden lg:block' : ''}`}
                />
                {slide.imageMobile &&
                  <Image
                    src={slide.imageMobile}
                    alt={`${slide.title} – ${slide.credit}`}
                    fill={true}
                    className="w-full h-full object-contain block lg:hidden"
                  />
                }
              </>
            }
            {/* Captions */}
            {slide.imageOneCaption &&
              <p className="drop-shadow-md absolute top-20 left-4 z-10">
                <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                  <span className="font-neue-bold">{slide.imageOneCaption}</span>
                </StandardText>
              </p>
            }
            {slide.imageTwoCaption &&
              <p className="drop-shadow-md absolute top-20 right-4 z-10">
                <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                  <span className="font-neue-bold">{slide.imageTwoCaption}</span>
                </StandardText>
              </p>
            }
            {slide.titleTwo ?
              <>
                <div className="container mx-auto p-4 absolute bottom-8 md:bottom-4 z-30">
                  <ul className="grid md:grid-cols-2 md:gap-4">
                    <li>
                      <h2 className="drop-shadow-md">
                        <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          <span className="font-neue-bold">{slide.title}</span>
                        </StandardText>
                        <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          &nbsp;&mdash; {slide.credit}
                        </StandardText>
                      </h2>
                    </li>
                    <li>
                      <h2 className="drop-shadow-md">
                        <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          <span className="font-neue-bold">{slide.titleTwo}</span>
                        </StandardText>
                        <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                          &nbsp;&mdash; {slide.creditTwo}
                        </StandardText>
                      </h2>
                    </li>
                  </ul>
                </div>
              </>
              :
              <div className="container mx-auto p-4 absolute bottom-8 md:bottom-4 z-30">
                <h2 className="drop-shadow-md">
                  <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                    <span className="font-neue-bold">{slide.title}</span>
                  </StandardText>
                  <StandardText color={slide.theme && slide.theme === 'dark' ? "text-black" : "text-off-white"}>
                    &nbsp;&mdash; {slide.credit}
                  </StandardText>
                </h2>
              </div>
            }
          </SplideSlide>
        )}
      </SplideTrack>
    </Splide>
  )
}