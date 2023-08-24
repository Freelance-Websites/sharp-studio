import Image from "next/image";

import { MediumText, StandardText } from "@/components/Typography";

export default function TextAndImage({ orientation, color, title, content, linkText, linkHref, image, imageHref, imageCaption, imageCredit, imageProportion }: {
  orientation: string,
  color: string,
  title?: string,
  content: string,
  linkText?: string,
  linkHref?: string,
  imageHref?: string,
  image: string,
  imageCaption?: string,
  imageCredit?: string,
  imageProportion?: string,
}) {
  return (
    <article
      className={`flex justify-center lg:items-center flex-col lg:flex-row h-screen p-4 relative ${color}`}
    >
      <ul className="container mx-auto grid md:grid-cols-4 lg:grid-cols-12 gap-4 md:gap-12 2xl:gap-4 items-center">
        <li className={`
          grid gap-4 col-span-full md:col-span-3 lg:col-span-6
          ${imageProportion === 'horizontal' ? 'aspect-video' : 'aspect-square 2xl:col-span-5'}
          relative empty:hidden
          ${orientation === 'right' ? 'lg:order-last 2xl:col-start-7' : ''}
        `}>
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
        </li>
        <li className={`
          grid gap-2 md:gap-4 col-span-full lg:col-span-6
          ${imageProportion === 'horizontal' ? '' : '2xl:col-span-5'}
          empty:hidden
          ${orientation === 'left' ? '2xl:col-start-7' : ''}
        `}>
          {title &&
            <h3 className="font-neue-bold">
              <MediumText color="text-black">{title}</MediumText>
            </h3>
          }
          {content &&
            <p
              dangerouslySetInnerHTML={{ __html: content }}
              className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl 2xl:leading-normal text-black"
            />
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