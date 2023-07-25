"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import TextOnly from "@/components/sections/TextOnly";

import { attributes } from '@/content/architects-and-developers.md';

export default function Home() {
  const { title, heroEnabled, heroSlider, studioEnabled, studioTitle, studioText, studioLinkText, studioLinkHref, studioSlider } = attributes;

  return (
    <main>
      <CustomHead
        title={title}
      />
      <Header
        type="architects-and-developers"
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey=''
        render={() => (
          <ReactFullpage.Wrapper>
            {heroEnabled &&
              <section className="section">
                <FullPageSlider
                  slides={heroSlider}
                />
              </section>
            }
            {studioEnabled &&
              <>
                <section className="section">
                  <TextOnly
                    color="bg-cream"
                    title={studioTitle}
                    content={studioText}
                    linkText={studioLinkText}
                    linkHref={studioLinkHref}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={studioSlider}
                  />
                </section>
              </>
            }
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}