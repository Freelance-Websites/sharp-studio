"use client";

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
      <p className="mt-2 md:mt-0"><BigText color="text-black"><span dangerouslySetInnerHTML={{ __html: cta }} /></BigText></p>
    </div>
  )
}