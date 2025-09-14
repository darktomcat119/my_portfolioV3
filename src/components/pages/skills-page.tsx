/**
 * @fileoverview Skills page component with interactive technology showcase
 * Features skill categories, proficiency levels, and detailed technology information
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Cloud, Brain, Database, Wrench, Star, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, getSkillLevelColor, getSkillLevelBgColor } from '@/lib/utils'
import skillsData from '@/data/skills.json'
import type { Skill } from '@/types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
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

const categoryDescriptions = {
  frontend: 'User interface development, responsive design, and client-side technologies',
  backend: 'Server-side development, APIs, and backend architecture',
  devops: 'Infrastructure, deployment, monitoring, and automation',
  ai: 'Artificial intelligence, machine learning, and data science',
  database: 'Data storage, management, and optimization',
  tools: 'Development tools, version control, and productivity software'
}

export function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc, skill: Skill) => {
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

  const categories = Object.keys(skillsByCategory)
  const totalSkills = skillsData.length
  const expertSkills = skillsData.filter(skill => skill.level === 'expert').length
  const totalExperience = skillsData.reduce((sum, skill) => sum + skill.yearsOfExperience, 0)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technical <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different domains. 
              I continuously learn and adapt to new technologies to stay current with industry trends.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{totalSkills}</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{expertSkills}</div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{totalExperience}+</div>
                <div className="text-sm text-muted-foreground">Years Total</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-12 border-b">
        <div className="container">
          <motion.div
            ref={ref}
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Skill Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any category to explore the technologies and tools I use in that domain.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code
                const gradientColor = categoryColors[category as keyof typeof categoryColors] || 'from-gray-500 to-slate-500'
                const skills = skillsByCategory[category]
                const isSelected = selectedCategory === category
                
                return (
                  <motion.div
                    key={category}
                    variants={cardVariants}
                    whileHover="hover"
                    className={cn(
                      'group relative overflow-hidden rounded-lg border bg-card p-6 transition-all cursor-pointer',
                      isSelected ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-lg'
                    )}
                    onClick={() => setSelectedCategory(isSelected ? null : category)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r',
                          gradientColor
                        )}>
                          {Icon && <Icon className="h-6 w-6 text-white" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold capitalize">
                            {category} Development
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {skills.length} technologies
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                      </p>

                      {/* Skill Level Distribution */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Expert</span>
                          <span>{skills.filter(s => s.level === 'expert').length}</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Advanced</span>
                          <span>{skills.filter(s => s.level === 'advanced').length}</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Intermediate</span>
                          <span>{skills.filter(s => s.level === 'intermediate').length}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Skills */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {selectedCategory ? (
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    {(() => {
                      const Icon = categoryIcons[selectedCategory as keyof typeof categoryIcons] || Code
                      const gradientColor = categoryColors[selectedCategory as keyof typeof categoryColors] || 'from-gray-500 to-slate-500'
                      return (
                        <div className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r',
                          gradientColor
                        )}>
                          {Icon && <Icon className="h-6 w-6 text-white" />}
                        </div>
                      )
                    })()}
                    <h2 className="text-2xl font-bold capitalize">
                      {selectedCategory} Technologies
                    </h2>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {skillsByCategory[selectedCategory].map((skill: Skill) => (
                    <motion.div
                      key={skill.id}
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                    >
                      <div className="space-y-4">
                        {/* Skill Header */}
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <div className="flex items-center space-x-1">
                            {[...Array(4)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  'h-3 w-3',
                                  i < (skill.level === 'expert' ? 4 : skill.level === 'advanced' ? 3 : skill.level === 'intermediate' ? 2 : 1)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-muted-foreground'
                                )}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Level Badge */}
                        <div className="flex items-center justify-between">
                          <span className={cn(
                            'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                            getSkillLevelBgColor(skill.level),
                            getSkillLevelColor(skill.level)
                          )}>
                            {skill.level}
                          </span>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{skill.yearsOfExperience} years</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="h-2 w-full rounded-full bg-muted">
                            <motion.div
                              className={cn(
                                'h-2 rounded-full bg-gradient-to-r',
                                categoryColors[selectedCategory as keyof typeof categoryColors]
                              )}
                              initial={{ width: 0 }}
                              animate={{ 
                                width: skill.level === 'expert' ? '95%' : 
                                       skill.level === 'advanced' ? '85%' : 
                                       skill.level === 'intermediate' ? '70%' : '50%'
                              }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>

                {/* Back Button */}
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCategory(null)}
                  >
                    Back to Categories
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div variants={itemVariants} className="text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Select a Category</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Choose a skill category above to explore the specific technologies and tools I use in that domain.
                  </p>
                </div>

                {/* All Skills Overview */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {skillsData.slice(0, 9).map((skill: Skill) => (
                    <motion.div
                      key={skill.id}
                      variants={cardVariants}
                      className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-md"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className={cn(
                            'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                            getSkillLevelBgColor(skill.level),
                            getSkillLevelColor(skill.level)
                          )}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{skill.yearsOfExperience} years</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  And {totalSkills - 9} more technologies...
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
