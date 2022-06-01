import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex items-center w-full px-5">
      <div className="w-full max-w-[1120px] mx-auto">
        {children}
      </div>
    </main>
  )
}
