import { useEffect } from 'react';
import ReactMarkdown from "react-markdown";

import { MainHeading, BigText } from "../Typography";

export default function TextOnly({ color, title, content, linkText, classes }: {
  color: string,
  title?: string,
  content: string,
  linkText?: string,
  classes?: string,
}) {
  const updateViewportHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', () => updateViewportHeight());

    // Cleanup
    return () => {
      document.removeEventListener('resize', updateViewportHeight);
    }
  }, []);

  return (
    <article
      className={`h-custom flex items-center ${classes} ${color}`}
    >
      <div className="container mx-auto p-4 grid gap-4 lg:max-w-5xl">
        {title &&
          <h2>
            <MainHeading color="text-black">
              <span dangerouslySetInnerHTML={{ __html: title }} className="leading-tight" />
            </MainHeading>
          </h2>
        }
        {content &&
          <BigText color="text-black">
            <ReactMarkdown className="font-neue-regular">{content}</ReactMarkdown>
          </BigText>
        }
        {linkText &&
          <BigText
            color="text-black"
          >
            <ReactMarkdown className="font-neue-regular">{linkText}</ReactMarkdown>
          </BigText>
        }
      </div>
    </article>
  )
}