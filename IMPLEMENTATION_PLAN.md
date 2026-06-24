# BOLEXMAN — School Website Implementation Plan

> **Status:** Build complete — website implemented and verified with `npm run build`.
>
> **Last updated:** June 12, 2026
>
> **Workspace:** `c:\Users\USER\Desktop\BOLEXSCHOOL`
>
> **Brand:** BOLEXMAN — Premium International Academy

---

## Progress Overview

| Phase | Description | Status |
|-------|-------------|--------|
| 0 | Tracking document | ✅ Complete |
| 1 | Project scaffold & foundation | ✅ Complete |
| 2 | Design system | ✅ Complete |
| 3 | Layout & global components | ✅ Complete |
| 4 | Page sections | ✅ Complete |
| 5 | Premium widgets | ✅ Complete |
| 6 | Animations & motion | ✅ Complete |
| 7 | Performance, a11y & SEO | ✅ Complete |
| 8 | Content & assets | ✅ Complete |
| 9 | Home page composition | ✅ Complete |
| 10 | Verification & QA | ✅ Complete |

**Overall progress:** 11 / 11 phases complete

---

## Design Token Reference

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#0F172A` | Deep Navy — headers, dark sections, footer |
| Secondary | `#2563EB` | Royal Blue — links, highlights, gradients |
| Accent | `#F59E0B` | Gold — CTAs, badges, stat highlights |
| Background | `#F8FAFC` | Page background (light mode) |
| Success | `#10B981` | Success states, positive indicators |
| Dark BG | `#0B1120` | Dark mode page background |

### Typography

| Role | Font | Weights | CSS Variable |
|------|------|---------|--------------|
| Headings | Poppins | 600, 700 | `--font-heading` |
| Body | Inter | 400, 500, 600 | `--font-body` |
| Stats / Numbers | Montserrat | 600, 700 | `--font-stats` |

### UI Patterns

- **Glass card:** `backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/20 shadow-xl`
- **Soft shadow:** `shadow-[0_8px_30px_rgb(0,0,0,0.08)]`
- **Section spacing:** `py-20 md:py-28` + `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Button variants:** `primary`, `secondary`, `outline`, `ghost`, `accent`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14+ (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| next-themes | Dark mode |
| Embla Carousel | News & testimonial sliders |
| Radix UI | Accordion, Dialog, Dropdown |
| react-countup | Animated statistics |

---

## Phase 0 — Tracking Document ✅

- [x] Create `IMPLEMENTATION_PLAN.md` at project root
- [x] Phased checklist with status tracking
- [x] Section completion tracker
- [x] File inventory template
- [x] Design token reference
- [x] Post-launch backlog

---

## Phase 1 — Project Scaffold & Foundation

### 1.1 Initialize Next.js

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

- [ ] Run create-next-app in workspace root
- [ ] Verify App Router + `src/` directory
- [ ] Clean default boilerplate CSS

### 1.2 Install Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge next-themes embla-carousel-react @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu react-countup
```

- [ ] Install all production dependencies
- [ ] Verify `package.json` and lockfile

### 1.3 Folder Structure

- [ ] `src/app/` — layout, page, globals.css, sitemap
- [ ] `src/components/layout/` — Header, Footer, MobileNav
- [ ] `src/components/sections/` — all 14 section components
- [ ] `src/components/ui/` — shared UI primitives
- [ ] `src/components/widgets/` — chat, AI, dark mode, language
- [ ] `src/lib/` — utils, constants, animations
- [ ] `src/hooks/` — useScrollHeader, useInViewCounter
- [ ] `src/types/` — TypeScript interfaces
- [ ] `public/images/` — optimized images
- [ ] `public/videos/` — hero background video (optional)

---

## Phase 2 — Design System

- [ ] Add color tokens to `globals.css` and `tailwind.config.ts`
- [ ] Configure Poppins, Inter, Montserrat via `next/font/google`
- [ ] Create `cn()` utility in `src/lib/utils.ts`
- [ ] Build `Button.tsx` with all variants
- [ ] Build `GlassCard.tsx`
- [ ] Build `SectionHeading.tsx`
- [ ] Set up `ThemeProvider` with `next-themes`
- [ ] Define dark mode palette overrides

---

## Phase 3 — Layout & Global Components

