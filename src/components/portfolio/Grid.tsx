import Image from "next/image";
import Link from "next/link";

import { StandardText } from "@/components/Typography";

interface Slide {
  order: number
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
}

export default function PortfolioGrid({
  slider,
  type,
}: {
  slider: Array<Slide>;
  type: string;
}) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {slider.sort((a, b) => a.order > b.order ? 1 : -1).map((slide, index) => {
        const itemUrl = `/${type}/portfolio/${slide.id}`;

        return(
          <li
            key={index}
            className="relative aspect-tv group"
          >
            <Link
              href={itemUrl}
            >
              <Image
                src={slide.thumbnail}
                alt={`${slide.title} – ${slide.credit}`}
                fill={true}
                className="w-full h-full object-cover"
              />
              <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 h-full">
                <div className="bg-gradient-to-t from-black absolute w-full h-full z-10 to-20% opacity-60" />
              </div>
              <p className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-20">
                <StandardText color="text-white">
                  <strong>{slide.title}</strong> – {slide.credit}
                </StandardText>
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}