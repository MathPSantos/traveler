import { ReactNode } from 'react'
import { Sidebar } from '../Sidebar/Sidebar.component'

interface LayoutProps {
  children: ReactNode
}

export function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex overflow-y-hidden">
      <Sidebar />

      <div className="flex-1 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
