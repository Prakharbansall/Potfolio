# Deployment Guide for Vercel

## Prerequisites
- GitHub account
- Vercel account
- Your portfolio code pushed to GitHub

## Step 1: Prepare Your Repository

1. **Move Images to Public Directory**
   ```bash
   # Run this command in your project root
   mv Images public/
   ```

2. **Verify Image Paths**
   - All image references in your code should use `/Images/` (starting with `/`)
   - This has been updated in `src/Certificate.jsx` and `src/projectsData.js`

## Step 2: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"

2. **Import Repository**
   - Select your portfolio repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site

### Option B: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## Step 3: Verify Deployment

1. **Check Build Logs**
   - Ensure no errors during build
   - Verify all images load correctly

2. **Test Functionality**
   - Check all sections load properly
   - Verify contact form works
   - Test responsive design

## Step 4: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your Vercel project dashboard
   - Navigate to "Settings" > "Domains"
   - Add your custom domain

2. **Configure DNS**
   - Follow Vercel's DNS configuration instructions

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check for import errors
   - Verify all file paths are correct
   - Ensure all dependencies are in `package.json`

2. **Images Not Loading**
   - Verify Images folder is in `public/` directory
   - Check image paths start with `/Images/`
   - Ensure image filenames match exactly (case-sensitive)

3. **404 Errors**
   - Check `vercel.json` configuration
   - Verify SPA routing is set up correctly

### Build Commands

```bash
# Local build test
npm run build

# Preview build locally
npm run preview

# Check for linting errors
npm run lint
```

## Configuration Files

- `vercel.json`: Vercel deployment configuration
- `vite.config.js`: Vite build configuration
- `package.json`: Dependencies and scripts

## Support

If you encounter issues:
1. Check Vercel build logs
2. Verify all file paths and imports
3. Test locally with `npm run build`
4. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
