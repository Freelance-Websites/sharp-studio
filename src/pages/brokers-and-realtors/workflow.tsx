import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import Step from "@/components/workflow/Step";
import Contact from '@/components/Contact';

import { attributes } from '@/content/brokers-and-realtors/workflow.md';
import { attributes as globals } from '@/content/globals.md';

const pluginWrapper = () => {
  require('@/utils/fullpage.scrollHorizontally.min.js');
};

export default function Workflow() {
  const { en, es } = attributes;
  const contactTitleEng = globals.en.contactTitle;
  const contactTitleEsp = globals.es.contactTitle;
  const contactTextEng = globals.en.contactText;
  const contactTextEsp = globals.es.contactText;

  const [language, setLanguage] = useState('en');
  const translatedSteps = language === 'en' ? en.steps : es.steps;

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    changeLanguage(storedLanguage ? storedLanguage : 'en');
  });


  interface Step {
    image: string;
    imageTitle: string;
    imageCredit: string;
    title: string;
    description: string;
    cta: string;
  }

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
        pluginWrapper={pluginWrapper}
        controlArrows={false}
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        scrollHorizontally={true}
        verticalCentered={false}
        scrollHorizontallyKey={process.env.NEXT_PUBLIC_FULLPAGE_EXTENSION_ACTIVATION_KEY || ''}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <section
              className="section"
            >
              {translatedSteps.map((step: Step, index: number) =>
                <div
                  className="slide h-screen"
                  key={index}
                >
                  <Step
                    type="brokers-and-realtors"
                    index={index}
                    image={step.image}
                    imageTitle={step.imageTitle}
                    imageCredit={step.imageCredit}
                    title={step.title}
                    description={step.description}
                    ctaText={step.cta}
                    ctaAction={() => fullpageApi.moveSectionDown()}
                  />
                </div>
              )}
            </section>
            <section
              className="section"
            >
              <div className="h-screen flex items-center">
                <Contact
                  title={language === 'en' ? contactTitleEng : contactTitleEsp}
                  content={language === 'en' ? contactTextEng : contactTextEsp}
                />
              </div>
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}