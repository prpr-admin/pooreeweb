import { defineCollection, z } from 'astro:content';

const archives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    status: z.string().optional(),
    year: z.number().optional(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
  }),
});

const information = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    year: z.number().optional(),
    status: z.string().optional(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    author: z.string().optional(),
    references: z.array(z.string()).default([]),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const architecture = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    area: z.string().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const objects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    material: z.string().optional(),
    dimensions: z.string().optional(),
    edition: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  archives,
  information,
  research,
  architecture,
  objects,
};
