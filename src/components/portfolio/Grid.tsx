import Image from "next/image";
import Link from "next/link";

import { StandardText } from "@/components/Typography";

interface Item {
  order: number;
  thumbnail: string;
  title: string;
  credit: string;
  id: string;
}

export default function PortfolioGrid({
  items,
  type,
}: {
  items: Array<Item>;
  type: string;
  language: string;
}) {
  const sortedItems = items.sort((a, b) => a.order > b.order ? 1 : -1);
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {sortedItems.map((item: Item, index: number) => {
        const itemUrl = `/${type}/portfolio/${item.id}`;

        return(
          <li
            key={index}
            className="relative aspect-tv group"
          >
            <Link
              href={itemUrl}
              className="absolute w-full h-full"
            >
              <Image
                src={item.thumbnail}
                alt={`${item.title} – ${item.credit}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill={true}
                className="w-full h-full object-cover"
              />
              <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 h-full">
                <div className="bg-gradient-to-t from-black absolute w-full h-full z-10 to-20% opacity-60" />
              </div>
              <p className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-20">
                <StandardText color="text-white">
                  <strong>{item.title}</strong> – {item.credit}
                </StandardText>
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}