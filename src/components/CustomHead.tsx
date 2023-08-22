import Script from 'next/script';
import Head from 'next/head';

export default function CustomHead({
  title,
}: {
  title?: string
}) {
  return (
    <Head>
      <title>{`${title} • SSV`}</title>
      <meta name="description" content="Sharp Studio Visuals. Digital rendering services company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>
  )
}