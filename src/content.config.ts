import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'ne']),
    translationSlug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const digest = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/digest' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    issue: z.number(),
    date: z.coerce.date(),
    papersCount: z.number().optional(),
    topics: z.array(z.string()).default([]),
    lang: z.enum(['en', 'ne']),
    translationSlug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, digest };
