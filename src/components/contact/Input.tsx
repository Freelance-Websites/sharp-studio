import { SmallText } from "@/components/Typography";

export default function Input({
  type,
  id,
  label,
  placeholder,
  required,
  classes,
}: {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  classes?: string;
}) {
  return (
    <div className={classes}>
      <label className="block mb-2" htmlFor={id}>
        <SmallText color="text-black">
          {label}
          {required && required === true && '*'}
        </SmallText>
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="text-xl md:text-2xl xl:text-3xl xl:leading-normal placeholder:text-black/20 pb-3 border-b border-b-black/10 focus:outline-none text-black w-full md:h-16 rounded-none background-white"
      />
    </div>
  )
}