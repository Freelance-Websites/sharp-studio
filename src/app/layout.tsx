"use client";

import '@/styles/globals.css';

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
      <body className="antialiased">{children}</body>
    </html>
  );
};
