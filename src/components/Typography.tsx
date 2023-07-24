export function UpperCaseText({ children, color }: {
  color: String,
  children: String,
}) {
  return (
    <span className={`uppercase text-sm tracking-wider font-neue-medium ${color}`}>{children}</span>
  )
}