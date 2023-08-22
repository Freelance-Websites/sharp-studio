import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import TextOnly from '@/components/sections/TextOnly';
import ServiceList from '@/components/services/ServiceList';
import Footer from "@/components/Footer";

import { attributes } from '@/content/brokers-and-realtors/services.md';

export default function Services() {
  const { title, headingTitle, headingText, services } = attributes;
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
        type="brokers-and-realtors"
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
                type="brokers-and-realtors"
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