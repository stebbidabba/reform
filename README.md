# REFORM Website

A clean, modern website for REFORM built with Next.js and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional fitness website design
- 🌐 **Icelandic Language**: All content in Icelandic as specified
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized with Next.js Image and lazy loading
- ♿ **Accessible**: WCAG AA compliant with proper ARIA labels
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and JSON-LD schema
- 📝 **Contact Form**: Client-side validation with plan prefilling
- 🎯 **Smooth Navigation**: Smooth scrolling between sections

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Poppins (headings), Inter (body)
- **Icons**: Heroicons (SVG)

## Project Structure

```
reformwebsite/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   │   ├── Hero.tsx            # Hero section with CTAs
│   │   ├── Features.tsx        # Features grid with icons
│   │   ├── About.tsx           # Trainer profiles
│   │   ├── Pricing.tsx         # Pricing cards with plan selection
│   │   ├── Testimonials.tsx    # Customer testimonials
│   │   ├── Contact.tsx         # Contact form with validation
│   │   └── Footer.tsx          # Three-column footer
│   ├── lib/
│   │   └── design.ts           # Design data utilities
│   ├── globals.css             # Global styles and Tailwind
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page component
├── public/                     # Static assets
├── design.json                 # Website content and configuration
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## Setup Instructions

### Prerequisites

1. **Install Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use Homebrew: `brew install node`

2. **Install npm** (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   cd reformwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
SITE_URL=https://yourdomain.com
GOOGLE_SITE_VERIFICATION=your_verification_code
```

### Customization

All content is managed through `design.json`:

- **Colors**: Update the `palette` section
- **Content**: Modify text, images, and sections
- **Navigation**: Adjust menu items and structure
- **Pricing**: Update plans, features, and prices

## Key Features

### Navigation
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- CTA button in navigation

### Hero Section
- Split layout with content and image
- Primary and secondary CTAs
- Feature bullets with icons
- Responsive design

### Features
- Four-column grid on desktop
- Icon-based feature presentation
- Hover effects and animations

### About Section
- Trainer profiles with images
- Bio information
- Decorative elements

### Pricing
- Three pricing tiers
- Feature lists
- Highlighted popular plan
- CTA buttons that prefill contact form

### Testimonials
- Customer quote cards
- Author information
- Responsive grid layout

### Contact Form
- All required fields from specification
- Client-side validation
- Plan prefilling from URL parameters
- Success message handling
- Icelandic error messages

### Footer
- Three-column layout
- Social media links
- Navigation links
- Copyright information

## Performance Features

- **Image Optimization**: Next.js Image component
- **Font Loading**: Google Fonts with display swap
- **Lazy Loading**: Images below the fold
- **CSS Optimization**: Tailwind CSS with PurgeCSS
- **Bundle Splitting**: Automatic code splitting

## Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Keyboard Navigation**: Full keyboard support

## SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter-specific meta
- **JSON-LD**: Structured data for search engines
- **Canonical URLs**: Proper URL structure
- **Sitemap**: Ready for next-sitemap

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Custom server

## Support

For questions or issues:
1. Check the documentation
2. Review the code structure
3. Ensure all dependencies are installed
4. Verify Node.js version compatibility

## License

This project is built for REFORM. All rights reserved.
