import FeaturedCarousel from './featured-carousel';
import ScrollReveal from './scroll-reveal';
import CatalogLead from './catalog-lead';
import CountUp from './count-up';
import { products } from './products-data';

export const metadata = {
  title: {
    absolute: 'Boxify Fashion | Track Pants, Joggers & Custom Teamwear Manufacturer',
  },
  description:
    'Factory-owned manufacturer of track pants, joggers, cargo pants and custom teamwear. 30,000+ units/month capacity, MOQ 10, custom branding, fast lead times.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Boxify Fashion | Track Pants, Joggers & Custom Teamwear Manufacturer',
    description:
      'Factory-owned manufacturer of track pants, joggers, cargo pants and custom teamwear. 30,000+ units/month capacity, MOQ 10.',
    url: 'https://boxifyfashion.com/',
    images: ['/images/art-201.jpeg'],
  },
};

const faqs = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'Our MOQ is 10 units per article for B2B buyers, with volume discounts as quantities scale.',
  },
  {
    q: 'What are your typical lead times?',
    a: 'Standard bulk runs ship in 2–3 weeks after fabric and specs are confirmed. Expedited runs are available on request.',
  },
  {
    q: 'Which fabrics and GSM options do you offer?',
    a: 'We regularly produce in Nylon Crush, Bubble Crush, Cotton Twill, Heavy Lycra and terry blends, typically 180–320 GSM depending on the garment. Custom fabric sourcing is available for bulk orders.',
  },
  {
    q: 'Can I order samples before a bulk order?',
    a: 'Yes. We provide pre-production samples for approval. Sample charges are adjusted against the bulk order once confirmed.',
  },
  {
    q: 'Do you offer custom branding?',
    a: 'Yes — screen and DTG printing, embroidery, woven/printed labels, hang tags and custom polybag or box packing to your specification.',
  },
  {
    q: 'What are your payment terms?',
    a: 'Typically an advance to confirm production with the balance before dispatch. Terms for repeat buyers are discussed case by case.',
  },
];

const whatsappNumber = '9817197390';
const email = 'info@boxifyfashion.com';

const testimonials = [
  {
    quote:
      'Boxify has been our lower-body supplier for two years. Consistent GSM, honest lead times and branding done exactly to our tech pack.',
    name: 'Rahul Mehta',
    business: 'Streetline Apparel, Delhi',
  },
  {
    quote:
      'We reorder joggers and cargos every quarter. Sampling is quick and bulk quality matches the sample — which is rare.',
    name: 'Farhan Qureshi',
    business: 'QRT Clothing, Mumbai',
  },
  {
    quote:
      'Custom teamwear for our academy was delivered on time with our crest embroidered. Pricing beat two other factories we quoted.',
    name: 'Sandeep Rao',
    business: 'Baseline Sports Academy, Pune',
  },
];

const resellerLogos = ['Streetline', 'QRT Clothing', 'Baseline Sports', 'Urban Crew', 'NorthFit', 'Cotton&Co'];

const highlights = [
  {
    title: 'Own Factory',
    text: 'Cutting, stitching, branding, packing under one roof.',
  },
  {
    title: 'MOQ 10 (B2B)',
    text: 'Bulk-friendly pricing; volume discounts for resellers.',
  },
  {
    title: 'Fast Turnaround',
    text: 'Clear lead times with expedited runs on request.',
  },
];

const values = [
  {
    title: 'Quality Assurance',
    text: 'Fabric testing, pattern alignment, seam checks, finishing.',
  },
  {
    title: 'Custom Branding',
    text: 'Print/embroidery, labels, tags, and packaging per spec.',
  },
  {
    title: 'Competitive Pricing',
    text: 'Factory-direct rates with predictable costs.',
  },
  {
    title: 'Reliable Delivery',
    text: 'On-time dispatch with transparent updates.',
  },
];

const steps = [
  { title: 'Brief & fabric', text: 'Lock GSM, blends, colors, sizing before cutting.' },
  { title: 'Cut & stitch', text: 'Pattern-aligned cutting and skilled stitching lines.' },
  { title: 'Branding', text: 'Print/embroidery, labels, tags, custom packing.' },
  { title: 'QC & dispatch', text: 'Stage-wise checks, finishing, bulk packing, dispatch.' },
];

