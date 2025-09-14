/**
 * @fileoverview Featured projects section showcasing top portfolio projects
 * Features animated project cards with hover effects and detailed information
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'
import { ProjectImageModal } from '@/components/ui/project-image-modal'
import { TechIcon } from '@/components/ui/tech-icons'

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
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
}

  const featuredProjects = (projectsData as Project[]).filter((project: Project) => project.featured)
  const allProjects = projectsData as Project[]

const getCategoryColor = (category: string) => {
  const colors = {
    web: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
    mobile: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
    ai: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
    devops: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
    blockchain: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
}

export function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const handleImageClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const toggleShowAll = () => {
    setShowAllProjects(!showAllProjects)
  }

  const projectsToShow = showAllProjects ? allProjects : featuredProjects

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
              {showAllProjects ? 'All Projects' : 'Featured Projects'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {showAllProjects 
                ? 'Complete portfolio of projects showcasing diverse technologies and solutions.'
                : 'A showcase of my most impactful projects, featuring modern technologies and innovative solutions.'
              }
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className={`grid gap-8 ${showAllProjects ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}
          >
            {projectsToShow.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-xl"
              >
                {/* Project Image */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Image Gallery Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Gallery</span>
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
                      getCategoryColor(project.category)
                    )}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
                    )}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.liveUrl && (
                      <Button asChild size="sm" variant="secondary">
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Live</span>
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="secondary">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1"
                        >
                          <Github className="h-3 w-3" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        <TechIcon name={tech} size={14} />
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-muted-foreground">
                      {project.startDate && (
                        <span>
                          {new Date(project.startDate).getFullYear()}
                          {project.endDate && ` - ${new Date(project.endDate).getFullYear()}`}
                        </span>
                      )}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group/link">
                      <Link href={`/projects/${project.id}`}>
                        <span>View Details</span>
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Toggle Projects Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button onClick={toggleShowAll} size="lg" className="group">
              {showAllProjects ? 'Show Featured Only' : 'View All Projects'}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Image Modal */}
      {selectedProject && (
        <ProjectImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          projectUrl={selectedProject.liveUrl || ''}
          projectTitle={selectedProject.title}
        />
      )}
    </section>
  )
}
