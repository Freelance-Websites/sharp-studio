import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import FullBleedImage from '@/components/sections/FullBleedImage';
import FullPageSlider from '@/components/sections/FullPageSlider';
import TextOnly from '@/components/sections/TextOnly';
import TextAndImage from '@/components/sections/TextAndImage';
import Header from "@/components/Header";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import { attributes } from '@/content/brokers-and-realtors/services/showcase.md';
import { attributes as globals } from '@/content/globals.md';

export default function Showcase() {
  const { en, es } = attributes;
  const { heroEnabled, stillsEnabled, interactiveExperiencesEnabled, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes.en;
  const faqsTextEng = globals.en.faqsText;
  const faqsTextEsp = globals.es.faqsText;
  const faqsLinkTextEng = globals.en.faqsLinkText;
  const faqsLinkTextEsp = globals.es.faqsLinkText;
  const officesTextEng = globals.en.officesText;
  const officesTextEsp = globals.es.officesText;
  const contactTitleEng = globals.en.contactTitle;
  const contactTitleEsp = globals.es.contactTitle;
  const contactTextEng = globals.en.contactText;
  const contactTextEsp = globals.es.contactText;

  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    changeLanguage(storedLanguage ? storedLanguage : 'en');
  });

  return (
    <main className="bg-off-white">
      <CustomHead
        title={language === 'en' ? en.title : es.title}
      />
      <Header
        type="brokers-and-realtors"
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            {heroEnabled &&
              <section className="section" id="3d-stills">
                <FullBleedImage
                  image={en.heroImage}
                  title={language === 'en' ? en.heroTitle : es.heroTitle}
                  credit={language === 'en' ? en.heroCredit : es.heroCredit}
                />
              </section>
            }
            {stillsEnabled &&
              <>
                <section className="section">
                  <TextOnly
                    color="bg-light-green"
                    title={language === 'en' ? en.stillsTitle : es.stillsTitle}
                    content={language === 'en' ? en.stillsText : es.stillsText}
                    linkText={language === 'en' ? en.stillsLinkText : es.stillsLinkText}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={language === 'en' ? en.stillsSlider : es.stillsSlider}
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
                    title={language === 'en' ? en.interactiveExperiencesTitle : es.interactiveExperiencesTitle}
                    content={language === 'en' ? en.interactiveExperiencesText : es.interactiveExperiencesText}
                    linkText={language === 'en' ? en.interactiveExperiencesLinkText : es.interactiveExperiencesLinkText}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={language === 'en' ? en.immersiveExperiencesSlider : es.immersiveExperiencesSlider}
                    drag={false}
                  />
                </section>
              </>
            }
            {faqsEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-off-white"
                  content={language === 'en' ? faqsTextEng : faqsTextEsp}
                  linkText={language === 'en' ? faqsLinkTextEng : faqsLinkTextEsp}
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
                  content={language === 'en' ? officesTextEng : officesTextEsp}
                  image={en.officesImage}
                />
              </section>
            }
            {contactEnabled &&
              <section className="section relative">
                <Contact
                  title={language === 'en' ? contactTitleEng : contactTitleEsp}
                  content={language === 'en' ? contactTextEng : contactTextEsp}
                />
              </section>
            }
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}