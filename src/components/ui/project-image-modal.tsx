'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import projectsData from '@/data/projects.json'

interface ProjectImageModalProps {
  isOpen: boolean
  onClose: () => void
  projectUrl: string
  projectTitle: string
}

export function ProjectImageModal({ isOpen, onClose, projectUrl, projectTitle }: ProjectImageModalProps) {
  const [images, setImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const loadProjectImages = useCallback(async () => {
    setIsLoading(true)
    try {
      // Get the domain from the URL
      const domain = projectUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')
      
      // Find the project in the projects data
      const project = projectsData.find(p => {
        const projectDomain = p.liveUrl?.replace(/^https?:\/\//, '').replace(/^www\./, '') || ''
        return projectDomain === domain
      })
      
      if (project && project.galleryImages && project.galleryImages.length > 0) {
        console.log('Found project with gallery images:', project.title)
        console.log('Gallery images:', project.galleryImages)
        setImages(project.galleryImages)
      } else {
        console.log('No gallery images found for project:', domain)
        setImages([])
      }
    } catch (error) {
      console.error('Error loading project images:', error)
      setImages([])
    } finally {
      setIsLoading(false)
    }
  }, [projectUrl])

  useEffect(() => {
    if (isOpen && projectUrl) {
      loadProjectImages()
    }
  }, [isOpen, projectUrl, loadProjectImages])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-semibold">{projectTitle} - Project Gallery</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Browse through project screenshots and images. Use the navigation arrows or thumbnails to explore.
          </p>
        </DialogHeader>
        
        <div className="relative">
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : images.length === 0 ? (
            <div className="flex items-center justify-center h-96 text-muted-foreground">
              No additional images available for this project.
            </div>
          ) : (
            <>
              {/* Main image display */}
              <div className="relative h-96 bg-muted">
                <Image
                  src={images[currentIndex]}
                  alt={`${projectTitle} - Image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  onError={(e) => {
                    console.log('Image failed to load:', images[currentIndex])
                  }}
                />
                
                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail navigation */}
              {images.length > 1 && (
                <div className="p-4 border-t">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentIndex
                            ? 'border-primary'
                            : 'border-transparent hover:border-muted-foreground'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="64px"
                          onError={(e) => {
                            console.log('Thumbnail failed to load:', image)
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-4 bg-background/80 px-2 py-1 rounded text-sm">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
