# SkillOxa - Digital Agency & eLearning Platform

A modern, fully responsive website built with Next.js 14, TypeScript, and Tailwind CSS for SkillOxa - a digital agency and eLearning platform founded by Waqas (eLearning Guru).

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance Optimized**: Fast loading with optimized images and lazy loading
- **SEO Friendly**: Proper meta tags, sitemap, robots.txt, and structured data
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Professional UI**: Clean, minimal design inspired by top SaaS agencies
- **Accessibility**: WCAG compliant with proper semantic HTML

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── BlogCard.tsx
│   ├── CourseCard.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialSlider.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   └── images/
└── styles/               # Additional styles
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Utilities**: clsx, tailwind-merge
- **Development**: ESLint, PostCSS, Autoprefixer

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: #0052cc (Professional Blue)
  - Accent: #f7b731 (Golden Yellow)
  - Clean grayscale palette
- **Typography**: Inter font family
- **Components**: Reusable, accessible components
- **Animations**: Smooth transitions and micro-interactions

## 📱 Pages

1. **Home** (`/`) - Hero section, services overview, featured courses, testimonials
2. **About** (`/about`) - Company story, founder info, mission & vision
3. **Services** (`/services`) - Service listings, pricing packages, quote form
4. **Courses** (`/courses`) - Course catalog with filtering and search
5. **Blog** (`/blog`) - Article listings with categories and search
6. **Contact** (`/contact`) - Contact form, company info, social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skilloxa
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

## 🎯 Key Components

### HeroSection
- Animated background elements
- Dual CTA buttons
- Scroll indicator
- Responsive typography

### ServiceCard
- Hover animations
- Feature lists
- Call-to-action links
- Icon integration

### CourseCard
- Course thumbnails
- Pricing display
- Rating system
- Difficulty badges

### TestimonialSlider
- Auto-playing carousel
- Navigation controls
- Smooth transitions
- Customer avatars

### Navbar
- Sticky navigation
- Mobile hamburger menu
- Active page indicators
- Smooth scrolling

### Footer
- Multi-column layout
- Newsletter signup
- Social media links
- Company information

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Content
- Update company information in components
- Replace placeholder images in `/public/images/`
- Modify service offerings in respective pages
- Update contact information and social links

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom utilities defined in Tailwind config

## 📊 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Optimization**: Meta tags, Open Graph, Twitter Cards
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🌐 SEO Features

- Dynamic sitemap generation
- Robots.txt configuration
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 About SkillOxa

SkillOxa is a digital agency and eLearning platform founded by Waqas, known as the eLearning Guru on YouTube. We specialize in:

- WordPress Development
- SEO Services  
- Web Development
- UI/UX Design
- Video Editing
- Online Education

Visit us at [skilloxa.com](https://skilloxa.com) or follow us on social media for updates and tutorials.

---

Built with ❤️ by the SkillOxa team
