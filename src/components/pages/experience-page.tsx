/**
 * @fileoverview Experience page component with detailed career timeline
 * Features expandable job details, achievements, and technology stacks
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, formatDate, calculateYearsOfExperience } from '@/lib/utils'
import experienceData from '@/data/experience.json'
import type { Experience } from '@/types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const expandVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

export function ExperiencePage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const totalExperience = calculateYearsOfExperience(experienceData[experienceData.length - 1].startDate)

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
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {totalExperience} years of building scalable applications, leading teams, and delivering innovative solutions across various industries.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{totalExperience}+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{experienceData.length}</div>
                <div className="text-sm text-muted-foreground">Positions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            ref={ref}
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Timeline */}
            <motion.div variants={itemVariants} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-0.5" />

              {/* Experience Items */}
              <div className="space-y-8">
                {experienceData.map((experience: Experience, index: number) => {
                  const isExpanded = expandedItems.has(experience.id)
                  const yearsAtCompany = calculateYearsOfExperience(experience.startDate, experience.endDate)
                  
                  return (
                    <motion.div
                      key={experience.id}
                      variants={timelineVariants}
                      className={`relative flex items-start ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 top-6 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-lg md:left-1/2 md:-translate-x-2" />

                      {/* Content Card */}
                      <div className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                      }`}>
                        <motion.div 
                          className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          {/* Header */}
                          <div 
                            className="p-6 cursor-pointer"
                            onClick={() => toggleExpanded(experience.id)}
                          >
                            <div className="space-y-4">
                              {/* Company Info */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Building2 className="h-4 w-4 text-primary" />
                                    <h3 className="text-lg font-semibold">{experience.company}</h3>
                                  </div>
                                  <Button variant="ghost" size="sm">
                                    {isExpanded ? (
                                      <ChevronUp className="h-4 w-4" />
                                    ) : (
                                      <ChevronDown className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>
                                <h4 className="text-base font-medium text-muted-foreground">
                                  {experience.position}
                                </h4>
                              </div>

                              {/* Duration and Location */}
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  <span>
                                    {formatDate(experience.startDate)} - {' '}
                                    {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                                    {yearsAtCompany > 0 && ` (${yearsAtCompany} years)`}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <MapPin className="h-3 w-3" />
                                  <span>{experience.location}</span>
                                </div>
                              </div>

                              {/* Current Badge */}
                              {experience.current && (
                                <div className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/20 dark:text-green-300">
                                  Current Position
                                </div>
                              )}

                              {/* Description */}
                              <p className="text-sm text-muted-foreground">
                                {experience.description}
                              </p>

                              {/* Technologies Preview */}
                              <div className="flex flex-wrap gap-1">
                                {experience.technologies.slice(0, 5).map((tech) => (
                                  <span
                                    key={tech}
                                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {experience.technologies.length > 5 && (
                                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                    +{experience.technologies.length - 5} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                variants={expandVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="border-t bg-muted/30"
                              >
                                <div className="p-6 space-y-6">
                                  {/* Responsibilities */}
                                  <div>
                                    <h5 className="font-semibold mb-3">Key Responsibilities</h5>
                                    <ul className="space-y-2">
                                      {experience.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                          <span>{responsibility}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Achievements */}
                                  {experience.achievements.length > 0 && (
                                    <div>
                                      <h5 className="font-semibold mb-3 flex items-center space-x-2">
                                        <Award className="h-4 w-4 text-primary" />
                                        <span>Key Achievements</span>
                                      </h5>
                                      <ul className="space-y-2">
                                        {experience.achievements.map((achievement, idx) => (
                                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            <span>{achievement}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {/* Full Technology Stack */}
                                  <div>
                                    <h5 className="font-semibold mb-3">Technology Stack</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {experience.technologies.map((tech) => (
                                        <span
                                          key={tech}
                                          className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="rounded-lg border bg-card p-8 text-center"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Interested in Working Together?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I&apos;m always open to discussing new opportunities and exciting projects. 
                  Let&apos;s connect and explore how we can work together to build something amazing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="/contact">
                      Get In Touch
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/resume/Vladislav-Khmelnytsky.pdf" target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
