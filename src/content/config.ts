import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			publishDate: z.date(),
			description: z.string(),
			author: z.string(),
			cover: image().refine((img) => img.width >= 100, {
				message: "100px",
			}),
			coverAlt: z.string(),
			tags: z.array(z.string()),
		}),
});

const projectsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			publishDate: z.date(),
			description: z.string(),
			author: z.string(),
			cover: image().refine((img) => img.width >= 100, {
				message: "100px",
			}),
			coverAlt: z.string(),
			repo: z.string(),
			demo: z.string(),
			importance: z.number(),
			tags: z.array(z.string()),
		}),
});

const resourcesCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			publishDate: z.date(),
			description: z.string(),
			author: z.string(),
			cover: image().refine((img) => img.width >= 100, {
				message: "100px",
			}),
			coverAlt: z.string(),
			type: z.string(),
			pdf: z.string(),
			tags: z.array(z.string()),
		}),
});

export const collections = {
	posts: postsCollection,
	projects: projectsCollection,
	resources: resourcesCollection,
};
