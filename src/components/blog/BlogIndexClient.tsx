"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type BlogIndexPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  readingMinutes: number;
  tags: string[];
  type?: string;
  topic?: string;
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexClient({
  posts,
  initialQuery = "",
  initialTags = [],
  initialType = "All",
  initialTopic = "All",
}: {
  posts: BlogIndexPost[];
  initialQuery?: string;
  initialTags?: string[];
  initialType?: string;
  initialTopic?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopic);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => ({ tag, count }));
  }, [posts]);

  const types = useMemo(() => {
    const unique = new Set<string>();
    posts.forEach((post) => {
      if (post.type) unique.add(post.type);
    });
    return ["All", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const topics = useMemo(() => {
    const unique = new Set<string>();
    posts.forEach((post) => {
      if (post.topic) unique.add(post.topic);
    });
    return ["All", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return posts.filter((post) => {
      if (selectedType !== "All" && post.type !== selectedType) return false;
      if (selectedTopic !== "All" && post.topic !== selectedTopic) return false;

      if (selectedTags.length > 0 && !selectedTags.every((tag) => post.tags.includes(tag))) {
        return false;
      }

      if (!q) return true;

      const haystack = normalize(
        [
          post.title,
          post.summary,
          post.authorName,
          post.type ?? "",
          post.topic ?? "",
          post.tags.join(" "),
        ].join(" ")
      );
      return haystack.includes(q);
    });
  }, [posts, query, selectedTags, selectedType, selectedTopic]);

  const hasFilters =
    query.trim().length > 0 ||
    selectedTags.length > 0 ||
    selectedType !== "All" ||
    selectedTopic !== "All";

  const clearFilters = () => {
    setQuery("");
    setSelectedTags([]);
    setSelectedType("All");
    setSelectedTopic("All");
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag);
      return [...prev, tag];
    });
  };

  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <div className="relative">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides, case studies, and topics..."
            className="w-full rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-emerald-400/60"
            aria-label="Search blog posts"
          />
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
            className="rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400/60"
            aria-label="Filter by post type"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            value={selectedTopic}
            onChange={(event) => setSelectedTopic(event.target.value)}
            className="rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400/60"
            aria-label="Filter by topic"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          {hasFilters && (
            <Button
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              onClick={clearFilters}
            >
              Clear
            </Button>
          )}
        </div>
      </div>

      {tagCounts.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tagCounts.slice(0, 24).map(({ tag, count }) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={[
                  "rounded-full border px-3 py-1 text-xs uppercase tracking-[0.25em] transition",
                  active
                    ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
                    : "border-white/15 bg-slate-950/30 text-slate-300 hover:border-white/30",
                ].join(" ")}
                aria-pressed={active}
              >
                {tag} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
        Showing {filtered.length} of {posts.length}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-white/15 bg-slate-950/30 p-8 text-center">
          <p className="text-white font-semibold">No posts match your filters.</p>
          <p className="mt-2 text-sm text-slate-200">
            Try clearing filters or searching for a different term.
          </p>
          {hasFilters && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <Card
              key={post.slug}
              className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border-white/20 transition hover:border-emerald-400 hover:bg-slate-900/95 shadow-lg"
            >
              <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
                <img
                  src="/images/graphics/clawssss.svg"
                  alt="Water Raptor trademark"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <CardHeader className="relative z-10 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  {post.type && (
                    <span className="text-xs uppercase tracking-[0.35em] text-emerald-300">{post.type}</span>
                  )}
                  {post.topic && (
                    <span className="text-xs uppercase tracking-[0.35em] text-slate-400">{post.topic}</span>
                  )}
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
                <CardTitle className="text-2xl font-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-200">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <p className="text-sm text-slate-200">{post.summary}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    By{" "}
                    <Link
                      href={`/blog/author/${encodeURIComponent(post.authorId)}`}
                      className="text-slate-200 hover:text-white underline underline-offset-4"
                    >
                      {post.authorName}
                    </Link>{" "}
                    · {post.readingMinutes} min
                  </span>
                  <Button
                    variant="ghost"
                    className="text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950/30"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>Read</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
