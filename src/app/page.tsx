"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from "@/components/CustomHead";
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import LandingPageSelector from "@/components/LandingPageSelector";
import { MainHeading } from "@/components/Typography";

import { attributes } from '@/content/homepage.md';

export default function Home() {
  const { slogan, slider } = attributes;

  return (
    <main>
      <a
        href="https://www.instagram.com/sharpstudiovisuals/"
        target='_blank'
        rel="noopener noreferrer"
        className="w-full h-full absolute z-10"
      >
        <div className="flex items-center justify-center md:justify-start absolute w-full h-screen top-0">
          <h1 className="absolute md:left-16 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] max-w-[200px] md:max-w-xl lg:max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <MainHeading color="text-off-white">{slogan}</MainHeading>
          </h1>
        </div>
      </a>
      <FullPageSlider
        slides={slider}
        drag={true}
      />
    </main>
  )
}