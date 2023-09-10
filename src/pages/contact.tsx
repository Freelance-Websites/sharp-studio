"use client";

import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import TextAndImage from "@/components/sections/TextAndImage";
import TextOnly from "@/components/sections/TextOnly";
import Map from "@/components/Map";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";

import { attributes } from '@/content/contact.md';
import { attributes as globals } from '@/content/globals.md';

export default function Contact() {
  const { faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes.en;
  const titleEng = attributes.en.title;
  const titleEsp = attributes.es.title;
  const { en, es } = globals;

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
        title={language === 'en' ? titleEng : titleEsp}
      />
      <Header
        activeLanguage={language}
        changeLanguage={changeLanguage}
        type="architects-and-developers"
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            {contactEnabled &&
              <>
                <section className="section relative">
                  <ContactForm
                    title={language === 'en' ? en.contactTitle : es.contactTitle}
                    content={language === 'en' ? en.contactText : es.contactText}
                    language={language}
                    showFooter={false}
                  />
                </section>
              </>
            }
            {faqsEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-off-white"
                  content={language === 'en' ? en.faqsText : es.faqsText}
                  linkText={language === 'en' ? en.faqsLinkText : es.faqsLinkText}
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
                    content={language === 'en' ? en.officesText : es.officesText}
                    imageArray={en.officesImage}
                  />
                  <Footer classes="absolute bottom-4" />
                </section>
              </>
            }
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}