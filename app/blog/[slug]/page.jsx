import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '../posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.title} | Boxify Fashion` },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Boxify Fashion`,
      description: post.excerpt,
      url: `https://boxifyfashion.com/blog/${post.slug}`,
      type: 'article',
      images: ['/images/art4.jpeg'],
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <article className="grid article-body">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link>{' '}
          <span>/</span> <span>{post.title}</span>
        </nav>
        <h1>{post.title}</h1>
        <p className="muted">
          {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        {post.body.map((block) =>
          block.links ? (
            <div key="related">
              <h2>{block.h2}</h2>
              <ul>
                {block.links.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={block.h2}>
              <h2>{block.h2}</h2>
              <p>{block.p}</p>
            </div>
          ),
        )}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'Boxify Fashion' },
            publisher: {
              '@type': 'Organization',
              name: 'Boxify Fashion',
              logo: { '@type': 'ImageObject', url: 'https://boxifyfashion.com/logo-2026.png' },
            },
            mainEntityOfPage: `https://boxifyfashion.com/blog/${post.slug}`,
          }),
        }}
      />
    </main>
  );
}
