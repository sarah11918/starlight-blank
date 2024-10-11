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
						
						{ label: "Why Astro?", link:'concepts/example'},

						{ label:"Getting Started", items: [
							
							{ label: "Installation", slug: 'basics/example' },
							{ label: "Project Structure", link:'concepts/example'},
							{ label: "Deploy Your Site", slug: 'basics/example' },
							{ label: "Migrate to Astro", slug: 'basics/example' },
							{ label: "Tutorial: Build a Blog", slug: 'basics/example' },
							],
						},
						{
							label: 'Configuration',
							items: [
							{label: "The Astro Config File", link:'basics/example'},
							{label: "Editor setup", link:'basics/example'},
							{label: "TypeScript", link:'basics/example'},
							{label: "Environment variables", link:'basics/example'},
							{label: "Dev Toolbar", link:'basics/example'},
							],
						},
						{
							label: 'Core Concepts',
							items: [
								
								{ label: "Astro Islands", link:'concepts/example'},
								{ label: "Components", link:'concepts/example'},
								{ label: "Pages", link:'concepts/example'},
								{ label: "Astro Template Syntax", link:'concepts/example'},
								
								
							],
						},
						{
							label: 'Add Integrations',
							items: [
								{
									label: 'Popular Integrations',
									items: [
										{label: "Tailwind", link:'basics/example'},	
										{label: "React", link:'basics/example'},
										{label: "Sitemap", link:'basics/example'},
										{label: "MDX", link:'basics/example'},
									],
								},
								{label: "Integrations Guide", link:'basics/example'},
							],
						},
						  							
						 { label: "Community", slug: 'basics/example' },
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
