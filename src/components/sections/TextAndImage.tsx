import { useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import Image from "next/image";
const { Splide, SplideTrack, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';

import { MediumText, StandardText } from "@/components/Typography";

export default function TextAndImage({ orientation, color, title, content, linkText, linkHref, image, imageArray, imageHref, imageCaption, imageCredit, imageProportion }: {
  orientation: string,
  color: string,
  title?: string,
  content: string,
  linkText?: string,
  linkHref?: string,
  imageHref?: string,
  image?: string,
  imageArray?: Array<string>,
  imageCaption?: string,
  imageCredit?: string,
  imageProportion?: string,
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
    <article
      className={`flex justify-center lg:items-center flex-col lg:flex-row h-custom p-4 relative ${color}`}
    >
      <ul className="container mx-auto grid md:grid-cols-4 lg:grid-cols-12 gap-4 md:gap-12 2xl:gap-4 items-center">
        <li className={`
          grid gap-4 col-span-full md:col-span-3 lg:col-span-6
          ${imageProportion === 'horizontal' ? 'aspect-video' : 'aspect-square 2xl:col-span-5'}
          relative empty:hidden
          ${orientation === 'right' ? 'lg:order-last 2xl:col-start-7' : ''}
        `}>
          {image === undefined ?
            <Splide
              hasTrack={false}
              options={{
                speed: '400',
                autoplay: true,
                rewind: true,
                arrows: false,
              }}
            >
              <SplideTrack>
                {imageArray?.map((image, index) =>
                  <SplideSlide
                    key={index}
                    className="w-full aspect-square relative"
                  >
                    <a
                      href={imageHref ? imageHref : linkHref ? linkHref : '#'}
                    >
                      <Image
                        src={image}
                        alt={`${imageCaption} – ${imageCredit}`}
                        fill={true}
                        className={`
                          w-full h-full object-cover
                        `}
                      />
                    </a>
                  </SplideSlide>
                )}
              </SplideTrack>
            </Splide>
            :
            <a
              href={imageHref ? imageHref : linkHref ? linkHref : '#'}
            >
              <Image
                src={image}
                alt={`${imageCaption} – ${imageCredit}`}
                fill={true}
                className={`
                  w-full h-full object-contain
                `}
              />
            </a>
          }
        </li>
        <li className={`
          grid gap-2 md:gap-4 col-span-full lg:col-span-6
          ${imageProportion === 'horizontal' ? '' : '2xl:col-span-5'}
          empty:hidden
          ${orientation === 'left' ? '2xl:col-start-7' : ''}
        `}>
          {title &&
            <h3>
              <MediumText classes="font-neue-bold" color="text-black">{title}</MediumText>
            </h3>
          }
          {content &&
            <div
              className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed 2xl:leading-relaxed text-black font-neue-regular"
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          }
          {/* Need to use <a> so that it scrolls to the top */}
          {linkHref && linkText &&
            <a
              href={linkHref}
              target={linkHref.startsWith('http') ? '_blank' : '_self'}
              rel={linkHref.startsWith('http') ? 'noopener roferrer' : ''}
              className="decoration-1 underline underline-offset-4 md:underline-offset-8 hover:no-underline"
            >
              <MediumText
                color="text-black"
              >
                <span
                  className="group relative"
                  dangerouslySetInnerHTML={{ __html: linkText }}
                />
              </MediumText>
            </a>
          }
        </li>
      </ul>
      {imageCaption &&
        <p className={`container mx-auto md:absolute md:bottom-6 mt-8 lg:px-4 2xl:px-0`}>
          <StandardText color="text-black">
            <span className="font-neue-bold">{imageCaption}</span>
          </StandardText>
          <StandardText color="text-black">
            &nbsp;&mdash; {imageCredit}
          </StandardText>
        </p>
      }
    </article>
  )
}