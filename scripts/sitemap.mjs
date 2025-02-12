// source: https://leerob.io/blog/nextjs-sitemap-robots
import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const robots = `
User-agent: *
Disallow: /
`;

const baseURL = 'https://www.startup-nights.ch';

// Update the robots.txt for preview deployments to make sure the preview 
// deployments are not indexed.
async function updateRobotsTxt() {
  const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;

  if (branch !== 'main') {
    writeFileSync('public/robots.txt', robots);
  }
}

// Generate the sitemap for the website and update it every time that the site 
// is deployed.
async function generate() {
  try {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc');

    const pages = await globby([
      'content/pages/*.md',
      '!content/pages/terms-and-conditions.md',
      '!content/pages/privacy-policy.md',
      '!content/pages/pioneers-and-pancakes.md',
    ]);

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
        .map((page) => {
          const path = page
            .replace('content/pages', '')
            .replace('.md', '');
          const route = path === '/index' ? '' : path;

          return `
                <url>
                    <loc>${`${baseURL}${route}`}</loc>
                </url>
              `;
        })
        .join('')}
      </urlset>
    `;

    const formatted = await prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    });

    // Ensure the data is a string before writing to file
    writeFileSync('public/sitemap.xml', formatted);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

await generate();
await updateRobotsTxt();
