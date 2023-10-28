import Image from "next/image";
import { MediumText, StandardText } from "@/components/Typography";

export interface Member {
  image: string;
  name: string;
  bio: string;
}

export default function Team({
  team,
}: {
  team?: Array<Member>,
}) {
  return (
    <ul
      className="py-8 md:py-16 lg:py-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-12 container mx-auto px-4"
    >
      {team?.map((team, index) =>
        <li
          key={index}
          className="grid gap-4 md:gap-6 items-start"
        >
          <div className="relative aspect-square">
            <Image
              src={team.image}
              alt={team.name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div>
            <MediumText color="text-black"><h4 dangerouslySetInnerHTML={{ __html: team.name}} className="font-neue-bold" /></MediumText>
            <StandardText color="text-black">{team.bio}</StandardText>
          </div>
        </li>
      )}
    </ul>
  )
}