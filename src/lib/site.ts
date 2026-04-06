export const site = {
	name: 'Rasil',
	tagline: 'Order Clarity & Operational Control',
	description:
		'Rasil helps e-commerce merchants confirm orders on WhatsApp and use an AI agent to answer customer questions with business and product context.',
	url: 'https://rasil.vercel.app',
	email: 'hello@rasil.io'
} as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Product', href: '/product' },
	{ label: 'Integrations', href: '/integrations' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Contact', href: '/contact' }
] as const;

export const footerNav = [
	{
		title: 'Explore',
		links: [
			{ label: 'How it works', href: '/product' },
			{ label: 'Integrations', href: '/integrations' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'Contact', href: '/contact' }
		]
	},
	{
		title: 'Company',
		links: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' }
		]
	}
] as const;

export function buildMeta(title: string, description: string, path: string) {
	const pageTitle = title === site.name ? site.name : `${title} | ${site.name}`;
	const canonical = new URL(path, site.url).toString();

	return {
		title: pageTitle,
		description,
		canonical,
		image: `${site.url}/og-image.svg`
	};
}

export const publicPages = ['/', '/product', '/integrations', '/pricing', '/contact', '/privacy', '/terms'];
