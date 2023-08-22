import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import TextOnly from '@/components/sections/TextOnly';
import ServiceList from '@/components/services/ServiceList';
import Footer from "@/components/Footer";

import { attributes } from '@/content/architects-and-developers/services.md';

export default function Services() {
  const { en, es } = attributes;
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
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="section">
              <TextOnly
                color="bg-off-white"
                title={language === 'en' ? en.headingTitle : es.headingTitle}
                content={language === 'en' ? en.headingText : es.headingText}
              />
            </section>
            <section className="section">
              <ServiceList
                type="architects-and-developers"
                services={language === 'en' ? en.services : es.services}
              />
              <Footer classes="pb-4" />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}