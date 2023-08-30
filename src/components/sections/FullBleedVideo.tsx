import { useEffect } from 'react';

import { StandardText } from '@/components/Typography';

export default function FullBleedVideo({ video, title, credit }: {
  video: string,
  title?: string,
  credit?: string,
}) {
  const updateViewportHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', () => updateViewportHeight());

    // Cleanup
    return () => {
      document.removeEventListener('resize', updateViewportHeight);
    }
  }, []);

  return (
    <section className="relative w-full h-custom">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Caption */}
      {title &&
        <div className="container mx-auto p-4 absolute bottom-0 md:bottom-4 z-30">
          <h2 className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            <StandardText color="text-white">
              <span className="font-neue-bold">{title}</span>
            </StandardText>
            <StandardText color="text-white">
              &nbsp;&mdash; {credit}
            </StandardText>
          </h2>
        </div>
      }
    </section>
  )
}