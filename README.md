# CodeRoom.Online - Modern Website

## ✨ Features Implemented

### 🎨 Design
- **Modern, Clean UI** using DaisyUI components
- **Fully Responsive** - Mobile-first design
- **Smooth Animations** with Framer Motion
- **Theme Switcher** - 6 beautiful themes (Light, Dark, Synthwave, Cyberpunk, Valentine, Aqua)
- **Gradient Accents** - Purple, Indigo, Pink color scheme

### 📦 Packages Used
- **Next.js 16** - React framework
- **Tailwind CSS v4** - Styling
- **DaisyUI** - Component library
- **Framer Motion** - Animations
- **Swiper** - Testimonial carousel
- **React Icons** - Icon library
- **theme-change** - Theme switching

### 📄 Sections

1. **Navbar**
   - Sticky navigation with scroll effect
   - Mobile responsive menu
   - Theme toggler dropdown
   - Smooth animations

2. **Hero Section**
   - Eye-catching gradient background
   - Animated floating elements
   - Code mockup showcase
   - Stats display
   - CTA buttons

3. **Courses Section**
   - 6 course cards with details
   - Icons and badges
   - Pricing and duration
   - Hover animations
   - Custom CTA card

4. **Testimonials**
   - Grid layout for desktop
   - Swiper carousel for mobile
   - Star ratings
   - Student avatars
   - Stats section

5. **Contact Section**
   - WhatsApp integration
   - Phone, Email, Location cards
   - Contact form with validation
   - Hover effects

6. **Footer**
   - Social media links
   - Quick links
   - Contact information
   - Responsive layout

## 🎯 To Customize

### Update Contact Details
Replace placeholders in:
- `components/Contact.jsx` - WhatsApp link, phone, email
- `components/Footer.jsx` - Contact info and social links
- `components/Navbar.jsx` - WhatsApp link in mobile menu

### Change Themes
The theme toggler offers 6 themes. To add more, edit:
- `components/Navbar.jsx` - Add theme buttons in dropdown

Available DaisyUI themes: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset

### Modify Colors
Edit `app/globals.css`:
```css
--color-primary: #6366f1;
--color-secondary: #8b5cf6;
--color-accent: #ec4899;
```

## 🚀 Running the Site

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚠️ CSS Warnings
The `@plugin` and `@theme` warnings in globals.css are expected - they're Tailwind v4 directives and work correctly.

---

**Built with ❤️ for CodeRoom.Online**
