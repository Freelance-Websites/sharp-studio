"use client";

import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import FullPageSlider from "@/components/sections/FullPageSlider";
import FullBleedImage from "@/components/sections/FullBleedImage";
import TextAndImage from "@/components/sections/TextAndImage";
import TextOnly from "@/components/sections/TextOnly";
import Map from "@/components/Map";
import Contact from "@/components/Contact";

import { attributes } from '@/content/architects-and-developers/index.md';
import { attributes as globals } from '@/content/globals.md';

export default function Home() {
  const { heroEnabled, heroImage, studioEnabled, servicesEnabled, immersiveServicesEnabled, workflowEnabled, portfolioEnabled, documentationEnabled, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes.en;
  const { officesImage } = globals.en;
  const { en, es } = attributes;
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
  const translatedStudioSlider = language === 'en' ? en.studioSlider : es.studioSlider;
  const translatedServicesSlider = language === 'en' ? en.servicesSlider : es.servicesSlider;
  const translatedImmersiveServicesSlider = language === 'en' ? en.immersiveServicesSlider : es.immersiveServicesSlider;
  const translatedWorkflowSlider = language === 'en' ? en.workflowSlider : es.workflowSlider;
  const translatedDocumentationSlider = language === 'en' ? en.documentationSlider : es.documentationSlider;

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
        type="architects-and-developers"
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        touchSensitivity={30}
        render={() => (
          <ReactFullpage.Wrapper>
            {heroEnabled &&
              <section className="section">
                <FullBleedImage
                  image={heroImage}
                  imageTitle={language === 'en' ? en.heroTitle : es.heroTitle}
                  imageCredit={language === 'en' ? en.heroCredit : es.heroCredit}
                />
              </section>
            }
            {studioEnabled &&
              <>
                <section className="section">
                  <TextOnly
                    color="bg-cream"
                    title={language === 'en' ? en.studioTitle : es.studioTitle}
                    content={language === 'en' ? en.studioText : es.studioText}
                    linkText={language === 'en' ? en.studioLinkText : es.studioLinkText}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={translatedStudioSlider}
                    drag={true}
                  />
                </section>
              </>
            }
            {servicesEnabled &&
              <>
                <section className="section overflow-x-hidden">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-gray"
                    title={language === 'en' ? en.servicesTitle : es.servicesTitle}
                    content={language === 'en' ? en.servicesText : es.servicesText}
                    linkText={language === 'en' ? en.servicesLinkText : es.servicesLinkText}
                    linkHref={language === 'en' ? en.servicesLinkHref : es.servicesLinkHref}
                    imageHref={language === 'en' ? en.servicesImageHref : es.servicesImageHref}
                    image={language === 'en' ? en.servicesImage : es.servicesImage}
                    imageCaption={language === 'en' ? en.servicesImageCaption : es.servicesImageCaption}
                    imageCredit={language === 'en' ? en.servicesImageCredit : es.servicesImageCredit}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={translatedServicesSlider}
                    drag={false}
                  />
                </section>
              </>
            }
            {immersiveServicesEnabled &&
              <>
                <section className="section">
                  <TextAndImage
                    orientation="right"
                    color="bg-salmon"
                    content={language === 'en' ? en.immersiveServicesText : es.immersiveServicesText}
                    linkText={language === 'en' ? en.immersiveServicesLinkText : es.immersiveServicesLinkText}
                    linkHref={language === 'en' ? en.immersiveServiceLinkHref : es.immersiveServicesLinkHref}
                    imageHref={language === 'en' ? en.immersiveServiceImageHref : es.immersiveServicesImageHref}
                    image={language === 'en' ? en.immersiveServicesImage : es.immersiveServicesImage}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={translatedImmersiveServicesSlider}
                    drag={true}
                  />
                </section>
              </>
            }
            {workflowEnabled &&
              <>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-green"
                    content={language === 'en' ? en.workflowText : es.workflowText}
                    linkText={language === 'en' ? en.workflowLinkText : es.workflowLinkText}
                    linkHref={language === 'en' ? en.workflowLinkHref : es.workflowLinkHref}
                    image={language === 'en' ? en.workflowImage : es.workflowImage}
                    imageHref={language === 'en' ? en.workflowImageHref : es.workflowImageHref}
                    imageCaption={language === 'en' ? en.workflowImageCaption : es.workflowImageCaption}
                    imageCredit={language === 'en' ? en.workflowImageCredit : es.workflowImageCredit}
                  />
                </section>
                <section className="section">
                  <FullPageSlider
                    slides={translatedWorkflowSlider}
                    drag={true}
                  />
                </section>
              </>
            }
            {portfolioEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-light-blue"
                  content={language === 'en' ? en.portfolioText : es.portfolioText}
                  linkText={language === 'en' ? en.portfolioLinkText : es.portfolioLinkText}
                />
              </section>
            }
            {documentationEnabled &&
              <>
                <section className="section">
                  <FullPageSlider
                    slides={translatedDocumentationSlider}
                    drag={true}
                  />
                </section>
                <section className="section">
                  <TextAndImage
                    orientation="right"
                    color="bg-light-gray"
                    content={language === 'en' ? en.documentationText : es.documentationText}
                    linkText={language === 'en' ? en.documentationLinkText : es.documentationLinkText}
                    linkHref={language === 'en' ? en.documentationLinkHref : es.documentationLinkHref}
                    image={language === 'en' ? en.documentationImage : es.documentationImage}
                    imageHref={language === 'en' ? en.documentationImageHref : es.documentationImageHref}
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
              <>
                <section className="section">
                  <TextAndImage
                    orientation="left"
                    color="bg-light-gray"
                    content={language === 'en' ? officesTextEng : officesTextEsp}
                    image={officesImage}
                  />
                </section>
              </>
            }
            {contactEnabled &&
              <>
                <section className="section relative">
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