### Header (`Header.tsx`)

- [ ] Sticky transparent navbar → solid on scroll (50px threshold)
- [ ] Logo: BOLEXMAN
- [ ] Nav links: Home, About Us, Academics, Admissions, Campus Life, News, Gallery, Contact
- [ ] Buttons: Apply Now, Book a Tour
- [ ] Search icon, Language switcher, Dark mode toggle
- [ ] Student Portal login button
- [ ] Mobile hamburger → full-screen drawer

### Footer (`Footer.tsx`)

- [ ] Logo + tagline
- [ ] Quick links column
- [ ] Contact: email, phone, address
- [ ] Social icons (Facebook, Instagram, LinkedIn, YouTube, X)
- [ ] Newsletter subscription form

### SEO (`layout.tsx`)

- [ ] Metadata (title, description, Open Graph, Twitter)
- [ ] JSON-LD `EducationalOrganization` schema
- [ ] `sitemap.ts`
- [ ] `robots.ts`
- [ ] Skip-to-content link

---

## Phase 4 — Section Completion Tracker

| # | Section | Component | ID Anchor | Status |
|---|---------|-----------|-----------|--------|
| 1 | Hero | `Hero.tsx` | `#home` | ⬜ |
| 2 | Why BOLEXMAN | `WhyBolexman.tsx` | `#why` | ⬜ |
| 3 | About | `About.tsx` | `#about` | ⬜ |
| 4 | Academics | `Academics.tsx` | `#academics` | ⬜ |
| 5 | Admissions | `Admissions.tsx` | `#admissions` | ⬜ |
| 6 | Campus Life | `CampusLife.tsx` | `#campus-life` | ⬜ |
| 7 | Featured News | `FeaturedNews.tsx` | `#news` | ⬜ |
| 8 | Testimonials | `Testimonials.tsx` | `#testimonials` | ⬜ |
| 9 | Achievements | `Achievements.tsx` | `#achievements` | ⬜ |
| 10 | Gallery Showcase | `GalleryShowcase.tsx` | `#gallery` | ⬜ |
| 11 | Virtual Campus Tour | `VirtualTour.tsx` | `#virtual-tour` | ⬜ |
| 12 | Event Calendar | `EventCalendar.tsx` | `#events` | ⬜ |
| 13 | FAQ | `FAQ.tsx` | `#faq` | ⬜ |
| 14 | CTA Banner | `CTABanner.tsx` | `#cta` | ⬜ |

### Section Requirements Checklist

#### Hero
- [ ] Full-screen cinematic background (image/video)
- [ ] Headline: "Shaping Tomorrow's Leaders Today"
- [ ] Subheadline + CTAs (Apply For Admission, Explore Programs)
- [ ] 4 floating stat cards (5000+ Students, 150+ Teachers, 98% Success, 25+ Years)
- [ ] Parallax background + floating animations

#### Why BOLEXMAN
- [ ] 3 premium cards: Academic Excellence, Innovative Learning, Leadership Development
- [ ] Icons, hover lift, smooth animation

#### About
- [ ] Split layout: image collage left, story right
- [ ] Mission: "To nurture excellence, integrity, innovation, and leadership."
- [ ] Animated counters on scroll

#### Academics
- [ ] 6 program cards: Early Years, Primary, Secondary, Science, Technology, Arts
- [ ] Expand on hover, image, CTA

#### Admissions
- [ ] 4-step timeline: Submit Application → Assessment → Interview → Enrollment
- [ ] Animated connecting line

#### Campus Life
- [ ] Masonry gallery with category filters
- [ ] Categories: Sports, Technology, Arts, Science Labs, Events, Student Clubs
- [ ] Hover: zoom + overlay text

#### Featured News
- [ ] Card slider with achievements, competitions, events, announcements
- [ ] Date + category tags

#### Testimonials
- [ ] Glass cards, auto-rotating carousel
- [ ] Parent + student quotes, profile images

#### Achievements
- [ ] 100% Graduation | 50+ Awards | 200+ Scholarships | 10000+ Alumni
- [ ] Count-up animation, Montserrat numbers

#### Gallery Showcase
- [ ] Pinterest-style grid
- [ ] Lightbox preview with smooth transitions

#### Virtual Campus Tour
- [ ] Video/360° placeholder, feature list, CTA

