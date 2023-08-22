import Image from "next/image";
import Link from "next/link";

import { StandardText } from "@/components/Typography";

interface Item {
  order: number;
  en: TranslatedItem;
  es: TranslatedItem;
  id: string;
}

interface TranslatedItem {
  thumbnail: string;
  title: string;
  credit: string;
}

export default function PortfolioGrid({
  items,
  type,
  language
}: {
  items: Array<Item>;
  type: string;
  language: string;
}) {
  const sortedItems = items.sort((a, b) => a.order > b.order ? 1 : -1);
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {sortedItems.map((item: Item, index: number) => {
        const translatedItem = language === 'en' ? item.en : item.es;
        const itemUrl = `/${type}/portfolio/${item.id}`;

        return(
          <li
            key={index}
            className="relative aspect-tv group"
          >
            <Link
              href={itemUrl}
            >
              <Image
                src={translatedItem.thumbnail}
                alt={`${translatedItem.title} – ${translatedItem.credit}`}
                fill={true}
                className="w-full h-full object-cover"
              />
              <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 h-full">
                <div className="bg-gradient-to-t from-black absolute w-full h-full z-10 to-20% opacity-60" />
              </div>
              <p className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-20">
                <StandardText color="text-white">
                  <strong>{translatedItem.title}</strong> – {translatedItem.credit}
                </StandardText>
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}