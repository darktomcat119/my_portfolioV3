/**
 * @fileoverview Utility functions for the portfolio application
 * Contains helper functions for styling, formatting, and common operations
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and tailwind-merge for optimal class handling
 * @param inputs - Class values to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string to a readable format
 * @param dateString - ISO date string
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
): string {
  return new Date(dateString).toLocaleDateString('en-US', options)
}

/**
 * Calculates years of experience between two dates
 * @param startDate - Start date string
 * @param endDate - End date string (optional, defaults to current date)
 * @returns Number of years
 */
export function calculateYearsOfExperience(
  startDate: string,
  endDate?: string
): number {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return Math.round((diffDays / 365) * 10) / 10
}

/**
 * Truncates text to specified length with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Generates a slug from a string
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Debounces a function call
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Validates email format
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Formats phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Gets skill level color based on level
 * @param level - Skill level
 * @returns Tailwind color class
 */
export function getSkillLevelColor(level: string): string {
  const colorMap: Record<string, string> = {
    beginner: 'text-red-500',
    intermediate: 'text-yellow-500',
    advanced: 'text-blue-500',
    expert: 'text-green-500'
  }
  return colorMap[level] || 'text-gray-500'
}

/**
 * Gets skill level background color based on level
 * @param level - Skill level
 * @returns Tailwind background color class
 */
export function getSkillLevelBgColor(level: string): string {
  const colorMap: Record<string, string> = {
    beginner: 'bg-red-100 dark:bg-red-900/20',
    intermediate: 'bg-yellow-100 dark:bg-yellow-900/20',
    advanced: 'bg-blue-100 dark:bg-blue-900/20',
    expert: 'bg-green-100 dark:bg-green-900/20'
  }
  return colorMap[level] || 'bg-gray-100 dark:bg-gray-900/20'
}

/**
 * Gets category color based on project category
 * @param category - Project category
 * @returns Tailwind color classes
 */
export function getCategoryColor(category: string): string {
  const colors = {
    web: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
    mobile: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
    ai: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
    devops: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
    blockchain: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
}
