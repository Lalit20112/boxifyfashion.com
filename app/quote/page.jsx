'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '../products-data';
import { submitLead } from '../lead-client';

const whatsappNumber = '9817197390';
const email = 'info@boxifyfashion.com';

const BRANDING = {
  none: { label: 'No branding', add: 0 },
  print: { label: 'Screen / DTG print', add: 15 },
  embroidery: { label: 'Embroidery', add: 25 },
};

const TIERS = [
  { min: 1000, off: 0.15, label: '1000+ units' },
  { min: 500, off: 0.12, label: '500–999 units' },
  { min: 200, off: 0.08, label: '200–499 units' },
  { min: 50, off: 0.04, label: '50–199 units' },
  { min: 0, off: 0, label: 'Under 50 units' },
];

const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

export default function QuotePage() {
  const [lines, setLines] = useState(() =>
    Object.fromEntries(products.map((p) => [p.id, { qty: 0, color: p.colors[0], branding: 'none' }])),
  );
  const [contact, setContact] = useState({ name: '', business: '', whatsapp: '', email: '', delivery: '', notes: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const setLine = (id, patch) => setLines((s) => ({ ...s, [id]: { ...s[id], ...patch } }));
  const setC = (k) => (e) => setContact((c) => ({ ...c, [k]: e.target.value }));

  const calc = useMemo(() => {
    const active = products
      .map((p) => ({ p, ...lines[p.id] }))
      .filter((l) => Number(l.qty) > 0);
    const totalUnits = active.reduce((s, l) => s + Number(l.qty), 0);
    const tier = TIERS.find((t) => totalUnits >= t.min) || TIERS[TIERS.length - 1];
    let low = 0;
    let high = 0;
    const rows = active.map((l) => {
      const qty = Number(l.qty);
      const add = BRANDING[l.branding].add;
      const lineLow = (l.p.price * (1 - tier.off) + add) * qty;
      const lineHigh = (l.p.price + add) * qty;
      low += lineLow;
      high += lineHigh;
      return { ...l, qty, add, lineLow, lineHigh };
    });
    return { rows, totalUnits, tier, low, high };
  }, [lines]);

  const summaryText = () => {
    const head = `RFQ from ${contact.name || '—'} (${contact.business || '—'})`;
    const items = calc.rows
      .map(
        (r) =>
          `• ${r.p.name} (Art ${r.p.article}) — ${r.qty} pcs, ${r.color}, ${BRANDING[r.branding].label}`,
      )
      .join('\n');
    const money = `Indicative total: ${inr(calc.low)} – ${inr(calc.high)} for ${calc.totalUnits} pcs (${calc.tier.label} pricing)`;
    const extra = [
      contact.delivery ? `Target delivery: ${contact.delivery}` : '',
      contact.notes ? `Notes: ${contact.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return [head, '', items, '', money, extra].filter((x) => x !== undefined).join('\n');
  };

  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summaryText())}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent('RFQ — ' + (contact.business || 'Bulk enquiry'))}&body=${encodeURIComponent(summaryText())}`;

  const record = () => {
    if (calc.rows.length === 0) {
      setError('Add a quantity to at least one article.');
      return false;
    }
    if (!contact.name.trim() || !contact.business.trim()) {
      setError('Name and business are required.');
      return false;
    }
    setError('');
    submitLead({
      type: 'rfq',
      name: contact.name,
      business: contact.business,
      whatsapp: contact.whatsapp,
      email: contact.email,
      message: contact.notes,
      payload: {
        delivery: contact.delivery,
        totalUnits: calc.totalUnits,
        tier: calc.tier.label,
        estimate: { low: Math.round(calc.low), high: Math.round(calc.high) },
        lines: calc.rows.map((r) => ({
          article: r.p.article,
          name: r.p.name,
          qty: r.qty,
          color: r.color,
          branding: BRANDING[r.branding].label,
        })),
      },
    });
    setSent(true);
    return true;
  };

  return (
    <main style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <section className="grid">
        <h1>Instant bulk quote</h1>
        <p>
          Pick articles and quantities for an indicative price band, then send a ready-made RFQ to our team.
          Final pricing is confirmed against fabric, branding and delivery date. MOQ 10 per article.
        </p>
      </section>

      <section className="grid">
        <div className="quote-grid">
          {products.map((p) => {
            const l = lines[p.id];
            return (
              <div className="quote-row" key={p.id}>
                <div
                  className="quote-thumb"
                  style={{ backgroundImage: `url(${p.image})` }}
                  aria-hidden="true"
                />
                <div className="quote-info">
                  <h3>{p.name}</h3>
                  <p className="muted">Art {p.article} · {p.fabric} · {p.gsm} GSM · {inr(p.price)}/unit list</p>
                  <div className="quote-controls">
                    <label>
                      <span>Qty</span>
                      <input
                        type="number"
                        min="0"
                        step="10"
                        value={l.qty}
                        onChange={(e) => setLine(p.id, { qty: e.target.value })}
                      />
                    </label>
                    <label>
                      <span>Colour</span>
                      <select value={l.color} onChange={(e) => setLine(p.id, { color: e.target.value })}>
                        {p.colors.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <span>Branding</span>
                      <select value={l.branding} onChange={(e) => setLine(p.id, { branding: e.target.value })}>
                        {Object.entries(BRANDING).map(([k, v]) => (
                          <option key={k} value={k}>{v.label}{v.add ? ` (+${inr(v.add)})` : ''}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid quote-summary">
        <div className="section-header">
          <h2>Estimate</h2>
          <p>Indicative only — {calc.totalUnits} pcs · {calc.tier.label} pricing tier ({Math.round(calc.tier.off * 100)}% off list)</p>
        </div>
        {calc.rows.length === 0 ? (
          <p className="muted">Add a quantity above to see a price band.</p>
        ) : (
          <>
            <ul className="quote-lines">
              {calc.rows.map((r) => (
                <li key={r.p.id}>
                  <span>{r.p.name} × {r.qty} ({BRANDING[r.branding].label})</span>
                  <span>{inr(r.lineLow)} – {inr(r.lineHigh)}</span>
                </li>
              ))}
            </ul>
            <div className="quote-total">
              <span>Indicative total</span>
              <strong>{inr(calc.low)} – {inr(calc.high)}</strong>
            </div>
          </>
        )}

        <div className="catalog-form" style={{ maxWidth: 'none' }}>
          <div className="quote-contact-grid">
            <label><span>Name</span><input value={contact.name} onChange={setC('name')} /></label>
            <label><span>Business</span><input value={contact.business} onChange={setC('business')} /></label>
            <label><span>WhatsApp</span><input value={contact.whatsapp} onChange={setC('whatsapp')} inputMode="tel" /></label>
            <label><span>Email</span><input value={contact.email} onChange={setC('email')} inputMode="email" /></label>
            <label><span>Target delivery</span><input type="date" value={contact.delivery} onChange={setC('delivery')} /></label>
          </div>
          <label><span>Notes (fabric, GSM, packing, labels…)</span><input value={contact.notes} onChange={setC('notes')} /></label>
          {error && <p className="catalog-error">{error}</p>}
          {sent && <p className="quote-sent">Saved. Now send it to our team:</p>}
          <div className="cta-row">
            <a
              className="btn solid"
              href={waHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => { if (!record()) e.preventDefault(); }}
            >
              Send RFQ on WhatsApp
            </a>
            <a
              className="btn ghost"
              href={mailHref}
              onClick={(e) => { if (!record()) e.preventDefault(); }}
            >
              Send by email
            </a>
            <Link className="btn ghost" href="/sample">Request samples instead</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
