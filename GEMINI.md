# Project Context: custom-blog-page

## Project Overview
This is a personal portfolio and blog application built for a software engineer. It showcases projects (CV/Resume) and shares technical insights via a Markdown-based blog.

**Current Status:** Active Development

## Architecture & Technologies
*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
*   **UI Component Library:** shadcn/ui
*   **Content Management:** 
    *   MDX (via `gray-matter` & `next-mdx-remote`) for Blog Posts and Projects.
    *   Static Data (`src/data/resume.ts`) for Resume/CV.
*   **Diagrams:** Mermaid.js (via `mermaid` package)
*   **Utilities:** `date-fns` for date formatting.
*   **Icons:** Lucide React

## Directory Structure
*   `src/app`: Application routes.
    *   `page.tsx`: Landing page.
    *   `globals.css`: Global styles (Tailwind imports).
    *   `about/`: About page (Resume/CV).
    *   `posts/`: Blog posts routes.
        *   `[slug]/`: Individual blog post page.
    *   `projects/`: Projects portfolio routes.
        *   `[slug]/`: Individual project details page.
*   `src/components`:
    *   `ui/`: Reusable UI components (shadcn/ui).
    *   `mermaid.tsx`: Component for rendering Mermaid diagrams.
    *   `nav.tsx`: Navigation component.
*   `src/lib`: Utility functions.
    *   `posts.ts`: Logic to parse MDX files from `content/posts`.
    *   `projects.ts`: Logic to parse MDX files from `content/projects`.
    *   `utils.ts`: Class name merging utility (cn).
*   `src/data`: Static data files.
    *   `resume.ts`: Structured data for the CV/Resume section.
*   `content`:
    *   `posts/`: Markdown/MDX files for blog posts.
    *   `projects/`: Markdown/MDX files for project descriptions.

## Building and Running
*   **Development Server:** `npm run dev`
*   **Production Build:** `npm run build`
*   **Start Production Server:** `npm run start`
*   **Lint:** `npm run lint`

## Development Conventions
*   **UI Components:** Use `npx shadcn@latest add [component]` to add new UI elements.
*   **Blog Posts:** Add `.mdx` files to `content/posts` with frontmatter (title, date, description, tags).
*   **Projects:** Add `.mdx` files to `content/projects` with frontmatter (title, date, description, tags, githubUrl).
*   **Resume Data:** Update `src/data/resume.ts` for CV content changes.
*   **Styling:** Use Tailwind utility classes. Avoid custom CSS when possible.
*   **Diagrams:** Use the `<Mermaid chart="..." />` component for diagrams in MDX or React components.
