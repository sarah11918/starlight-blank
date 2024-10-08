import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			plugins: [
				starlightUtils({
				  multiSidebar: {
					switcherStyle: "horizontalList",
				  },
				}),
			  ],
			sidebar: [
				{
					label: 'Start',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "What's New", slug: 'basics/example' },
						{ label:"Getting Started", items: [
							{ label: "Installation", slug: 'basics/example' },
							{ label: "Deploy Your Site", slug: 'basics/example' },
							{ label: "Migrate to Astro", slug: 'basics/example' },
							{ label: "Tutorial: Build a Blog", slug: 'basics/example' },
							],
						},
						{
							label: 'Project setup',
							items: [
							{label: "The Astro Config File", link:'basics/example'},
							{label: "Editor setup", link:'basics/example'},
							{label: "TypeScript", link:'basics/example'},
							{label: "Environment variables", link:'basics/example'},
							{label: "Dev Toolbar", link:'basics/example'},
							],
						},
						{
							label: 'Add Integrations',
							items: [
								{label: "Astro Integrations", link:'basics/example'},
								{
									label: 'Popular Integrations',
									items: [
										{label: "Tailwind", link:'basics/example'},	
										{label: "React", link:'basics/example'},
										{label: "Sitemap", link:'basics/example'},
										{label: "MDX", link:'basics/example'},
									],
								},
							],
						},
						{ label:"Core Concepts", items: [
						  {
							label: 'About Astro',
							items: [
								{label: "Why Astro?", link:'concepts/example'},
								{label: "Astro Islands", link:'concepts/example'},
							],
						  },
						  {
							label: 'Astro Basics',
							items: [
								{ label: "Project Structure", link:'concepts/example'},
								{ label: "Components", link:'concepts/example'},
								{ label: "Pages", link:'concepts/example'},
								{ label: "Layouts", link:'concepts/example'},
								{ label: "Astro Template Syntax", link:'concepts/example'},
								{ label: "Rendering Modes", link:'concepts/example'},
							],
						  },
						],
					},
						  { label: "Community Resources", slug: 'basics/example' },
					],
				},
				{
					label: 'Build',
					items: [
					
					  {
						label: 'Topic Guides',
						items: [
							{ label:"Popular Topics", items: [
								{ label: "Images", slug: 'basics/example' },
								{ label: "Content Collections", link:'concepts/example'},
								{ label: "CSS & Styling", slug: 'basics/example' },
								{ label: "On-demand Rendering", slug: 'basics/example' },
								{ label: "Routing", slug: 'basics/example' },
								{ label: "Scripts & Event Handling", slug: 'basics/example' },
								{ label: "Markdown", slug: 'basics/example' },
								{ label: "UI Frameworks", slug: 'basics/example' },
								],
							},
							{ label:"More Topics", items: [
							{ label: "View Transitions", link:'concepts/example'},
							{ label: "Server Islands", link:'concepts/example'},
							{ label: "Middleware", link:'concepts/example'},
							{ label: "Internationalization", link:'concepts/example'},
							{ label: "Fonts", link:'concepts/example'},
							{ label: "Imports", link:'concepts/example'},
							{ label: "Endpoints", link:'concepts/example'},
							{ label: "Data Fetching", link:'concepts/example'},
							{ label: "Prefetch", link:'concepts/example'},
							{ label: "Astro DB", link:'concepts/example'},
							{ label: "Testing", link:'concepts/example'},
							{ label: "E-commerce", link:'concepts/example'},
							{ label: "Auth", link:'concepts/example'},
							{ label: "Troubleshooting", link:'concepts/example'},
						],
					},
						],
					  },
					  {
						label: 'Third-party guides',
						items: [
							
							{
								label: 'Popular Third-party Guides',
								items: [
									{label: "Storyblok", link:'basics/example'},	
									{label: "Cloudinary", link:'basics/example'},
									{label: "Sentry", link:'basics/example'},
								],
							},
							{ label: 'CMS guides', link:'concepts/example'},
							{ label: 'Backend Services', link:'concepts/example'},
							{ label: 'Hosted Media & DAM', link:'concepts/example'},
						],
					  },
					  {
						label: 'How-to Recipes',
						items: [
							
							{
								label: 'Popular Recipes',
								items: [
									{label: "Dynamically importing images", link:'basics/example'},	
									{label: "Sharing state between islands", link:'basics/example'},
									{label: "Add i18n features", link:'basics/example'},
									{label: "Build your Astro site with Docker", link:'basics/example'},
									{label: "Style rendered Markdown with Tailwind", link:'basics/example'},
								],
							},
							{label: "All Recipes", link:'basics/example'},
						],
					},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
