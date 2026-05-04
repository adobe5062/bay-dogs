import { defineCollection, z } from 'astro:content';

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    dogName: z.string(),
    dogBreed: z.string(),
    clientName: z.string(),
    detail: z.string().optional(),
    photo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    price: z.string(),
    priceLabel: z.string(),
    accent: z.boolean().default(false),
    includes: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { testimonials, services };
