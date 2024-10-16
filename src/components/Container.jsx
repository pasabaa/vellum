'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Container = ({children}) => {

  const pathname = usePathname();

  const isResultPage = pathname.startsWith('/result');

  return (
    <section className={`flex flex-col justify-center p-4 max-w-screen-sm mx-auto w-full ${isResultPage ? 'h-auto' : 'h-container'}`}>
      {children}
    </section>
  )
}
