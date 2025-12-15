import { getSortedExperiencesData } from '@/lib/experiences';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase } from 'lucide-react';

export default function ExperiencePage() {
  const allExperiences = getSortedExperiencesData();

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
          Work Experience
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A detailed record of my professional journey and technical achievements.
        </p>
      </section>

      <div className="grid gap-6">
        {allExperiences.map(({ slug, company, role, startDate, endDate, description, tags }) => (
          <Link key={slug} href={`/experience/${slug}`} className="block group">
            <Card className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-muted/60 bg-card/50 hover:bg-card hover:border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="space-y-1">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-muted-foreground" />
                            {company}
                        </CardTitle>
                         <h3 className="text-lg font-medium text-muted-foreground">{role}</h3>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-secondary/50 px-3 py-1 rounded-full">
                        {startDate} — {endDate}
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {description}
                </p>
              </CardContent>
              <CardFooter>
                 <div className="flex flex-wrap gap-2">
                    {tags && tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            #{tag}
                        </Badge>
                    ))}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
