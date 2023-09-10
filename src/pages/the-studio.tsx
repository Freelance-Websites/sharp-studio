import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import FullBleedImage from "@/components/sections/FullBleedImage";
import TextAndImage from "@/components/sections/TextAndImage";
import TextOnly from "@/components/sections/TextOnly";
import Team from "@/components/studio/Team";
import Contact from "@/components/Contact";

import { attributes } from '@/content/the-studio.md';
import { attributes as globals } from '@/content/globals.md';

export default function Studio() {
  const { heroEnabled, heroImage, studioEnabled, teamImage, teamEnabled, officesEnabled, contactEnabled } = attributes.en;
  const { officesImage } = globals.en;
  const { en, es } = attributes;
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
    <main>
      <CustomHead
        title={language === 'en' ? en.title : es.title}
      />
      <Header
        activeLanguage={language}
        changeLanguage={changeLanguage}
        type="architects-and-developers"
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        paddingTop="3.25rem"
        render={() => (
          <ReactFullpage.Wrapper>
            {heroEnabled &&
              <section className="section fp-noscroll">
                <FullBleedImage
                  image={heroImage}
                  title={language === 'en' ? en.heroTitle : es.heroTitle}
                />
              </section>
            }
            {studioEnabled &&
              <>
                <section className="section fp-noscroll">
                  <TextOnly
                    color="bg-off-white"
                    title={language === 'en' ? en.studioTitle : es.studioTitle}
                    content={language === 'en' ? en.studioText : es.studioText}
                  />
                </section>
                <section
                  className="section fp-noscroll"
                >
                  <FullBleedImage
                    image={teamImage}
                  />
                </section>
              </>
            }
            {teamEnabled &&
              <>
                <section className="section">
                  <Team
                    team={language === 'en' ? en.team.slice(0, 4) : es.team.slice(0, 4)}
                  />
                </section>
                <section className="section">
                  <Team
                    team={language === 'en' ? en.team.slice(4) : es.team.slice(4)}
                  />
                </section>
              </>
            }
            {officesEnabled &&
              <>
                <section className="section fp-noscroll">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-gray"
                    content={language === 'en' ? officesTextEng : officesTextEsp}
                    imageArray={officesImage}
                  />
                </section>
              </>
            }
            {contactEnabled &&
              <>
                <section className="section relative fp-noscroll">
                  <Contact
                    title={language === 'en' ? contactTitleEng : contactTitleEsp}
                    content={language === 'en' ? contactTextEng : contactTextEsp}
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