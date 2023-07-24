"use client";

import { useState } from "react";
import Link from "next/link";

import { UpperCaseText } from '@/components/Typography';

export default function Header({
  type,
}: {
  type?: String
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-off-white p-4 fixed w-full top-0 z-10">
      <div className="grid grid-cols-2 items-center justify-between container mx-auto">
        <Link href="/">
          <svg fill="none" className="fill-black" height="16" viewBox="0 0 41 16" width="41" xmlns="http://www.w3.org/2000/svg"><g><path d="m7.35 6.17593c2.835.777 5.754 1.701 5.754 4.91397 0 2.877-2.184 4.746-5.943 4.746-3.906 0-6.845998-1.932-6.845998-5.271h3.779998c0 1.596 1.386 2.184 3.066 2.184 1.407 0 2.163-.546 2.163-1.302 0-1.197-1.617-1.46997-3.738-2.09997-2.583-.756-4.850998-1.869-4.850998-4.641 0-3.276 2.561998-4.557004 5.795998-4.557004 3.507 0 6.258 1.848004 6.363 4.893004h-3.78c-.168-1.134-1.134-1.806-2.583-1.806-1.134 0-2.016.357-2.016 1.197 0 .924.945 1.218 2.835 1.743z"/><path d="m21.1518 6.17593c2.835.777 5.754 1.701 5.754 4.91397 0 2.877-2.184 4.746-5.943 4.746-3.906 0-6.846-1.932-6.846-5.271h3.78c0 1.596 1.386 2.184 3.066 2.184 1.407 0 2.163-.546 2.163-1.302 0-1.197-1.617-1.46997-3.738-2.09997-2.583-.756-4.851-1.869-4.851-4.641 0-3.276 2.562-4.557004 5.796-4.557004 3.507 0 6.258 1.848004 6.363 4.893004h-3.78c-.168-1.134-1.134-1.806-2.583-1.806-1.134 0-2.016.357-2.016 1.197 0 .924.945 1.218 2.835 1.743z"/><path d="m26.8232.484925h4.011l2.835 10.520975h.042l2.856-10.520975h3.99l-4.872 15.014975h-3.99z"/></g></svg>
        </Link>
        <button
          className="justify-self-end md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg" className="fill-black"><g><path d="m0 8h24v2h-24z"/><path d="m0 0h24v2h-24z"/><path d="m0 16h24v2h-24z"/></g></svg>
        </button>
        <nav className={`${isOpen === true ? 'flex col-span-2 my-8 w-full' : 'hidden md:flex'} items-center md:justify-self-end`}>
          <ul className="flex flex-col w-full items-center md:flex-row md:items-baseline gap-6">
            {type &&
              <>
                <li>
                  <Link href={`/${type}/portfolio`} className="hover:opacity-80 duration-100 transition ease-in-out">
                    <UpperCaseText color="text-black">Portfolio</UpperCaseText>
                  </Link>
                </li>
                <li>
                  <Link href={`/${type}/services`} className="hover:opacity-80 duration-100 transition ease-in-out">
                    <UpperCaseText color="text-black">Services</UpperCaseText>
                  </Link>
                </li>
              </>
            }
            <li>
              <Link href="/contact" className="hover:opacity-80 duration-100 transition ease-in-out bg-black py-2 px-3 rounded-full">
                <UpperCaseText color="text-off-white">Contact Us</UpperCaseText>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}