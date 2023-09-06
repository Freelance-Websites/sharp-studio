"use client";

import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from "@/components/CustomHead";
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import LandingPageSelector from "@/components/LandingPageSelector";
import { MainHeading } from "@/components/Typography";

import { attributes } from '@/content/index.md';

export default function Home() {
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
    <main>
      <CustomHead
        // title={title}
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
            <section className="section">
              <h1
                className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 md:-translate-x-0 md:left-16 z-10 flex items-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
              >
                <MainHeading color="text-off-white" classes="max-w-[200px] md:max-w-lg mx-auto md:mx-0 text-center md:text-left">
                  {language === 'en' ? en.slogan : es.slogan}
                </MainHeading>
              </h1>
              <FullPageSlider
                slides={language === 'en' ? en.slider : es.slider}
                drag={true}
              />
            </section>
            <section className="section" data-anchor="selector">
              <LandingPageSelector
                architectsAndDevelopersHover={en.architectsAndDevelopersHover}
                brokersAndRealtorsHover={en.brokersAndRealtorsHover}
              />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}