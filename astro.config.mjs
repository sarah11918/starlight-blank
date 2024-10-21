import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vertical Topic Links',
			social: {
				github: 'https://github.com/sarah11918/starlight-blank/tree/vertical-links',
			},
			customCss: [
				'./src/styles/custom.css',
			  ],
			plugins: [
				starlightSidebarTopics([
				// Start
				{
				label: 'Start',
				link: '/why-astro/',
				icon: 'rocket',
				items: [
					{ label: "Why Astro?", link:'why-astro'},
					{ label:"Getting Started", items: [
						
						{ label: "Installation", slug: 'install-and-setup' },
						{ label: "Project Structure", link:'basics/project-structure'},
						{ label: "Deploy Your Site", slug: 'guides/deploy' },
						{ label: "Migrate to Astro", slug: 'guides/migrate-to-astro' },
						{ label: "Tutorial: Build a Blog", slug: 'tutorial' },
						],
					},
					{
						label: 'Core Concepts',
						items: [
							
							{ label: "Astro Islands", link:'basics/islands'},
							{ label: "Components", link:'basics/astro-components'},
							{ label: "Pages", link:'basics/astro-pages'},
							{ label: "Layouts", link:'basics/layouts'},
							{ label: "Astro Template Syntax", link:'basics/astro-syntax'},
							
							
						],
					},
					{
						label: 'Configuration',
						items: [
						{label: "The Astro Config File", link:'guides/configuring-astro'},
						{label: "Editor setup", link:'editor-setup'},
						{label: "TypeScript", link:'guides/typescript'},
						{label: "Environment variables", link:'guides/environment-variables'},
						{label: "Dev Toolbar", link:'guides/dev-toolbar'},
						],
					},							
				],
				},
				// Guides
				{
					label: 'Guides and Recipes',
					link: 'upgrade-astro',
					icon: 'open-book',
					items: [
					    { label: "Upgrade Astro", slug: 'upgrade-astro' },
						{ label:"Add content to your site", collapsed:true, items: [
							{ label: "Markdown", slug: 'guides/markdown-content' },
							{ label: "Content Collections", link:'guides/content-collections'},
							{ label: "Images", slug: 'guides/images' },
							{ label: "Data Fetching", link:'guides/data-fetching'},
							{ label: "Astro DB", link:'guides/astro-db'},
							],
						},
						{ label:"Build your UI", collapsed:true, items: [
							
							{ label: "CSS & Styling", slug: 'guides/styling' },
							{ label: "Fonts", link:'guides/fonts'},				
							{ label: "Scripts & Event Handling", slug: 'guides/client-side-scripts' },
							{ label: "UI Frameworks", slug: 'guides/framework-components' },
							{ label: "Built-in Components", slug: 'reference/components-reference' },
							],
						},
						{ label:"Routing and Navigation", collapsed:true, items: [
							
							{ label: "Routing", slug: 'guides/routing' },
							{ label: "Endpoints", link:'guides/endpoints'},
							{ label: "Prefetch", link:'guides/prefetch'},
							{ label: "View Transitions", link:'guides/view-transitions'},
							{ label: "Internationalization", link:'guides/internationalization'},
							],
						},
						{ label:"Server rendering", collapsed:true, items: [
							{ label: "On-demand rendering adapters", link:'guides/on-demand-rendering'},
							{ label: "Actions", link:'guides/actions'},
							{ label: "Server Islands", link:'guides/server-islands'},
							{ label: "Middleware", link:'guides/middleware'},
							],
						},
						{ label: "Troubleshooting", link:'guides/troubleshooting'},
						{
							label: 'How-to Recipes',
							items: [
							{
								label: 'Popular Recipes',
								items: [
									{label: "Dynamically importing images", link:'recipes/dynamically-importing-images'},	
									{label: "Sharing state between islands", link:'recipes/sharing-state-islands'},
									{label: "Add i18n features", link:'recipes/i18n'},
									{label: "Add an RSS feed", link:'recipes/rss'},
									{label: "Build your Astro site with Docker", link:'recipes/docker'},
									{label: "Style rendered Markdown with Tailwind Typography", link:'recipes/tailwind-rendered-markdown'},
								],
							},
							{label: "All Recipes", link:'guides/how-to-recipes'},
							],
					    },
					],
				},
				//Reference
				{
					label: 'Reference',
					link: '/reference/configuration-reference/',
					icon: 'seti:info',
					items: [
						{ 
							label:"User Reference",
							items: [
								{ label: "Configuration Reference", slug: 'reference/configuration-reference' },
								{ label: "Astro CLI Reference", slug: 'reference/cli-reference' },
								{ label: "Directives Reference", slug: 'reference/directives-reference' },
								{ label: "Imports", link:'guides/imports'},
								{ label: "Error Reference", slug: 'reference/error-reference' },						
							],
						},
						{
							label: 'Astro Modules',
							items: [
								{label: "The Astro Global", slug: 'reference/api-reference' },
								{label: "`astro:actions`", link:'reference/actions-module'},
								{label: "`astro:assets`", link:'reference/assets-module'},
								{label: "`astro:content`", link:'reference/content-module'},
								{label: "`astro:env`", link:'reference/env-module'},
								{label: "`astro:i18n`", link:'reference/i18n-module'},
								{label: "`astro:middleware`", link:'reference/middleware-module'},
								{label: "`astro:transitions/client`", link:'reference/transitions-module'},
							],
						},
						{
							label: 'Other Development APIs',
							items: [
								{label: "Integrations API", link:'reference/integrations-reference'},
								{label: "Adapter API", link:'reference/adapter-reference'},
								{label: "Image Service API", link:'reference/image-service-reference'},
								{label: "Content Loader API", link:'reference/content-loader-reference'},
								{label: "Dev Toolbar App API", link:'reference/dev-toolbar-app-reference'},
								{label: "Container API (Experimental)", link:'reference/container-reference'},
								{label: "Publish to NPM", link:'reference/publish-to-npm'},
							],
						},
					],
				},
				// Two Integrations Variations
				// 1. Integrations more flat
				// {
				// 	label: 'Add Integrations',
				// 	link: '/guides/integrations-guide/',
				// 	icon: 'puzzle',
				// 	items: [
				// 		{ label: "Integrations Guide", link:'guides/integrations-guide'},
				// 		{
				// 			label: 'Popular Integrations',
				// 			items: [
				// 				{label: "Tailwind", link:'guides/integration/tailwind'},	
				// 				{label: "React", link:'guides/integration/react'},
				// 				{label: "Sitemap", link:'guides/integration/sitemap'},
				// 				{label: "MDX", link:'guides/integration/mdx'},
				// 			],
				// 		},
				// 		// {
				// 		// 	label: 'More Official Integrations',
				// 		// 	items: [
				// 			// 	{label: "Tailwind", link:'guides/integration/tailwind'},	
				// 			// 	{label: "React", link:'guides/integration/react'},
				// 			// 	{label: "Sitemap", link:'guides/integration/sitemap'},
				// 			// 	{label: "MDX", link:'guides/integration/mdx'},
				// 			// 	{label: "Tailwind", link:'guides/integration/tailwind'},	
				// 			// 	{label: "React", link:'guides/integration/react'},
				// 			// 	{label: "Sitemap", link:'guides/integration/sitemap'},
				// 			// 	{label: "MDX", link:'guides/integration/mdx'},
				// 			// 	{label: "Tailwind", link:'guides/integration/tailwind'},	
				// 			// 	{label: "React", link:'guides/integration/react'},
				// 			// 	{label: "Sitemap", link:'guides/integration/sitemap'},
				// 			// 	{label: "MDX", link:'guides/integration/mdx'},
				// 			// ],
				// 		// },
				// 			{
				// 				label: 'UI Frameworks',
				// 				items: [
				// 					{label: "Alpine", link:'guides/integration/tailwind'},
				// 					{label: "Preact", link:'guides/integration/tailwind'},	
				// 					{label: "React", link:'guides/integration/tailwind'},
				// 					{label: "Solid", link:'guides/integration/mdx'},
				// 					{label: "Svelte", link:'guides/integration/react'},
				// 					{label: "Vue", link:'guides/integration/sitemap'},
				// 				],
				// 			},
				// 			{
				// 				label: 'Adapters',
				// 				items: [
				// 					{label: "Cloudflare", link:'guides/integration/sitemap'},
				// 					{label: "Netlify", link:'guides/integration/tailwind'},
				// 					{label: "Node", link:'guides/integration/tailwind'},	
				// 					{label: "Vercel", link:'guides/integration/react'},
				// 				],
				// 			},	
				// 			{
				// 				label: 'Other official Integrations',
				// 				items: [
				// 					{label: "Astro DB", link:'guides/integration/tailwind'},
				// 					{label: "Markdoc", link:'guides/integration/tailwind'},	
				// 					{label: "MDX", link:'guides/integration/tailwind'},
				// 					{label: "Partytown", link:'guides/integration/mdx'},
				// 					{label: "Sitemap", link:'guides/integration/react'},
				// 					{label: "Tailwind", link:'guides/integration/sitemap'},
				// 				],
				// 			},				
				// 	],
				// },

				// 2. Integrations  more nested
				{
					label: 'Add Integrations',
					link: '/guides/integrations-guide/',
					icon: 'puzzle',
					items: [
						{ label: "Integrations Guide", link:'guides/integrations-guide'},
						{
							label: 'Popular Integrations',
							items: [
								{label: "Tailwind", link:'guides/integration/tailwind'},	
								{label: "React", link:'guides/integration/react'},
								{label: "Sitemap", link:'guides/integration/sitemap'},
								{label: "MDX", link:'guides/integration/mdx'},
							],
						},
						{
						 	label: 'More Official Integrations',
						 	items: [
							
							{
								label: 'UI Frameworks',
								items: [
									{label: "Alpine", link:'guides/integration/tailwind'},
									{label: "Preact", link:'guides/integration/tailwind'},	
									{label: "React", link:'guides/integration/tailwind'},
									{label: "Solid", link:'guides/integration/mdx'},
									{label: "Svelte", link:'guides/integration/react'},
									{label: "Vue", link:'guides/integration/sitemap'},
								],
							},
							{
								label: 'Adapters',
								items: [
									{label: "Cloudflare", link:'guides/integration/sitemap'},
									{label: "Netlify", link:'guides/integration/tailwind'},
									{label: "Node", link:'guides/integration/tailwind'},	
									{label: "Vercel", link:'guides/integration/react'},
								],
							},	
							{
								label: 'Other official Integrations',
								items: [
									{label: "Astro DB", link:'guides/integration/tailwind'},
									{label: "Markdoc", link:'guides/integration/tailwind'},	
									{label: "MDX", link:'guides/integration/tailwind'},
									{label: "Partytown", link:'guides/integration/mdx'},
									{label: "Sitemap", link:'guides/integration/react'},
									{label: "Tailwind", link:'guides/integration/sitemap'},
								],
							},		
						]},		
					],
				},
				{
					label: 'Connect to third-party tools',
					link: '/guides/cms/',
					icon: 'seti:bicep',
					items: [
							
						{
							label: 'Popular Third-party Guides',
							items: [
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
							],
						},
						{ 
							label: 'CMS guides',
							collapsed: true,
							items: [
								{label: "CMS guides", link:'guides/cms'},	
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
							],
						},
						{ 
							label: 'Backend Services',
							collapsed: true,
							items: [
								{label: "Backend guides", link:'guides/backend'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
							],
						},
						
						{ 
							label: 'Hosted Media & DAM',
							collapsed: true,
							items: [
								{label: "Media guides", link:'guides/media'},
								{label: "Storyblok", link:'guides/third-party/storyblok'},	
								{label: "Cloudinary", link:'guides/third-party/cloudinary'},
								{label: "Sentry", link:'guides/third-party/sentry'},
							],
						},
						{ label: "E-commerce", link:'guides/ecommerce'},
						{ label: "Auth", link:'guides/authentication'},
						{ label: "Testing", link:'guides/testing'},
					],
				},
			],
		)],
		}),
	],
});
