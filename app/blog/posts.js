// Starter blog content. Copy can be expanded later; structure (H1/H2 + internal links) is in place.
export const posts = [
  {
    slug: 'fabric-gsm-guide-for-bottomwear',
    title: 'Fabric & GSM Guide for Bottomwear Buyers',
    excerpt:
      'What GSM actually means, the ranges we run for track pants, joggers and cargos, and how to pick the right weight for your range.',
    date: '2026-08-05',
    body: [
      {
        h2: 'What GSM means',
        p: 'GSM is grams per square metre — the weight of the fabric, not its thickness or quality on its own. A higher GSM usually means a denser, warmer, more structured fabric; a lower GSM means lighter and more breathable. Two fabrics at the same GSM can still feel very different depending on knit or weave, yarn and finish, which is why a physical sample matters more than a number on a spec sheet.',
      },
      {
        h2: 'Ranges we run',
        p: 'For joggers we typically work between 210 and 250 GSM — nylon crush around 210–230 for lightweight styles, bubble crush around 230–250 for a textured finish. Track pants run 200–240 GSM in nylon crush and 300–320 GSM in heavy lycra blends. Cotton twill cargos sit at 290–310 GSM for durability. Winter fleece ranges go higher, 280–340 GSM.',
      },
      {
        h2: 'How to choose',
        p: 'Match the weight to the season and use. Summer athleisure and export to warm markets: stay light, 200–230 GSM. All-season retail: 230–260 GSM is the safe middle. Structured or formal-casual bottoms: 300 GSM and above. Always approve a wash-tested sample so you see shrinkage and hand-feel after laundering, not just off the roll.',
      },
      {
        h2: 'Related',
        links: [
          { href: '/track-pants-manufacturer', label: 'Track pants manufacturing' },
          { href: '/joggers-manufacturer', label: 'Joggers manufacturing' },
          { href: '/products', label: 'Browse current articles' },
        ],
      },
    ],
  },
  {
    slug: 'manufacturer-vs-supplier',
    title: 'Manufacturer vs Supplier: What the Difference Means for Your Order',
    excerpt:
      'Why buying from a factory-owned manufacturer changes pricing, consistency and lead times compared with buying through a supplier or trading house.',
    date: '2026-08-18',
    body: [
      {
        h2: 'The two models',
        p: 'A manufacturer owns the production — cutting tables, stitching lines, branding and QC. A supplier or trading house buys from one or more factories and resells to you. Both can deliver goods, but the control, margin and accountability are different.',
      },
      {
        h2: 'Pricing',
        p: 'With a manufacturer you pay factory-direct rates. With a supplier there is an added margin, and it is not always visible. On repeat bulk orders that margin compounds. A manufacturer can also hold pricing for planned reorders because it controls its own input costs.',
      },
      {
        h2: 'Consistency',
        p: 'When one factory cuts every run, GSM, sizing and finish stay consistent order to order. A supplier may move your order between factories depending on capacity, which is where buyers see fit and fabric drift between shipments.',
      },
      {
        h2: 'Lead times and problem-solving',
        p: 'A manufacturer quotes lead times against its own line capacity and can expedite by rescheduling. A supplier is one step removed and has to negotiate with the factory, which slows both quoting and fixing issues mid-production.',
      },
      {
        h2: 'Related',
        links: [
          { href: '/about', label: 'About our factory' },
          { href: '/custom-teamwear', label: 'Custom teamwear' },
        ],
      },
    ],
  },
  {
    slug: 'how-to-brief-a-bulk-order',
    title: 'How to Brief a Bulk Order So Samples Match Production',
    excerpt:
      'A short checklist for buyers: what to lock before cutting so your bulk delivery matches the sample you approved.',
    date: '2026-08-27',
    body: [
      {
        h2: 'Lock the fabric',
        p: 'Name the fabric, GSM and colour, and approve a physical swatch. Ask for a wash-tested swatch so you see shrinkage and colour behaviour. Note the acceptable GSM tolerance in writing.',
      },
      {
        h2: 'Lock the measurements',
        p: 'Send a full measurement chart with tolerances for every size you want, not just a sample size. Confirm whether the factory grades to your chart or its house block.',
      },
      {
        h2: 'Lock the trims and branding',
        p: 'Specify drawcords, tapes, labels, tags, thread colour and packing. Approve a strike-off for every print or embroidery placement. Keep a signed sample as the reference for QC.',
      },
      {
        h2: 'Agree QC and terms',
        p: 'Define the inspection level, defect thresholds, payment terms and dispatch date up front. A pre-production sample plus a mid-production check catches most issues before they scale.',
      },
      {
        h2: 'Related',
        links: [
          { href: '/products', label: 'See article specs' },
          { href: '/contact', label: 'Start an enquiry' },
        ],
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
