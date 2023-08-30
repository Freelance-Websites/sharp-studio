import { useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';

import styles from '@/components/sections/VirtualStaging.module.css';

export default function VirtualStaging({ leftImage, rightImage, title, credit, percentage, imageOneCaption, imageTwoCaption, theme }: {
  leftImage: string,
  rightImage: string,
  title: string,
  credit: string,
  percentage?: number,
  imageOneCaption?: string,
  imageTwoCaption?: string,
  theme?: string,
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
    <section
      className={`
        ${styles.SlideContainer} relative w-full h-custom bg-off-white
      `}
    >
      <ReactCompareImage
        leftImage={leftImage}
        leftImageAlt={`${title} – ${credit}`}
        rightImageAlt={`${title} – ${credit}`}
        rightImage={rightImage}
        sliderLineColor="#f9f9f9"
        sliderPositionPercentage={percentage ? percentage : 0.25}
      />
    </section>
  )
}