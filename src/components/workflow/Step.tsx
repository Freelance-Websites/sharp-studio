import Link from "next/link";
import Image from "next/image";
import { MediumText, StandardText } from "../Typography";

export default function Step({ 
  type,
  index,
  image,
  imageTitle,
  imageCredit,
  title,
  description,
  ctaText,
  ctaAction
 }: {
  index: number;
  type: string;
  image: string;
  imageTitle: string;
  imageCredit: string;
  title: string;
  description: string;
  ctaText: string;
  ctaAction: () => void;
}) {
  let formattedLinkText;
  formattedLinkText = ctaText?.replace(/Contact us/gi, '<u class="decoration-1 underline-offset-4 md:underline-offset-8 hover:no-underline">$&</u>');
  formattedLinkText = formattedLinkText?.replace(/->/gi, `<i class="absolute top-1 md:top-3 md:ml-2 transform scale-75 md:scale-100"><svg class="fill-black" fill="none" height="21" viewBox="0 0 24 21" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.2045 20.9999-1.75-1.7273 7.2046-7.2046h-18.6591v-2.49995h18.6591l-7.2046-7.18182 1.75-1.75 10.1819 10.18177z" /></svg></i>`);

  return (
    <ul className="w-full grid lg:grid-cols-12 gap-4 lg:gap-12 2xl:gap-16 items-center">
      <li className={`
        ${type === 'architects-and-developers' ? 'aspect-square col-span-full lg:col-span-6' : 'aspect-video col-span-full lg:col-span-8'}
        relative lg:h-screen w-full
      `}
      >
        <Image
          src={image}
          alt={`${imageTitle} – ${imageCredit}`}
          className="w-full h-full object-cover"
          fill={true}
        />
        <p className="absolute left-4 bottom-4"><StandardText color="text-off-white"><strong>{imageTitle}</strong> &mdash; {imageCredit}</StandardText></p>
      </li>
      <li
        className={`
          ${type === 'architects-and-developers' ? 'col-span-full lg:col-span-5' : 'col-span-full lg:col-span-4 lg:pr-8'}
          grid gap-2 lg:gap-4 px-4 lg:px-0
        `}
      >
        {index === 0 &&
          <h2><MediumText color="text-black"><strong>Workflow</strong></MediumText></h2>
        }
        <h3 className="line-clamp-1 lg:line-clamp-none"><MediumText color="text-black"><span className="underline decoration-1 underline-offset-4">Step {index + 1}:</span>{" "}{title}</MediumText></h3>
        <p className="line-clamp-4 lg:line-clamp-none"><MediumText color="text-black">{description}</MediumText></p>
        <button
          onClick={ctaAction}
          className="text-left"
        >
          <MediumText color="text-black"><span dangerouslySetInnerHTML={{ __html: formattedLinkText }} /></MediumText>
        </button>
      </li>
    </ul>
  )
}