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

import { attributes } from '@/content/architects-and-developers/services/showcase.md';
import { attributes as globals } from '@/content/globals.md';

export default function Showcase() {
  const { en, es } = attributes;
  const { heroEnabled, stillsEnabled, immersiveExperiencesEnabled, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes.en;
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
  const officesImage = globals.es.officesImage;

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
        type="architects-and-developers"
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        normalScrollElements={".no-scroll"}
        render={({ fullpageApi }) => {
          const slideDown = () => {
            fullpageApi.moveSectionDown();
          }
          return (
            <ReactFullpage.Wrapper>
              {heroEnabled &&
                <section className="section" id="3d-stills">
                  <FullBleedImage
                    image={en.heroImage}
                    imageTitle={language === 'en' ? en.heroTitle : es.heroTitle}
                    imageCredit={language === 'en' ? en.heroCredit : es.heroCredit}
                  />
                </section>
              }
              {stillsEnabled &&
                <>
                  <section className="section">
                    <TextOnly
                      color="bg-cream"
                      title={language === 'en' ? en.stillsTitle : es.stillsTitle}
                      content={language === 'en' ? en.stillsText : es.stillsText}
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
              {immersiveExperiencesEnabled &&
                <>
                  <section className="section" data-anchor="immersive-experiences">
                    <TextOnly
                      color="bg-light-green"
                      title={language === 'en' ? en.immersiveExperiencesTitle : es.immersiveExperiencesTitle}
                      content={language === 'en' ? en.immersiveExperiencesText : es.immersiveExperiencesText}
                      linkText={language === 'en' ? en.immersiveExperiencesLinkText : es.immersiveExperiencesLinkText}
                    />
                  </section>
                  <section className="section">
                    <div className="no-scroll">
                      <FullPageSlider
                        slides={language === 'en' ? en.immersiveExperiencesSlider : es.immersiveExperiencesSlider}
                        drag={false}
                        hasArrow={true}
                        slideDown={slideDown}
                      />
                    </div>
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
                    imageArray={officesImage}
                  />
                </section>
              }
              {contactEnabled &&
                <section className="section relative">
                  <Contact
                    title={language === 'en' ? contactTitleEng : contactTitleEsp}
                    content={language === 'en' ? contactTextEng : contactTextEsp}
                    language={language}
                  />
                </section>
              }
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </main>
  )
}