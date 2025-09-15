/**
 * @fileoverview Contact page component with interactive form and contact information
 * Features contact form, social links, and multiple contact methods
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Send, MessageCircle, Calendar, Download, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn, isValidEmail, formatPhoneNumber } from '@/lib/utils'
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

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me an email anytime',
    value: personalData.contact.email,
    href: `mailto:${personalData.contact.email}`,
    color: 'text-blue-500'
  }
]

const socialLinks = [
  {
    icon: Github,
    title: 'GitHub',
    description: 'View my code and projects',
    href: personalData.contact.github,
    color: 'text-gray-900 dark:text-gray-100'
  },
  {
    icon: MessageSquare,
    title: 'Discord',
    description: 'Chat with me on Discord',
    value: personalData.contact.discord,
    href: `https://discord.com/users/${personalData.contact.discord}`,
    color: 'text-indigo-500'
  }
]

const quickActions = [
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a consultation',
    href: '#',
    variant: 'default' as const
  },
  {
    icon: Download,
    title: 'View Resume',
    description: 'View my latest resume',
    href: personalData.resumeUrl,
    variant: 'outline' as const
  },
  {
    icon: MessageCircle,
    title: 'Send Message',
    description: 'Quick message',
    href: '#',
    variant: 'secondary' as const
  }
]

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message && isValidEmail(formData.email)

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
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with passionate people. 
              Whether you have a specific project in mind or just want to chat about technology, I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-b">
        <div className="container">
          <motion.div
            ref={ref}
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred way to reach out. I typically respond within 24 hours.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {contactMethods.map((method) => (
                <motion.div
                  key={method.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <method.icon className={`h-5 w-5 ${method.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                    
                    <a
                      href={method.href}
                      className="block text-sm font-medium hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Social Links */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                <p className="text-muted-foreground">
                  Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Social Links and Quick Actions */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
                <p className="text-muted-foreground mb-6">
                  Connect with me on social media for updates on my work and thoughts on technology.
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={cardVariants}
                      whileHover="hover"
                      className="group flex items-center space-x-4 rounded-lg border bg-card p-4 transition-all hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{social.title}</h3>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                <p className="text-muted-foreground mb-6">
                  Need something specific? Here are some quick ways to get what you need.
                </p>
                
                <div className="space-y-3">
                  {quickActions.map((action) => (
                    <Button
                      key={action.title}
                      asChild
                      variant={action.variant}
                      className="w-full justify-start group"
                    >
                      <a href={action.href}>
                        <action.icon className="mr-3 h-4 w-4" />
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs text-muted-foreground">{action.description}</div>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div 
                variants={cardVariants}
                className="rounded-lg border bg-card p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m currently accepting new freelance projects and open to full-time opportunities. 
                    Let&apos;s discuss how we can work together!
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>• Response time: Within 24 hours</p>
                    <p>• Project availability: 20-40 hours/week</p>
                    <p>• Preferred communication: Email or video call</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
