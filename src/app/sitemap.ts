/**
 * @fileoverview Sitemap generation for SEO optimization
 * Automatically generates sitemap for all pages
 */

import { MetadataRoute } from 'next'
import projectsData from '@/data/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vladislav-portfolio.com'
  
  // Generate project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(project.endDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectPages,
  ]
}
