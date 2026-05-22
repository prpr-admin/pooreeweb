import { defineCollection, z } from 'astro:content';

// null 허용 헬퍼
const optStr  = z.string().nullable().optional();
const optNum  = z.number().nullable().optional();
const optDate = z.coerce.date().nullable().optional();
const optArr  = (inner = z.string()) => z.array(inner).nullable().optional();

const archives = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        optDate,
    category:    optStr,
    status:      optStr,
    year:        optNum,
    thumbnail:   optStr,
    description: optStr,
    images:      z.array(z.string()).default([]),
    tags:        optArr(),
  }),
});

const information = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        optDate,
    description: optStr,
    tags:        optArr(),
    draft:       z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        optDate,
    year:        optNum,
    status:      optStr,
    description: optStr,
    thumbnail:   optStr,
    author:      optStr,
    references:  z.array(z.string()).default([]),
    tags:        optArr(),
    draft:       z.boolean().default(false),
  }),
});

const architecture = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        optDate,
    description: optStr,
    location:    optStr,
    area:        optStr,
    status:      optStr,
    tags:        optArr(),
    draft:       z.boolean().default(false),
  }),
});

const objects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        optDate,
    description: optStr,
    cover:       optStr,
    material:    optStr,
    dimensions:  optStr,
    edition:     optStr,
    tags:        optArr(),
    draft:       z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    year:        optNum,
    type:        optStr,
    program:     optStr,
    location:    optStr,
    area:        optStr,
    status:      optStr,
    description: optStr,
    mainImage:   optStr,
    images:      z.array(z.string()).default([]),
    tags:        optArr(),
    draft:       z.boolean().default(false),
  }),
});

export const collections = {
  archives,
  information,
  research,
  architecture,
  objects,
  projects,
};
