# Vladislav Khmelnytsky - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases the professional work and skills of Vladislav Khmelnytsky, a Senior Full-Stack Developer specializing in MERN Stack, Laravel, AI Automation, and DevOps.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Built-in theme switching with system preference detection
- **Interactive Components**: Animated sections, hover effects, and smooth scrolling
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **TypeScript**: Full type safety throughout the application
- **Component-Based**: Reusable, modular components for maintainability

## 📋 Pages

- **Homepage**: Hero section, about, featured projects, skills overview, and call-to-action
- **Projects**: Showcase of portfolio projects with filtering and search functionality
- **Experience**: Professional career timeline with detailed job information
- **Skills**: Interactive skills showcase with proficiency levels and categories
- **Education**: Academic background and professional certifications
- **Contact**: Contact form, social links, and multiple contact methods

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vladislav-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects page
│   ├── experience/        # Experience page
│   ├── skills/            # Skills page
│   ├── education/         # Education page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   ├── pages/            # Page-specific components
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── data/                 # JSON data files
│   ├── personal.json     # Personal information
│   ├── projects.json     # Portfolio projects
│   ├── experience.json   # Work experience
│   ├── skills.json       # Technical skills
│   └── education.json    # Education & certifications
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── types/                # TypeScript type definitions
    └── index.ts          # Type definitions
```

## 🎨 Customization

### Personal Information
Update the data files in `src/data/` to customize the portfolio content:

- `personal.json` - Personal information, contact details
- `projects.json` - Portfolio projects and case studies
- `experience.json` - Work experience and career history
- `skills.json` - Technical skills and proficiency levels
- `education.json` - Education and certifications

### Styling
The design system is built with Tailwind CSS and custom CSS variables. Key customization points:

- Color scheme: Update CSS variables in `globals.css`
- Typography: Modify font families and sizes in `tailwind.config.ts`
- Animations: Customize Framer Motion animations in components
- Layout: Adjust spacing and layout in component files

### Content Management
The portfolio uses JSON files for content management, making it easy to update without code changes. Each data file contains structured information that's consumed by the React components.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **SEO**: Meta tags, structured data, and semantic HTML

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture
- Custom hooks for reusable logic

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or feedback, please contact Vladislav Khmelnytsky directly.

## 📞 Contact

- **Email**: courage020119@gmail.com
- **GitHub**: [github.com/darktomcat119](https://github.com/darktomcat119)

---

Built with ❤️ by Vladislav Khmelnytsky
