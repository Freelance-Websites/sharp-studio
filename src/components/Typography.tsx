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
export function BigText({ children, color, underline }: {
  color: string,
  children: React.ReactNode,
  underline?: boolean,
}) {
  return (
    <span className={`text-2xl md:text-3xl lg:text-4xl lg:leading-normal ${underline ? 'underline decoration-1 underline-offset-8 hover:no-underline' : ''} ${color}`}>{children}</span>
  )
}

export function MediumText({ children, color, underline }: {
  color: string,
  children: React.ReactNode,
  underline?: boolean,
}) {
  return (
    <span className={`text-xl md:text-2xl xl:text-3xl xl:leading-normal ${underline ? 'underline decoration-1 underline-offset-8 hover:no-underline' : ''} ${color}`}>{children}</span>
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

export function SmallText({ children, color }: {
  color: string,
  children: React.ReactNode,
}) {
  return (
    <span className={`text-sm tracking-wider font-neue-medium ${color}`}>{children}</span>
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