import { MainHeading, BigText } from "../Typography";

export default function TextOnly({ color, title, content, linkText, linkHref, classes }: {
  color: string,
  title?: string,
  content: string,
  linkText?: string,
  linkHref?: string,
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
          <p>
            <BigText color="text-black">{content}</BigText>
          </p>
        }
        {/* Need to use <a> so that it scrolls to the top */}
        {linkText &&
          <BigText
            color="text-black"
          >
            <span
              className="group relative"
              dangerouslySetInnerHTML={{ __html: linkText }}
            />
          </BigText>
        }
      </div>
    </article>
  )
}