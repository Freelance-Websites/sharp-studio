import Link from "next/link";
import Image from "next/image";

import { LogoAD } from '@/components/logos/ArchitectsAndDevelopers';
import { LogoBR } from '@/components/logos/BrokersAndRealtors';

export default function LandingPageSelector({ architectsAndDevelopersHover, brokersAndRealtorsHover }: {
  architectsAndDevelopersHover: string,
  brokersAndRealtorsHover: string,
}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <li className="bg-off-white relative group hover:bg-black">
        <Link href="/architects-and-developers" className="flex items-center justify-center absolute w-full h-full">
          <div className="relative z-10 fill-black group-hover:fill-off-white">
            <LogoAD />
          </div>
          <Image
            src={architectsAndDevelopersHover}
            alt="Architects and Developers"
            className="w-full h-full absolute object-cover opacity-0 group-hover:opacity-70 transition-all ease-in-out duration-300"
            fill={true}
          />
        </Link>
      </li>
      <li className="bg-black relative group hover:bg-off-white">
        <Link href="/brokers-and-realtors" className="flex items-center justify-center absolute w-full h-full">
          <div className="relative z-10 fill-off-white group-hover:fill-black">
            <LogoBR />
          </div>
          <Image
            src={brokersAndRealtorsHover}
            alt="Brokers and Realtors"
            className="w-full h-full absolute object-cover opacity-0 group-hover:opacity-70 transition-all ease-in-out duration-300"
            fill={true}
          />
        </Link>
      </li>
    </ul>
  )
}