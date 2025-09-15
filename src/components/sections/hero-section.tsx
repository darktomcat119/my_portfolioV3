/**
 * @fileoverview Hero section component with animated introduction and call-to-action
 * Features animated text, profile image, and primary navigation buttons
 */

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Github, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import personalData from '@/data/personal.json'

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Hi, I&apos;m{' '}
                <span className="gradient-text">
                  {personalData.name.split(' ')[0]}
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl"
                variants={itemVariants}
              >
                {personalData.title}
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              variants={itemVariants}
            >
              {personalData.bio}
            </motion.p>

            <motion.div 
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex space-x-2">
                <Button asChild variant="ghost" size="sm">
                  <a 
                    href={personalData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a 
                    href={`https://discord.com/users/${personalData.contact.discord}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <MessageSquare className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* View Resume */}
            <motion.div variants={itemVariants}>
              <Button asChild variant="ghost" size="sm" className="group">
                <a 
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>View Resume</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background shadow-2xl">
                <Image
                  src={personalData.profileImage}
                  alt={personalData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-secondary"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30">
          <motion.div
            className="mx-auto mt-2 h-2 w-1 rounded-full bg-muted-foreground/60"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
