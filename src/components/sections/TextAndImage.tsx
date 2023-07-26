import Link from "next/link";
import Image from "next/image";

import { MediumText, StandardText } from "../Typography";

export default function TextAndImage({ orientation, color, title, content, linkText, linkHref, image, imageCaption, imageCredit }: {
  orientation: string,
  color: string,
  title: string,
  content: string,
  linkText: string,
  linkHref: string,
  image: string,
  imageCaption: string,
  imageCredit: string,
}) {
  const formattedLinkText = linkText.replace(/click here/gi, '<u class="decoration-1 underline-offset-8 group-hover:no-underline">$&</u>');

  return (
    <article
      className={`flex lg:justify-center lg:items-center flex-col lg:flex-row h-screen p-4 relative ${color}`}
    >
      <ul className="container mx-auto grid md:grid-cols-4 lg:grid-cols-12 gap-4 md:gap-12 2xl:gap-4 items-center">
        <li className={`grid gap-4 col-span-full md:col-span-3 lg:col-span-6 2xl:col-span-5 relative empty:hidden aspect-square ${orientation === 'right' ? 'lg:order-last 2xl:col-start-7' : ''}`}>
          <Image
            src={image}
            alt={`${imageCaption} – ${imageCredit}`}
            fill={true}
            className="w-full h-full object-cover"
          />
        </li>
        <li className={`grid gap-2 md:gap-4 col-span-full lg:col-span-6 2xl:col-span-5 empty:hidden ${orientation === 'left' ? '2xl:col-start-7' : ''}`}>
          {title &&
            <h3 className="font-neue-bold">
              <MediumText color="text-black">{title}</MediumText>
            </h3>
          }
          {content &&
            <p>
              <MediumText color="text-black">{content}</MediumText>
            </p>
          }
          {linkText &&
            <Link href={linkHref}>
              <MediumText
                color="text-black"
              >
                <span
                  className="group"
                  dangerouslySetInnerHTML={{ __html: formattedLinkText }}
                />
              </MediumText>
            </Link>
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