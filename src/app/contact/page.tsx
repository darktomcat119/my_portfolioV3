/**
 * @fileoverview Contact page with contact form and social links
 * Features interactive contact form and multiple contact methods
 */

import { ContactPage } from '@/components/pages/contact-page'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me for project discussions, collaboration opportunities, or just to say hello. I\'m always excited to work on new projects.',
}

export default function Contact() {
  return <ContactPage />
}
