import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import FullBleedImage from '@/components/sections/FullBleedImage';
import FullPageSlider from '@/components/sections/FullPageSlider';
import TextOnly from '@/components/sections/TextOnly';
import TextAndImage from '@/components/sections/TextAndImage';
import Header from "@/components/Header";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import { attributes } from '@/content/architects-and-developers/services/details.md';
import { attributes as globals } from '@/content/globals.md';

export default function Stills() {
  const { title, heroEnabled, heroImage, heroTitle, heroCredit, stillsEnabled, stillsTitle, stillsText, stillsSlider, immersiveExperiencesEnabled, immersiveExperiencesTitle, immersiveExperiencesText, immersiveExperiencesLinkText, immersiveExperiencesLinkHref, immersiveExperiencesSlider, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes;
  const { faqsText, faqsLinkText, officesImage, officesText, contactTitle, contactText } = globals;

  return (
    <main className="bg-off-white">
      <CustomHead
        title={title}
      />
      <Header
        type="architects-and-developers"
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
            {stillsEnabled &&
              <>
                <section className="section">
                  <TextOnly
                    color="bg-cream"
                    title={stillsTitle}
                    content={stillsText}
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
            {immersiveExperiencesEnabled &&
              <>
                <section className="section">
                  <TextOnly
                    color="bg-light-green"
                    title={immersiveExperiencesTitle}
                    content={immersiveExperiencesText}
                    linkText={immersiveExperiencesLinkText}
                    linkHref={immersiveExperiencesLinkHref}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={immersiveExperiencesSlider}
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