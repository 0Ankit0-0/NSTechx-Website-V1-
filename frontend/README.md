# NStechX Frontend

React + TypeScript + Vite frontend application for NStechX website.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components
- **React Router v6** - Client-side routing
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Tanstack Query** - Data fetching (configured)

## 📁 Project Structure

```
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Images, logos, static files
│   │   ├── hero-fintech.jpg
│   │   ├── about-office.jpg
│   │   ├── product-verifai.jpg
│   │   ├── logo_wo_bg.png
│   │   ├── NSTechX.png
│   │   └── Verif w TM.png
│   │
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/             # shadcn/ui components
│   │   └── AnimatedSection.tsx
│   │
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── RequestDemo.tsx
│   │   ├── NotFound.tsx
│   │   ├── ComingSoon.tsx
│   │   └── products/
│   │       └── ReconciliationBanks.tsx
│   │
│   ├── hooks/              # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                # Utilities
│   │   └── utils.ts
│   │
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global styles
│   ├── index.css           # Tailwind imports
│   └── main.tsx            # Entry point
│
├── index.html              # HTML template
├── package.json
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind config
├── vite.config.ts          # Vite config
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Production
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript types
```

## 🎨 Design System

### Colors (HSL Format)

```css
/* Light Mode */
--primary: 134 98% 38%        /* Green */
--accent: 15 83% 51%          /* Orange */
--background: 0 0% 100%       /* White */
--foreground: 220 15% 15%     /* Dark Gray */

/* Dark Mode */
--primary: 134 98% 45%        /* Lighter Green */
--accent: 15 83% 55%          /* Lighter Orange */
--background: 220 27% 8%      /* Dark Blue-Gray */
--foreground: 0 0% 98%        /* Off-White */
```

### Typography

- **Sans-serif:** Inter (primary)
- **Serif:** Lora (headings)
- **Mono:** Space Mono (code)

### Spacing Scale

Based on 0.25rem (4px) increments via Tailwind.

## 🧩 Component Library

### UI Components (shadcn/ui)

Pre-built components in `src/components/ui/`:

- `button` - Button variants and sizes
- `card` - Card container
- `form` - Form components
- `input` - Text inputs
- `textarea` - Multiline text
- `toast` - Notification system
- `dialog` - Modal dialogs
- And 40+ more...

### Custom Components

- **AnimatedSection** - Scroll-triggered animations
- **FadeIn** - Simple fade-in animation
- **Navbar** - Responsive navigation with dropdown
- **Footer** - Site footer with links
- **Layout** - Page layout wrapper

## 🎭 Animations

Using Framer Motion for smooth animations:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## 🛣️ Routing

Routes configured in `App.tsx`:

```
/ - Home page
/about - About us
/contact - Contact page
/request-demo - Demo request form
/reconciliation-banks - Verif.ai product page
/reconciliation-nbfcs - Coming soon
/reconciliation-insurance - Coming soon
/reconciliation-fintechs - Coming soon
/unified-lending-interface - Coming soon
/fraud-risk-management - Coming soon
/our-team - Coming soon
/careers - Coming soon
/newsletter-media - Coming soon
* - 404 Not Found
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```tsx
// Tailwind breakpoints
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1536px  // Extra large desktop
```

## 🔌 API Integration

### Environment Variables

Create `.env` in frontend root:

```env
VITE_API_URL=http://localhost:3000
```

For production:
```env
VITE_API_URL=https://your-api-domain.com
```

### API Calls

Example from `RequestDemo.tsx`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const response = await fetch(`${API_URL}/api/request-demo`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
```

## 🎯 Form Validation

Using React Hook Form + Zod:

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, "Too short"),
  email: z.string().email("Invalid email"),
});

const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: {
    firstName: "",
    email: "",
  },
});
```

## 🎨 Styling

### Tailwind CSS

Primary styling method using utility classes:

```tsx
<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
  {/* Content */}
</div>
```

### Custom CSS

Global styles in `index.css`:

```css
@layer utilities {
  .bg-gradient-green {
    background: var(--gradient-green);
  }
}
```

## 🚀 Building for Production

```bash
# Build the app
npm run build

# Output will be in dist/ folder
# Upload dist/ to your hosting provider
```

### Build Optimization

- Code splitting by route
- Asset optimization
- Tree shaking
- Minification
- Source maps (optional)

## 📦 Adding New Pages

1. Create page component in `src/pages/`:

```tsx
// src/pages/NewPage.tsx
export default function NewPage() {
  return (
    <section className="py-20">
      <h1>New Page</h1>
    </section>
  );
}
```

2. Add route in `App.tsx`:

```tsx
import NewPage from "./pages/NewPage";

// In routes
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Navbar.tsx` if needed.

## 🎨 Adding shadcn/ui Components

```bash
# Add a new component
npx shadcn-ui@latest add button

# Component will be added to src/components/ui/
```

## 🐛 Common Issues

### Issue: Module not found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind classes not working

- Ensure class names are in `tailwind.config.js` content paths
- Check for typos in class names
- Restart dev server

### Issue: TypeScript errors

```bash
# Check types
npm run type-check

# Update TypeScript
npm install -D typescript@latest
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## 👥 Team Conventions

- Use functional components with hooks
- Follow TypeScript strict mode
- Use named exports for components
- Keep components small and focused
- Write self-documenting code
- Add comments for complex logic

---

Built with React + Vite + TypeScript