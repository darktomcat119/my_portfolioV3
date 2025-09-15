/**
 * @fileoverview Global error boundary for handling all errors
 * Catches errors that occur in the root layout
 */

'use client'

import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="text-center space-y-8 max-w-md mx-auto px-4">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-primary">Error</h1>
              <h2 className="text-2xl font-semibold">Something went wrong</h2>
              <p className="text-muted-foreground">
                We encountered an unexpected error. Please try again or go back to the home page.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/" className="flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Go Home</span>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={reset}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Try Again</span>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
