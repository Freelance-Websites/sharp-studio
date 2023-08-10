import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import FullBleedImage from '@/components/sections/FullBleedImage';
import FullBleedVideo from '@/components/sections/FullBleedVideo';
import FullPageSlider from '@/components/sections/FullPageSlider';
import TextOnly from '@/components/sections/TextOnly';
import TextAndImage from '@/components/sections/TextAndImage';
import Header from "@/components/Header";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import { attributes } from '@/content/architects-and-developers/services/architecture-and-developer-services.md';
import { attributes as globals } from '@/content/globals.md';

export default function ADServices() {
  const { title, heroEnabled, heroImage, heroTitle, heroCredit, introEnabled, introTitle, introText, conceptDesignEnabled, conceptDesignSlider, designDevelopmentEnabled, designDevelopmentTitle, designDevelopmentText, designDevelopmentImage, bimEnabled, bimVideo, bimTitle, bimText, bimLinkText, bimLinkHref, cadEnabled, cadTitle, cadText, cadImage, cadCaption, cadCredit, permittingPlansEnabled, permittingPlansTitle, permittingPlansText, permittingPlansCaption, permittingPlansCredit, permittingPlansImage, permittingPlansSlider, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes;
  const { faqsText, faqsLinkText, officesImage, officesText, contactTitle, contactText } = globals;

  return (
    <main className="bg-white">
      <CustomHead
        title={title}
      />
      <Header
        type="architects-and-developers"
        bgColor="bg-white"
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
                  isMap={true}
                />
              </section>
            }
            {introEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-white"
                  title={introTitle}
                  content={introText}
                />
              </section>
            }
            {conceptDesignEnabled &&
              <>
                <section className="section">
                  <FullPageSlider
                    slides={conceptDesignSlider}
                    drag={true}
                  />
                </section>
              </>
            }
            {designDevelopmentEnabled &&
              <section className="section">
                <TextAndImage
                  orientation="left"
                  color="bg-white"
                  title={designDevelopmentTitle}
                  content={designDevelopmentText}
                  image={designDevelopmentImage}
                />
              </section>
            }
            {bimEnabled &&
              <>
                <section className="section">
                  <FullBleedVideo
                    video={bimVideo}
                  />
                </section>
                <section className="section">
                  <TextOnly
                    color="bg-white"
                    title={bimTitle}
                    content={bimText}
                    linkText={bimLinkText}
                    linkHref={bimLinkHref}
                  />
                </section>
              </>
            }
            {cadEnabled &&
              <section className="section">
                <TextAndImage
                  orientation="right"
                  color="bg-white"
                  title={cadTitle}
                  imageCaption={cadCaption}
                  imageCredit={cadCredit}
                  content={cadText}
                  image={cadImage}
                />
              </section>
            }
            {permittingPlansEnabled &&
              <>
                <section className="section">
                  <FullPageSlider
                    slides={permittingPlansSlider}
                    drag={true}
                  />
                </section>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-white"
                    title={permittingPlansTitle}
                    imageCaption={permittingPlansCaption}
                    imageCredit={permittingPlansCredit}
                    content={permittingPlansText}
                    image={permittingPlansImage}
                  />
                </section>
              </>
            }
            {faqsEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-off-white"
                  content={faqsText}
                  linkText={faqsLinkText}
                  linkHref={'/architects-and-developers/faqs'}
                />
              </section>
            }
            {mapEnabled &&
              <section className="section">
                <Map />
              </section>
            }
            {officesEnabled &&
              <section className="section">
                <TextAndImage
                orientation="left"
                  color="bg-light-gray"
                  content={officesText}
                  image={officesImage}
                />
              </section>
            }
            {contactEnabled &&
              <section className="section relative">
                <Contact
                  title={contactTitle}
                  content={contactText}
                />
              </section>
            }
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}