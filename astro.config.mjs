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
			// plugins: [
			// 	starlightUtils({
			// 	  multiSidebar: {
			// 		switcherStyle: "horizontalList",
			// 	  },
			// 	}),
			//   ],
			// sidebar: [
				plugins: [
					starlightSidebarTopics([
				
						{
					label: 'Start',
					link: '/why-astro/',
					icon: 'rocket',
					items: [
						// Each item here is one entry in the navigation menu.
						
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
							label: 'Configuration',
							items: [
							{label: "The Astro Config File", link:'guides/configuring-astro'},
							{label: "Editor setup", link:'editor-setup'},
							{label: "TypeScript", link:'guides/typescript'},
							{label: "Environment variables", link:'guides/environment-variables'},
							{label: "Dev Toolbar", link:'guides/dev-toolbar'},
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
							label: 'Add Integrations',
							items: [
								{
									label: 'Popular Integrations',
									items: [
										{label: "Tailwind", link:'guides/integration/tailwind'},	
										{label: "React", link:'guides/integration/react'},
										{label: "Sitemap", link:'guides/integration/sitemap'},
										{label: "MDX", link:'guides/integration/mdx'},
									],
								},
								{label: "Integrations Guide", link:'guides/integrations-guide'},
							],
						},
						  							
						 { label: "Community", slug: 'astro-community' },
					],
				},
				{
					label: 'Guides',
					link: '/guides/markdown-content/',
					icon: 'open-book',
					items: [
					
					  {
						label: 'Build with Astro',
						items: [
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
							{ label:"On-demand Rendering", collapsed:true, items: [
								{ label: "Adding Adapters", link:'guides/on-demand-rendering'},
								{ label: "Actions", link:'guides/actions'},
								{ label: "Server Islands", link:'guides/server-islands'},
								{ label: "Middleware", link:'guides/middleware'},
								],
							},
							{ label: "Troubleshooting", link:'guides/troubleshooting'},
						],
					  },
					  {
						label: 'Connect to third-party tools',
						collapsed:true,
						items: [
							
							{
								label: 'Popular Third-party Guides',
								items: [
									{label: "Storyblok", link:'guides/third-party/storyblok'},	
									{label: "Cloudinary", link:'guides/third-party/cloudinary'},
									{label: "Sentry", link:'guides/third-party/sentry'},
								],
							},
							{ label: 'CMS guides', link:'guides/cms'},
							{ label: 'Backend Services', link:'guides/backend'},
							{ label: 'Hosted Media & DAM', link:'guides/media'},
							{ label: "E-commerce", link:'guides/ecommerce'},
							{ label: "Auth", link:'guides/authentication'},
							{ label: "Testing", link:'guides/testing'},
						],
					  },
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
				{
					label: 'Reference',
					link: '/reference/configuration-reference/',
					icon: 'seti:info',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Upgrade Astro", slug: 'upgrade-astro' },
						{ label:"User Reference", items: [
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
				{
					label: "CHANGELOG",
					link: 'https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md',
					icon: 'astro',
				},
			],
		)],
		}),
	],
});
