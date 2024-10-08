import { SmallText } from "@/components/Typography";

export default function Footer({
  classes,
}: {
  classes?: string,
}) {
  return (
    <footer
      className={`w-full px-4 flex flex-col md:flex-row gap-1 justify-between ${classes? classes : ''}`}
    >
      <div className="flex gap-2 items-baseline"> 
        <SmallText color="text-black">&copy; {new Date().getFullYear()} Sharp Studio Visuals.</SmallText>
        <SmallText color="text-black">
          <a
            href="https://docs.google.com/document/d/1-BnrsesSDyTAh__SXnNUtUjQGUK9BxahaRZC29DzSz8/edit?tab=t.0#heading=h.jfu1c635m61o"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline underline-offset-2"
          >
            Legal notice
          </a>
        </SmallText>
      </div>
      <div className="flex gap-4 items-center">
        <SmallText color="text-black">
          Made by{" "}
          <a
            href="https://www.juanmartingarcia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline underline-offset-2"
          >
            JMG
          </a>
        </SmallText>
        <ul className="flex gap-4 items-center">
          <li>
            <a
              href="http://eepurl.com/ixZB4c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg fill="none" height="15" viewBox="0 0 18 15" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15.75.75c1.2305 0 2.25 1.01953 2.25 2.25v9c0 1.2656-1.0195 2.25-2.25 2.25h-13.5c-1.265625 0-2.25-.9844-2.25-2.25v-9c0-1.23047.984375-2.25 2.25-2.25zm-13.5 1.6875c-.31641 0-.5625.28125-.5625.5625v.80859l5.83594 4.85157c.80859.66797 2.10937.66797 2.91796 0l5.8711-4.85157v-.80859c0-.28125-.2812-.5625-.5625-.5625zm13.5 10.125c.2813 0 .5625-.2461.5625-.5625v-6.01172l-4.8164 4.00781c-.7031.56251-1.58204.87891-2.4961.87891-.94922 0-1.82812-.3164-2.53125-.87891l-4.78125-4.00781v6.01172c0 .3164.24609.5625.5625.5625z" fill="#101010"/></svg>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/sharpstudiovisuals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m8.99344 4.08691c2.24996 0 4.10716 1.85715 4.10716 4.10715 0 2.28574-1.8572 4.10714-4.10716 4.10714-2.28571 0-4.10714-1.8214-4.10714-4.10714 0-2.25 1.82143-4.10715 4.10714-4.10715zm0 6.78569c1.46426 0 2.64286-1.17854 2.64286-2.67854 0-1.46429-1.1786-2.64286-2.64286-2.64286-1.5 0-2.67857 1.17857-2.67857 2.64286 0 1.5 1.21429 2.67854 2.67857 2.67854zm5.21426-6.92854c0 .53571-.4285.96428-.9643.96428-.5357 0-.9642-.42857-.9642-.96428 0-.53572.4285-.96429.9642-.96429.5358 0 .9643.42857.9643.96429zm2.7143.96428c.0714 1.32143.0714 5.28576 0 6.60716-.0714 1.2857-.3571 2.3928-1.2857 3.3571-.9286.9286-2.0714 1.2143-3.3571 1.2857-1.3215.0715-5.28576.0715-6.60719 0-1.28571-.0714-2.39285-.3571-3.35714-1.2857-.92857-.9643-1.21428-2.0714-1.28571-3.3571-.071431-1.3214-.071431-5.28573 0-6.60716.07143-1.28571.35714-2.42857 1.28571-3.35714.96429-.928572 2.07143-1.214286 3.35714-1.285715 1.32143-.071428 5.28569-.071428 6.60719 0 1.2857.071429 2.4285.357143 3.3571 1.285715.9286.92857 1.2143 2.07143 1.2857 3.35714zm-1.7143 7.99996c.4286-1.0357.3215-3.53567.3215-4.71424 0-1.14286.1071-3.64286-.3215-4.71429-.2857-.67857-.8214-1.25-1.5-1.5-1.0714-.42857-3.5714-.32143-4.71426-.32143-1.17857 0-3.67857-.10714-4.71428.32143-.71429.28572-1.25.82143-1.53572 1.5-.42857 1.07143-.32143 3.57143-.32143 4.71429 0 1.17857-.10714 3.67854.32143 4.71424.28572.7143.82143 1.25 1.53572 1.5358 1.03571.4285 3.53571.3214 4.71428.3214 1.14286 0 3.64286.1071 4.71426-.3214.6786-.2858 1.25-.8215 1.5-1.5358z" fill="#101010"/></svg>
            </a>
          </li>
          <li className="relative -top-[2px]">
            <a
              href="https://linkedin.com/company/sharp-studio-visuals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m3.57942 16.6738h-3.328861v-10.70243h3.328861zm-1.68233-12.1342c-1.03803 0-1.89709-.89485-1.89709-1.96868 0-1.03803.85906-1.897092 1.89709-1.897092 1.07383 0 1.93289.859062 1.93289 1.897092 0 1.07383-.85906 1.96868-1.93289 1.96868zm14.10291 12.1342h-3.2931v-5.1901c0-1.2528-.0358-2.82777-1.7539-2.82777s-1.96866 1.32439-1.96866 2.72037v5.2975h-3.32886v-10.70243h3.18568v1.46756h.0358c.46532-.82327 1.53914-1.71812 3.14984-1.71812 3.3647 0 4.009 2.21924 4.009 5.08279v5.8702z" fill="#101010"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}