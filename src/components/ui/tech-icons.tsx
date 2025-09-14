/**
 * @fileoverview Tech stack icons using Font Awesome and custom SVGs
 * Features professional brand icons at 2.5x scale
 */

'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faReact, faNodeJs, faVuejs, faJs, faPhp, faPython, faDocker, 
  faAws, faGitAlt, faLaravel, faHtml5, faCss3Alt, faBootstrap,
  faGithub, faLinkedin, faTwitter, faDiscord
} from '@fortawesome/free-brands-svg-icons'

interface TechIconProps {
  name: string
  className?: string
  size?: number
}

const iconProps = {
  width: 60,
  height: 60,
  viewBox: '0 0 60 60',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}

// Font Awesome icon mappings
const fontAwesomeIcons: Record<string, any> = {
  'React': faReact,
  'Node.js': faNodeJs,
  'Vue.js': faVuejs,
  'JavaScript': faJs,
  'PHP': faPhp,
  'Python': faPython,
  'Docker': faDocker,
  'Amazon Web Services': faAws,
  'Git': faGitAlt,
  'Laravel': faLaravel,
  'HTML5': faHtml5,
  'CSS3': faCss3Alt,
  'Bootstrap': faBootstrap
}

// Custom SVG icons for technologies not in Font Awesome
const customIcons: Record<string, React.ReactElement> = {
  'Next.js': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="black"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M30 15L45 30L30 45L15 30L30 15Z" fill="black"/>
      <text x="30" y="40" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">N</text>
    </svg>
  ),
  'TypeScript': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#3178C6"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M30 15L45 30L30 45L15 30L30 15Z" fill="#3178C6"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">TS</text>
    </svg>
  ),
  'Tailwind CSS': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#06B6D4"/>
      <path d="M30 5C15.64 5 5 15.64 5 30s10.64 25 25 25 25-10.64 25-25S44.36 5 30 5z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#06B6D4"/>
      <path d="M25 25h10v10H25z" fill="white"/>
    </svg>
  ),
  'Express.js': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#000000"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="black"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">E</text>
    </svg>
  ),
  'Django': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#092E20"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#092E20"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">D</text>
    </svg>
  ),
  'FastAPI': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#009688"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#009688"/>
      <text x="30" y="40" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">FA</text>
    </svg>
  ),
  'MongoDB': (
    <svg {...iconProps}>
      <path d="M30 5C15.64 5 5 15.64 5 30s10.64 25 25 25 25-10.64 25-25S44.36 5 30 5z" fill="#47A248"/>
      <path d="M30 10C18.95 10 10 18.95 10 30s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#47A248"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">M</text>
    </svg>
  ),
  'PostgreSQL': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#336791"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#336791"/>
      <text x="30" y="40" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">PG</text>
    </svg>
  ),
  'Redis': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#DC382D"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#DC382D"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">R</text>
    </svg>
  ),
  'Kubernetes': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#326CE5"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#326CE5"/>
      <text x="30" y="40" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">K8</text>
    </svg>
  ),
  'AWS Lambda': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#FF9900"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#FF9900"/>
      <text x="30" y="40" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">λ</text>
    </svg>
  ),
  'Jenkins': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#D24939"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#D24939"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">J</text>
    </svg>
  ),
  'Terraform': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#623CE4"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#623CE4"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">T</text>
    </svg>
  ),
  'OpenAI GPT': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#412991"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#412991"/>
      <text x="30" y="40" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">AI</text>
    </svg>
  ),
  'LangChain': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#1C3C3C"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#1C3C3C"/>
      <text x="30" y="40" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">LC</text>
    </svg>
  ),
  'TensorFlow': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#FF6F00"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#FF6F00"/>
      <text x="30" y="40" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">TF</text>
    </svg>
  ),
  'Artificial Intelligence': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#FF6B6B"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#FF6B6B"/>
      <text x="30" y="40" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">AI</text>
    </svg>
  ),
  'Blockchain Development': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#F7931A"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#F7931A"/>
      <text x="30" y="40" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">BC</text>
    </svg>
  ),
  'Web3': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#627EEA"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#627EEA"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">W3</text>
    </svg>
  ),
  'Solidity': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#363636"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#363636"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">S</text>
    </svg>
  ),
  'Smart Contracts': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#4A90E2"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#4A90E2"/>
      <text x="30" y="40" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">SC</text>
    </svg>
  ),
  'DApp Development': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#8A2BE2"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#8A2BE2"/>
      <text x="30" y="40" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">DA</text>
    </svg>
  ),
  'Trading Bots': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#00D4AA"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#00D4AA"/>
      <text x="30" y="40" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">TB</text>
    </svg>
  ),
  'Hardhat': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#F7B500"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#F7B500"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">H</text>
    </svg>
  ),
  'DeFi': (
    <svg {...iconProps}>
      <rect width="60" height="60" rx="12" fill="#00D4AA"/>
      <path d="M30 5L55 30L30 55L5 30L30 5Z" fill="white"/>
      <path d="M20 20h20v20H20z" fill="#00D4AA"/>
      <text x="30" y="40" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">DF</text>
    </svg>
  )
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 60 }) => {
  // Check if Font Awesome icon exists
  const fontAwesomeIcon = fontAwesomeIcons[name]
  
  if (fontAwesomeIcon) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        <FontAwesomeIcon 
          icon={fontAwesomeIcon} 
          style={{ fontSize: size * 0.8 }} 
          className="text-current"
        />
      </div>
    )
  }

  // Check if custom SVG icon exists
  const customIcon = customIcons[name]
  
  if (customIcon) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        {React.cloneElement(customIcon, { width: size, height: size })}
      </div>
    )
  }

  // Fallback icon for unknown technologies
  return (
    <div 
      className={`flex items-center justify-center rounded-md bg-muted text-muted-foreground ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-lg font-bold">{name.charAt(0)}</span>
    </div>
  )
}

export default TechIcon