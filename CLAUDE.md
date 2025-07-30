# CLAUDE.md - Project Context for AI Assistant

## Project Overview
**MasterStack Digital Boost** - A Hebrew/RTL professional web development services website built with React, TypeScript, and Tailwind CSS.

## Key Project Information

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn/ui components
- **UI Components**: Custom components with Lucide React icons
- **3D Graphics**: Three.js (loaded via CDN for ServicesPage)
- **Authentication**: Firebase Auth
- **Deployment**: Vercel (build command: `npm run build`)

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
└── styles/             # CSS files
```

### Important Commands
- **Development**: `npm run dev`  
- **Build**: `npm run build`
- **Type Check**: `npx tsc --noEmit`
- **Lint**: `npx eslint src/ --fix`

## Design System & Patterns

### Language & Direction
- **Primary Language**: Hebrew (עברית)
- **Text Direction**: RTL (`dir="rtl"`)
- **Secondary**: English for technical terms

### Color Palette
- **Primary**: Blue variants (`blue-500`, `blue-600`, `cyan-400`, `cyan-500`)
- **Background**: Slate variants (`slate-800`, `slate-900`)
- **Accents**: Green (`emerald-500`), Purple, Orange for badges
- **Text**: White primary, `slate-300`/`slate-400` for secondary

### Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **Small**: `sm:` (≥ 640px)
- **Medium**: `md:` (≥ 768px) 
- **Large**: `lg:` (≥ 1024px)
- **Extra Large**: `xl:` (≥ 1280px)

### Typography Scale
- **Headings**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
- **Body**: `text-base sm:text-lg lg:text-xl`
- **Small**: `text-xs sm:text-sm`

## Key Components

### Layout Components
- **Header**: Main navigation with responsive menu
- **Footer**: Contact info and links
- **AccessibilityMenu**: Fixed accessibility controls
- **FloatingWhatsApp**: Fixed WhatsApp contact button
- **Breadcrumbs**: Page navigation breadcrumbs

### Specialized Components
- **ServiceCard3D**: Three.js powered service cards (ServicesPage)
- **PriceCalculator**: Interactive pricing tool
- **NewsUpdates**: Dynamic news/articles section
- **AdvancedContact**: Enhanced contact forms

## Page-Specific Notes

### ServicesPage.tsx
- **3D Integration**: Uses Three.js with CSS3DRenderer for iframe demos
- **Interactive Cards**: Hover effects on 3D elements
- **Security**: Iframes have `pointer-events: none` to prevent navigation
- **Responsive**: Full mobile-first responsive design

### Index.tsx (Homepage)
- **Video Background**: MP4 video with image fallback
- **Hero Section**: Large gradient text with CTAs
- **Services Preview**: Grid of service highlights

### Articles Pages
- **Current State**: Empty placeholder pages ready for content
- **Structure**: Same background and layout pattern as other pages

## Development Guidelines

### Responsive Design
Always use mobile-first approach:
```css
/* Mobile first */
className="text-lg sm:text-xl lg:text-2xl"
className="p-4 sm:p-6 lg:p-8"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Component Structure
- Use consistent padding: `p-4 sm:p-6 lg:p-8`
- Container classes: `container mx-auto px-4 sm:px-6 lg:px-8`
- Section spacing: `py-12 sm:py-16 lg:py-20`

### Background Pattern
Standard background for all pages:
```jsx
<div className="min-h-screen text-white bg-transparent" dir="rtl">
  <video className="fixed inset-0 w-full h-full object-cover -z-40 brightness-[0.3]" autoPlay muted loop playsInline>
    <source src="/assets/videos/background.mp4" type="video/mp4" />
  </video>
  <div className="fixed inset-0 w-full h-full -z-50" style={{backgroundImage: 'url(/assets/images/image.png)', ...}} />
</div>
```

### TypeScript Patterns
- Use proper typing for components: `({ service }: { service: ServiceType })`
- Declare global types for external libraries when needed
- Prefer interface over type for object shapes

## Common Issues & Solutions

### Three.js Integration
- Load scripts dynamically with Promise-based `loadScript` function
- Use `window.THREE` with proper TypeScript declarations
- Handle cleanup in useEffect to prevent memory leaks

### RTL Support
- Use `mr-` (margin-right) instead of `ml-` for RTL spacing
- Icons may need rotation: `className="rotate-180"` 
- Test text alignment and spacing in Hebrew

### Performance
- Images: Use WebP format when possible
- Videos: Compress and optimize for web
- Three.js: Clean up renderers and event listeners

## Firebase Configuration
- Authentication setup in `src/lib/firebase.ts`
- Environment variables in `.env` (not committed)
- Contact integration via WhatsApp and Email

## SEO & Accessibility
- All pages have proper Hebrew meta tags
- Images include alt text in Hebrew
- ARIA labels for interactive elements
- Semantic HTML structure maintained

---

## Quick Reference for Common Tasks

### Adding New Page
1. Create component in `src/pages/`
2. Use standard background pattern
3. Add responsive classes throughout
4. Include proper Hebrew meta/SEO
5. Test mobile responsiveness

### Styling New Component
1. Start mobile-first: base classes
2. Add responsive variants: `sm:`, `md:`, `lg:`
3. Use consistent spacing from design system
4. Test RTL layout

### Debugging Build Issues
1. Check TypeScript: `npx tsc --noEmit`
2. Run ESLint: `npx eslint src/ --fix`
3. Test build: `npm run build`
4. Check for unused imports and console logs

This documentation should help maintain consistency and speed up development on this Hebrew RTL React project.