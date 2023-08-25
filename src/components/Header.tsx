"use client";

import { useState } from "react";

import { UpperCaseText } from '@/components/Typography';

export default function Header({
  type,
  bgColor,
  activeLanguage,
  changeLanguage
}: {
  type?: String;
  bgColor?: String;
  activeLanguage: String;
  changeLanguage: (lang: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`p-4 fixed w-full top-0 z-10 border-b ${bgColor ? bgColor : 'bg-off-white'}`}>
      <div className="grid grid-cols-2 items-center justify-between container mx-auto">
        <a href="/">
          <svg fill="none" className="fill-black" height="16" viewBox="0 0 41 16" width="41" xmlns="http://www.w3.org/2000/svg"><g><path d="m7.35 6.17593c2.835.777 5.754 1.701 5.754 4.91397 0 2.877-2.184 4.746-5.943 4.746-3.906 0-6.845998-1.932-6.845998-5.271h3.779998c0 1.596 1.386 2.184 3.066 2.184 1.407 0 2.163-.546 2.163-1.302 0-1.197-1.617-1.46997-3.738-2.09997-2.583-.756-4.850998-1.869-4.850998-4.641 0-3.276 2.561998-4.557004 5.795998-4.557004 3.507 0 6.258 1.848004 6.363 4.893004h-3.78c-.168-1.134-1.134-1.806-2.583-1.806-1.134 0-2.016.357-2.016 1.197 0 .924.945 1.218 2.835 1.743z"/><path d="m21.1518 6.17593c2.835.777 5.754 1.701 5.754 4.91397 0 2.877-2.184 4.746-5.943 4.746-3.906 0-6.846-1.932-6.846-5.271h3.78c0 1.596 1.386 2.184 3.066 2.184 1.407 0 2.163-.546 2.163-1.302 0-1.197-1.617-1.46997-3.738-2.09997-2.583-.756-4.851-1.869-4.851-4.641 0-3.276 2.562-4.557004 5.796-4.557004 3.507 0 6.258 1.848004 6.363 4.893004h-3.78c-.168-1.134-1.134-1.806-2.583-1.806-1.134 0-2.016.357-2.016 1.197 0 .924.945 1.218 2.835 1.743z"/><path d="m26.8232.484925h4.011l2.835 10.520975h.042l2.856-10.520975h3.99l-4.872 15.014975h-3.99z"/></g></svg>
        </a>
        <button
          className="justify-self-end md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg" className="fill-black"><g><path d="m0 8h24v2h-24z"/><path d="m0 0h24v2h-24z"/><path d="m0 16h24v2h-24z"/></g></svg>
        </button>
        <nav className={`${isOpen === true ? 'flex flex-col col-span-2 gap-6 my-8 w-full' : 'hidden md:flex'} md:gap-6 items-center md:justify-self-end`}>
          <ul className="flex flex-col w-full items-center md:flex-row md:items-baseline gap-6">
            {type &&
              <>
                <li>
                  <a href={`/${type}`} className="hover:opacity-80 duration-100 transition ease-in-out">
                    <UpperCaseText color="text-black">Home</UpperCaseText>
                  </a>
                </li>
                <li>
                  <a href={`/${type}/portfolio`} className="hover:opacity-80 duration-100 transition ease-in-out">
                    <UpperCaseText color="text-black">Portfolio</UpperCaseText>
                  </a>
                </li>
                <li>
                  <a href={`/${type}/services`} className="hover:opacity-80 duration-100 transition ease-in-out">
                    <UpperCaseText color="text-black">
                      {activeLanguage === 'en' ? 'Services' : 'Servicios'}
                    </UpperCaseText>
                  </a>
                </li>
              </>
            }
            <li>
              <a href="/faqs" className="hover:opacity-80 duration-100 transition ease-in-out">
                <UpperCaseText color="text-black">
                  FAQs
                </UpperCaseText>
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:opacity-80 duration-100 transition ease-in-out bg-black py-2 px-3 rounded-full">
                <UpperCaseText color="text-off-white">
                  {activeLanguage === 'en' ? 'Contact Us' : 'Contactanos'}
                </UpperCaseText>
              </a>
            </li>
            <li>
              <button
                className="hover:opacity-80 duration-100 transition ease-in-out"
                onClick={() => changeLanguage(activeLanguage === 'en' ? 'es' : 'en')}
              >
                <UpperCaseText color="text-black">
                  {activeLanguage === 'en' ? 'ES' : 'EN'}
                </UpperCaseText>
              </button>
            </li>
          </ul>
          <div className="relative -top-px">
            <a href="https://wa.me/13054693227" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 duration-100 transition ease-in-out">
              <svg fill="none" height="23" viewBox="0 0 22 23" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m18.5547 3.91016c2.0508 2.05078 3.3203 4.73632 3.3203 7.66604 0 5.957-4.9805 10.8398-10.9863 10.8398-1.80667 0-3.56448-.4883-5.17581-1.3183l-5.71289 1.4648 1.51367-5.6152c-.927732-1.6114-1.4648419-3.4668-1.4648419-5.42 0-5.95699 4.8828119-10.8398 10.8398719-10.8398 2.9297 0 5.664 1.17188 7.666 3.22266zm-7.666 16.65034c4.9804 0 9.1308-4.0527 9.1308-8.9843 0-2.44143-1.0254-4.68753-2.7343-6.39651-1.709-1.70899-3.9551-2.63672-6.3477-2.63672-4.98047 0-9.0332 4.05273-9.0332 8.98433 0 1.709.48828 3.3692 1.36718 4.834l.24414.3418-.92773 3.3203 3.41797-.9277.29297.1953c1.41601.8301 2.97851 1.2695 4.58987 1.2695zm4.9804-6.7382c.2442.1465.4395.1953.4883.3418.0977.0976.0977.6347-.1465 1.2695-.2441.6348-1.3183 1.2207-1.8066 1.2695-.8789.1465-1.5625.0977-3.2715-.6836-2.73436-1.1718-4.49218-3.9062-4.63866-4.0527-.14648-.1953-1.07422-1.4648-1.07422-2.83203 0-1.31836.6836-1.95313.92774-2.2461s.53711-.34179.73242-.34179h.48828c.19531 0 .39062-.04883.63476.48828.19532.53711.78126 1.85546.83008 2.00195.04883.14648.09766.29297 0 .48828-.48828 1.02541-1.07422.97661-.78125 1.46481 1.07422 1.8067 2.09965 2.4414 3.71095 3.2227.2441.1465.3906.0976.5859-.0488.1465-.1953.6836-.8301.8301-1.0743.1953-.2929.3906-.2441.6348-.1464.2441.0976 1.5625.7324 1.8554.8789z" fill="#101010"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}