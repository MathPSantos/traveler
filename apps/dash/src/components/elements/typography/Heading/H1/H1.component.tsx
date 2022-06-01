import { BaseHeadingProps } from '../Heading.types'

export function H1({
  children,
  className,
}: BaseHeadingProps) {
  return (
    <h1
      className={`font-display text-4xl text-text-title font-bold ${className}`}
    >
      {children}
    </h1>
  )
}
