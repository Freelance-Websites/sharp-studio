import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
import Image from "next/image";

import { MediumText, StandardText } from "@/components/Typography";

interface Service {
  image: string;
  title: string;
  description: string;
  imageTitle: string;
  imageCredit: string;
  bullets: Array<string>;
  linkText: string;
  linkHref: string;
}

export default function ServiceList({ type, services }: {
  type: string,
  services: Array<Service>
}) {
  return (
    <ul className="grid gap-16 lg:gap-24 xl:gap-32 container mx-auto px-4 py-16 md:py-20">
      {services.map((service, index) => {
        let fullLink;
        if(service.linkHref.includes('architecture-and-developer-services')) {
          fullLink = `/${type}/services/${service.linkHref}`;
        } else {
          fullLink = `/${type}/services/showcase#${service.linkHref}`;
        }

        return (
          <li
            key={index}
            className="grid md:grid-cols-10 gap-4 lg:gap-8 xl:gap-16 items-center"
          >
            <div className="col-span-full md:col-span-5 lg:col-span-4 relative aspect-square">
              <Link
                href={fullLink}
                className="group absolute w-full h-full"
              >
                <Image
                  src={service.image}
                  alt={`${service.imageTitle} – ${service.imageCredit}`}
                  fill={true}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 h-full">
                  <div className="bg-gradient-to-t from-black absolute w-full h-full z-10 to-20% opacity-60" />
                </div>
                <p className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-20">
                  <StandardText color="text-white">
                    <strong>{service.imageTitle}</strong> – {service.imageCredit}
                  </StandardText>
                </p>
              </Link>
            </div>
            <div className="col-span-full md:col-span-full lg:col-span-6 xl:col-span-5 grid gap-2">
              <h2><MediumText color="text-black" classes="font-neue-bold xl:text-2xl 2xl:text-3xl 2xl:leading-normal font-neue-bold">{service.title}</MediumText></h2>
              <div
                className="text-black text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed  2xl:leading-relaxed font-neue-regular"
              >
                <ReactMarkdown>{service.description}</ReactMarkdown>
              </div>
              {service.bullets.length > 0 &&
                <ol className={`ml-4 md:ml-8 list-disc grid ${service.bullets.length > 4 ? 'md:grid-cols-2' : ''} gap-1`}>
                  {service.bullets.map((bullet, index) =>
                    <li key={index}>
                      <p><MediumText color="text-black" classes="xl:text-2xl 2xl:text-3xl 2xl:leading-normal font-neue-regular">{bullet}</MediumText></p>
                    </li>
                  )}
                </ol>
              }
              <MediumText color="text-black" classes="xl:text-2xl 2xl:text-3xl 2xl:leading-normal font-neue-regular">
                <ReactMarkdown>{service.linkText}</ReactMarkdown>
              </MediumText>
            </div>
          </li>
        )
      }
      )}
    </ul>
  )
}