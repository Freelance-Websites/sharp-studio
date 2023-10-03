"use client";

import '@/styles/globals.css';

import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
         <meta name="title" content="Sharp Studio Visuals" />
         <meta name="description" content="Sharp Studio Visuals. Digital rendering services company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
      </head>
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
      <body className="antialiased">{children}</body>
    </html>
  );
};
