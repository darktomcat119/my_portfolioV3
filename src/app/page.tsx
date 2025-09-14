/**
 * @fileoverview Homepage component showcasing Vladislav's profile and key information
 * Features hero section, about, featured projects, and call-to-action
 */

import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { SkillsOverview } from '@/components/sections/skills-overview'
import { ExperienceOverview } from '@/components/sections/experience-overview'
import { CtaSection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <SkillsOverview />
      <ExperienceOverview />
      <CtaSection />
    </div>
  )
}