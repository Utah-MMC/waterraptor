import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { getAuthorById } from '@/lib/authors';

export type BlogPostMeta = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string; // YYYY-MM-DD
  authorId: string;
  tags: string[];
  type?: string;
  topic?: string;
  heroImage?: string;
  draft?: boolean;
  readingMinutes: number;
  authorName: string;
  authorRole: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 220;

let cachedMeta: BlogPostMeta[] | null = null;

function safeSlug(value: string) {
  return value.replace(/[^a-z0-9-]/gi, '').toLowerCase();
}

function getReadingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / WORDS_PER_MINUTE));
}

function getAllMdxFilenames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.toLowerCase().endsWith('.mdx'));
}

export function getAllBlogSlugs(): string[] {
  return getAllMdxFilenames()
    .map((file) => safeSlug(file.replace(/\.mdx$/i, '')))
    .filter(Boolean);
}

function parsePost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing blog post: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const data = (parsed.data ?? {}) as Record<string, unknown>;

  const title = typeof data.title === 'string' ? data.title : slug;
  const summary =
    typeof data.summary === 'string'
      ? data.summary
      : typeof data.description === 'string'
        ? data.description
        : '';
  const publishedAt = typeof data.publishedAt === 'string' ? data.publishedAt : '1970-01-01';
  const updatedAt = typeof data.updatedAt === 'string' ? data.updatedAt : undefined;
  const authorId = typeof data.authorId === 'string' ? data.authorId : 'water-raptor-team';
  const tags = Array.isArray(data.tags)
    ? data.tags.filter((t): t is string => typeof t === 'string')
    : [];
  const type = typeof data.type === 'string' ? data.type : undefined;
  const topic = typeof data.topic === 'string' ? data.topic : undefined;
  const heroImage = typeof data.heroImage === 'string' ? data.heroImage : undefined;
  const draft = typeof data.draft === 'boolean' ? data.draft : undefined;

  const author = getAuthorById(authorId);
  const authorName = author?.name ?? 'Water Raptor';
  const authorRole = author?.role ?? 'Team';

  const content = parsed.content ?? '';
  const readingMinutes = getReadingMinutes(`${title}\n${summary}\n${content}`);

  return {
    slug,
    title,
    summary,
    publishedAt,
    updatedAt,
    authorId,
    tags,
    type,
    topic,
    heroImage,
    draft,
    readingMinutes,
    authorName,
    authorRole,
    content,
  };
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const normalized = safeSlug(slug);
  if (!normalized) return null;

  try {
    return parsePost(normalized);
  } catch {
    return null;
  }
}

export function getBlogIndexPosts(): BlogPostMeta[] {
  if (cachedMeta) return cachedMeta;

  const posts = getAllBlogSlugs()
    .map((slug) => {
      const post = parsePost(slug);
      const { content: _content, ...meta } = post;
      return meta;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  cachedMeta = posts;
  return posts;
}

