/**
 * @fileoverview Education page component with academic background and certifications
 * Features education timeline, certifications, and learning achievements
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, BookOpen, Trophy, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, formatDate } from '@/lib/utils'
import educationData from '@/data/education.json'
import type { Education, Certification } from '@/types'

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

// Separate education and certifications
const educationItems = educationData.filter(item => !item.issuer)
const certifications = educationData.filter(item => item.issuer) as Certification[]

const getCertificationColor = (issuer: string) => {
  const colors: Record<string, string> = {
    'Amazon Web Services': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
    'Cloud Native Computing Foundation': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
    'Stanford University': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
    'ConsenSys Academy': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
    'Linux Foundation': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
  }
  return colors[issuer] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
}

export function EducationPage() {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const totalCertifications = certifications.length
  const currentYear = new Date().getFullYear()
  const yearsOfLearning = currentYear - 2014 // Since first education entry

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
              <span className="gradient-text">Education</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My educational background and continuous learning journey. 
              I believe in staying current with technology and continuously improving my skills.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{educationItems.length}</div>
                <div className="text-sm text-muted-foreground">Degree</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{yearsOfLearning}+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3.7</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 border-b">
        <div className="container">
          <motion.div
            ref={ref}
            className="flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex space-x-1 rounded-lg bg-muted p-1">
              <Button
                variant={activeTab === 'education' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('education')}
                className="flex items-center space-x-2"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </Button>
              <Button
                variant={activeTab === 'certifications' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('certifications')}
                className="flex items-center space-x-2"
              >
                <Award className="h-4 w-4" />
                <span>Certifications</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {activeTab === 'education' ? (
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Education Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-0.5" />

                  {/* Education Items */}
                  <div className="space-y-8">
                    {educationItems.map((education: Education, index: number) => (
                      <motion.div
                        key={education.id}
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
                            variants={cardVariants}
                            whileHover="hover"
                            className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                          >
                            {/* Institution Info */}
                            <div className="space-y-4">
                              <div className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                  <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold">
                                    {education.website ? (
                                      <a 
                                        href={education.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                      >
                                        {education.institution}
                                      </a>
                                    ) : (
                                      education.institution
                                    )}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">{education.location}</p>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-base font-medium">{education.degree}</h4>
                                <p className="text-sm text-muted-foreground">{education.field}</p>
                              </div>

                              {/* Duration and GPA */}
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  <span>
                                    {formatDate(education.startDate)} - {' '}
                                    {education.endDate ? formatDate(education.endDate) : 'Present'}
                                  </span>
                                </div>
                                {education.gpa && (
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Trophy className="h-3 w-3" />
                                    <span>GPA: {education.gpa}</span>
                                  </div>
                                )}
                              </div>

                              {/* Description */}
                              <p className="text-sm text-muted-foreground">
                                {education.description}
                              </p>

                              {/* Current Badge */}
                              {education.current && (
                                <div className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/20 dark:text-green-300">
                                  Currently Enrolled
                                </div>
                              )}
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Certifications Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {certifications.map((certification: Certification) => (
                    <motion.div
                      key={certification.id}
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                    >
                      <div className="space-y-4">
                        {/* Certification Header */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Award className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">{certification.name}</h3>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={cn(
                              'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                              getCertificationColor(certification.issuer)
                            )}>
                              {certification.issuer}
                            </span>
                          </div>
                        </div>

                        {/* Issue Date */}
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Issued: {formatDate(certification.issueDate)}</span>
                        </div>

                        {/* Expiry Date */}
                        {certification.expiryDate && (
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>Expires: {formatDate(certification.expiryDate)}</span>
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">
                          {certification.description}
                        </p>

                        {/* Credential ID */}
                        {certification.credentialId && (
                          <div className="text-xs text-muted-foreground">
                            Credential ID: {certification.credentialId}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          {certification.credentialUrl && (
                            <Button asChild size="sm" variant="outline" className="flex-1">
                              <a 
                                href={certification.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                <span>Verify</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>

                {/* Learning Philosophy */}
                <motion.div 
                  variants={itemVariants}
                  className="rounded-lg border bg-card p-8 text-center"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">Continuous Learning</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      I believe in the power of continuous learning and staying current with technology trends. 
                      My commitment to professional development ensures I can deliver the best solutions using 
                      the latest tools and methodologies.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Always Learning
                      </span>
                      <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground">
                        Industry Best Practices
                      </span>
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground">
                        Professional Growth
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
