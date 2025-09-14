/**
 * @fileoverview Robots.txt generation for SEO optimization
 * Controls search engine crawling behavior
 */

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://vladislav-portfolio.com/sitemap.xml',
  }
}
