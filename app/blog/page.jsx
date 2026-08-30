import Link from 'next/link';
import { posts } from './posts';

export const metadata = {
  title: 'Blog — Fabric Guides & Buyer Education',
  description:
    'Guides for apparel buyers from Boxify Fashion: fabric and GSM explainers, manufacturer vs supplier, and how to brief a bulk order.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Fabric Guides & Buyer Education | Boxify Fashion',
    description:
      'Guides for apparel buyers: fabric and GSM explainers, manufacturer vs supplier, and how to brief a bulk order.',
    url: 'https://boxifyfashion.com/blog',
    images: ['/images/art4.jpeg'],
  },
};

export default function BlogIndex() {
  return (
    <main style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <section className="grid">
        <h1>Boxify Fashion Blog</h1>
        <p>Fabric guides and buyer education for wholesale and private-label apparel.</p>
      </section>
      <section className="grid">
        <div className="blog-list">
          {posts.map((p) => (
            <article className="blog-card" key={p.slug}>
              <p className="muted">{new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              <h2><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
              <p>{p.excerpt}</p>
              <Link className="btn ghost small" href={`/blog/${p.slug}`}>Read article</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
