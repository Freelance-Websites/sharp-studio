import Link from "next/link";

import { MainHeading, BigText } from "../Typography";

export default function TextOnly({ color, title, content, linkText, linkHref }: {
  color: string,
  title?: string,
  content: string,
  linkText: string,
  linkHref: string,
}) {
  let formattedLinkText;
  formattedLinkText = linkText.replace(/click here/gi, '<u class="decoration-1 underline-offset-8 group-hover:no-underline">$&</u>');
  formattedLinkText = formattedLinkText.replace(/->/gi, `<i class="absolute top-3 ml-2"><svg class="fill-black" fill="none" height="21" viewBox="0 0 24 21" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.2045 20.9999-1.75-1.7273 7.2046-7.2046h-18.6591v-2.49995h18.6591l-7.2046-7.18182 1.75-1.75 10.1819 10.18177z" /></svg></i>`);

  const shouldUnderline = formattedLinkText.includes('svg');

  return (
    <article
      className={`h-screen flex items-center ${color}`}
    >
      <div className="container mx-auto p-4 grid gap-4 lg:max-w-5xl">
        {title &&
          <h2>
            <MainHeading color="text-black">{title}</MainHeading>
          </h2>
        }
        {content &&
          <p>
            <BigText color="text-black">{content}</BigText>
          </p>
        }
        {linkText &&
          <Link href={linkHref}>
            <BigText
              color="text-black"
              underline={shouldUnderline}
            >
              <span
                className="group relative"
                dangerouslySetInnerHTML={{ __html: formattedLinkText }}
              />
            </BigText>
          </Link>
        }
      </div>
    </article>
  )
}