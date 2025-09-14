/**
 * @fileoverview Project detail component with full project information
 * Features project images, detailed description, technologies, and links
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, formatDate, getCategoryColor } from '@/lib/utils'
import type { Project } from '@/types'
import { TechIcon } from '@/components/ui/tech-icons'

interface ProjectDetailProps {
  project: Project
}

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

export function ProjectDetail({ project }: ProjectDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/projects" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Projects</span>
              </Link>
            </Button>

            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className={cn(
                      'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
                      getCategoryColor(project.category)
                    )}>
                      {project.category.toUpperCase()}
                    </span>
                    <span className={cn(
                      'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
                    )}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.liveUrl && (
                    <Button asChild>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Live</span>
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>View Code</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatDate(project.startDate)}
                    {project.endDate && ` - ${formatDate(project.endDate)}`}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {project.endDate 
                      ? `${Math.ceil((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months`
                      : 'Ongoing'
                    }
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8">
        <div className="container">
          <motion.div
            ref={ref}
            className="relative overflow-hidden rounded-lg border shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-12 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    'Modern, responsive design',
                    'High performance optimization',
                    'Cross-browser compatibility',
                    'Accessibility compliance',
                    'SEO optimization',
                    'Mobile-first approach'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Technologies */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Tag className="h-5 w-5" />
                  <span>Technologies Used</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      <TechIcon name={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Project Details</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium capitalize">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium capitalize">{project.status.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">
                      {project.endDate 
                        ? `${Math.ceil((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months`
                        : 'Ongoing'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Featured</span>
                    <span className="font-medium">{project.featured ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Interested in This Project?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let&apos;s discuss how we can work together on similar projects.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
