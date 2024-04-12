import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			isDraft: z.boolean().optional(),
			title: z.string(),
			description: z.string(),
			author: z
				.array(
					z.object({
						type: z.string().default('Person'),
						name: z.string(),
						url: z.string().url().optional(),
					})
				)
				.optional(),
			datePublished: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			dateModified: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			image: image().optional(),
		}),
});

export const collections = {
	blog: blogCollection,
};
