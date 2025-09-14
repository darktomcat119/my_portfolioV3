/**
 * @fileoverview Call-to-action section encouraging visitors to get in touch
 * Features animated elements and multiple contact options
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle, Calendar, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

const floatingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

const ctaOptions = [
  {
    title: 'Send Email',
    description: 'Get in touch directly via email',
    icon: Mail,
    href: 'mailto:vladislav.khmelnytsky@email.com',
    variant: 'default' as const
  },
  {
    title: 'Schedule Call',
    description: 'Book a consultation call',
    icon: Calendar,
    href: '/contact',
    variant: 'outline' as const
  },
  {
    title: 'Download Resume',
    description: 'View my detailed resume',
    icon: Download,
    href: '/resume.pdf',
    variant: 'secondary' as const
  }
]

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Build Something{' '}
              <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with passionate people. 
              Whether you have a specific project in mind or just want to chat about technology, 
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Let&apos;s Work Together
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/projects">
                  View My Work
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ctaOptions.map((option, index) => (
              <motion.div
                key={option.title}
                variants={floatingVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <option.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{option.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>

                  <Button asChild variant={option.variant} className="w-full group/btn">
                    <a 
                      href={option.href}
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>{option.title}</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="rounded-lg border bg-card p-8 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Work With Me?</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 h-20 w-20 rounded-full bg-primary/10 blur-xl"
              variants={floatingVariants}
              animate="float"
            />
            <motion.div
              className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-secondary/10 blur-xl"
              variants={floatingVariants}
              animate="float"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-accent/10 blur-xl"
              variants={floatingVariants}
              animate="float"
              transition={{ delay: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
