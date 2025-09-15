/**
 * @fileoverview Experience overview section with timeline of professional career
 * Features animated timeline with company information and key achievements
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'
import { cn, formatDate } from '@/lib/utils'
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

const timelineVariants = {
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

export function ExperienceOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding">
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
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional career, showcasing growth, achievements, and expertise development.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-0.5" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experienceData.map((experience: Experience, index: number) => (
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
                    <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
                      {/* Current Badge */}
                      {experience.current && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/20 dark:text-green-300">
                            Current
                          </span>
                        </div>
                      )}

                      {/* Company Info */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-primary" />
                          <h3 className="text-lg font-semibold">{experience.company}</h3>
                        </div>
                        <h4 className="text-base font-medium text-muted-foreground">
                          {experience.position}
                        </h4>
                      </div>

                      {/* Duration and Location */}
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {formatDate(experience.startDate)} - {' '}
                            {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm text-muted-foreground">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      {experience.achievements.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-medium mb-2 flex items-center space-x-1">
                            <Award className="h-3 w-3" />
                            <span>Key Achievements</span>
                          </h5>
                          <ul className="space-y-1">
                            {experience.achievements.slice(0, 2).map((achievement, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start space-x-2">
                                <span className="mt-1 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {experience.technologies.length > 0 && (
                        <div className="mt-4">
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
                      )}

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="rounded-lg border bg-card p-6 text-center"
          >
            <h3 className="text-lg font-semibold mb-2">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get In Touch
              </a>
              <a
                href="/resume/Vladislav-Khmelnytsky.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
