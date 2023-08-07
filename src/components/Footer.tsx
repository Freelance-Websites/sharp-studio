import { SmallText } from "@/components/Typography";

export default function Footer({
  classes,
}: {
  classes?: string,
}) {
  return (
    <footer
      className={`w-full px-4 flex justify-between ${classes? classes : ''}`}
    >
      <SmallText color="text-black">&copy; {new Date().getFullYear()} Sharp Studio Visuals.</SmallText>
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
    </footer>
  )
}