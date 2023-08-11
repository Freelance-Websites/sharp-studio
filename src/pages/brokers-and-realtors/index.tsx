"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import FullBleedImage from "@/components/sections/FullBleedImage";
import TextAndImage from "@/components/sections/TextAndImage";
import TextOnly from "@/components/sections/TextOnly";
import VirtualStaging from "@/components/sections/VirtualStaging";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import { attributes } from '@/content/brokers-and-realtors/index.md';
import { attributes as globals } from '@/content/globals.md';

export default function Home() {
  const { title, heroEnabled, heroImage, heroTitle, heroCredit, studioEnabled, studioTitle, studioText, studioLinkText, studioSlider, servicesEnabled, servicesTitle, servicesText, servicesLinkText, servicesImage, servicesImageCaption, servicesImageCredit, servicesSlider, immersiveServicesEnabled, immersiveServicesText, immersiveServicesLinkText, immersiveServicesImage, immersiveServicesSlider, workflowEnabled, workflowText, workflowLinkText, workflowImage, workflowImageCaption, workflowImageCredit, workflowSlider, portfolioEnabled, portfolioText, portfolioLinkText, virtualStagingEnabled, virtualStagingImageOne, virtualStagingImageTwo, virtualStagingTitle, virtualStagingCredit, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes;
  const { faqsText, faqsLinkText, officesImage, officesText, contactTitle, contactText } = globals;

  return (
    <main>
      <CustomHead
        title={title}
      />
      <Header
        type="brokers-and-realtors"
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
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
                    color="bg-light-gray"
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
                    color="bg-cream"
                    title={servicesTitle}
                    content={servicesText}
                    linkText={servicesLinkText}
                    linkHref={'/brokers-and-realtors/services'}
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
                    color="bg-light-gray"
                    content={immersiveServicesText}
                    linkText={immersiveServicesLinkText}
                    linkHref={'/brokers-and-realtors/services'}
                    image={immersiveServicesImage}
                    imageProportion="horizontal"
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
            {workflowEnabled &&
              <>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-salmon"
                    content={workflowText}
                    linkText={workflowLinkText}
                    linkHref={'/brokers-and-realtors/workflow'}
                    image={workflowImage}
                    imageCaption={workflowImageCaption}
                    imageCredit={workflowImageCredit}
                    imageProportion="horizontal"
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={workflowSlider}
                    drag={true}
                  />
                </section>
              </>
            }
            {portfolioEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-light-blue"
                  content={portfolioText}
                  linkText={portfolioLinkText}
                  linkHref={'/brokers-and-realtors/portfolio'}
                />
              </section>
            }
            {virtualStagingEnabled &&
              <section className="section">
                <VirtualStaging
                  leftImage={virtualStagingImageOne}
                  rightImage={virtualStagingImageTwo}
                  title={virtualStagingTitle}
                  credit={virtualStagingCredit}
                />
              </section>
            }
            {faqsEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-off-white"
                  content={faqsText}
                  linkText={faqsLinkText}
                  linkHref={'/brokers-and-realtors/faqs'}
                />
              </section>
            }
            {mapEnabled &&
              <section className="section">
                <Map />
              </section>
            }
            {officesEnabled &&
              <>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-gray"
                    content={officesText}
                    image={officesImage}
                  />
                </section>
              </>
            }
            {contactEnabled &&
              <>
                <section className="section relative">
                  <Contact
                    title={contactTitle}
                    content={contactText}
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