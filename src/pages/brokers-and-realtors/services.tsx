import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import TextOnly from '@/components/sections/TextOnly';
import ServiceList from '@/components/services/ServiceList';
import Footer from "@/components/Footer";

import { attributes } from '@/content/brokers-and-realtors/services.md';

export default function Services() {
  const { title, headingTitle, headingText, services } = attributes;

  return (
    <main className="bg-off-white">
      <CustomHead
        title={title}
      />
      <Header
        type="brokers-and-realtors"
      />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="section">
              <TextOnly
                color="bg-off-white"
                title={headingTitle}
                content={headingText}
              />
            </section>
            <section className="section">
              <ServiceList
                type="brokers-and-realtors"
                services={services}
              />
              <Footer classes="pb-4" />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}