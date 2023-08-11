import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import Step from "@/components/workflow/Step";
import Contact from '@/components/Contact';
// import Footer from "@/components/Footer";

import { attributes } from '@/content/architects-and-developers/workflow.md';
import { attributes as globals } from '@/content/globals.md';

const pluginWrapper = () => {
  require('@/utils/fullpage.scrollHorizontally.min.js');
};

export default function Workflow() {
  const { title, steps } = attributes;
  const { contactTitle, contactText } = globals;

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
        title={title}
      />
      <Header
        type="architects-and-developers"
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
              {steps.map((step: Step, index: number) =>
                <div
                  className="slide h-screen"
                  key={index}
                >
                  <Step
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
              <Contact
                title={contactTitle}
                content={contactText}
              />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
      {/* <Footer classes="pb-4" /> */}
    </main>
  )
}