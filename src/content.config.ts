import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const optionalText = z.string().nullish().transform((value) => value?.trim() || undefined);

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    source: optionalText.pipe(z.string().url().optional()),
    cover: optionalText,
    coverAlt: optionalText,
  }),
});

export const collections = { news };
