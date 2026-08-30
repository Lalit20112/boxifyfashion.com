'use client';
import { usePathname } from 'next/navigation';

const whatsappNumber = '9817197390';

const CONTEXT = [
  { test: (p) => p === '/products', msg: 'Hi Boxify Fashion, I was looking at your products page and want wholesale pricing.' },
  { test: (p) => p === '/quote', msg: 'Hi Boxify Fashion, I am building a bulk quote and have a question.' },
  { test: (p) => p === '/sample', msg: 'Hi Boxify Fashion, I want to request samples.' },
  { test: (p) => p.startsWith('/blog'), msg: 'Hi Boxify Fashion, I read one of your guides and want to discuss an order.' },
  { test: (p) => p.endsWith('-manufacturer') || p === '/custom-teamwear', msg: 'Hi Boxify Fashion, I need a manufacturer for this category — please share pricing and lead time.' },
];

export default function WhatsappFab() {
  const pathname = usePathname() || '/';
  if (pathname.startsWith('/leads')) return null;

  const match = CONTEXT.find((c) => c.test(pathname));
  const msg = match ? match.msg : 'Hi Boxify Fashion, I want to place a wholesale order.';
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <a className="whatsapp-fab" href={href} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2A9.9 9.9 0 0 0 2 11.93c0 1.77.46 3.49 1.33 5.01L2 22l5.2-1.3A9.98 9.98 0 1 0 12.04 2Zm5.58 14.48c-.23.65-1.37 1.23-1.9 1.3c-.49.07-1.1.1-1.77-.11c-.41-.13-.94-.3-1.62-.59c-2.85-1.23-4.7-4.1-4.85-4.29c-.14-.19-1.16-1.54-1.16-2.94c0-1.4.72-2.08.98-2.36c.26-.28.58-.35.78-.35h.56c.18 0 .42-.07.66.5c.23.56.77 1.93.84 2.07c.07.14.12.3.02.49c-.1.19-.15.3-.3.46c-.15.16-.32.36-.46.48c-.15.12-.3.26-.13.55c.17.28.76 1.25 1.63 2.02c1.12.99 2.06 1.3 2.35 1.46c.29.16.46.14.64-.08c.18-.21.74-.86.93-1.16c.19-.3.39-.25.66-.15c.26.09 1.68.8 1.97.94c.29.14.48.21.55.32c.07.12.07.68-.16 1.34Z"
        />
      </svg>
      <span>Chat</span>
    </a>
  );
}
