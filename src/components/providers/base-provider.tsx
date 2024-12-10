import type { _LayoutProps } from '@/types/global'
import React from 'react'
import ThemesProvider from './themes-provider'

export default function BaseProvider({ children }: _LayoutProps) {
  return (
    <ThemesProvider>
      {children}
    </ThemesProvider>
  )
}