const timeline = [
  { year: '2018', text: 'Factory launched; first bulk tracksuit order shipped.' },
  { year: '2020', text: 'Expanded cutting/stitching lines; fleece/knit specialization.' },
  { year: '2022', text: '30K+ units/month capacity; upgraded QA + finishing.' },
  { year: '2024', text: 'Serving global B2B buyers with custom branding and rapid lead times.' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/boxifyfashion' },
  { label: 'Facebook', href: 'https://www.facebook.com/boxifyfashion' },
  { label: 'YouTube', href: 'https://www.youtube.com/@boxifyfashion' },
]; // Twitter removed

const makeWhatsAppUrl = (text) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export default function Page() {
  return (
    <div className="page">
      <ScrollReveal />
      <main>
        <section className="hero" id="hero" data-reveal>
          <div className="hero-overlay" />
          {/* Genuine factory-floor footage. Replace /videos/factory-floor.mp4 with the
              real cutting/stitching/packing clip when supplied; boxy3.mp4 is the current
              in-house fallback. Stock Pexels clip removed per brief. */}
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/about3.jpg"
          >
            <source src="/videos/factory-floor.mp4" type="video/mp4" />
            <source src="/images/boxy3.mp4" type="video/mp4" />
          </video>
          <div className="hero-content">
            <p className="eyebrow">Factory-first · MOQ 10</p>
            <h1>Boxify — Quality & Casuals Manufacturer</h1>
            <p className="lede">
              Premium track pants, t-shirts, joggers, jackets, and custom teamwear. Custom orders, bulk pricing, fast delivery.
            </p>
            <div className="hero-actions">
              <a className="btn solid" href="/quote">Get an instant bulk quote</a>
              <a className="btn ghost" href={makeWhatsAppUrl('Hi Boxify Fashion, I want to place a wholesale order.')} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
            </div>
            <div className="pills">
              <span>Bulk-ready</span>
              <span>Custom branding</span>
              <span>Fast turnaround</span>
            </div>
          </div>
        </section>

        <section className="capacity-band" aria-label="Production capacity" data-reveal>
          <div className="capacity-stat">
            <span className="capacity-number"><CountUp end={30000} suffix="+" /></span>
            <span className="capacity-label">units/month production capacity</span>
          </div>
          <div className="capacity-support">
            <div><strong>MOQ 10</strong><span>B2B minimum order</span></div>
            <div><strong>2–3 wks</strong><span>standard lead time</span></div>
            <div><strong>Since 2018</strong><span>factory-owned floor</span></div>
          </div>
        </section>

        <section className="grid highlights" aria-labelledby="highlights-heading" data-reveal>
          <div className="section-header">
            <h2 id="highlights-heading">Why partners choose us</h2>
            <p>Factory-owned lines, transparent timelines, consistent QC.</p>
          </div>
          <div className="card-grid">
            {highlights.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid" id="trust" aria-labelledby="trust-heading" data-reveal>
          <div className="section-header">
            <h2 id="trust-heading">Trusted by resellers &amp; brands</h2>
            <p>Retailers and labels who reorder with us.</p>
          </div>
          <div className="logo-strip" aria-label="Client and reseller list">
            {resellerLogos.map((l) => (
              <span className="logo-chip" key={l}>{l}</span>
            ))}
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure className="testimonial" key={t.name}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.business}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid" id="collections" aria-labelledby="collections-heading" data-reveal>
          <div className="section-header">
            <h2 id="collections-heading">Featured collections</h2>
            <p>Top picks. MOQ 10 · Custom colors/sizes on request.</p>
          </div>
          <div className="product-grid featured-desktop">
            {products.slice(0, 3).map((p) => (
              <article className="product" key={p.id}>
                <div className="product-image" style={{ backgroundImage: `url(${p.image})` }} aria-label={p.name} />
                <div className="product-body compact">
                  <p className="pill subtle">{p.category}</p>
                  <h3>{p.name}</h3>
                  <p className="product-meta">Article {p.article} · {p.fabric}</p>
                  <div className="product-footer compact">
                    <a
                      className="btn solid small"
                      href={makeWhatsAppUrl(`Hi, I want to order ${p.name} (Article ${p.article}) from Boxify Fashion. Please share pricing and lead time.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                    <a className="btn ghost small" href={`mailto:${email}?subject=${encodeURIComponent('Enquiry: ' + p.name)}&body=${encodeURIComponent(`Hi, I want wholesale details for ${p.name} (Article ${p.article}). MOQ 10+.`)}`}>
                      Email
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="featured-mobile">
            <FeaturedCarousel items={products.slice(0, 3)} whatsappNumber={whatsappNumber} email={email} />
          </div>
          <div className="cta-row" style={{ marginTop: '1rem' }}>
            <a className="btn solid" href="/products">View all products</a>
            <a className="btn ghost" href={makeWhatsAppUrl('Hi, share full product catalog and pricing for Boxify Fashion.')}>WhatsApp catalog</a>
          </div>
          <div className="category-links" aria-label="Browse by category">
            <a href="/track-pants-manufacturer">Track Pants manufacturer</a>
            <a href="/joggers-manufacturer">Joggers manufacturer</a>
            <a href="/cargo-pants-manufacturer">Cargo Pants manufacturer</a>
            <a href="/custom-teamwear">Custom Teamwear</a>
          </div>
        </section>

        <section className="grid" id="catalog" aria-labelledby="catalog-heading" data-reveal>
          <div className="section-header">
            <h2 id="catalog-heading">Download the full catalog</h2>
            <p>Full article list, fabrics, GSM and pricing bands in one PDF.</p>
          </div>
          <CatalogLead />
        </section>

        <section className="grid" id="process" aria-labelledby="process-heading" data-reveal>
          <div className="section-header">
            <h2 id="process-heading">The way we work</h2>
            <p>From fabric to dispatch—simple, transparent steps.</p>
          </div>
          <div className="card-grid four">
            {steps.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split" id="about" data-reveal>
          <div className="text">
            <h2>About Boxify Fashion</h2>
            <p>Boxify Fashion is a B2B-first manufacturer with its own tailoring floor—cutting, stitching, branding, and finishing under one roof for consistent wholesale quality.</p>
            <p>We ship bulk tracksuits, lowers, tees, polos, hoodies, and uniforms for retailers and resellers worldwide.</p>
            <div className="value-grid">
              {values.map((v) => (
                <div className="pill-card" key={v.title}>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="timeline-row" key={t.year}>
                  <div className="year">{t.year}</div>
                  <div className="line" />
                  <div className="text">{t.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="media">
            <div className="media-grid">
              <div className="about-photo" style={{ backgroundImage: "url('/images/about1.jpg')" }} />
              <div className="about-photo" style={{ backgroundImage: "url('/images/about2.jpg')" }} />
              <div className="about-photo" style={{ backgroundImage: "url('/images/about3.jpg')" }} />
            </div>
            <div className="owner-card">
              <p className="pill subtle">Founder</p>
              <h3>Naveen Saroya</h3>
              <p>Founder, Boxify Fashion — leads production and delivery, from fabric selection and cutting accuracy to QC and on-time dispatch for every lot.</p>
            </div>
          </div>
        </section>

        <section className="grid" id="faq" aria-labelledby="faq-heading" data-reveal>
          <div className="section-header">
            <h2 id="faq-heading">Frequently asked questions</h2>
            <p>MOQ, lead times, fabrics, samples, branding and payment terms.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              }),
            }}
          />
        </section>

        <section className="cta-wide" id="contact">
          <div>
            <p className="eyebrow">Let’s start your next run</p>
            <h2>Share your article, colors, sizes, and quantity (MOQ 10)</h2>
            <p className="muted">Fast quotes on WhatsApp. Branding, labels, packaging on request.</p>
          </div>
          <div className="cta-row">
            <a className="btn solid" href={makeWhatsAppUrl('Hi, I want to place a wholesale order with Boxify Fashion. Please connect.')} target="_blank" rel="noreferrer">
              WhatsApp +91 9817197390
            </a>
            <a className="btn ghost" href={`mailto:${email}`}>Email info@boxifyfashion.com</a>
          </div>
          <div className="contact-meta">
            <span>MOQ 10 · Volume discounts</span>
            <span>Custom branding & packing</span>
            <span>Factory-owned production</span>
          </div>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
