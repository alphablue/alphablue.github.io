import type { MetadataRoute } from 'next';
import { posts, site } from '@/lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [ '/', '/posts/', '/series/', '/series/compose/', '/about/', ...posts.map(post => `/posts/${post.slug}/`) ].map(path => ({ url: site.url + path }));
}
