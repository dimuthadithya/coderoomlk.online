# CodeRoom.Online - Premium Coding Mentorship Platform

## 🚀 Project Overview

A high-performance, visually stunning web platform for **CodeRoom.Online**, a premium coding mentorship program in Sri Lanka. Built with **Next.js 16**, **Tailwind CSS v4**, and **DaisyUI 5**, focusing on engaging UX, glassmorphism, and data-driven content.

## ✨ Key Features

### 🎨 Design & UI

- **Premium Glassmorphism:** Custom glass cards, blurs, and sophisticated gradients.
- **Floating Island Navbar:** Modern, responsive navigation that adapts to scroll.
- **Bento Grid Layout:** A trend-setting grid to showcase features and benefits.
- **Infinite Marquees:** Smooth, continuous scrolling for Tech Stack and Testimonials.
- **Interactive Elements:** Floating CTAs, Hover effects, and AnimatePresence modals.
- **Theme Awareness:** Fully dark/light mode compatible (Default: Night).

### 🛠️ Functionality

- **Data-Driven Content:**
  - **Instructor Profile:** Powered by `data/instructor.json` & GitHub API.
  - **Testimonials:** Powered by `data/testimonials.json`.
  - **GitHub Sync:** Automated script to fetch real-time stats (Repos, Followers).
- **Dynamic Routing:**
  - **Home:** Main landing page with all key sections.
  - **Courses:** Dedicated sales landing page for new batch registration.
- **SEO Optimized:** Comprehensive metadata, Open Graph cards, and JSON-LD structure.

## 📂 Project Structure

### Data Management

- `data/instructor.json`: Stores instructor bio, links, and stats.
- `data/testimonials.json`: Stores student feedback.
- `scripts/fetch-github.js`: Fetches live data from GitHub API.

### Key Components

- **FloatingCTA**: Smart "Register Now" button that appears on scroll.
- **Instructor**: Detailed profile with social links, skills, and education.
- **Testimonials**: Infinite scrolling reviews with "See More" modals.
- **BentoGrid**: "Why CodeRoom" value proposition display.

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

### 3. Update Data

To sync Instructor stats with GitHub:

```bash
npm run update-profile
```

## 🛠️ Configuration

### Customizing Data

Edit the JSON files in the `data/` folder to update content without touching code.

### Theming

The project uses **DaisyUI 5**.

- **Global Styles:** `app/globals.css` (custom gradient utilities).
- **Theme Config:** `app/layout.jsx` and `components/ThemeProvider.jsx`.

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Kit:** DaisyUI 5
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Utils:** clsx, tailwind-merge

---

**Maintained by Dimuth Adithya for CodeRoom.Online**