#### Event Calendar
- [ ] Interactive month grid, event highlights, side panel

#### FAQ
- [ ] Radix accordion, 6–8 questions, smooth animation

#### CTA Banner
- [ ] Dark premium background
- [ ] "Begin Your Journey With BOLEXMAN"
- [ ] Apply Now + Contact Us buttons

---

## Phase 5 — Premium Widgets

| Widget | File | Status |
|--------|------|--------|
| Dark Mode Toggle | `DarkModeToggle.tsx` | ⬜ |
| Language Switcher | `LanguageSwitcher.tsx` | ⬜ |
| Search Modal | `SearchModal.tsx` | ⬜ |
| Live Chat Widget | `LiveChatWidget.tsx` | ⬜ |
| AI Assistant Widget | `AIAssistantWidget.tsx` | ⬜ |
| Student Portal Button | In `Header.tsx` | ⬜ |

---

## Phase 6 — Animations & Motion

Central file: `src/lib/animations.ts`

- [ ] `fadeUp` — scroll reveal variant
- [ ] `staggerContainer` — staggered children
- [ ] `cardHover` — lift on hover
- [ ] `FadeInView` wrapper component
- [ ] `AnimatedCounter` component
- [ ] Hero parallax
- [ ] Floating decorative elements
- [ ] Image zoom effects
- [ ] `prefers-reduced-motion` support

---

## Phase 7 — Performance, Accessibility & SEO

### Performance
- [ ] `next/image` on all images (WebP, sizes, priority on hero)
- [ ] Font subsetting via `next/font`
- [ ] Dynamic import for chat/AI widgets
- [ ] Lazy load below-fold content

### Accessibility
- [ ] Semantic HTML landmarks
- [ ] Skip-to-content link
- [ ] Focus-visible styles
- [ ] ARIA on accordion, mobile nav, modals
- [ ] WCAG AA color contrast

### SEO
- [ ] Open Graph image (`public/og-image.jpg`)
- [ ] JSON-LD structured data
- [ ] Sitemap + robots.txt
- [ ] Descriptive alt text on all images

---

## Phase 8 — Content & Assets

- [ ] Create `src/lib/constants.ts` with all copy and data
- [ ] Source education images (Unsplash/Pexels)
- [ ] Optimize and place in `public/images/`
- [ ] Optional hero video in `public/videos/`
- [ ] Configure `next.config` remote image patterns if needed

### Key Data Structures (constants.ts)

```ts
export const HERO_STATS = [
  { value: 5000, suffix: '+', label: 'Students' },
  { value: 150, suffix: '+', label: 'Expert Teachers' },
  { value: 98, suffix: '%', label: 'Success Rate' },
  { value: 25, suffix: '+', label: 'Years of Excellence' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  // ...
];
```

---

## Phase 9 — Home Page Composition

`src/app/page.tsx` section order:

```
Header
  → Hero
  → WhyBolexman
  → About
  → Academics
  → Admissions
  → CampusLife
  → VirtualTour
  → FeaturedNews
  → EventCalendar
  → Testimonials
  → Achievements
  → GalleryShowcase
  → FAQ
  → CTABanner
Footer

Floating: LiveChatWidget, AIAssistantWidget (in layout)
```

- [ ] Compose all sections in `page.tsx`
- [ ] Wire smooth-scroll nav anchors
- [ ] Render widgets in root layout

---

## Phase 10 — Verification Checklist

- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Dark mode readable on all sections
- [ ] Lighthouse: Performance 90+, Accessibility 95+, SEO 100
- [ ] Keyboard navigation (header, modals, accordion)
- [ ] Smooth scroll anchors work
- [ ] Reduced motion respected
- [ ] `npm run build` passes with zero errors

---

## File Inventory

> Update checkboxes as files are created during build.

### App
- [ ] `src/app/layout.tsx`
- [ ] `src/app/page.tsx`
- [ ] `src/app/globals.css`
- [ ] `src/app/sitemap.ts`
- [ ] `src/app/robots.ts`

### Layout
- [ ] `src/components/layout/Header.tsx`
- [ ] `src/components/layout/Footer.tsx`
- [ ] `src/components/layout/MobileNav.tsx`

