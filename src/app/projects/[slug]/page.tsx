import { getProjectData, getSortedProjectsData } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github } from 'lucide-react';
import { notFound } from 'next/navigation';
import Mermaid from '@/components/mermaid';

// Custom components for MDX
const components = {
  // If the user writes ```mermaid ... ``` in markdown, we can intercept it if we parse AST,
  // but for simplicity with standard MDX, we can let them use <Mermaid chart={`...`} /> or handle code blocks.
  // However, `next-mdx-remote` doesn't easily replace code blocks with components without a plugin like `rehype-react` or similar custom logic.
  // A simpler approach for the user: explicit <Mermaid> component usage or a custom CodeBlock component.
  // Let's assume the user puts the mermaid code in a code block with language "mermaid".
  // We can override the `pre` or `code` component.
  // BUT, handling that in RSC is tricky.
  // Let's provide a <Mermaid chart="..."> component usage in MDX or a simpler usage:
  // The user wrote ```mermaid in the sample.
  // Let's try to map the `code` component.
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const match = /language-mermaid/.exec(className || '');
    if (match) {
        return <Mermaid chart={String(children).replace(/\n$/, '')} />;
    }
    return <code className={className} {...props}>{children}</code>;
  },
  Mermaid, // Also allow direct component usage
};


export async function generateStaticParams() {
  const projects = getSortedProjectsData();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectData(slug);
  } catch {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-6">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 -ml-4 pl-3 text-muted-foreground hover:text-foreground">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {project.title}
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <time dateTime={project.date}>{project.date}</time>
            <span>•</span>
            <div className="flex gap-2">
                {project.tags && project.tags.map(tag => (
                    <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                        #{tag}
                    </span>
                ))}
            </div>
            {project.githubUrl && (
                 <>
                    <span>•</span>
                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-1 hover:text-foreground">
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                 </>
            )}
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={project.content} components={components} />
      </div>
    </article>
  );
}
