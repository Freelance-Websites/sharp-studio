import Head from 'next/head';

export default function CustomHead({
  title,
}: {
  title?: string
}) {
  return (
    <Head>
      <title>{`${title} • SSV`}</title>
      <meta name="description" content="Sharp Studio Visuals. Digital rendering rervices company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
    </Head>
  )
}