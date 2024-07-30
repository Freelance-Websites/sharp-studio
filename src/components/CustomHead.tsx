import { useEffect } from "react";
import ReactGA from "react-ga4";
import Script from 'next/script';
import Head from 'next/head';

export default function CustomHead({
  title,
}: {
  title?: string
}) {

  useEffect(() => {
    ReactGA.initialize("G-P7WPTM041R");
  }, []);

  return (
    <Head>
      <title>{`${title} • SSV`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content="Sharp Studio Visuals. Digital rendering services company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
      
      <meta property="og:url" content="https://sharpstudiovisuals.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sharp Studio Visuals" />
      <meta property="og:description" content="Sharp Studio Visuals. Digital rendering services company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
      <meta property="og:image" content="https://sharpstudiovisuals.com/images/logo.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sharp Studio Visuals" />
      <meta name="twitter:description" content="Sharp Studio Visuals. Digital rendering services company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
      <meta name="twitter:image" content="https://sharpstudiovisuals.com/images/logo.png" />
    </Head>
  )
}