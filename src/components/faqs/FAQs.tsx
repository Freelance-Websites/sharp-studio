"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";

import { MediumText, StandardText } from "../Typography";

interface FAQ {
  title: string;
  text: string;
}

export default function Hero({
  content,
  disclaimer
}: {
  content: Array<FAQ>;
  disclaimer: string;
}) {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="mx-auto container px-4">
      <ul>
        {content.map((faq, index) =>
          <li
            key={index}
            className={`${isActive === index ? '' : ''} border-b border-black font-neue-regular`}
          >
            <button
              className="md:px-4 py-4 md:py-6 w-full text-left flex items-center justify-between gap-4 transition ease-in-out duration-100 group hover:opacity-80"
              onClick={() => setIsActive(index)}
            >
              <MediumText color="text-black">{faq.title}</MediumText>
              <svg className={`${isActive === index ? 'rotate-180' : ''} group-hover:opacity-80`} fill="none" height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m.216403 1.05193c.140625-.187502.328125-.281252.5625-.281252.140625 0 .328127.046875.468747.1875l9.23435 8.484372 9.2813-8.484372c.2812-.28125.75-.28125 1.0312.046872.2813.28125.2813.75-.0468 1.03125l-9.75 9c-.2813.2813-.7032.2813-.9844 0l-9.750022-9c-.3281252-.23437-.3281252-.70312-.046875-.98437z" fill="#101010"/></svg>
            </button>
            <div>
              <div className={`md:px-4 overflow-hidden md:max-w-4xl ${isActive === index ? 'h-auto' : 'h-0'}`}>
                <MediumText color="text-black">
                  <ReactMarkdown>{faq.text}</ReactMarkdown>
                </MediumText>
              </div>
              {isActive === index &&
                <span className="block pb-4 md:pb-6" />
              }
            </div>
          </li>
        )}
      </ul>
      <p className="md:px-4 py-8 md:pt-16 md:pb-32"><StandardText color="text-black">{disclaimer}</StandardText></p>
    </div>
  )
}