import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto max-w-5xl py-12 px-6">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Mingyu's Space
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Software Engineer | Problem Solver | Tech Enthusiast <br/>
          Sharing knowledge and building cool things.
        </p>
        <div className="flex justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/about">About Me</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com">GitHub</Link>
            </Button>
        </div>
      </section>

      <Separator className="my-12" />

      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
            <Link href="/posts" className="text-sm text-muted-foreground hover:text-foreground">
                View all posts &rarr;
            </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPostsData.map(({ slug, date, title, description, tags }) => (
            <Link key={slug} href={`/posts/${slug}`} className="block group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-muted/60 bg-card/50 hover:bg-card hover:border-border">
                  <CardHeader>
                    <div className="space-y-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
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
                  <CardFooter>
                    <div className="flex flex-wrap gap-2 mt-auto">
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
      </section>
    </div>
  );
}