import { H1 } from './H1/H1.component'
import { BaseHeadingProps } from './Heading.types'

interface HeadingProps extends BaseHeadingProps {
  level?: 1
}

export function Heading({
  children,
  level = 1,
  ...props
}: HeadingProps) {
  const HeadingComp = {
    1: H1,
  }[level]

  return (
    <HeadingComp {...props}>
      {children}
    </HeadingComp>
  )
}
