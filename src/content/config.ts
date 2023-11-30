import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		description: z.string(),
		author: z.string(),
		images: z.array(
			z.object({
				url: z.string(),
				alt: z.string(),
			}),
		),
		tags: z.array(z.string()),
	}),
});

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		description: z.string(),
		author: z.string(),
		images: z.array(
			z.object({
				url: z.string(),
				alt: z.string(),
			}),
		),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	posts: postsCollection,
	projects: projectsCollection,
};
