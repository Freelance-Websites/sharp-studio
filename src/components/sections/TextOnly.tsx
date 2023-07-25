import Link from "next/link";

import { MainHeading, BigText } from "../Typography";

export default function TextOnly({ color, title, content, linkText, linkHref }: {
  color: string,
  title: string,
  content: string,
  linkText: string,
  linkHref: string,
}) {
  const formattedLinkText = linkText.replace(/click here/gi, '<u class="decoration-1 underline-offset-8 group-hover:no-underline">$&</u>');

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
            >
              <span
                className="group"
                dangerouslySetInnerHTML={{ __html: formattedLinkText }}
              />
            </BigText>
          </Link>
        }
      </div>
    </article>
  )
}