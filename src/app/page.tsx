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
        href="https://instagram.com/"
        target='_blank'
        rel="noopener noreferrer"
      >
        <h1 className="absolute md:left-16 z-10 w-full h-full flex items-center drop-shadow-lg">
          <MainHeading color="text-off-white" classes="max-w-[200px] md:max-w-3xl mx-auto md:mx-0 text-center md:text-left">{slogan}</MainHeading>
        </h1>
        <FullPageSlider
          slides={slider}
          drag={true}
        />
      </a>
    </main>
  )
}