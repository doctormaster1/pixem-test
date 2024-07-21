import fs from "fs";
import path from "path";

const pages = [{ loc: "/", lastmod: new Date().toISOString(), priority: 1.0 }];

const sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
        <url>
          <loc>https://pixem.org${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <priority>${page.priority}</priority>
        </url>
      `;
    })
    .join("")}
</urlset>
`;

fs.writeFileSync(
  path.join(process.cwd(), "public", "sitemap.xml"),
  sitemap.trim()
);
console.log("Sitemap generated successfully.");
