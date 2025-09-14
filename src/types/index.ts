/**
 * @fileoverview Type definitions for the portfolio application
 * Contains all TypeScript interfaces and types used throughout the application
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  galleryImages?: string[];
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'devops' | 'blockchain';
  status: 'completed' | 'in-progress' | 'planned';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'ai' | 'database' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  gpa?: string;
  location: string;
  website?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  discord: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  profileImage: string;
  resumeUrl: string;
  contact: ContactInfo;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
