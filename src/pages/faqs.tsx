"use client";

import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import Hero from "@/components/faqs/Hero";
import FAQs from "@/components/faqs/FAQs";
import TextAndImage from "@/components/sections/TextAndImage";
import Map from "@/components/Map";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";

import { attributes } from '@/content/faqs.md';
import { attributes as globals } from '@/content/globals.md';

export default function Contact() {
  const { en , es } = attributes;
  const officesTextEng = globals.en.officesText;
  const officesTextEsp = globals.es.officesText;
  const officesImage = globals.es.officesImage;
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
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            {en.faqsEnabled &&
              <section className="section">
                <Hero
                  title={language === 'en' ? en.heroTitle : es.heroTitle}
                  cta={language === 'en' ? en.heroCTA : es.heroCTA}
                />
                <FAQs
                  content={language === 'en' ? en.faqs : es.faqs}
                  disclaimer={language === 'en' ? en.disclaimer : es.disclaimer}
                />
              </section>
            }
            {en.mapEnabled &&
              <section className="section">
                <Map />
              </section>
            }
            {en.officesEnabled &&
              <>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-gray"
                    content={language === 'en' ? officesTextEng : officesTextEsp}
                    image={officesImage}
                  />
                  <Footer classes="absolute bottom-4" />
                </section>
              </>
            }
            {en.contactEnabled &&
              <>
                <section className="section relative">
                  <ContactForm
                    title={language === 'en' ? contactTitleEng : contactTitleEsp}
                    content={language === 'en' ? contactTextEng : contactTextEsp}
                    language={language}
                    showFooter={false}
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