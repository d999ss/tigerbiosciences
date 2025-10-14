# Tiger BioSciences Website

A modern, responsive website for Tiger BioSciences built with Next.js 15, TypeScript, and shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with TypeScript and Turbopack
- **Beautiful UI**: shadcn/ui components with Tailwind CSS
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Custom Branding**: Tiger BioSciences colors, fonts, and styling
- **Accessible Navigation**: Dropdown menus with proper ARIA support
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── globals.css     # Global styles and custom CSS variables
│   │   └── page.tsx        # Homepage component
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   │   ├── header.tsx  # Navigation header
│   │   │   └── footer.tsx  # Site footer
│   │   ├── sections/       # Page sections
│   │   │   ├── hero.tsx    # Hero section
│   │   │   ├── welcome.tsx # Welcome section
│   │   │   └── divisions.tsx # Divisions showcase
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── public/
│   └── assets/             # Static assets
│       ├── images/         # Images and logos
│       └── fonts/          # Custom fonts (Neuropa)
└── components.json         # shadcn/ui configuration
```

## 🎨 Design System

### Colors
- **Tiger Red**: Primary brand color (`oklch(0.577 0.245 27.325)`)
- **Tiger Yellow**: Accent color (`oklch(0.8 0.15 70)`)
- **Tiger Gray**: Neutral color (`oklch(0.6 0 0)`)

### Typography
- **Primary Font**: Inter (system font)
- **Brand Font**: Neuropa (custom font for headings)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/d999ss/tigerbiosciences.git
cd tigerbiosciences

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Connect to Vercel**: Import the GitHub repository
2. **Automatic Deployments**: Every push to main triggers a deployment
3. **Environment Variables**: Configure any required environment variables
4. **Custom Domain**: Add your custom domain in Vercel settings

### Vercel Configuration
The project includes:
- `next.config.js` - Next.js configuration
- `.vercelignore` - Files to exclude from deployment
- Optimized build settings for Vercel

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px  
  - `lg`: 1024px
  - `xl`: 1280px
- **Navigation**: Collapsible mobile menu with dropdown support

## 🎯 Key Sections

### Hero Section
- Full-width background image
- Compelling headline with Tiger BioSciences branding
- Call-to-action elements

### Welcome Section
- Company introduction
- Mission and values
- Professional presentation

### Divisions Section
- Showcase of company divisions
- Interactive cards with hover effects
- Links to division-specific pages

### Footer
- Contact information
- Social media links
- Navigation links
- Company details

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Style with Tailwind CSS classes

### Modifying Colors
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --tiger-red: oklch(0.577 0.245 27.325);
  --tiger-yellow: oklch(0.8 0.15 70);
  --tiger-gray: oklch(0.6 0 0);
}
```

### Adding New Pages
1. Create new route in `src/app/`
2. Add navigation links in `src/components/layout/header.tsx`
3. Update mobile menu if needed

## 📄 License

This project is proprietary to Tiger BioSciences.

## 🤝 Contributing

For internal development only. Please follow the established code style and component patterns.

---

Built with ❤️ for Tiger BioSciences