/**
 * @fileoverview Individual project detail page
 * Shows detailed information about a specific project
 */

import { notFound } from 'next/navigation'
import { ProjectDetail } from '@/components/pages/project-detail'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return (projectsData as Project[]).map((project: Project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = (projectsData as Project[]).find((p: Project) => p.id === params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = (projectsData as Project[]).find((p: Project) => p.id === params.id)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
