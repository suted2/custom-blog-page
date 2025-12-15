import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const experiencesDirectory = path.join(process.cwd(), 'content/experiences');

export type Experience = {
  slug: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
  content: string;
};

export function getSortedExperiencesData(): Experience[] {
  if (!fs.existsSync(experiencesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(experiencesDirectory);
  const allExperiencesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(experiencesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { company: string; role: string; startDate: string; endDate: string; description: string; tags: string[] }),
      content: matterResult.content,
    };
  });

  return allExperiencesData.sort((a, b) => {
    if (a.startDate < b.startDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getExperienceData(slug: string): Experience {
    const fullPath = path.join(experiencesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        slug,
        ...(matterResult.data as { company: string; role: string; startDate: string; endDate: string; description: string; tags: string[] }),
        content: matterResult.content,
    };
}
