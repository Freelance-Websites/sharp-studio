// Heading classes
export function MainHeading({ children, color }: {
  color: string,
  children: React.ReactNode,
}) {
  return (
    <span className={`text-2xl md:text-3xl lg:text-4xl font-neue-bold ${color}`}>{children}</span>
  )
}

// Text classes
export function BigText({ children, color }: {
  color: string,
  children: React.ReactNode,
}) {
  return (
    <span className={`text-2xl md:text-3xl lg:text-4xl lg:leading-normal ${color}`}>{children}</span>
  )
}

export function UpperCaseText({ children, color }: {
  color: string,
  children: React.ReactNode,
}) {
  return (
    <span className={`uppercase text-sm tracking-wider font-neue-medium ${color}`}>{children}</span>
  )
}

export function StandardText({ children, color }: {
  color: string,
  children: React.ReactNode,
}) {
  return (
    <span className={`${color}`}>{children}</span>
  )
}