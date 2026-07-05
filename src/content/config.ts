import { defineCollection, z } from 'astro:content';

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    appSlug: z.string(),
    docType: z.enum(['privacy', 'terms']),
    updated: z.coerce.date(),
  }),
});

export const collections = { legal };
