import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  githubUrl?: string;
  tags: string[];
  content: string;
};

export function getSortedProjectsData(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; date: string; description: string; githubUrl?: string; tags: string[] }),
      content: matterResult.content,
    };
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProjectData(slug: string): Project {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        slug,
        ...(matterResult.data as { title: string; date: string; description: string; githubUrl?: string; tags: string[] }),
        content: matterResult.content,
    };
}
