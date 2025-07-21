import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://www.baton-self.fr' });

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/origines', changefreq: 'monthly', priority: 0.8 },
  { url: '/cours', changefreq: 'monthly', priority: 0.8 },
  { url: '/niveaux', changefreq: 'monthly', priority: 0.8 },
  { url: '/sagesse', changefreq: 'monthly', priority: 0.8 },
  { url: '/techniques', changefreq: 'monthly', priority: 0.8 },
  { url: '/photos', changefreq: 'monthly', priority: 0.6 }
];

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(data => {
  createWriteStream('./dist/sitemap.xml').write(data);
});
