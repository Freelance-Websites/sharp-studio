import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sharp Studio Visuals',
  description: 'Sharp Studio Visuals. Digital rendering rervices company based in Aventura, FL. Ultra high quality images for Architects & Developers as well as a suite of solutions for Brokers & Realtors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
};
