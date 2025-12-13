import { MetadataRoute } from 'next';
import { CITIES_DATA } from './cities/cities-data';
import { AUTHORS } from '@/lib/authors';
import { getBlogIndexPosts } from '@/lib/blog';

export const revalidate = 60 * 60 * 24;
export const runtime = 'nodejs';

const SERVICE_SLUGS = [
  'wetland-planting-service',
  'habitat-installation-service',
  'invasive-weed-control-service',
  'lake-mapping-service',
  'cattail-control-service',
  'rip-rap-and-shoreline-weed-control-service',
  'fish-population-survey',
  'fish-stocking',
  'lake-and-pond-management-services',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://waterraptor.com';
  const blogPosts = getBlogIndexPosts();
  
  // Base pages
  const basePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rss.xml`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

// Service pages (keyword pages)
const servicePages = [
  {
    url: `${baseUrl}/lake-services`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/lake-management`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/lake-maintenance`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/lake-cleanup`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/lake-restoration`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/lake-weed-control`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/lake-dredging`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/water-management`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/water-quality-management`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/aquatic-management`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/aquatic-services`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/aquatic-vegetation-management`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/utah-lake-services`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/water-raptor`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/harvesting`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/invasive-aquatic-plants`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/aquatic-herbicide`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/dredge-operations`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/aerial-herbicide-drone`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/river-canal-management`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/habitat-restoration`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/nutrient-reduction`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/processing`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: `${baseUrl}/algae-weed-control`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
];

// Dynamic service pages
const dynamicServicePages = SERVICE_SLUGS.map((slug) => ({
  url: `${baseUrl}/services/${slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.85,
}));

const resourcePages = [
  {
    url: `${baseUrl}/resources`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: `${baseUrl}/resources/optimal-low-phosphorus-fish-food`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/resources/aeration-programs`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  },
  {
    url: `${baseUrl}/resources/sediment-removal-plans`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  },
  {
    url: `${baseUrl}/resources/shoreline-restoration`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  },
  {
    url: `${baseUrl}/resources/water-quality-testing`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  },
  {
    url: `${baseUrl}/resources/invasive-species-response`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  },
  {
    url: `${baseUrl}/resources/toxic-algae-guide`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/resources/stormwater-pond-design`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/resources/sonic-algae-control`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/resources/mechanical-solutions-101`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/resources/annual-pond-management-programs`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
];

  // City pages
  const cityPages = CITIES_DATA.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPostPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(`${(post.updatedAt ?? post.publishedAt)}T00:00:00Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const tagSet = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  const blogTagPages = Array.from(tagSet).map((tag) => ({
    url: `${baseUrl}/blog/tag/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }));

  const blogAuthorPages = AUTHORS.map((author) => ({
    url: `${baseUrl}/blog/author/${encodeURIComponent(author.id)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.35,
  }));

  return [
    ...basePages,
    ...servicePages,
    ...dynamicServicePages,
    ...resourcePages,
    ...blogPostPages,
    ...blogTagPages,
    ...blogAuthorPages,
    ...cityPages,
  ];
}
