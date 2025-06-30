# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Overview

This is a React-based website for SkyBrain, a brain-computer interface (BCI) company. The project uses:

- **Vite** as the build tool and dev server
- **React 18** with TypeScript
- **React Router** for client-side routing
- **shadcn/ui** components built on Radix UI
- **Tailwind CSS** for styling with custom neural/brain-themed colors and animations
- **TanStack Query** for state management
- **Lovable** platform integration for development

### Key Structure

- `/src/pages/` - Route components (Index, Technology, Applications, Research, Videos, Contact)
- `/src/components/` - Reusable UI components, including page sections
- `/src/components/ui/` - shadcn/ui component library
- `/src/lib/utils.ts` - Utility functions and shared logic
- `/src/hooks/` - Custom React hooks

### Routing

Single-page application with React Router:
- `/` - Home page (Index)
- `/technology` - Technology page
- `/applications` - Applications page  
- `/research` - Research page
- `/videos` - Videos page
- `/contact` - Contact page

### Theming

Custom color palette for neural/brain theme:
- `neural-blue`: #00D4FF
- `deep-space`: #0A0A23
- `mind-purple`: #6B46FF
- `ghost-white`: #F8F8FF
- `neural-gray`: #8892B0
- `shadow-black`: #1E1E3F

Custom animations: `neural-pulse`, `glow-breathe`, `fade-in-up`, `float`

### Component Architecture

- Components are modular and focused on specific page sections
- Uses shadcn/ui design system for consistent UI patterns
- Navigation component shared across all pages
- Footer component shared across all pages
- Page components compose multiple section components

### Development Workflow

This project integrates with the Lovable platform. Changes made locally should be committed to sync with the Lovable project interface.