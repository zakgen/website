import type { RequestHandler } from './$types';
import { publicPages, site } from '$lib/site';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPages
	.map(
		(path) => `  <url>
    <loc>${new URL(path, site.url).toString()}</loc>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
