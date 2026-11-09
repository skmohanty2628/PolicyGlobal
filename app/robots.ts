// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin'],
    },
    sitemap: 'https://www.policyrix.com/sitemap.xml',
    host: 'https://www.policyrix.com',
  };
}