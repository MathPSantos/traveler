import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({
  children,
}: HeaderProps) {
  return (
    <header className="flex items-center w-full h-24 px-5 bg-white border-b border-solid border-b-slate-400">
      <div className="w-full max-w-[1120px] mx-auto">
        {children}
      </div>
    </header>
  )
}
