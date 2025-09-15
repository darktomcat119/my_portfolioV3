/**
 * @fileoverview About section component with personal information and key highlights
 * Features animated statistics, personal story, and key achievements
 */

'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useHydrationSafeInView } from '@/hooks/use-hydration-safe-inview'
import { Code, Users, Award, Clock } from 'lucide-react'
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

const stats = [
  {
    icon: Code,
    value: '8+',
    label: 'Years Experience',
    description: 'Building scalable applications'
  },
  {
    icon: Users,
    value: '180+',
    label: 'Projects Completed',
    description: 'Across various industries'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Technologies Mastered',
    description: 'Modern web technologies'
  },
  {
    icon: Clock,
    value: '99.9%',
    label: 'Uptime Achieved',
    description: 'Production applications'
  }
]

export function AboutSection() {
  const { ref, isInView } = useHydrationSafeInView({ once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground">
                {personalData.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    Develop full-stack web applications using modern technologies like React, Node.js, and TypeScript
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    Integrate AI and machine learning solutions to enhance user experiences and automate processes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    Design and implement DevOps practices for scalable, reliable, and secure applications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    Mentor junior developers and lead technical decision-making processes
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code that solves real-world problems. 
                My approach combines technical excellence with user-centered design, ensuring 
                that every solution I build is both powerful and intuitive.
              </p>
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">By the Numbers</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm font-medium">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div 
              variants={itemVariants}
              className="rounded-lg border bg-card p-6"
            >
              <h4 className="font-semibold mb-3">Current Focus</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>AI/ML Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Cloud Architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  <span>Blockchain Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span>DevOps Automation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
