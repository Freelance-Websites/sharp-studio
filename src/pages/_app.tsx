import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
 
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
        outerStyle={{
          border: '2px solid var(--cursor-color)',
          mixBlendMode: 'darken'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}