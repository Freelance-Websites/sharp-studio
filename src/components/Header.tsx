"use client";

import { useState } from "react";
import Link from "next/link";

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
      <div className="flex flex-wrap items-center justify-between container mx-auto">
        <a href="/#selector">
          <svg fill="none" className="fill-black" height="16" viewBox="0 0 41 16" width="41" xmlns="http://www.w3.org/2000/svg"><g><path d="m7.35 6.17593c2.835.777 5.754 1.701 5.754 4.91397 0 2.877-2.184 4.746-5.943 4.746-3.906 0-6.845998-1.932-6.845998-5.271h3.779998c0 1.596 1.386 2.184 3.066 2.184 1.407 0 2.163-.546 2.163-1.302 0-1.197-1.617-1.46997-3.738-2.09997-2.583-.756-4.850998-1.869-4.850998-4.641 0-3.276 2.561998-4.557004 5.795998-4.557004 3.507 0 6.258 1.848004 6.363 4.893004h-3.78c-.168-1.134-1.134-1.806-2.583-1.806-1.134 0-2.016.357-2.016 1.197 0 .924.945 1.218 2.835 1.743z"/><path d="m21.1518 6.17593c2.835.777 5.754 1.701 5.754 4.91397 0 2.877-2.184 4.746-5.943 4.746-3.906 0-6.846-1.932-6.846-5.271h3.78c0 1.596 1.386 2.184 3.066 2.184 1.407 0 2.163-.546 2.163-1.302 0-1.197-1.617-1.46997-3.738-2.09997-2.583-.756-4.851-1.869-4.851-4.641 0-3.276 2.562-4.557004 5.796-4.557004 3.507 0 6.258 1.848004 6.363 4.893004h-3.78c-.168-1.134-1.134-1.806-2.583-1.806-1.134 0-2.016.357-2.016 1.197 0 .924.945 1.218 2.835 1.743z"/><path d="m26.8232.484925h4.011l2.835 10.520975h.042l2.856-10.520975h3.99l-4.872 15.014975h-3.99z"/></g></svg>
        </a>
        {/* Mobile buttons */}
        <ul className="flex items-center gap-6 md:hidden">
          <li>
            <a href="/contact" className="hover:opacity-80 duration-100 transition ease-in-out bg-black py-2 px-3 rounded-full">
              <UpperCaseText color="text-off-white">
                {activeLanguage === 'en' ? 'Contact Us' : 'Contactanos'}
              </UpperCaseText>
            </a>
          </li>
          <li className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg" className="fill-black"><g><path d="m0 8h24v2h-24z"/><path d="m0 0h24v2h-24z"/><path d="m0 16h24v2h-24z"/></g></svg>
            </button>
          </li>
          <li>
            <div className="relative -top-px">
              <a href="tel:+13054693227" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 duration-100 transition ease-in-out">
                <svg fill="none" height="22" viewBox="0 0 21 22" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m19.7083 13.8091c.9444.4106 1.4782 1.4371 1.1908 2.4635l-.8623 3.7364c-.1642.9854-1.0265 1.6424-2.0529 1.6424-9.93633 0-17.9839-8.0476-17.9839-17.98389 0-1.02648.656945-1.88872 1.64236-2.09401l3.73637-.862243c1.02648-.246354 2.05296.287413 2.46355 1.231773l1.76553 4.1059c.36954.86224.08212 1.88872-.61588 2.5046l-1.39601 1.1086c1.06754 1.80657 2.58668 3.32577 4.43438 4.39327l1.1086-1.3549c.6159-.7391 1.6424-1.0265 2.5457-.6159zm-.698 2.0119c.0411-.0821 0-.1643-.0821-.2464l-4.0238-1.7245c-.0821-.041-.1642 0-.2053.0411l-1.6423 2.0119c-.2874.3695-.8212.4517-1.2318.2464-2.75095-1.355-5.0092-3.6132-6.36415-6.3642-.20529-.41059-.08212-.90329.24636-1.19071l2.01189-1.64236c.08212-.04106.08212-.12318.04106-.20529l-1.72448-4.02379c-.04106-.04106-.08212-.12318-.16424-.12318l-.04106.04106-3.73637.86224c-.08212 0-.16424.08212-.16424.16424 0 8.82769 7.2264 16.01299 16.05413 16.01299.0821 0 .1642-.0821.1642-.1231z" fill="#101010"/></svg>
              </a>
            </div>
          </li>
        </ul>
        {/* Desktop nav */}
        <nav className={`${isOpen === true ? 'flex flex-[100%] flex-col col-span-2 gap-6 my-8 w-full' : 'hidden md:flex'} flex-1 md:gap-6 items-center justify-end md:justify-self-end`}>
          <ul className="flex flex-col items-center md:flex-row md:items-baseline gap-6">
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
              <a href="/the-studio" className="hover:opacity-80 duration-100 transition ease-in-out">
                <UpperCaseText color="text-black">
                  {activeLanguage === 'en' ? 'Studio' : 'Estudio'}
                </UpperCaseText>
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:opacity-80 duration-100 transition ease-in-out">
                <UpperCaseText color="text-black">
                  FAQs
                </UpperCaseText>
              </a>
            </li>
            <li>
              <a href="/contact" className="hidden md:block hover:opacity-80 duration-100 transition ease-in-out bg-black py-2 px-3 rounded-full">
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
          <div className="hidden md:block">
            <a href="https://www.instagram.com/sharpstudiovisuals/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 duration-100 transition ease-in-out">
              <svg fill="none" height="23" viewBox="0 0 23 23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="m11.9375 5.50977c3.0762 0 5.6152 2.53906 5.6152 5.61523 0 3.125-2.539 5.6152-5.6152 5.6152-3.125 0-5.61523-2.4902-5.61523-5.6152 0-3.07617 2.49023-5.61523 5.61523-5.61523zm0 9.27733c2.002 0 3.6133-1.6113 3.6133-3.6621 0-2.00195-1.6113-3.61328-3.6133-3.61328-2.05078 0-3.66211 1.61133-3.66211 3.61328 0 2.0508 1.66016 3.6621 3.66211 3.6621zm7.1289-9.47265c0-.73242-.5859-1.31836-1.3184-1.31836-.7324 0-1.3183.58594-1.3183 1.31836 0 .73243.5859 1.31836 1.3183 1.31836.7325 0 1.3184-.58593 1.3184-1.31836zm3.7109 1.31836c.0977 1.80664.0977 7.22659 0 9.03319-.0976 1.7578-.4882 3.2715-1.7578 4.5899-1.2695 1.2695-2.832 1.6601-4.5898 1.7578-1.8067.0976-7.22658.0976-9.03322 0-1.75781-.0977-3.27148-.4883-4.58984-1.7578-1.26953-1.3184-1.66016-2.8321-1.75781-4.5899-.097658-1.8066-.097658-7.22655 0-9.03319.09765-1.75781.48828-3.32031 1.75781-4.58984 1.31836-1.269532 2.83203-1.660158 4.58984-1.757814 1.80664-.097656 7.22652-.097656 9.03322 0 1.7578.097656 3.3203.488282 4.5898 1.757814 1.2696 1.26953 1.6602 2.83203 1.7578 4.58984zm-2.3437 10.93749c.5859-1.416.4394-4.834.4394-6.4453 0-1.5625.1465-4.98047-.4394-6.44531-.3906-.92774-1.1231-1.70899-2.0508-2.05078-1.4648-.58594-4.8828-.43946-6.4453-.43946-1.6113 0-5.0293-.14648-6.44531.43946-.97657.39062-1.70899 1.12304-2.09961 2.05078-.58594 1.46484-.43946 4.88281-.43946 6.44531 0 1.6113-.14648 5.0293.43946 6.4453.39062.9766 1.12304 1.709 2.09961 2.0996 1.41601.586 4.83401.4395 6.44531.4395 1.5625 0 4.9805.1465 6.4453-.4395.9277-.3906 1.709-1.123 2.0508-2.0996z" fill="#101010"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}