import { getSortedProjectsData } from '@/lib/projects';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github } from 'lucide-react';

export default function ProjectsPage() {
  const allProjects = getSortedProjectsData();

  return (
    <div className="container mx-auto max-w-5xl py-12 px-6">
       <Button variant="ghost" asChild className="mb-8 pl-0">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
      </Button>

      <section className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A collection of my toy projects and experiments.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map(({ slug, date, title, description, tags, githubUrl }) => (
          <Link key={slug} href={`/projects/${slug}`} className="block group">
            <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-muted/60 bg-card/50 hover:bg-card hover:border-border">
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 flex items-center gap-2">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-xs">{date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto flex flex-col items-start gap-4">
                 <div className="flex flex-wrap gap-2">
                    {tags && tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            #{tag}
                        </Badge>
                    ))}
                </div>
                {githubUrl && (
                     <span className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground">
                        <Github className="h-3 w-3" /> GitHub
                     </span>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
