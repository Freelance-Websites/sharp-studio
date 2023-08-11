// Heading classes
export function MainHeading({ children, color, classes }: {
  color: string,
  children: React.ReactNode,
  classes?: string,
}) {
  return (
    <span className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-neue-bold ${color} ${classes}`}>{children}</span>
  )
}

// Text classes
export function BigText({ children, color, underline, classes }: {
  color: string,
  children: React.ReactNode,
  underline?: boolean,
  classes?: string,
}) {
  return (
    <span className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-normal ${underline ? 'underline decoration-1 underline-offset-8 hover:no-underline' : ''} ${color} ${classes}`}>{children}</span>
  )
}

export function MediumText({ children, color, underline, classes }: {
  color: string,
  children: React.ReactNode,
  underline?: boolean,
  classes?: string,
}) {
  return (
    <span className={`text-lg md:text-xl lg:text-2xl 2xl:text-3xl 2xl:leading-normal ${underline ? 'underline decoration-1 underline-offset-8 hover:no-underline' : ''} ${color} ${classes}`}>{children}</span>
  )
}

export function StandardText({ children, color, classes }: {
  color: string,
  children: React.ReactNode,
  classes?: string,
}) {
  return (
    <span className={`text-md md:text-base ${color} ${classes}`}>{children}</span>
  )
}

export function SmallText({ children, color, classes }: {
  color: string,
  children: React.ReactNode,
  classes?: string,
}) {
  return (
    <span className={`text-sm tracking-wider font-neue-regular ${color} ${classes}`}>{children}</span>
  )
}

export function UpperCaseText({ children, color, classes }: {
  color: string,
  children: React.ReactNode,
  classes?: string,
}) {
  return (
    <span className={`uppercase text-sm tracking-wider font-neue-medium ${color} ${classes}`}>{children}</span>
  )
}