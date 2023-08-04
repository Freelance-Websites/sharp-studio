import { SmallText } from "@/components/Typography";

export default function Textarea({
  id,
  label,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <div className="col-span-full">
      <label className="block mb-2" htmlFor={id}><SmallText color="text-black">{label}</SmallText></label>
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        className="text-xl md:text-2xl xl:text-3xl xl:leading-normal placeholder:text-black/20 pb-3 border-b border-b-black/10 focus:outline-none text-black w-full resize-none md:h-16"
      />
    </div>
  )
}