/**
 * @fileoverview Hydration-safe useInView hook to prevent SSR/client mismatches
 * Fixes React errors #425 and #422 on Vercel deployment
 */

'use client'

import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function useHydrationSafeInView(options?: {
  once?: boolean
  margin?: string
  amount?: number | 'some' | 'all'
}) {
  const ref = useRef(null)
  const [isClient, setIsClient] = useState(false)
  const isInView = useInView(ref, { 
    once: options?.once ?? true, 
    margin: options?.margin ?? '-100px',
    amount: options?.amount ?? 'some'
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  return {
    ref,
    isInView: isClient ? isInView : false
  }
}
