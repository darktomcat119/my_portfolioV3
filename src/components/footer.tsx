/**
 * @fileoverview Footer component with social links and copyright information
 * Provides site footer with contact information and social media links
 */

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/vladislav-khmelnytsky',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vladislav-khmelnytsky',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/vladislav_dev',
    icon: Twitter
  }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Education', href: '/education' },
  { name: 'Contact', href: '/contact' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-4">
              <div>
                <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
                  <span className="gradient-text">Vladislav Khmelnytsky</span>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  Senior Full-Stack Developer specializing in MERN Stack, Laravel, AI Automation, and DevOps.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:vladislav.khmelnytsky@email.com"
                    className="hover:text-primary transition-colors"
                  >
                    vladislav.khmelnytsky@email.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a 
                    href="tel:+15551234567"
                    className="hover:text-primary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Full-Stack Development</li>
                <li>AI Integration</li>
                <li>DevOps & Cloud</li>
                <li>Blockchain Development</li>
                <li>Technical Consulting</li>
                <li>Code Review & Mentoring</li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'btn btn-ghost btn-sm',
                      'hover:bg-primary hover:text-primary-foreground'
                    )}
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Available for freelance projects</p>
                <p className="mt-1">Let's build something amazing together!</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Vladislav Khmelnytsky. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Built with Next.js & TypeScript</span>
                <span>•</span>
                <span>Powered by AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
