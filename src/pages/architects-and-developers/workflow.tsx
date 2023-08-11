import ReactFullpage from '@fullpage/react-fullpage';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import Step from "@/components/workflow/Step";
import Footer from "@/components/Footer";

import { attributes } from '@/content/architects-and-developers/workflow.md';

const pluginWrapper = () => {
  require('@/utils/fullpage.scrollHorizontally.min.js');
};

export default function Workflow() {
  const { title, steps } = attributes;

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
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || ''}
        pluginWrapper={pluginWrapper}
        scrollHorizontally={true}
        scrollHorizontallyKey={process.env.NEXT_PUBLIC_FULLPAGE_EXTENSION_ACTIVATION_KEY || ''}
        render={() => (
          <ReactFullpage.Wrapper>
            {steps.map((step: Step, index: number) =>
              <section
                className="section"
                key={index}
              >
                <Step
                  index={index}
                  image={step.image}
                  imageTitle={step.imageTitle}
                  imageCredit={step.imageCredit}
                  title={step.title}
                  description={step.description}
                  cta={step.cta}
                />
              </section>
            )}
          </ReactFullpage.Wrapper>
        )}
      />
      <Footer classes="pb-4" />
    </main>
  )
}