"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { BigText } from "../Typography";

export default function Hero({
  title,
  cta,
}: {
  title: string;
  cta: string;
}) {
  return (
    <div className="mx-auto container px-4 pt-24 md:pt-48 pb-8 md:pb-32">
      <h1><BigText color="text-black">{title}</BigText></h1>
      <div className="mt-2 md:mt-0">
        <BigText color="text-black">
          <ReactMarkdown>{cta}</ReactMarkdown>
        </BigText>
      </div>
    </div>
  )
}