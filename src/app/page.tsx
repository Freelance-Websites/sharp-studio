"use client";

import ReactFullpage from '@fullpage/react-fullpage';

import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey=''
        // navigation
        // pluginWrapper={pluginWrapper}
        // onLeave={onLeave}
        // scrollHorizontally={true}
        // sectionsColor={sectionsColor}
        render={() => (
          <ReactFullpage.Wrapper>
            <section className='section'>
              test 1
            </section>
            <section className='section'>
              test 2
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  )
}