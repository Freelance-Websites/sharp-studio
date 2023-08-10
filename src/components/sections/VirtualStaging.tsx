import ReactCompareImage from 'react-compare-image';

import { StandardText } from '@/components/Typography';

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
  return (
    <section
      className={`
        ${styles.SlideContainer} relative w-full h-screen bg-off-white
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