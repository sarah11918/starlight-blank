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
					link: '/guides/example/',
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
					link: '/recipes/example/',
					icon: 'open-book',
					items: [
					
					  {
						label: 'Build with Astro',
						items: [
							{ label:"Add content to your site", collapsed:true, items: [
								{ label: "Markdown", slug: 'basics/example' },
								{ label: "Content Collections", link:'concepts/example'},
								{ label: "Images", slug: 'basics/example' },
								{ label: "Data Fetching", link:'concepts/example'},
								{ label: "Astro DB", link:'concepts/example'},
								],
							},
							{ label:"Build your UI", collapsed:true, items: [
								
								{ label: "CSS & Styling", slug: 'basics/example' },
								{ label: "Fonts", link:'concepts/example'},				
								{ label: "Scripts & Event Handling", slug: 'basics/example' },
								{ label: "UI Frameworks", slug: 'basics/example' },
								{ label: "Built-in Components", slug: 'basics/example' },
								],
							},
							{ label:"Routing and Navigation", collapsed:true, items: [
								
								{ label: "Routing", slug: 'basics/example' },
								{ label: "Endpoints", link:'concepts/example'},
								{ label: "Prefetch", link:'concepts/example'},
								{ label: "View Transitions", link:'concepts/example'},
								{ label: "Internationalization", link:'concepts/example'},
								],
							},
							{ label:"On-demand Rendering", collapsed:true, items: [
								{ label: "Enabling on-demand rendering", slug: 'basics/example' },
								{ label: "Adapters", link:'concepts/example'},
								{ label: "Actions", link:'concepts/example'},
								{ label: "Server Islands", link:'concepts/example'},
								{ label: "Middleware", link:'concepts/example'},
								],
							},
							{ label: "Troubleshooting", link:'concepts/example'},
						],
					  },
					  {
						label: 'Connect to third-party tools',
						collapsed:true,
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
							{ label: "E-commerce", link:'concepts/example'},
							{ label: "Auth", link:'concepts/example'},
							{ label: "Testing", link:'concepts/example'},
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
									{label: "Style rendered Markdown with Tailwind Typography", link:'basics/example'},
								],
							},
							{label: "All Recipes", link:'recipes/example'},
						],
					},
					],
				},
				{
					label: 'Reference',
					link: '/reference/example/',
					icon: 'seti:info',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Upgrade Astro", slug: 'basics/example' },
						{ label:"User Reference", items: [
							{ label: "Configuration Reference", slug: 'basics/example' },
							{ label: "Astro CLI Reference", slug: 'basics/example' },
							{ label: "Directives Reference", slug: 'basics/example' },
							{ label: "Imports", link:'concepts/example'},
							{ label: "Error Reference", slug: 'basics/example' },						
							],
						},
						{
							label: 'Astro Modules',
							items: [
							{label: "The Astro Global", slug: 'basics/example' },
							{label: "`astro:actions`", link:'basics/example'},
							{label: "`astro:assets`", link:'basics/example'},
							{label: "`astro:content`", link:'basics/example'},
							{label: "`astro:i18n`", link:'basics/example'},
							{label: "`astro:middleware`", link:'basics/example'},
							{label: "`astro:transitions/client`", link:'basics/example'},
							],
						},
						{
							label: 'Other Development APIs',
							items: [
							{label: "Integrations API", link:'basics/example'},
							{label: "Adapter API", link:'basics/example'},
							{label: "Image Service API", link:'basics/example'},
							{label: "Content Loader API", link:'basics/example'},
							{label: "Dev Toolbar App API", link:'basics/example'},
							{label: "Container API (Experimental)", link:'basics/example'},
							{label: "Publish to NPM", link:'basics/example'},
							],
						},
					],
				},
				{
					label: "CHANGELOG",
					link: '/guides/example/',
					icon: 'astro',
				},
			],
		)],
		}),
	],
});
