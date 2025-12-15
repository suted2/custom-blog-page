# Project Context: custom-blog-page

## Project Overview
This is a personal portfolio and blog application built for a software engineer. It showcases projects (CV/Resume) and shares technical insights via a Markdown-based blog.

**Current Status:** Scaffolding Complete (Next.js + Shadcn UI + MDX)

## Architecture & Technologies
*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **UI Component Library:** shadcn/ui
*   **Content Management:** MDX (via `gray-matter` & `next-mdx-remote` logic) - currently local file system based.
*   **Icons:** Lucide React

## Directory Structure
*   `src/app`: Application routes.
    *   `page.tsx`: Landing page.
    *   `globals.css`: Global styles (Tailwind imports).
*   `src/components/ui`: Reusable UI components (shadcn).
*   `src/lib`: Utility functions.
    *   `posts.ts`: Logic to parse MDX files from `content/posts`.
    *   `utils.ts`: Class name merging utility (cn).
*   `content/posts`: Markdown/MDX files for blog posts.

## Building and Running
*   **Development Server:** `npm run dev`
*   **Production Build:** `npm run build`
*   **Start Production Server:** `npm run start`

## Development Conventions
*   **UI Components:** Use `npx shadcn@latest add [component]` to add new UI elements.
*   **Blog Posts:** Add `.mdx` files to `content/posts` with frontmatter (title, date, description, tags).
*   **Styling:** Use Tailwind utility classes. Avoid custom CSS when possible.