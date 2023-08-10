import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import FullBleedImage from '@/components/sections/FullBleedImage';
import FullPageSlider from '@/components/sections/FullPageSlider';
import TextOnly from '@/components/sections/TextOnly';
import TextAndImage from '@/components/sections/TextAndImage';
import Header from "@/components/Header";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import { attributes } from '@/content/brokers-and-realtors/services/details.md';
import { attributes as globals } from '@/content/globals.md';

export default function Stills() {
  const { title, heroEnabled, heroImage, heroTitle, heroCredit, stillsEnabled, stillsTitle, stillsText, stillsLinkText, stillsLinkHref, stillsSlider, interactiveExperiencesEnabled, interactiveExperiencesTitle, interactiveExperiencesText, interactiveExperiencesLinkText, interactiveExperiencesLinkHref, interactiveExperiencesSlider, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes;
  const { faqsText, faqsLinkText, officesImage, officesText, contactTitle, contactText } = globals;

  return (
    <main className="bg-off-white">
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
              <section className="section" id="3d-stills">
                <FullBleedImage
                  image={heroImage}
                  title={heroTitle}
                  credit={heroCredit}
                />
              </section>
            }
            {stillsEnabled &&
              <>
                <section className="section">
                  <TextOnly
                    color="bg-light-green"
                    title={stillsTitle}
                    content={stillsText}
                    linkText={stillsLinkText}
                    linkHref={stillsLinkHref}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={stillsSlider}
                    drag={false}
                  />
                </section>
              </>
            }
            {interactiveExperiencesEnabled &&
              <>
                <section className="section" id="interactive-experiences">
                  <TextOnly
                    color="bg-salmon"
                    title={interactiveExperiencesTitle}
                    content={interactiveExperiencesText}
                    linkText={interactiveExperiencesLinkText}
                    linkHref={interactiveExperiencesLinkHref}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={interactiveExperiencesSlider}
                    drag={false}
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