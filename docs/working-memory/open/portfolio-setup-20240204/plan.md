# Task Plan (portfolio-setup-20240204)

Reference: [Task Updates](./updates.md)

## Problem Analysis

- Create a professional portfolio website for Dan Malone's fractional CTO consulting services
- Need to showcase professional experience, services, and expertise
- Current absence of an online presence for consulting services
- Target audience: Companies seeking fractional CTO services

## Solution Design

### Approach

- Build using Next.js 14 with App Router for optimal performance and SEO
- Implement modern, responsive design using Tailwind CSS and shadcn/UI
- Use TypeScript for type safety and better development experience
- Implement MDX for blog posts and case studies
- Deploy on Vercel for optimal performance and reliability

### Considerations

#### Pros

- Next.js 14 provides excellent SEO capabilities and performance
- App Router enables better code organization and server components
- Tailwind CSS ensures responsive design and maintainable styles
- shadcn/UI provides high-quality, accessible components
- TypeScript ensures type safety and better maintainability

#### Technical Implications

- Need to set up proper TypeScript configuration
- Implement proper metadata for SEO
- Ensure accessibility standards are met
- Set up proper CI/CD pipeline

#### Security Considerations

- Implement proper CSP headers
- Secure form submissions
- Regular dependency updates
- Protected admin routes if needed

#### Performance Impact

- Optimize images using Next.js Image component
- Implement proper caching strategies
- Use server components where possible
- Implement proper code splitting

## Implementation Steps

- [ ] Project Setup

  - [ ] Initialize Next.js 14 project with TypeScript
  - [ ] Set up Tailwind CSS and shadcn/UI
  - [ ] Configure ESLint and Prettier
  - [ ] Set up Git repository structure

- [ ] Core Infrastructure

  - [ ] Set up project directory structure following standards
    - [ ] Create components directory structure
    - [ ] Set up types directory
    - [ ] Configure utils and lib folders
  - [ ] Configure base layouts and templates
    - [ ] Create RootLayout with metadata
    - [ ] Set up error boundary
    - [ ] Implement loading states
  - [ ] Implement metadata configuration
    - [ ] Configure SEO defaults
    - [ ] Set up OpenGraph data
    - [ ] Add favicon and icons
  - [ ] Set up error and loading states
    - [ ] Global error handling
    - [ ] Skeleton loading components
    - [ ] Page loading states

- [ ] Content Structure

  - [ ] Set up content organization
    - [ ] Create page-based content structure
    - [ ] Set up MDX content handling
    - [ ] Configure metadata utilities
  - [ ] Create page content
    - [ ] Home page content and metadata
    - [ ] About page structure
    - [ ] Services page structure
    - [ ] Portfolio page structure
    - [ ] Contact page structure
  - [ ] Implement content types
    - [ ] Define TypeScript interfaces for content
    - [ ] Set up content validation
    - [ ] Create content utilities

