"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from "@/components/CustomHead";
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import LandingPageSelector from "@/components/LandingPageSelector";
import { MainHeading } from "@/components/Typography";

import { attributes } from '@/content/index.md';

export default function Home() {
  const { slogan, slider, architectsAndDevelopersHover, brokersAndRealtorsHover } = attributes;

  return (
    <main>
      <CustomHead
        // title={title}
      />
      <Header />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="section">
              <h1 className="absolute md:left-16 z-10 w-full h-full flex items-center drop-shadow-lg">
                <MainHeading color="text-off-white" classes="max-w-[200px] md:max-w-lg mx-auto md:mx-0 text-center md:text-left">{slogan}</MainHeading>
              </h1>
              <FullPageSlider
                slides={slider}
                drag={true}
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