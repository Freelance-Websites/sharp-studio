import Image from 'next/image';

import { StandardText } from '@/components/Typography';

export default function FullBleedImage({ image, title, credit, isMap }: {
  image: string,
  title: string,
  credit: string,
  isMap?: boolean,
}) {
  return (
    <section className="relative w-full h-screen">
      {/* Gradient and overlay */}
      {isMap && isMap === true ?
        '' :
        <>
          <div className="bg-gradient-to-t from-black absolute w-full h-screen z-20 to-20% opacity-60" />
          <div className="bg-black/10 w-full h-screen z-10 absolute" />
        </>
      }
      <Image
        src={image}
        alt={`${title} – ${credit}`}
        fill={true}
        className={`w-full h-full ${isMap && isMap === true ? 'object-contain' : 'object-cover'}`}
      />
      {/* Caption */}
      <div className="container mx-auto p-4 absolute bottom-0 md:bottom-4 z-30">
        <h2 className={isMap && isMap === true ? '' : 'drop-shadow-md'}>
          <StandardText color={isMap && isMap === true ? 'text-black' : 'text-off-white'}>
            <span className="font-neue-bold">{title}</span>
          </StandardText>
          <StandardText color={isMap && isMap === true ? 'text-black' : 'text-off-white'}>
            &nbsp;&mdash; {credit}
          </StandardText>
        </h2>
      </div>
    </section>
  )
}