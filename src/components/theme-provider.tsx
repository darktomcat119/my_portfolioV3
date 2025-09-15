/**
 * @fileoverview Theme provider component for dark/light mode support
 * Uses next-themes for theme management and persistence
 */

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: 'class' | 'data-theme' | 'data-mode'
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <div suppressHydrationWarning>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </div>
  )
}
