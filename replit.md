# Overview

This is a home design consulting and project management web application for Haydenworx, a business based in Gainesville, GA. The application serves as a marketing website showcasing services including home design consulting, residential project management, and interior design services. It features a contact form for client inquiries and provides information about the company founder Jeff Hayden's expertise in construction and design.

# User Preferences

Preferred communication style: Simple, everyday language.
Azure Integration: User is an Azure Architect consultant interested in integrating with Azure and M365 environment for enterprise features.

# System Architecture

## Frontend Architecture
The client-side application is built using React with TypeScript, leveraging modern web development patterns:

- **React Framework**: Single-page application using functional components and hooks
- **Routing**: Wouter library for lightweight client-side routing with two main routes (home and contact)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom color scheme and typography using Inter font
- **State Management**: React Query (TanStack Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
The server-side follows a RESTful API pattern with Express.js:

- **Web Framework**: Express.js with TypeScript for type safety
- **Storage Layer**: Currently using in-memory storage with interface-based design for easy database migration
- **API Design**: RESTful endpoints for contact form submissions with proper error handling
- **Validation**: Zod schemas for runtime type validation and data sanitization
- **Development Setup**: Vite integration for hot module replacement and development server

## Build and Development Tools
- **Build System**: Vite for fast development builds and optimized production bundles
- **TypeScript**: Full TypeScript support across client, server, and shared code
- **Code Quality**: ESLint and TypeScript compiler for code quality and type checking
- **Path Aliases**: Configured path mapping for cleaner imports (@/, @shared/, @assets/)

## Database Design
Current schema includes:
- **Users Table**: Basic user authentication structure (currently unused in frontend)
- **Contact Submissions Table**: Stores client inquiries with personal information, service type, and messages
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL dialect configuration

The application uses Drizzle Kit for database migrations and schema management, currently configured for PostgreSQL but using in-memory storage for development.

## Azure Integration Architecture
The application has been configured for Azure Static Web Apps deployment with the following components:
- **Azure Static Web Apps**: Frontend hosting with global CDN and automatic SSL
- **Azure Functions**: Serverless backend API for contact form processing
- **GitHub Actions**: Automated CI/CD pipeline for deployment
- **Azure-ready scaling**: Configured for enterprise-grade hosting and monitoring

### Deployment Structure
- Frontend builds to `client/dist` for static hosting
- Backend migrated to Azure Functions in `api/` directory
- GitHub Actions workflow handles automatic deployment
- CORS and security headers configured for production
- Environment variables managed through Azure portal

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support
- **Connection Pooling**: Connect-pg-simple for session management (configured but not actively used)

## UI and Styling
- **Radix UI**: Comprehensive collection of accessible React components
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Class Variance Authority**: Type-safe variant management for component styling
- **Lucide React**: Icon library for consistent iconography

## Development and Build Tools
- **Vite**: Fast build tool with React plugin and runtime error overlay
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Replit Integration**: Development banner and cartographer plugin for Replit environment

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Additional Libraries
- **Date-fns**: Modern date utility library for date formatting
- **clsx/twMerge**: Utility functions for conditional CSS class management
- **Wouter**: Lightweight routing library for React applications