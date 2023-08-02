import Link from "next/link";
import Image from "next/image";

import { MediumText, StandardText } from "@/components/Typography";

export default function TextAndImage({ orientation, color, title, content, linkText, linkHref, image, imageCaption, imageCredit }: {
  orientation: string,
  color: string,
  title?: string,
  content: string,
  linkText: string,
  linkHref: string,
  image: string,
  imageCaption?: string,
  imageCredit?: string,
}) {
  let formattedLinkText;
  formattedLinkText = linkText.replace(/click here/gi, '<u class="decoration-1 underline-offset-8 group-hover:no-underline">$&</u>');
  formattedLinkText = formattedLinkText.replace(/->/gi, `<i class="absolute top-3 ml-2"><svg class="fill-black" fill="none" height="21" viewBox="0 0 24 21" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.2045 20.9999-1.75-1.7273 7.2046-7.2046h-18.6591v-2.49995h18.6591l-7.2046-7.18182 1.75-1.75 10.1819 10.18177z" /></svg></i>`);
  
  const shouldUnderline = formattedLinkText.includes('svg');

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
                underline={shouldUnderline}
              >
                <span
                  className="group relative"
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