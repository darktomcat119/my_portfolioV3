/**
 * @fileoverview Web app manifest for PWA support
 * Defines app metadata and icons for mobile installation
 */

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vladislav Khmelnytsky - Portfolio',
    short_name: 'VK Portfolio',
    description: 'Senior Full-Stack Developer specializing in MERN Stack, Laravel, AI Automation, and DevOps',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
