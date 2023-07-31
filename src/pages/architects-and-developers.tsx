"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import FullBleedImage from "@/components/sections/FullBleedImage";
import TextAndImage from "@/components/sections/TextAndImage";
import TextOnly from "@/components/sections/TextOnly";

import { attributes } from '@/content/architects-and-developers.md';

export default function Home() {
  const { title, heroEnabled, heroImage, heroTitle, heroCredit, studioEnabled, studioTitle, studioText, studioLinkText, studioSlider, servicesEnabled, servicesTitle, servicesText, servicesLinkText, servicesImage, servicesImageCaption, servicesImageCredit, servicesSlider, immersiveServicesEnabled, immersiveServicesText, immersiveServicesLinkText, immersiveServicesImage, immersiveServicesSlider } = attributes;

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
                <FullBleedImage
                  image={heroImage}
                  title={heroTitle}
                  credit={heroCredit}
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
                    linkHref={'/'}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={studioSlider}
                    drag={true}
                  />
                </section>
              </>
            }
            {servicesEnabled &&
              <>
                <section className="section overflow-x-hidden">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-gray"
                    title={servicesTitle}
                    content={servicesText}
                    linkText={servicesLinkText}
                    linkHref={'/architects-and-developers/services'}
                    image={servicesImage}
                    imageCaption={servicesImageCaption}
                    imageCredit={servicesImageCredit}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={servicesSlider}
                    drag={false}
                  />
                </section>
              </>
            }
            {immersiveServicesEnabled &&
              <>
                <section className="section">
                  <TextAndImage
                    orientation="right"
                    color="bg-salmon"
                    content={immersiveServicesText}
                    linkText={immersiveServicesLinkText}
                    linkHref={'/architects-and-developers/services'}
                    image={immersiveServicesImage}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={immersiveServicesSlider}
                    drag={true}
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