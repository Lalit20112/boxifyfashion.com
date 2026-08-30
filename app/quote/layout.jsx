export const metadata = {
  title: 'Instant Bulk Quote & RFQ',
  description:
    'Build an indicative bulk price band for track pants, joggers and cargos, then send a ready-made RFQ to Boxify Fashion. MOQ 10, volume pricing tiers.',
  alternates: { canonical: '/quote' },
  openGraph: {
    title: 'Instant Bulk Quote & RFQ | Boxify Fashion',
    description: 'Indicative bulk pricing and a ready-made RFQ in under a minute.',
    url: 'https://boxifyfashion.com/quote',
    images: ['/images/art-201.jpeg'],
  },
};

export default function QuoteLayout({ children }) {
  return children;
}
