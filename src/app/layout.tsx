"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    ReactGA.initialize("G-P7WPTM041R");
  }, []);

  return (
    <html lang="en">
      <head>
         <meta name="title" content="Sharp Studio Visuals" />
         <meta name="description" content="Sharp Studio Visuals. Digital rendering services company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors." />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
};
