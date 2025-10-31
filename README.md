# Neel Shah - Portfolio Website

A professional, minimalist portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring advanced interactive effects and seamless integrations.

## 🎨 Design Philosophy

This portfolio follows a **top 1% professional design approach**:

- **Minimalist Black & White Theme**: Clean, sophisticated color scheme that puts focus on content
- **Advanced Interactive Effects**: Custom cursor, spotlight effect, magnetic buttons, scroll progress
- **Smooth Animations**: Professional Framer Motion animations with floating particles
- **Perfect Typography**: Using Geist Sans and Geist Mono with typewriter effect
- **Responsive Design**: Looks perfect on all devices from mobile to desktop
- **Fast & Performant**: Optimized for speed, SEO, and user experience

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Calendar Booking (Optional - for "Book a 30-min Call" button)
# Get your link from Cal.com or Calendly
NEXT_PUBLIC_CAL_URL=https://cal.com/your-username

# Database (Required for contact form)
# Get from Neon: https://neon.tech
NEON_DATABASE_URL=postgresql://username:password@host/database
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/           # AI chat assistant API
│   │   └── contact/        # Contact form API (Neon DB)
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles & custom animations
│   ├── manifest.ts         # PWA manifest
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.txt          # Search engine instructions
├── components/
│   ├── Navigation.tsx      # Responsive navigation bar
│   ├── CustomCursor.tsx    # Custom dot + ring cursor
│   ├── CursorSpotlight.tsx # Blue spotlight effect
│   ├── ScrollProgress.tsx  # Top scroll indicator
│   ├── FloatingParticles.tsx # Background particles
│   ├── MagneticButton.tsx  # Interactive buttons
│   ├── Preloader.tsx       # Loading animation
│   ├── CalendarModal.tsx   # Booking modal (Cal.com/Calendly)
│   └── ChatWidget.tsx      # AI assistant (Gemini-based)
└── public/                 # Static assets & images
```

## 🎯 Portfolio Sections

1. **Hero Section**
   - Typewriter effect for job titles
   - "Book a 30-min Call" CTA with calendar integration
   - Resume download link
   - Professional introduction with availability status

2. **Key Achievements**
   - Visual stats display (60% load time reduction, 99.9% uptime, etc.)
   - Animated counters on scroll

3. **About Me**
   - Comprehensive professional summary
   - 3+ years of experience highlighted
   - Key achievements and impact metrics

4. **Experience**
   - Software Engineer at PrometheanTech (July 2021 - Present)
   - Detailed role responsibilities and achievements
   - Tech stack showcase

5. **Featured Projects**
   - 73Strings: E-commerce platform (1M+ active users)
   - LivCast: Live streaming platform (200K+ concurrent streams)
   - Hover effects with project numbering

6. **Technical Skills**
   - Frontend: React, React Native, TypeScript, Next.js
   - Backend: Java, Spring Boot, Node.js
   - Cloud & DevOps: Azure, Azure AD B2C, Jenkins, CI/CD
   - Databases: MySQL, MongoDB, Elasticsearch

7. **Hire Me Options**
   - Full-time, Part-time, Freelance packages
   - Clear pricing and deliverables
   - Easy booking integration

8. **Contact Form**
   - Direct database integration (Neon)
   - Real-time validation and feedback
   - Success/error messaging
   - Email and social links

## 🛠️ Technologies Used

- **Framework**: Next.js 16.0.0 (App Router)
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Database**: Neon (Serverless Postgres)
- **AI**: Google Gemini (Chat Assistant)
- **Type Animation**: react-type-animation
- **Calendar**: Cal.com / Calendly integration

## 🌟 Interactive Features

### Custom Cursor System
- **Dot Cursor**: Small dot that follows your mouse
- **Ring Cursor**: Smooth ring with magnetic effect
- **Smart Detection**: Enlarges on hover over clickable elements
- **High Performance**: GPU-accelerated with requestAnimationFrame

### Blue Spotlight Effect
- **Radial Gradient**: Follows cursor movement
- **Subtle Glow**: 15% opacity blue (#0A66C2)
- **Smooth Tracking**: Optimized for 60fps performance

### Magnetic Buttons
- **Hover Effect**: Buttons follow cursor within proximity
- **Smooth Animation**: Spring-based physics
- **Professional Feel**: Subtle but engaging interaction

### Other Effects
- **Scroll Progress Bar**: Top indicator showing page scroll
- **Floating Particles**: Ambient background animation
- **Typewriter Effect**: Rotating job titles in hero
- **Preloader**: Elegant loading animation with logo
- **Smooth Scrolling**: Native CSS smooth scroll

## ⚙️ Setup Guide

### 1. Calendar Booking Integration

The portfolio includes a "Book a 30-min Call" button. To enable it:

**Option A: Cal.com (Recommended)**
1. Sign up at [cal.com](https://cal.com)
2. Create a free account
3. Set up your availability
4. Copy your Cal.com link (e.g., `https://cal.com/your-username`)
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CAL_URL=https://cal.com/your-username
   ```

**Option B: Calendly**
1. Sign up at [calendly.com](https://calendly.com)
2. Set up your meeting type
3. Copy your Calendly link
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CAL_URL=https://calendly.com/your-username
   ```

