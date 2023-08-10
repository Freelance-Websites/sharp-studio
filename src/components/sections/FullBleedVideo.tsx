import { StandardText } from '@/components/Typography';

export default function FullBleedVideo({ video, title, credit }: {
  video: string,
  title?: string,
  credit?: string,
}) {
  return (
    <section className="relative w-full h-screen">
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
          <h2 className="drop-shadow-md">
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