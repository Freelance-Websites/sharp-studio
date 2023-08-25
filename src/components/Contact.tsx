import { UpperCaseText, MediumText } from "./Typography";

import Footer from '@/components/Footer';
import Input from '@/components/contact/Input';
import Textarea from '@/components/contact/Textarea';
import Cta from '@/components/contact/Cta';

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
      <p><MediumText color="text-black">{content}</MediumText></p>
      <form data-netlify="true" name="contact" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 max-w-4xl">
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
        <Textarea
          id="message"
          label={`${language === 'en' ? 'Message' : 'Mensaje'}`}
          placeholder={`${language === 'en' ? 'Your message goes here' : 'Tu mensaje va aquí'}`}
          required={true}
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
          classes="absolute bottom-6 left-0"
        />
      }
    </div>
  )
}