### 2. Contact Form Database

The contact form stores submissions in Neon Database:

1. **Sign up for Neon**: Visit [neon.tech](https://neon.tech)
2. **Create a Project**: Free tier available
3. **Get Connection String**: 
   - Go to Dashboard → Settings → Connection String
   - Copy the connection string
4. **Add to `.env.local`**:
   ```
   NEON_DATABASE_URL=postgresql://username:password@host/database
   ```
5. **Database Auto-Setup**: The table is created automatically on first contact submission

**Database Schema:**
```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3. AI Chat Assistant

The AI chat widget uses Google Gemini:

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to `.env.local`:
   ```
   GOOGLE_AI_API_KEY=your_api_key_here
   ```

## 🎨 Customization

### Update Personal Information

Edit `/app/page.tsx` to update:
- Name and job titles
- Professional summary
- Projects and achievements
- Skills and technologies
- Social media links (GitHub, LinkedIn)
- Email address

### Update AI Assistant Knowledge

Edit `/app/ai/kb.ts` to customize:
- Personal information
- Work experience
- Projects and skills
- FAQ responses
- Tone and personality

### Color Scheme

The professional color scheme is defined in `/app/globals.css`:
- **Primary**: Black (#000000) / White (#FFFFFF)
- **Accent**: LinkedIn Blue (#0A66C2)
- **Background**: White/Black (light/dark mode)
- **Borders**: Zinc-200 (light) / Zinc-800 (dark)

### Metadata & SEO

Update metadata in `/app/layout.tsx`:
- Page title and description
- Keywords for search engines
- Open Graph tags (for social media)
- Twitter Card metadata
- Author and location information
- Structured data (Schema.org)

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**: Commit and push your code
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_CAL_URL`
     - `NEON_DATABASE_URL`
     - `GOOGLE_AI_API_KEY` (if using AI chat)
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Other Platforms (Netlify, Railway, etc.)

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider. Don't forget to set environment variables!

## 📊 Performance Optimizations

- ✅ **Lazy Loading**: Dynamic imports for heavy components (ChatWidget)
- ✅ **Image Optimization**: Next.js Image component with proper sizing
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **GPU Acceleration**: Transform-based animations for smooth 60fps
- ✅ **Passive Event Listeners**: Optimized scroll and mouse tracking
- ✅ **RequestAnimationFrame**: Smooth cursor and spotlight effects
- ✅ **Minimal Dependencies**: Only essential packages included

## 🔒 SEO Features

- ✅ **Comprehensive Metadata**: Title, description, keywords
- ✅ **Open Graph Tags**: Beautiful social media previews
- ✅ **Twitter Cards**: Optimized Twitter sharing
- ✅ **Structured Data**: Schema.org JSON-LD for Person, WebSite, ProfessionalService
- ✅ **Sitemap**: Dynamic sitemap generation (`/sitemap.xml`)
- ✅ **Robots.txt**: Search engine crawl instructions
- ✅ **Web App Manifest**: PWA support for mobile install
- ✅ **Semantic HTML**: Proper heading hierarchy and ARIA labels
- ✅ **Fast Load Times**: Optimized for Core Web Vitals

## 🎯 User Experience (UX)

- ✅ **Clear Call-to-Actions**: Primary CTA stands out
- ✅ **Visual Hierarchy**: Proper use of size, weight, and spacing
- ✅ **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- ✅ **Mobile-First**: Fully responsive on all devices
- ✅ **Dark Mode**: Automatic system preference detection
- ✅ **Loading States**: Skeleton screens and spinners where needed
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Form Validation**: Real-time feedback on contact form

## 🐛 Troubleshooting

### Calendar Modal Shows "Not Configured"
- Ensure `NEXT_PUBLIC_CAL_URL` is set in `.env.local`
- Restart dev server after adding env variables
- Check that the URL format is correct

### Contact Form Not Working
- Verify `NEON_DATABASE_URL` is set correctly
- Check Neon dashboard for connection issues
- Review API route logs in terminal

### Custom Cursor Not Showing
- Check if `cursor: none` is in `globals.css`
- Verify z-index is high enough (999999)
- Clear browser cache

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build
```

## 📝 Maintenance

### Updating Content
- Edit personal info in `/app/page.tsx`
- Update AI knowledge in `/app/ai/kb.ts`
- Modify SEO metadata in `/app/layout.tsx`

### Adding New Features
- Keep the minimalist design aesthetic
- Maintain performance (test with Lighthouse)
- Ensure mobile responsiveness
- Update README when adding features

### Monitoring
- Set up Vercel Analytics (free tier available)
- Monitor contact form submissions in Neon dashboard
- Check SEO performance with Google Search Console

## 📞 Support

For questions or issues:
- **Email**: shahneel20135@gmail.com
- **LinkedIn**: [Neel Shah](https://www.linkedin.com/in/neel-shah-215099192/)
- **GitHub**: [Neelshah768](https://github.com/Neelshah768)

## 📄 License

© 2025 Neel Shah. All rights reserved.

---

**Built with precision and attention to detail for a professional, top-tier developer portfolio.**

*This portfolio represents the pinnacle of modern web development: fast, beautiful, accessible, and conversion-optimized.*
