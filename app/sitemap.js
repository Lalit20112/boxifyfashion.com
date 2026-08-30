import { posts } from './blog/posts';
import { categories } from './products-data';

const BASE = 'https://boxifyfashion.com';

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ['', '/products', '/quote', '/sample', '/about', '/contact', '/blog'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
  }));
  const categoryRoutes = categories.map((c) => ({
    url: `${BASE}/${c.slug}`,
    lastModified: now,
  }));
  const postRoutes = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
