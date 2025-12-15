import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostData(slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-6">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 -ml-4 pl-3 text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <div className="flex gap-2">
             {post.tags && post.tags.map(tag => (
                <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                    #{tag}
                </span>
            ))}
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
