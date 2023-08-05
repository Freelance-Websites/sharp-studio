import ReactCompareImage from 'react-compare-image';

export default function VirtualStaging({ leftImage, rightImage, title, credit }: {
  leftImage: string,
  rightImage: string,
  title: string,
  credit: string,
}) {
  return (
    <section className="relative w-full h-screen bg-off-white">
      <ReactCompareImage
        leftImage={leftImage}
        leftImageAlt={`${title} – ${credit}`}
        rightImageAlt={`${title} – ${credit}`}
        rightImage={rightImage}
        sliderLineColor="#f9f9f9"
        sliderPositionPercentage={0.25}
      />
    </section>
  )
}