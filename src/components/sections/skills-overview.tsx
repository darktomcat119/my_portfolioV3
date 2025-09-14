/**
 * @fileoverview Skills overview section with interactive skill categories
 * Features animated skill bars and technology icons
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Cloud, Brain, Database, Wrench } from 'lucide-react'
import { cn, getSkillLevelColor, getSkillLevelBgColor } from '@/lib/utils'
import skillsData from '@/data/skills.json'
import type { Skill } from '@/types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const skillBarVariants = {
  hidden: { width: 0 },
  visible: (level: string) => ({
    width: level === 'expert' ? '95%' : level === 'advanced' ? '85%' : level === 'intermediate' ? '70%' : '50%',
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.5
    }
  })
}

const categoryIcons = {
  frontend: Code,
  backend: Server,
  devops: Cloud,
  ai: Brain,
  database: Database,
  tools: Wrench
}

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  devops: 'from-orange-500 to-red-500',
  ai: 'from-purple-500 to-pink-500',
  database: 'from-yellow-500 to-orange-500',
  tools: 'from-gray-500 to-slate-500'
}

export function SkillsOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Group skills by category
  const skillsByCategory = (skillsData as Skill[]).reduce((acc, skill: Skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Sort skills within each category by level
  Object.keys(skillsByCategory).forEach(category => {
    skillsByCategory[category].sort((a, b) => {
      const levelOrder = { expert: 4, advanced: 3, intermediate: 2, beginner: 1 }
      return levelOrder[b.level] - levelOrder[a.level]
    })
  })

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains and technologies.
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code
              const gradientColor = categoryColors[category as keyof typeof categoryColors] || 'from-gray-500 to-slate-500'
              
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r',
                      gradientColor
                    )}>
                      {Icon && <Icon className="h-6 w-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold capitalize">
                        {category} Development
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {skills.length} technologies mastered
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill: Skill) => (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-md"
                      >
                        <div className="space-y-3">
                          {/* Skill Name and Level */}
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{skill.name}</h4>
                            <span className={cn(
                              'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                              getSkillLevelBgColor(skill.level),
                              getSkillLevelColor(skill.level)
                            )}>
                              {skill.level}
                            </span>
                          </div>

                          {/* Experience */}
                          <div className="text-sm text-muted-foreground">
                            {skill.yearsOfExperience} years experience
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <motion.div
                                className={cn(
                                  'h-2 rounded-full bg-gradient-to-r',
                                  gradientColor
                                )}
                                variants={skillBarVariants}
                                custom={skill.level}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                              />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="rounded-lg border bg-card p-6 text-center"
          >
            <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground mb-4">
              I'm constantly exploring new technologies and improving my skills. 
              Currently focused on AI/ML integration, cloud architecture, and blockchain development.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Always Learning
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground">
                Industry Best Practices
              </span>
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground">
                Open Source Contributor
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
