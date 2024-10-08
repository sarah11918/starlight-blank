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
							],
						},
						  {
							label: 'Concepts',
							items: [
								{label: "Why Astro?", link:'concepts/example'},
								{label: "Astro Islands", link:'concepts/example'},
							],
						  },
						  {
							label: 'Basics',
							items: [
								{ label: "Projectc Structure", link:'concepts/example'},
								{ label: "Components", link:'concepts/example'},
								{ label: "Pages", link:'concepts/example'},
								{ label: "Layouts", link:'concepts/example'},
								{ label: "Astro Template Syntax", link:'concepts/example'},
								{ label: "Rendering Modes", link:'concepts/example'},
								{ label: "Routing", slug: 'basics/example' },
							],
						  },
						  { label: "Community Resources", slug: 'basics/example' },
					],
				},
				{
					label: 'Build',
					items: [
					{ label:"Popular Topics", items: [
						{ label: "Images", slug: 'basics/example' },
						{ label: "Content Collections", link:'concepts/example'},
						{ label: "CSS & Styling", slug: 'basics/example' },
						{ label: "On-demand Rendering", slug: 'basics/example' },
						{ label: "Scripts & Event Handling", slug: 'basics/example' },
						{ label: "Markdown", slug: 'basics/example' },
						{ label: "UI Frameworks", slug: 'basics/example' },
						],
					},
					  {
						label: 'Guides',
						items: [
							
							{ label: "View Transitions", link:'concepts/example'},
							{ label: "Server Islands", link:'concepts/example'},
							{ label: "Middleware", link:'concepts/example'},
							{ label: "Internationalization", link:'concepts/example'},
							{ label: "Fonts", link:'concepts/example'},
							{ label: "Data Fetching", link:'concepts/example'},
							{ label: "Prefetch", link:'concepts/example'},
							{ label: "Astro DB", link:'concepts/example'},
							{ label: "Testing", link:'concepts/example'},
							{ label: "Actions", link:'concepts/example'},
							{ label: "Actions", link:'concepts/example'},
							{ label: "Actions", link:'concepts/example'},
							{ label: "Actions", link:'concepts/example'},
						],
					  },
					  {
						label: 'Use Cases',
						items: [
							{label: "E-commerce", link:'concepts/example'},
							{label: "Auth", link:'concepts/example'},
							{label: "Testing", link:'concepts/example'},
		
						],
					  },
					  {
						label: 'Third-party guides',
						items: [
							{
								label: 'CMS guides',
								items: [
									{label: "E-commerce", link:'concepts/example'},
									{label: "Auth", link:'concepts/example'},
									{label: "Testing", link:'concepts/example'},
				
								],
							  },
							  {
								label: 'Backend Services',
								items: [
									{label: "E-commerce", link:'concepts/example'},
									{label: "Auth", link:'concepts/example'},
									{label: "Testing", link:'concepts/example'},
				
								],
							  },
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
