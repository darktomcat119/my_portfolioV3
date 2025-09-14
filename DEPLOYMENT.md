# Vercel Deployment Guide

## Quick Deploy

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: vladislav-portfolio (or your preferred name)
# - Directory: ./
# - Override settings? N
```

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 3: GitHub Integration
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on every push

## Build Configuration

The project is configured with:
- **Framework**: Next.js 14
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x (auto-detected)

## Environment Variables

No environment variables are required for this project.

## Custom Domain (Optional)

After deployment:
1. Go to your project dashboard on Vercel
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update the `metadataBase` URL in `src/app/layout.tsx` if needed

## Troubleshooting

### Common Issues:

1. **Build Failures**: Ensure all dependencies are in `package.json`
2. **Routes Not Working**: Check that all pages are in the correct `src/app` directory structure
3. **Images Not Loading**: Verify image paths are correct and images exist in `public` folder

### Build Logs:
- Check the "Functions" tab in Vercel dashboard for build logs
- Look for any TypeScript or ESLint errors

## Performance

The project is optimized for:
- Static generation for all pages
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- SEO optimization with proper metadata

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Ensure your local build works: `npm run build`
3. Verify all files are committed to your repository
