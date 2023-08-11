"use client";

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
  const { title, faqsEnabled, mapEnabled, officesEnabled, contactEnabled } = attributes;
  const { faqsText, faqsLinkText, officesImage, officesText, contactTitle, contactText } = globals;

  return (
    <main>
      <CustomHead
        title={title}
      />
      <Header
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
                    title={contactTitle}
                    content={contactText}
                    showFooter={false}
                  />
                </section>
              </>
            }
            {faqsEnabled &&
              <section className="section">
                <TextOnly
                  color="bg-off-white"
                  content={faqsText}
                  linkText={faqsLinkText}
                  linkHref={'/architects-and-developers/faqs'}
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
                    content={officesText}
                    image={officesImage}
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