- [ ] Component Development

  - [ ] Create typography system

    - [ ] Set up font configuration
      - [ ] Lora for headings (serif)
      - [ ] Satoshi for body text (sans-serif)
      - [ ] Font weights: Regular (400), Medium (500), Bold (700)
      - [ ] Configure font fallbacks
    - [ ] Implement typography styles
      - [ ] Heading scales (h1: 48px+, h2: 36px, h3: 24px, etc.)
      - [ ] Body text sizes (base: 16px, small: 14px, large: 18px)
      - [ ] Line heights (headings: 1.2, body: 1.5)
      - [ ] Letter spacing adjustments
    - [ ] Create typography documentation
    - [ ] Test typography implementation

  - [ ] Create header/navigation component

    - [ ] Logo and brand text
      - [ ] "Dan Malone" in Lora, bold
      - [ ] "Fractional CTO" in Satoshi, medium weight
      - [ ] Proper spacing between text elements
    - [ ] Responsive navigation menu
      - [ ] Links: About, Services, Portfolio, Contact
      - [ ] Text in Satoshi, medium weight
      - [ ] Hover state: Text color change with smooth transition
      - [ ] Active state: Bold weight or underline
    - [ ] Contact button
      - [ ] Black background (#1C1917)
      - [ ] White text
      - [ ] Rounded corners (20px)
      - [ ] Hover effect: Slight scale (1.05) and shadow
    - [ ] Mobile menu
      - [ ] Hamburger icon with smooth animation
      - [ ] Slide-in menu from right
      - [ ] Backdrop blur effect
      - [ ] Close button with transition
    - [ ] Smooth transitions (0.3s ease-in-out)

  - [ ] Implement hero section

    - [ ] Component structure
    - [ ] Layout
      - [ ] Desktop: 2-column (60% text, 40% image)
      - [ ] Mobile: Single column, text-centered
      - [ ] Container max-width: 1200px
      - [ ] Padding: desktop (4rem), mobile (2rem)
    - [ ] Badge component
      - [ ] Light mint/sage green background (#E7F5EF)
      - [ ] Small circular indicator (6px, #16A34A)
      - [ ] Text: "Fractional CTO" in Satoshi Medium
      - [ ] Subtle border (1px, rgba(0,0,0,0.1))
      - [ ] Border radius: 9999px (full)
      - [ ] Padding: 0.5rem 1rem
    - [ ] Heading
      - [ ] Gradient text: #1E293B to #334155
      - [ ] Font: Lora Bold, 48px+
      - [ ] Line height: 1.2
      - [ ] Max-width: 600px
    - [ ] Subheading
      - [ ] Color: #475569
      - [ ] Font: Satoshi Regular, 18px
      - [ ] Line height: 1.6
      - [ ] Max-width: 540px
    - [ ] CTA buttons
      - [ ] Primary: Black bg (#1C1917), white text
      - [ ] Secondary: Transparent, black border
      - [ ] Both: 20px border radius
      - [ ] Hover: Scale 1.05, shadow
      - [ ] Mobile: Stack vertically, full width
    - [ ] Profile image
      - [ ] Border radius: 24px
      - [ ] Shadow: lg (Tailwind)
      - [ ] Responsive sizing
      - [ ] Optional: Subtle hover rotation

  - [ ] Create services section

    - [ ] Section container
      - [ ] Background: Off-white (#FAF9F7)
      - [ ] Padding: desktop (6rem), mobile (3rem)
      - [ ] Max-width: 1200px
    - [ ] Section heading
      - [ ] Gradient text (same as hero)
      - [ ] Font: Lora Bold, 36px
      - [ ] Centered alignment
      - [ ] Bottom margin: 3rem
    - [ ] Service cards grid
      - [ ] Grid: 3 columns desktop, 2 tablet, 1 mobile
      - [ ] Gap: 2rem
      - [ ] Individual cards:
        - [ ] Background: white
        - [ ] Border radius: 24px
        - [ ] Shadow: sm (Tailwind)
        - [ ] Padding: 2rem
        - [ ] Icon: 48px, brand color
        - [ ] Title: Lora Medium, 24px
        - [ ] Description: Satoshi Regular, 16px
        - [ ] Learn more: Underline on hover
        - [ ] Hover: Slight lift (transform: translateY(-4px))

  - [ ] Build tools section

    - [ ] Container
      - [ ] Background: white
      - [ ] Max-width: 1200px
      - [ ] Padding: 4rem
    - [ ] Tools grid
      - [ ] 4 columns desktop, 3 tablet, 2 mobile
      - [ ] Gap: 1.5rem
      - [ ] Tool items:
        - [ ] Logo: 40px height, auto width
        - [ ] Name: Satoshi Medium, 16px
        - [ ] Category: Light gray badge
        - [ ] Hover: Scale 1.05
        - [ ] Background: white
        - [ ] Border: 1px solid rgba(0,0,0,0.1)
        - [ ] Border radius: 16px
        - [ ] Padding: 1rem

  - [ ] Create testimonials section

    - [ ] Container
      - [ ] Background: Light gray (#F8FAFC)
      - [ ] Padding: 6rem 2rem
    - [ ] Carousel
      - [ ] Cards with 30px gap
      - [ ] Smooth scroll behavior
      - [ ] Navigation arrows
        - [ ] Circle background
        - [ ] Hover effect
        - [ ] Mobile: Hide or adjust position
    - [ ] Testimonial cards
      - [ ] Background: white
      - [ ] Border radius: 24px
      - [ ] Shadow: md (Tailwind)
      - [ ] Padding: 2rem
      - [ ] Quote: Lora Regular, 18px
      - [ ] Author: Satoshi Bold
      - [ ] Position: Satoshi Regular, gray
      - [ ] Company: Satoshi Medium
      - [ ] Optional: Company logo

  - [ ] Implement "Real Projects, Real Impact" section

    - [ ] Container
      - [ ] Background: White
      - [ ] Max-width: 1200px
      - [ ] Padding: desktop (6rem), mobile (3rem)
    - [ ] Heading
      - [ ] Gradient text effect (same as hero)
      - [ ] Font: Lora Bold, 36px
      - [ ] Centered alignment
    - [ ] Stats grid
      - [ ] 4 columns desktop, 2 mobile
      - [ ] Gap: 2rem
      - [ ] Individual stat cards:
        - [ ] Number: Lora Bold, 48px
        - [ ] Counter animation: 2s duration
        - [ ] Label: Satoshi Regular, 16px
        - [ ] Optional: Border or shadow
        - [ ] Hover: Slight scale
    - [ ] Animations
      - [ ] Count up effect
      - [ ] Intersection observer for trigger
      - [ ] Smooth opacity transition
    - [ ] Mobile optimization
      - [ ] Stack in 2 columns
      - [ ] Adjusted font sizes
      - [ ] Maintained spacing

  - [ ] Implement blog/articles section

    - [ ] Section container
      - [ ] Background: Off-white (#FAF9F7)
      - [ ] Padding: desktop (6rem), mobile (3rem)
      - [ ] Max-width: 1200px
    - [ ] Section heading
      - [ ] Gradient text (same as hero)
      - [ ] Font: Lora Bold, 36px
      - [ ] Centered alignment
      - [ ] Bottom margin: 3rem
    - [ ] Article cards grid
      - [ ] Grid: 3 columns desktop, 2 tablet, 1 mobile
      - [ ] Gap: 2rem
      - [ ] Individual cards:
        - [ ] Background: white
        - [ ] Border radius: 24px
        - [ ] Shadow: sm (Tailwind)
        - [ ] Image: 16:9 ratio, object-fit: cover
        - [ ] Category badge: Same style as hero badge
        - [ ] Title: Lora Medium, 20px
        - [ ] Excerpt: Satoshi Regular, 16px, 2 lines max
        - [ ] Read time: Satoshi Regular, 14px, gray
        - [ ] Hover: Slight lift effect
        - [ ] Padding: 1.5rem

  - [ ] Build contact section

    - [ ] Section container
      - [ ] Background: white
      - [ ] Max-width: 800px
      - [ ] Padding: desktop (6rem), mobile (3rem)
      - [ ] Center aligned
    - [ ] Section heading
      - [ ] Gradient text (same as hero)
      - [ ] Font: Lora Bold, 36px
      - [ ] Bottom margin: 2rem
    - [ ] Contact form
      - [ ] Input fields:
        - [ ] Background: #F8FAFC
        - [ ] Border: 1px solid rgba(0,0,0,0.1)
        - [ ] Border radius: 12px
        - [ ] Padding: 1rem
        - [ ] Font: Satoshi Regular, 16px
      - [ ] Labels:
        - [ ] Font: Satoshi Medium, 14px
        - [ ] Color: #1E293B
        - [ ] Margin bottom: 0.5rem
      - [ ] Submit button:
        - [ ] Same style as hero primary button
        - [ ] Full width on mobile
      - [ ] Validation states:
        - [ ] Error: Red border (#EF4444)
        - [ ] Success: Green border (#10B981)
      - [ ] Loading state:
        - [ ] Disabled button with spinner
        - [ ] Opacity: 0.7

  - [ ] Create footer component
    - [ ] Container
      - [ ] Background: #1E293B
      - [ ] Padding: desktop (4rem), mobile (2rem)
      - [ ] Text color: white
    - [ ] Logo and tagline
      - [ ] Logo: Same as header but white
      - [ ] Tagline: Satoshi Regular, 16px, opacity: 0.8
    - [ ] Navigation
      - [ ] Links: Satoshi Medium, 14px
      - [ ] Hover: Opacity change
      - [ ] Grouped by category
    - [ ] Social links
      - [ ] Icons: 24px, white
      - [ ] Hover: Slight scale and glow
    - [ ] Copyright
      - [ ] Font: Satoshi Regular, 14px
      - [ ] Opacity: 0.6
    - [ ] Newsletter (if needed)
      - [ ] Input: Dark theme
      - [ ] Button: White text, hover effect
    - [ ] Responsive layout
      - [ ] Stack sections on mobile
      - [ ] Maintain spacing hierarchy
      - [ ] Center align on mobile

- [ ] Animations and Interactions

  - [ ] Scroll animations
    - [ ] Fade-in: 0.5s ease-out
    - [ ] Slide-in: 0.7s ease-out
    - [ ] Parallax: Subtle (0.1 - 0.2 factor)
    - [ ] Trigger: 20% element visibility
  - [ ] Hover animations
    - [ ] Buttons: Scale (1.05) + shadow
    - [ ] Cards: translateY(-4px) + shadow
    - [ ] Links: Color transition (0.2s)
  - [ ] Page transitions
    - [ ] Fade: 0.3s ease-in-out
    - [ ] Slide: Based on navigation direction
  - [ ] Loading animations
    - [ ] Spinner: Tailwind class
    - [ ] Skeleton: Pulse effect
    - [ ] Progress bar: Linear gradient

- [ ] Styling and UI

  - [ ] Color system
    - [ ] Primary palette:
      - [ ] Text: #1E293B (slate-900)
      - [ ] Background: #FFFFFF
      - [ ] Accent: #16A34A (green-600)
    - [ ] Gradient styles:
      - [ ] Text: #1E293B to #334155
      - [ ] Hover: Adjustable opacity
    - [ ] Dark mode colors (if needed):
      - [ ] Background: #0F172A
      - [ ] Text: #F8FAFC
      - [ ] Accent: Adjusted for contrast
  - [ ] Spacing system
    - [ ] Base unit: 0.25rem (4px)
    - [ ] Section padding: 6rem (desktop), 3rem (mobile)
    - [ ] Component spacing: 2rem
    - [ ] Element spacing: 1rem
  - [ ] Animation utilities
    - [ ] Transitions: 0.2s - 0.5s ease-in-out
    - [ ] Transforms: scale, translateY, rotate
    - [ ] Opacity changes: 0.8 - 1
  - [ ] Shadow system
    - [ ] sm: Subtle component shadows
    - [ ] md: Card and hover states
    - [ ] lg: Elevated components
    - [ ] Inner: Form elements

- [ ] Testing and Optimization

  - [ ] Implement unit tests
  - [ ] Add integration tests
  - [ ] Perform performance optimization
    - [ ] Image optimization
    - [ ] Code splitting
    - [ ] Bundle size optimization
  - [ ] Conduct accessibility testing
  - [ ] Cross-browser testing
  - [ ] Mobile testing

- [ ] Deployment and Analytics
  - [ ] Set up Vercel deployment
  - [ ] Configure custom domain
  - [ ] Set up analytics
    - [ ] Page views
    - [ ] User interactions
    - [ ] Form submissions
  - [ ] Implement monitoring
  - [ ] Set up error tracking

## Feature Documentation Impact

### Affected Features

- Feature: Portfolio Website
  - Files to update:
    - [ ] README.md - Project overview and setup instructions
    - [ ] architecture.md - Technical architecture documentation
    - [ ] components.md - Component documentation
    - [ ] api.md - API endpoints documentation if any
    - [ ] testing.md - Testing procedures and guidelines

### Documentation Review

- [ ] Create initial project documentation
- [ ] Document component library
- [ ] Create deployment guidelines
- [ ] Add content management documentation
- [ ] Document testing procedures

## Affected Components

- `/app/layout.tsx`

  - Create base layout
  - High impact
  - Requires layout tests

- `/app/components/`

  - Create all UI components
  - High impact
  - Requires component tests

- `/app/types/`
  - Define TypeScript interfaces
  - Medium impact
  - Requires type validation

## Testing Plan

### Unit Tests

- Component rendering tests
- Utility function tests
- Type validation tests

### Integration Tests

- Page navigation flows
- Form submissions
- Content loading

### Manual Testing

- Cross-browser testing
- Mobile responsiveness
- Accessibility testing
- Content management workflow

### Performance Testing

- Lighthouse scores
- Core Web Vitals
- Load testing
- SEO validation

## Dependencies

- Blocks: None
- Blocked by: None
- Related: None
