import { Header } from '@/components/header'
import React from 'react'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col items-center max-w-screen-lg mx-auto relative justify-center">
        {children}
      </div>
    </div>
  )
}
