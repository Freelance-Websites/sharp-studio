import { MediumText } from "@/components/Typography";

export default function Cta({
  label,
  link,
  external,
  decoration
}: {
  label: string;
  link?: string;
  external?: boolean;
  decoration: boolean;
}) {
  const decorator = <i className="ml-1 md:ml-3 relative top-px transform scale-75 md:scale-100"><svg className="fill-black" fill="none" height="21" viewBox="0 0 24 21" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.2045 20.9999-1.75-1.7273 7.2046-7.2046h-18.6591v-2.49995h18.6591l-7.2046-7.18182 1.75-1.75 10.1819 10.18177z" /></svg></i>;

  return (
    <>
      {
        link ?
          <a
            href={link}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : ''}
            className="transition ease-in-out duration-100 hover:opacity-80"
          >
            <MediumText color="text-black" classes="flex items-center">
              {label}
              {decoration && decorator}
            </MediumText>
          </a>
        :
          <button
            className="transition ease-in-out duration-100 hover:opacity-80"
          >
            <MediumText color="text-black" classes="flex items-center">
              {label}
              {decoration && decorator}
            </MediumText>
          </button>
      }
    </>
  )
}