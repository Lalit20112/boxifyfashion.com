import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../products-data';

const whatsappNumber = '9817197390';
const makeWhatsAppUrl = (text) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

const PAGES = {
  'track-pants-manufacturer': {
    h1: 'Track Pants Manufacturer',
    title: 'Track Pants Manufacturer | Wholesale & Custom',
    description:
      'Boxify Fashion is a factory-owned track pants manufacturer. Wholesale nylon, lycra and terry track pants, MOQ 10, custom branding, 30,000+ units/month capacity.',
    match: (p) => /Nylon Crush|Heavy Lycra/.test(p.fabric),
    intro:
      'Boxify Fashion manufactures wholesale track pants from its own cutting and stitching floor in Agroha, Haryana. We supply retailers, resellers and private labels across India and export markets with consistent fabric, sizing and finish across repeat orders.',
    body: [
      {
        h2: 'Fabrics and GSM we run',
        p: 'Our regular track pant fabrics are nylon crush (200–240 GSM) for lightweight, quick-drying styles and heavy lycra blends (300–320 GSM) for a structured, crease-resistant fall. We also produce in bubble crush and poly-terry for mid-weight athleisure. Every fabric is checked for GSM, shrinkage and colour fastness before bulk cutting, so the pair you approve as a sample is the pair you receive in bulk.',
      },
      {
        h2: 'Construction and fit',
        p: 'Track pants are built with bar-tacked stress points, twin-needle side seams, elasticated or drawcord waistbands and ribbed or elasticated cuffs. Standard size sets run M–3XL, and waist-sized 30–44 sets are available for tailored ranges. We grade patterns to your measurement chart rather than forcing a house block, which keeps your fit consistent as you scale.',
      },
      {
        h2: 'Branding and packing',
        p: 'We handle screen and DTG printing, embroidery, woven and printed labels, size tabs, hang tags and custom polybag or box packing. Branding is done in-house, so a single team is accountable from cutting to the packed carton. Artwork is matched to a physical strike-off before we print a bulk run.',
      },
      {
        h2: 'MOQ, lead time and pricing',
        p: 'MOQ is 10 pieces per article with volume discounts as quantities rise. Standard bulk lead time is 2–3 weeks after fabric and specs are confirmed; expedited runs are quoted on request. Pricing is factory-direct with no trading-house margin, and repeat buyers get held pricing for planned reorders.',
      },
    ],
  },
  'joggers-manufacturer': {
    h1: 'Joggers Manufacturer',
    title: 'Joggers Manufacturer | Wholesale Jogger Pants',
    description:
      'Wholesale jogger pants manufacturer — bubble crush, nylon crush and fleece joggers. MOQ 10, custom colours and branding, factory-owned production since 2018.',
    match: (p) => /Jogger|Bubble Crush|Nylon Crush/.test(p.name + p.fabric),
    intro:
      'Boxify Fashion is a jogger pants manufacturer running its own production lines. We make bulk joggers for gymwear brands, streetwear labels and multi-brand retailers, with sampling and bulk handled under one roof.',
    body: [
      {
        h2: 'Jogger fabrics',
        p: 'We produce joggers in bubble crush (230–250 GSM) for a textured, wrinkle-hiding finish, nylon crush (210–230 GSM) for lightweight cargo-joggers, and loop-knit or fleece for winter ranges. Fabric GSM and stretch recovery are tested per lot so bulk matches the approved sample.',
      },
      {
        h2: 'Styling options',
        p: 'Elastic waist with inner drawcord, ribbed or elasticated ankle cuffs, side-seam or cargo pockets, zip or open pockets, and tapered or straight legs. We build to your tech pack; if you do not have one, we can develop the pattern from a reference sample and your measurement chart.',
      },
      {
        h2: 'Branding',
        p: 'Print, embroidery, woven labels, heat-transfer tags and custom packing are all done in-house. We match artwork to a strike-off before bulk and keep your trims in stock for faster reorders.',
      },
      {
        h2: 'Ordering',
        p: 'MOQ 10 per article, 2–3 week standard lead time, factory-direct pricing with volume slabs. Send your article list, colours, sizes and quantities on WhatsApp for a same-day quote.',
      },
    ],
  },
  'cargo-pants-manufacturer': {
    h1: 'Cargo Pants Manufacturer',
    title: 'Cargo Pants Manufacturer | Wholesale Cargo Pants',
    description:
      'Cargo pants manufacturer for wholesale and private label — cotton twill and nylon crush cargos, bar-tacked pockets, MOQ 10, custom branding and bulk dispatch.',
    match: (p) => /Cargo/.test(p.name + p.category),
    intro:
      'Boxify Fashion manufactures wholesale cargo pants from its own floor. We supply utility and streetwear cargos to retailers and labels, with durable construction and consistent pocket placement across bulk runs.',
    body: [
      {
        h2: 'Cargo fabrics',
        p: 'Cotton twill (290–310 GSM) for rugged workwear and streetwear cargos, and nylon crush lycra terry (250–270 GSM) for stretch cargos with a dry hand-feel. Twill is pre-checked for shrinkage so sizing holds after the first wash.',
      },
      {
        h2: 'Pocket and seam construction',
        p: 'Bellow or flap cargo pockets with bar-tacked corners, twin-needle side seams, reinforced crotch and a choice of button, hook or elastic waist. Pocket size and position are set to your spec and jig-cut so every unit in the run matches.',
      },
      {
        h2: 'Branding and packing',
        p: 'In-house print, embroidery, labels, tags and custom packing. Strike-off approval before every bulk print run.',
      },
      {
        h2: 'MOQ and lead time',
        p: 'MOQ 10 per article, 2–3 weeks standard, volume pricing on larger commitments. Factory-direct rates with no middle margin.',
      },
    ],
  },
  'custom-teamwear': {
    h1: 'Custom Teamwear Manufacturer',
    title: 'Custom Teamwear Manufacturer | Sports & Club Kits',
    description:
      'Custom teamwear manufacturer — club, academy and corporate kits with sublimation, embroidery and custom sizing. MOQ 10, factory-owned production, fast lead times.',
    match: () => false,
    intro:
      'Boxify Fashion produces custom teamwear for sports clubs, academies, gyms and corporate teams. We manufacture bottoms, tracksuits and layering pieces to your colours, crest and sizing, with everything cut, stitched and branded in-house.',
    body: [
      {
        h2: 'What we make for teams',
        p: 'Training track pants, warm-up joggers, tracksuit sets, shorts and layering lowers. Kits are produced in your primary and secondary colours with contrast panels, piping and taping to match your identity.',
      },
      {
        h2: 'Decoration',
        p: 'Panel sublimation for all-over colour and pattern, plus embroidery for crests and sponsor marks, and heat-transfer or printed names and numbers. Player names and numbers can be applied per unit from a supplied roster.',
      },
      {
        h2: 'Sizing',
        p: 'We produce youth through adult 3XL, and can grade to a custom measurement chart for squads that need a precise fit. A size-set sample is provided for approval before bulk.',
      },
      {
        h2: 'MOQ and timelines',
        p: 'MOQ is 10 pieces per style. Standard delivery is 2–3 weeks after artwork and size-set approval; tournament deadlines can be expedited on request. Share your crest, colours and roster on WhatsApp to start.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((category) => ({ category }));
}

export function generateMetadata({ params }) {
  const page = PAGES[params.category];
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${params.category}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://boxifyfashion.com/${params.category}`,
      images: ['/images/art-201.jpeg'],
    },
  };
}

export default function CategoryPage({ params }) {
  const page = PAGES[params.category];
  if (!page) notFound();

  const related = products.filter(page.match).slice(0, 4);

  return (
    <main style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <section className="grid">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <Link href="/products">Products</Link>{' '}
          <span>/</span> <span>{page.h1}</span>
        </nav>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <div className="cta-row" style={{ marginTop: '0.75rem' }}>
          <a
            className="btn solid"
            href={makeWhatsAppUrl(`Hi Boxify Fashion, I need a quote for ${page.h1.toLowerCase()}.`)}
            target="_blank"
            rel="noreferrer"
          >
            Get a quote on WhatsApp
          </a>
          <Link className="btn ghost" href="/products">Browse all products</Link>
        </div>
      </section>

      <section className="grid article-body">
        {page.body.map((block) => (
          <div key={block.h2}>
            <h2>{block.h2}</h2>
            <p>{block.p}</p>
          </div>
        ))}
      </section>

      {related.length > 0 && (
        <section className="grid">
          <div className="section-header">
            <h2>Related articles</h2>
            <p>In-stock styles in this category. MOQ 10 · custom colours on request.</p>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <article className="product" key={p.id}>
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${p.image})` }}
                  aria-label={p.name}
                />
                <div className="product-body compact">
                  <p className="pill subtle">{p.category}</p>
                  <h3>{p.name}</h3>
                  <p className="product-meta">Article {p.article} · {p.fabric} · {p.gsm} GSM</p>
                  <Link className="btn ghost small" href="/products">View on products page</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="grid">
        <div className="section-header">
          <h2>Explore more categories</h2>
        </div>
        <div className="category-links">
          {Object.entries(PAGES)
            .filter(([slug]) => slug !== params.category)
            .map(([slug, p]) => (
              <Link key={slug} href={`/${slug}`}>{p.h1}</Link>
            ))}
        </div>
      </section>
    </main>
  );
}
