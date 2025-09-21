import type { APIRoute } from 'astro';

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://abeldiaz.pro/</loc>
    <lastmod>2025-09-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
};