"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import Header from "@/components/Header";
import FullPageSlider from "@/components/FullPageSlider";
import { MainHeading } from "@/components/Typography";

import { attributes } from '@/content/homepage.md';

export default function Home() {
  const { slogan, slider } = attributes;

  return (
    <main>
      <Header />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey=''
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="section">
              <h1 className="absolute left-4 z-10 h-full flex items-center drop-shadow-lg md:max-w-lg">
                <MainHeading color="text-off-white">{slogan}</MainHeading>
              </h1>
              <FullPageSlider
                slides={slider}
              />
            </section>
            <section className="section">
              test 2
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}