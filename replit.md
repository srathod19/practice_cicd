# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Express.js. The application features a clean, professional design showcasing personal information, skills, experience, and education. It's built as a full-stack application with a client-server architecture, ready for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React hooks and TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and Vite middleware

## Key Components

### Frontend Components
- **UI Components**: Extensive shadcn/ui component library including buttons, cards, forms, navigation, and more
- **Layout**: Responsive design with mobile-first approach
- **Portfolio Sections**: Home, About, Skills, Experience, Education, and Contact sections
- **Interactive Elements**: Smooth scrolling navigation, mobile menu, and form handling

### Backend Components
- **API Routes**: RESTful endpoints for resume download and contact form submission
- **File Serving**: Static file serving for resume downloads
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development Setup**: Vite middleware integration for seamless development

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Migrations**: Database schema versioning in the migrations directory

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles API requests and serves static files
3. **Database Operations**: Drizzle ORM manages database interactions (when needed)
4. **Response Handling**: Structured JSON responses with proper error handling
5. **File Downloads**: Direct file serving for resume downloads

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Utilities**: date-fns for date formatting

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: PostgreSQL via @neondatabase/serverless, Drizzle ORM
- **Session**: connect-pg-simple for session management
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Strict type checking with path mapping
- **Linting**: ESLint configuration
- **CSS Processing**: PostCSS with Tailwind CSS

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations can be pushed to PostgreSQL

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL
- **Development**: Uses NODE_ENV for environment-specific behavior
- **Production**: Serves static files from the built frontend

### Replit Integration
- **Development Server**: Runs on tsx with hot reload
- **Production**: Uses Node.js to serve the built application
- **Database**: Configured for Neon PostgreSQL (serverless)
- **File Structure**: Optimized for Replit's file system with proper gitignore

### Key Features
- **Resume Download**: Direct PDF download functionality
- **Contact Form**: Form submission with validation (backend ready)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Optimized builds with code splitting and lazy loading
- **Type Safety**: Full TypeScript coverage across frontend and backend

The application is structured as a monorepo with clear separation between client and server code, making it easy to develop and deploy as a unified portfolio website.