### Sections
- [ ] `src/components/sections/Hero.tsx`
- [ ] `src/components/sections/WhyBolexman.tsx`
- [ ] `src/components/sections/About.tsx`
- [ ] `src/components/sections/Academics.tsx`
- [ ] `src/components/sections/Admissions.tsx`
- [ ] `src/components/sections/CampusLife.tsx`
- [ ] `src/components/sections/FeaturedNews.tsx`
- [ ] `src/components/sections/Testimonials.tsx`
- [ ] `src/components/sections/Achievements.tsx`
- [ ] `src/components/sections/GalleryShowcase.tsx`
- [ ] `src/components/sections/VirtualTour.tsx`
- [ ] `src/components/sections/EventCalendar.tsx`
- [ ] `src/components/sections/FAQ.tsx`
- [ ] `src/components/sections/CTABanner.tsx`

### UI
- [ ] `src/components/ui/Button.tsx`
- [ ] `src/components/ui/Card.tsx`
- [ ] `src/components/ui/GlassCard.tsx`
- [ ] `src/components/ui/SectionHeading.tsx`
- [ ] `src/components/ui/AnimatedCounter.tsx`
- [ ] `src/components/ui/FadeInView.tsx`
- [ ] `src/components/ui/Lightbox.tsx`
- [ ] `src/components/ui/SearchModal.tsx`

### Widgets
- [ ] `src/components/widgets/LiveChatWidget.tsx`
- [ ] `src/components/widgets/AIAssistantWidget.tsx`
- [ ] `src/components/widgets/DarkModeToggle.tsx`
- [ ] `src/components/widgets/LanguageSwitcher.tsx`

### Lib & Hooks
- [ ] `src/lib/utils.ts`
- [ ] `src/lib/constants.ts`
- [ ] `src/lib/animations.ts`
- [ ] `src/hooks/useScrollHeader.ts`
- [ ] `src/hooks/useInViewCounter.ts`
- [ ] `src/types/index.ts`

### Config & Assets
- [ ] `tailwind.config.ts`
- [ ] `next.config.ts`
- [ ] `public/og-image.jpg`
- [ ] `public/images/` (directory)
- [ ] `public/videos/` (directory)

---

## Estimated Build Order

| Step | Task | Est. Time | Status |
|------|------|-----------|--------|
| 0 | Tracking document | 10 min | ✅ Done |
| 1 | Scaffold + dependencies | 15 min | ⬜ |
| 2 | Design system | 20 min | ⬜ |
| 3 | Header, Footer, layout | 30 min | ⬜ |
| 4 | Hero + Why + About | 45 min | ⬜ |
| 5 | Academics + Admissions + Campus Life | 45 min | ⬜ |
| 6 | News + Testimonials + Achievements + Gallery | 45 min | ⬜ |
| 7 | Virtual Tour + Calendar + FAQ + CTA | 30 min | ⬜ |
| 8 | Widgets (chat, AI, search, dark mode) | 30 min | ⬜ |
| 9 | SEO, polish, QA, build verify | 30 min | ⬜ |

**Total estimated build time:** ~4–5 hours (after planning)

---

## Post-Launch Backlog

- [ ] Connect newsletter form to email service (Resend, Mailchimp)
- [ ] Wire Student Portal to real authentication
- [ ] Integrate live chat (Crisp, Intercom)
- [ ] CMS integration (Sanity, Contentful) for news/events
- [ ] Real i18n with `next-intl`
- [ ] Separate route pages (`/admissions`, `/academics`, etc.)
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Contact form backend

---

## Architecture

```
Next.js App Router
├── layout.tsx (fonts, theme, SEO, widgets)
├── page.tsx (all sections composed)
│
├── components/
│   ├── layout/     → Header, Footer, MobileNav
│   ├── sections/   → 14 page sections
│   ├── ui/         → Reusable primitives
│   └── widgets/    → Chat, AI, search, theme
│
├── lib/
│   ├── constants.ts  → All content/data
│   ├── animations.ts → Framer Motion variants
│   └── utils.ts      → cn() helper
│
└── public/
    ├── images/
    └── videos/
```

---

## Notes

- Do **not** start coding until each phase is explicitly approved.
- Update this file after completing each phase — change ⬜ to ✅ and check boxes.
- All copy and data lives in `constants.ts` for easy future CMS migration.
