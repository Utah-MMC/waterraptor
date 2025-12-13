import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps } from 'react';

function MdxLink(props: ComponentProps<'a'>) {
  const href = props.href ?? '';
  const isInternal = typeof href === 'string' && href.startsWith('/');
  if (isInternal) {
    return (
      <Link
        href={href}
        className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <a
      {...props}
      className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
      target={props.target ?? '_blank'}
      rel={props.rel ?? 'noopener noreferrer'}
    />
  );
}

function MdxImage(props: ComponentProps<'img'>) {
  const src = typeof props.src === 'string' ? props.src : '';
  const alt = props.alt ?? '';
  if (!src) return null;
  return (
    <span className="block overflow-hidden rounded-2xl border border-white/15 bg-slate-950/30">
      <Image src={src} alt={alt} width={1400} height={800} className="h-auto w-full" />
    </span>
  );
}

export const mdxComponents = {
  a: MdxLink,
  img: MdxImage,
  h1: (props: ComponentProps<'h1'>) => (
    <h1
      {...props}
      className="text-4xl md:text-5xl font-bold tracking-tight text-white scroll-mt-24"
    />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2
      {...props}
      className="mt-10 text-2xl md:text-3xl font-semibold text-white scroll-mt-24"
    />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3
      {...props}
      className="mt-8 text-xl md:text-2xl font-semibold text-white scroll-mt-24"
    />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p {...props} className="mt-4 text-slate-200 leading-relaxed" />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul {...props} className="mt-4 list-disc pl-6 text-slate-200 space-y-2" />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol {...props} className="mt-4 list-decimal pl-6 text-slate-200 space-y-2" />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote
      {...props}
      className="mt-6 border-l-2 border-emerald-400/50 pl-4 text-slate-200 italic"
    />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code {...props} className="rounded bg-slate-900/60 px-1.5 py-0.5 text-slate-100" />
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-2xl border border-white/15 bg-slate-950/60 p-4 text-slate-100"
    />
  ),
};

