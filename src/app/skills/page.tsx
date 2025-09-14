/**
 * @fileoverview Skills page with interactive technology showcase
 * Features skill categories, proficiency levels, and technology details
 */

import { SkillsPage } from '@/components/pages/skills-page'

export const metadata = {
  title: 'Skills',
  description: 'Explore my technical skills and expertise across frontend, backend, DevOps, AI, and database technologies. See my proficiency levels and years of experience.',
}

export default function Skills() {
  return <SkillsPage />
}
