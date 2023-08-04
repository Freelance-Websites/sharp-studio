"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import LandingPageSelector from "@/components/LandingPageSelector";
import { MainHeading } from "@/components/Typography";

import { attributes } from '@/content/homepage.md';

export default function Home() {
  const { slogan, slider, architectsAndDevelopersHover, brokersAndRealtorsHover } = attributes;

  return (
    <main>
      <Header />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="section">
              <h1 className="absolute left-4 z-10 h-full flex items-center drop-shadow-lg max-w-xs md:max-w-lg">
                <MainHeading color="text-off-white">{slogan}</MainHeading>
              </h1>
              <FullPageSlider
                slides={slider}
              />
            </section>
            <section className="section">
              <LandingPageSelector
                architectsAndDevelopersHover={architectsAndDevelopersHover}
                brokersAndRealtorsHover={brokersAndRealtorsHover}
              />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}