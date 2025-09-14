/**
 * @fileoverview Projects page showcasing all portfolio projects
 * Features filtering, search, and detailed project information
 */

import { ProjectsPage } from '@/components/pages/projects-page'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web applications, AI projects, and development solutions. See the technologies and approaches I use to build innovative solutions.',
}

export default function Projects() {
  return <ProjectsPage />
}
