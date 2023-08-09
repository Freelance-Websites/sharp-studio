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
        let formattedLinkText;
        formattedLinkText = service.linkText?.replace(/click here/gi, '<u class="decoration-1 underline-offset-4 md:underline-offset-8 group-hover:no-underline">$&</u>');

        const fullLink = `/${type}/services/${service.linkHref}`;

        return (
          <li
            key={index}
            className="grid md:grid-cols-10 gap-4 lg:gap-8 xl:gap-16 items-center"
          >
            <div className="col-span-full md:col-span-5 lg:col-span-4 relative aspect-square">
              <Link
                href={fullLink}
                className="group"
              >
                <Image
                  src={service.image}
                  alt={`${service.imageTitle} – ${service.imageCredit}`}
                  fill={true}
                  className="w-full h-full object-cover"
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
              <h2><MediumText color="text-black" classes="font-neue-bold xl:text-2xl 2xl:text-3xl 2xl:leading-normal">{service.title}</MediumText></h2>
              <p><MediumText color="text-black" classes="xl:text-2xl 2xl:text-3xl 2xl:leading-normal">{service.description}</MediumText></p>
              {service.bullets.length > 0 &&
                <ol className={`ml-4 md:ml-8 list-disc grid ${service.bullets.length > 4 ? 'md:grid-cols-2' : ''} gap-1`}>
                  {service.bullets.map((bullet, index) =>
                    <li key={index}>
                      <p><MediumText color="text-black" classes="xl:text-2xl 2xl:text-3xl 2xl:leading-normal">{bullet}</MediumText></p>
                    </li>
                  )}
                </ol>
              }
              <Link
                href={fullLink}
                className="group"
              >
                <MediumText color="text-black" classes="xl:text-2xl 2xl:text-3xl 2xl:leading-normal">
                  <span dangerouslySetInnerHTML={{ __html: formattedLinkText }} />
                </MediumText>
              </Link>
            </div>
          </li>
        )
      }
      )}
    </ul>
  )
}