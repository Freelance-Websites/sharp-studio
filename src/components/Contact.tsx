import { UpperCaseText, MediumText } from "./Typography";

import Input from '@/components/contact/Input';
import Textarea from '@/components/contact/Textarea';
import Cta from '@/components/contact/Cta';

export default function Contact({
  title,
  content,
}: {
  title: string,
  content: string
}) {
  return (
    <div className="container mx-auto px-4 grid gap-2">
      <h4><UpperCaseText color="text-black">{title}</UpperCaseText></h4>
      <p><MediumText color="text-black">{content}</MediumText></p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 max-w-4xl">
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="Your name goes here"
          required={true}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Your email goes here"
          required={true}
        />
        <Textarea
          id="message"
          label="Message"
          placeholder="Your message goes here"
          required={true}
        />
        <div className="text-left">
          <Cta
            label="Submit"
            decoration={true}
          />
        </div>
      </form>
    </div>
  )
}