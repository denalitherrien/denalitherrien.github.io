# Project Structure

This document outlines the folder structure of the Nuxt.js portfolio project, including the purpose of each directory and file.

## Root Directory

- `.data/` - Contains local development data files (not committed to version control)
- `.git/` - Git repository metadata
- `.nuxt/` - Generated Nuxt build files (not committed to version control)
- `.output/` - Production build output (not committed to version control)
- `app/` - Main application source directory (customized srcDir) - will be default in v4
- `layers/` - Reserved for Nuxt layers for code organization and reusability
- `modules/` - Reserved for custom Nuxt modules
- `public/` - Static assets served at the root path
- `server/` - Server-side code and API endpoints

## App Directory (`app/`)

- `app.config.ts` - App-level configuration
- `app.vue` - Main Vue application entry point
- `assets/` - Unprocessed assets like styles, images, and fonts
- `components/` - Vue components reusable across the application
- `composables/` - Vue composables for shared stateful logic
- `layouts/` - Page layouts that can be used across multiple pages
- `middleware/` - Navigation guards executed before page rendering
- `pages/` - Application pages and routes
- `plugins/` - Vue plugins that run before mounting the app
- `utils/` - Utility functions and helpers

## Server Directory (`server/`)

- `api/` - API endpoints using Nitro server routes
- `middleware/` - Server middleware for request processing
- `plugins/` - Server plugins for extending Nitro functionality
- `routes/` - Custom server routes - routes at api will always be at api/example, 
              whereas those made in the routes folder will build off the root /
- `tsconfig.json` - TypeScript configuration for server code
- `utils/` - Server-side utility functions

## Public Directory (`public/`)

Contains static assets that are served directly at the root URL path:
- `favicon.ico` - Website favicon
- `robots.txt` - Instructions for web crawlers

## Configuration Files

- `.env.example` 
- `.gitignore` 
- `eslint.config.mjs`
- `nuxt.config.ts`
- `package.json` 
- `package-lock.json` 
- `tsconfig.json`

## Generated Directories

These directories are generated during development/build and are not committed to version control:
- `.nuxt/` - Development build files
- `.output/` - Production build output
- `node_modules/` - Installed dependencies

## Module System

- `modules/` - Reserved for custom Nuxt modules development
- `layers/` - Reserved for Nuxt layers to organize and share code between projects
