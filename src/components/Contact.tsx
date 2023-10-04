import { UpperCaseText, MediumText } from "./Typography";

import Footer from '@/components/Footer';
import Input from '@/components/contact/Input';
import Textarea from '@/components/contact/Textarea';
import Cta from '@/components/contact/Cta';
import ReactMarkdown from "react-markdown";

export default function Contact({
  title,
  content,
  showFooter,
  language
}: {
  title: string,
  content: string,
  language?: string,
  showFooter?: boolean,
}) {
  return (
    <div className="container mx-auto px-4 grid gap-2">
      <h4><UpperCaseText color="text-black">{title}</UpperCaseText></h4>
      <div>
        <MediumText color="text-black">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </MediumText>
      </div>
      <form
        data-netlify="true"
        name="contact"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 max-w-4xl"
        method="POST"
        action="/thanks"
        netlify-honeypot="bot-field"
      >
        {/* Honeypot */}
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" className="hidden" />
        <Input
          type="text"
          id="name"
          label={`${language === 'en' ? 'Name' : 'Nombre'}`}
          placeholder={`${language === 'en' ? 'Your name goes here' : 'Tu nombre va aquí'}`}
          required={true}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder={`${language === 'en' ? 'Your email goes here' : 'Tu email va aquí'}`}
          required={true}
        />
        <Input
          type="text"
          id="company"
          label="Company name"
          placeholder={`${language === 'en' ? 'Your company name' : 'El nombre de tu empresa'}`}
          required={true}
          classes="md:col-span-2"
        />
        <Textarea
          id="message"
          label={`${language === 'en' ? 'Message' : 'Mensaje'}`}
          placeholder={`${language === 'en' ? 'Your message goes here' : 'Tu mensaje va aquí'}`}
          required={true}
          classes="col-span-full"
        />
        <div className="text-left">
          <Cta
            label={`${language === 'en' ? 'Submit' : 'Enviar'}`}
            decoration={true}
          />
        </div>
      </form>
      {showFooter !== undefined && showFooter === false ? null
        :
        <Footer
          classes="relative md:absolute md:bottom-6 md:left-0 pl-0 md:px-4 pt-4"
        />
      }
    </div>
  )
}