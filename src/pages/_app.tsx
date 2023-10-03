import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import AnimatedCursor from "react-animated-cursor";
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={1}
        showSystemCursor={true}
        outerStyle={{
          border: '2px solid var(--cursor-color)',
          mixBlendMode: 'darken'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}