import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

import { LogoAD } from '@/components/logos/ArchitectsAndDevelopers';
import { LogoBR } from '@/components/logos/BrokersAndRealtors';

export default function LandingPageSelector({ architectsAndDevelopersHover, brokersAndRealtorsHover }: {
  architectsAndDevelopersHover: string,
  brokersAndRealtorsHover: string,
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
    <ul className="grid grid-cols-1 md:grid-cols-2 h-custom">
      <li className="bg-off-white relative group">
        <Link href="/architects-and-developers" className="flex items-center justify-center absolute w-full h-full z-10">
          <div className="relative z-10 fill-black group-hover:fill-off-white z-20">
            <LogoAD />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 absolute w-full h-full">
            <Image
              src={architectsAndDevelopersHover}
              alt="Architects and Developers"
              className="w-full h-full absolute object-cover z-10 opacity-70"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <span className="hidden group-hover:block bg-black absolute w-full h-full" />
          </div>
        </Link>
      </li>
      <li className="bg-black relative group">
        <Link href="/brokers-and-realtors" className="flex items-center justify-center absolute w-full h-full">
          <div className="relative z-10 fill-off-white">
            <LogoBR />
          </div>
          <Image
            src={brokersAndRealtorsHover}
            alt="Brokers and Realtors"
            className="w-full h-full absolute object-cover opacity-0 group-hover:opacity-70 transition-all ease-in-out duration-300"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </li>
    </ul>
  )
}