import { getExperienceData, getSortedExperiencesData } from '@/lib/experiences';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import Mermaid from '@/components/mermaid';

// Custom components for MDX (reusing Mermaid support)
const components = {
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const match = /language-mermaid/.exec(className || '');
    if (match) {
        return <Mermaid chart={String(children).replace(/\n$/, '')} />;
    }
    return <code className={className} {...props}>{children}</code>;
  },
  Mermaid,
};

export async function generateStaticParams() {
  const experiences = getSortedExperiencesData();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let experience;
  try {
    experience = getExperienceData(slug);
  } catch {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-6">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 -ml-4 pl-3 text-muted-foreground hover:text-foreground">
          <Link href="/experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </Link>
        </Button>

        <div className="space-y-4">
             <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
                <Briefcase className="h-4 w-4" />
                {experience.company}
             </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {experience.role}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-md text-sm font-medium text-foreground/80">
                    <Calendar className="h-4 w-4 opacity-70" />
                    <time dateTime={experience.startDate}>{experience.startDate}</time>
                    <span>—</span>
                    <time dateTime={experience.endDate}>{experience.endDate}</time>
                </div>
                <div className="flex gap-2">
                    {experience.tags && experience.tags.map(tag => (
                        <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={experience.content} components={components} />
      </div>
    </article>
  );
}
