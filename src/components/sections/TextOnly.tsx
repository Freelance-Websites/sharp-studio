import ReactMarkdown from "react-markdown";

import { MainHeading, BigText } from "../Typography";

export default function TextOnly({ color, title, content, linkText, classes }: {
  color: string,
  title?: string,
  content: string,
  linkText?: string,
  classes?: string,
}) {
  return (
    <article
      className={`h-screen flex items-center ${classes} ${color}`}
    >
      <div className="container mx-auto p-4 grid gap-4 lg:max-w-5xl">
        {title &&
          <h2>
            <MainHeading color="text-black">{title}</MainHeading>
          </h2>
        }
        {content &&
          <BigText color="text-black">
            <ReactMarkdown>{content}</ReactMarkdown>
          </BigText>
        }
        {linkText &&
          <BigText
            color="text-black"
          >
            <ReactMarkdown>{linkText}</ReactMarkdown>
          </BigText>
        }
      </div>
    </article>
  )
}