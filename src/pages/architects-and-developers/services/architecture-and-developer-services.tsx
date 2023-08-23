import { useState, useEffect } from 'react';
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
  const { en, es } = attributes;
  const { heroEnabled, introEnabled, conceptDesignEnabled, designDevelopmentEnabled, bimEnabled, cadEnabled, permittingPlansEnabled, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes.en;
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
    <main className="bg-white">
      <CustomHead
        title={language === 'en' ? en.title : es.title}
      />
      <Header
        type="architects-and-developers"
        bgColor="bg-white"
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            {heroEnabled &&
              <section className="section">
                <FullBleedImage
                  image={en.heroImage}
                  title={language === 'en' ? en.heroTitle : es.heroTitle}
                  credit={language === 'en' ? en.heroTitle : es.heroTitle}
                  isMap={true}
                />
              </section>
            }
            {introEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-white"
                  title={language === 'en' ? en.introTitle : es.introTitle}
                  content={language === 'en' ? en.introText : es.introText}
                />
              </section>
            }
            {conceptDesignEnabled &&
              <>
                <section className="section">
                  <FullPageSlider
                    slides={language === 'en' ? en.conceptDesignSlider : es.conceptDesignSlider}
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
                  title={language === 'en' ? en.designDevelopmentTitle : es.designDevelopmentTitle}
                  content={language === 'en' ? en.designDevelopmentText : es.designDevelopmentText}
                  image={language === 'en' ? en.designDevelopmentImage : es.designDevelopmentImage}
                />
              </section>
            }
            {bimEnabled &&
              <>
                <section className="section">
                  <FullBleedVideo
                    video={en.bimVideo}
                  />
                </section>
                <section className="section">
                  <TextOnly
                    color="bg-white"
                    title={language === 'en' ? en.bimTitle : es.bimTitle}
                    content={language === 'en' ? en.bimText : es.bimText}
                    linkText={language === 'en' ? en.bimLinkText : es.bimLinkText}
                  />
                </section>
              </>
            }
            {cadEnabled &&
              <section className="section">
                <TextAndImage
                  orientation="right"
                  color="bg-white"
                  title={language === 'en' ? en.cadTitle : es.cadTitle}
                  imageCaption={language === 'en' ? en.cadCaption : es.cadCaption}
                  imageCredit={language === 'en' ? en.cadCredit : es.cadCredit}
                  content={language === 'en' ? en.cadText : es.cadText}
                  image={en.cadImage}
                />
              </section>
            }
            {permittingPlansEnabled &&
              <>
                <section className="section">
                  <FullPageSlider
                    slides={language === 'en' ? en.permittingPlansSlider : es.permittingPlansSlider}
                    drag={true}
                  />
                </section>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-white"
                    title={language === 'en' ? en.permittingPlansTitle : es.permittingPlansTitle}
                    imageCaption={language === 'en' ? en.permittingPlansCaption : es.permittingPlansCaption}
                    imageCredit={language === 'en' ? en.permittingPlansCredit : es.permittingPlansCredit}
                    content={language === 'en' ? en.permittingPlansText : es.permittingPlansText}
                    image={en.permittingPlansImage}
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