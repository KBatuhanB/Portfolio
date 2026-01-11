# 🚀 Personal Portfolio Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, interactive, and fully responsive portfolio website built with cutting-edge web technologies**

</div>

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Pages Overview](#-pages-overview)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Internationalization](#-internationalization)
- [Code Standards](#-code-standards)
- [Contact](#-contact)

---

## 🎯 About The Project

This is a **professional portfolio website** showcasing my journey as a **Computer Engineering student** and **Full-Stack Developer**. Built with modern web technologies, it presents my projects, technical skills, work experience, and educational background in an engaging and interactive manner.

### 🎓 About Me
- **Current**: Computer Engineering student at Gazi University (GPA: 3.41/4.0)
- **Experience**: 6 months internship at Secure Computing as Software Development Intern
- **Involvement**: Active member of Gazi ACM R&D Game Development team
- **Background**: Founded and led Medipol E-Sports club, served as president and vice president
- **Passion**: Full-stack development, game development, and computer vision

---

## ✨ Key Features

### 🎨 **Modern UI/UX Design**
- Sleek, professional interface with custom Aceternity UI components
- Smooth animations powered by Framer Motion
- 3D effects using Three.js and React Three Fiber
- Interactive background effects and particles
- Color-themed pages for visual consistency

### 🌍 **Bilingual Support**
- Full internationalization (i18n) system
- Turkish and English languages
- Seamless language switching
- Type-safe translations with TypeScript
- Persistent language preference

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes (320px - 1920px+)
- Touch-optimized interactions
- Adaptive navigation (desktop AppBar, mobile floating dock)
- Hidden elements on mobile for better UX (e.g., timeline views)

### ⚡ **Performance Optimized**
- Built with Next.js 14 App Router for optimal performance
- Server-side rendering (SSR) capabilities
- Automatic code splitting and lazy loading
- Optimized images with Next.js Image component
- Fast page transitions and minimal load times

### 💼 **Comprehensive Portfolio Showcase**
- **10+ Featured Projects** with detailed information
- Project filtering by categories (Frontend, Backend, Mobile, Game Dev)
- Interactive project modals with:
  - Image carousels for project screenshots
  - YouTube video embeds for demos
  - GitHub repository links
  - Live demo links
  - Detailed descriptions and features
  - Technology stack tags

### 🛠️ **Skills Display**
- **9 Skill Categories** covering:
  - Frontend Development (React, Next.js, TypeScript, Tailwind)
  - Backend Development (Node.js, Express, Flask, Python)
  - Mobile Development (Kotlin, Jetpack Compose, Android)
  - Game Development (Unity, C#)
  - Database (MongoDB, Firebase, SQLite)
  - Testing & QA (Jest, Playwright, Selenium)
  - AI & Computer Vision (MediaPipe, OpenCV)
  - Security & Cryptography (AES-256, File Security)
  - Tools & DevOps (Git, VS Code, Docker)
- Skill proficiency levels with visual indicators
- Years of experience for each technology

### 🔒 **Type-Safe & Maintainable**
- 100% TypeScript for type safety
- Well-organized project structure
- SOLID principles applied
- DRY (Don't Repeat Yourself) code practices
- Comprehensive type definitions

---

## 🛠️ Tech Stack

### **Frontend**
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)

### **Animation & 3D**
- **Framer Motion 11** - Production-ready animation library
- **Three.js** - 3D graphics and WebGL
- **React Three Fiber** - React renderer for Three.js
- **@tsparticles** - Particle effects

### **UI Components & Icons**
- **Aceternity UI** - Custom-designed components
- **Tabler Icons** - 4000+ customizable icons
- **Lucide React** - Beautiful & consistent icons
- **Custom Components** - Handcrafted reusable components

### **Utilities**
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes without conflicts
- **class-variance-authority** - CVA for component variants

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📄 Pages Overview

### 🏠 **Home Page** (`/`)
- Hero section with animated background
- Quick navigation cards to all sections
- Dynamic introduction text
- **CTA buttons** for GitHub and contact

### 👤 **About Me** (`/personal-info`)
- Personal introduction and background story
- Contact information and social links
- Hobbies and interests
- **Theme Color**: Pink 💗

### 💼 **Experience** (`/experience`)
- Software Development Internship at Secure Computing (Mar 2024 - Aug 2024)
- Detailed responsibilities and achievements
- Technologies used in each position
- Interactive timeline (hidden on mobile)
- **Theme Color**: Purple 💜

### 📚 **Projects** (`/projects`)
- **10+ Major Projects** with comprehensive details
- **Category Filtering**: Frontend, Backend, Mobile, Game Dev, AI/CV
- **Featured Projects**:
  - **File Guardian** - Secure file encryption with Flask & Firebase
  - **Sorting Visualizer** - Interactive algorithm visualization
  - **Hand Mouse** - Gesture control with computer vision
  - **Collectify** - Full-stack media collection platform
  - **Python Selenium Automation** - Web scraping framework
  - **Game Jam Projects** - Multiple Unity game projects
- Project modals with images, videos, and links
- **Theme Color**: Green 💚

### 🛠️ **Skills** (`/skills`)
- **9 Skill Categories** with proficiency levels
- Visual skill bars with percentages
- Years of experience indicators
- Comprehensive technology coverage
- **Theme Color**: Yellow 💛

### 🎓 **Education** (`/education`)
- **Gazi University** - Computer Engineering (2024-2027, Current)
- **Ankara Medipol University** - Computer Engineering with Full Scholarship (2022-2024)
- GPA information and achievements
- Leadership roles (E-Sports club founder & president)
- Club memberships and activities
- Interactive timeline (hidden on mobile)
- **Theme Color**: Blue 💙

---

## � Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

#### Development Mode
Start the development server with hot-reload:
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

#### Production Build
Build and run the optimized production version:
```bash
# Create production build
npm run build

# Start production server
npm run start
```

#### Code Quality Checks
```bash
# Run ESLint
npm run lint

# TypeScript type checking
npm run type-check
```

---

## 📁 Project Structure

```
portfolio/
├── public/                    # Static assets (images, icons, etc.)
│
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   ├── education/        # Education page (Blue theme)
│   │   ├── experience/       # Experience page (Purple theme)
│   │   ├── personal-info/    # About me page (Pink theme)
│   │   ├── projects/         # Projects showcase (Green theme)
│   │   └── skills/           # Skills page (Yellow theme)
│   │
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── AppBar.tsx   # Desktop navigation bar
│   │   │   ├── PortfolioNavigation.tsx  # Mobile floating dock
│   │   │   └── LanguageSwitcher.tsx     # TR/EN language toggle
│   │   │
│   │   └── ui/               # Reusable UI components
│   │       ├── 3d-card.tsx  # Interactive 3D card effect
│   │       ├── background-beams-with-collision.tsx
│   │       ├── encrypted-text.tsx
│   │       ├── floating-dock.tsx
│   │       ├── image-carousel.tsx
│   │       ├── project-modal.tsx
│   │       ├── tech-marquee.tsx
│   │       └── timeline.tsx
│   │
│   ├── i18n/                 # Internationalization system
│   │   ├── locales/         # Translation files
│   │   │   ├── tr.ts        # Turkish translations
│   │   │   └── en.ts        # English translations
│   │   ├── i18n-context.tsx # i18n Context Provider
│   │   └── index.ts         # Exports
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── i18n.types.ts   # i18n types
│   │   └── common.types.ts # Common types
│   │
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts        # cn() className helper
│   │
│   └── utils/               # Utility functions
│       ├── animations.ts   # Framer Motion presets
│       ├── validation.ts   # Input validation
│       └── format.ts       # Data formatting
│
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── components.json         # Aceternity UI config
├── next.config.js          # Next.js configuration
├── next-env.d.ts           # Next.js TypeScript declarations
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🌐 Internationalization

The website features a complete bilingual system supporting **Turkish (TR)** and **English (EN)**.

### Features
- 🌍 Full content translation for all pages
- 🔄 Seamless language switching without page reload
- 💾 Language preference saved in localStorage
- 🔒 Type-safe translations with TypeScript
- 📝 Centralized translation files

### Usage Example

```typescript
import { useI18n } from '@/i18n/i18n-context';

function MyComponent() {
  const { t, locale, setLocale } = useI18n();
  
  return (
    <div>
      <h1>{t.pageTitle.home}</h1>
      <p>{t.pageDescription.home}</p>
      
      {/* Language switcher */}
      <button onClick={() => setLocale(locale === 'tr' ? 'en' : 'tr')}>
        {locale === 'tr' ? 'English' : 'Türkçe'}
      </button>
    </div>
  );
}
```

### Translation Structure

All translations are defined in `src/i18n/locales/`:

- **tr.ts**: Turkish translations
- **en.ts**: English translations

Each file exports a complete `Translations` object with the same structure:

```typescript
{
  common: { ... },          // Common UI text
  navigation: { ... },      // Navigation menu items
  pageTitle: { ... },       // Page titles
  pageDescription: { ... }, // Page descriptions
  education: { ... },       // Education page content
  experience: { ... },      // Experience page content
  projects: { ... },        // Projects page content
  skills: { ... },          // Skills page content
  personalInfo: { ... }     // Personal info content
}
```

---

## 💡 Code Standards

### Architecture Principles

#### SOLID Principles
- **Single Responsibility**: Each component has one clear purpose
- **Open/Closed**: Open for extension, closed for modification
- **Liskov Substitution**: Components can be substituted with their subtypes
- **Interface Segregation**: Small, focused interfaces
- **Dependency Inversion**: Depend on abstractions, not concretions

#### DRY (Don't Repeat Yourself)
- Utility functions: `src/utils/`
- Custom hooks: `src/hooks/` (if created)
- Reusable components: `src/components/ui/`
- Type definitions: `src/types/`

### Naming Conventions

- **Components**: PascalCase (`AppBar.tsx`, `ProjectModal.tsx`)
- **Files**: kebab-case (`i18n-context.tsx`, `3d-card.tsx`)
- **Functions**: camelCase (`formatDate`, `validateEmail`)
- **Constants**: UPPER_SNAKE_CASE (`DEFAULT_LOCALE`, `API_URL`)
- **Types/Interfaces**: PascalCase (`Translations`, `ProjectData`)

### Code Quality

```typescript
// ✅ Good: Type-safe, clear, reusable
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button 
      className={cn("base-styles", variant === 'primary' && "primary-styles")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ❌ Bad: No types, unclear, not reusable
const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
```

---

## 🎨 Responsive Design

### Breakpoints

```css
/* Tailwind CSS breakpoints used */
sm:  640px   /* Small devices (mobile landscape) */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (desktops) */
xl:  1280px  /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Mobile Optimizations

- **Navigation**: Desktop AppBar switches to mobile floating dock
- **Timeline**: Hidden on mobile for Education and Experience pages
- **Images**: Optimized sizes for different screen widths
- **Typography**: Responsive text sizes with Tailwind classes
- **Touch**: Optimized touch targets (min 44x44px)
- **Spacing**: Adjusted padding and margins for mobile

---

## ⚡ Performance

### Optimizations Applied

✅ **Next.js Image Optimization** - Automatic image optimization  
✅ **Font Optimization** - Using `next/font` for optimal font loading  
✅ **Code Splitting** - Automatic route-based code splitting  
✅ **Tree Shaking** - Unused code elimination  
✅ **Minification** - SWC-based minification  
✅ **Static Generation** - Static pages where possible  
✅ **Lazy Loading** - Components loaded on demand  

### Performance Metrics Target

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Total Blocking Time (TBT): < 200ms
- Cumulative Layout Shift (CLS): < 0.1

---

## 🎨 UI Components

### Custom Aceternity Components

This portfolio uses beautiful, interactive components from [Aceternity UI](https://ui.aceternity.com/):

- **3D Card** - Interactive cards with 3D tilt effect
- **Background Beams with Collision** - Animated background effects
- **Encrypted Text** - Text reveal animation with encryption effect
- **Floating Dock** - MacOS-style navigation dock
- **Image Carousel** - Smooth image slider for project showcases
- **Project Modal** - Full-screen modal with smooth animations
- **Tech Marquee** - Infinite scrolling technology logos
- **Timeline** - Visual timeline for education and experience

### Adding New Components

To add more Aceternity UI components:

1. Visit [Aceternity UI](https://ui.aceternity.com/)
2. Choose a component
3. Copy the code to `src/components/ui/`
4. Install required dependencies
5. Import and use in your pages

---

## 🚧 Future Enhancements

### Planned Features

- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Contact Form** - Functional contact form with email integration
- [ ] **Blog Section** - Technical blog posts and articles
- [ ] **CMS Integration** - Admin panel for content management
- [ ] **Analytics** - Google Analytics or Plausible integration
- [ ] **PWA** - Progressive Web App capabilities
- [ ] **Testing** - Unit and integration tests with Jest/Vitest
- [ ] **Animations** - More micro-interactions and page transitions
- [ ] **RSS Feed** - Blog RSS feed
- [ ] **Sitemap** - Auto-generated sitemap.xml

### Potential Improvements

- [ ] Performance monitoring dashboard
- [ ] A/B testing for CTAs
- [ ] Newsletter subscription
- [ ] Comments section for blog posts
- [ ] Project voting/rating system
- [ ] Resume/CV download button
- [ ] Testimonials section

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Aceternity UI** - For beautiful UI components
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Three.js Community** - For 3D graphics capabilities

---

## 🌟 Support

If you find this project helpful or interesting:

- ⭐ **Star this repository** on GitHub
- 🐛 **Report bugs** by opening an issue
- 💡 **Suggest features** via GitHub issues
- 🔀 **Fork and contribute** via pull requests

---

<div align="center">

### 💼 Open for Opportunities

**I'm actively seeking internship and full-time opportunities in:**

- Full-Stack Development
- Frontend Development (React/Next.js)
- Backend Development (Node.js/Python)
- Mobile Development (Android/Kotlin)
- Software Engineering positions

**Feel free to reach out for collaborations, job opportunities, or just to connect!**

---

**Made with ❤️ and ☕ by Kelami Batuhan**

© 2026 Kelami Batuhan. All rights reserved.

