'use client';
import { useState } from 'react';
import Link from 'next/link';
import { products } from '../products-data';
import { submitLead } from '../lead-client';

const whatsappNumber = '9817197390';
const email = 'info@boxifyfashion.com';

export default function SamplePage() {
  const [picked, setPicked] = useState({});
  const [form, setForm] = useState({ name: '', business: '', whatsapp: '', email: '', address: '', notes: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const toggle = (id) => setPicked((s) => ({ ...s, [id]: !s[id] }));
  const setF = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const chosen = products.filter((p) => picked[p.id]);

  const summary = () => {
    const items = chosen.map((p) => `• ${p.name} (Art ${p.article}, ${p.fabric} ${p.gsm} GSM)`).join('\n');
    return [
      `Sample request from ${form.name || '—'} (${form.business || '—'})`,
      '',
      items,
      '',
      form.address ? `Ship to: ${form.address}` : '',
      form.notes ? `Notes: ${form.notes}` : '',
      '',
      'I understand sample charges + courier apply and are adjusted against a confirmed bulk order.',
    ]
      .filter((x) => x !== undefined)
      .join('\n');
  };

  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary())}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent('Sample request — ' + (form.business || ''))}&body=${encodeURIComponent(summary())}`;

  const record = () => {
    if (chosen.length === 0) { setError('Select at least one article.'); return false; }
    if (!form.name.trim() || !form.business.trim() || !form.address.trim()) {
      setError('Name, business and shipping address are required.');
      return false;
    }
    setError('');
    submitLead({
      type: 'sample',
      name: form.name,
      business: form.business,
      whatsapp: form.whatsapp,
      email: form.email,
      message: form.notes,
      payload: {
        address: form.address,
        articles: chosen.map((p) => ({ article: p.article, name: p.name })),
      },
    });
    setSent(true);
    return true;
  };

  return (
    <main style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <section className="grid">
        <h1>Request samples</h1>
        <p>
          Order pre-production or reference samples before committing to a bulk run. Sample charges and courier
          apply and are adjusted against your bulk order once confirmed. Turnaround is typically 5–8 days.
        </p>
      </section>

      <section className="grid">
        <div className="section-header"><h2>Choose articles</h2></div>
        <div className="sample-grid">
          {products.map((p) => (
            <label className={`sample-card ${picked[p.id] ? 'on' : ''}`} key={p.id}>
              <input type="checkbox" checked={!!picked[p.id]} onChange={() => toggle(p.id)} />
              <div className="sample-thumb" style={{ backgroundImage: `url(${p.image})` }} aria-hidden="true" />
              <div>
                <h3>{p.name}</h3>
                <p className="muted">Art {p.article} · {p.fabric} · {p.gsm} GSM</p>
              </div>
            </label>
          ))}
        </div>
      </section>

      <section className="grid">
        <div className="catalog-form" style={{ maxWidth: 'none' }}>
          <div className="quote-contact-grid">
            <label><span>Name</span><input value={form.name} onChange={setF('name')} /></label>
            <label><span>Business</span><input value={form.business} onChange={setF('business')} /></label>
            <label><span>WhatsApp</span><input value={form.whatsapp} onChange={setF('whatsapp')} inputMode="tel" /></label>
            <label><span>Email</span><input value={form.email} onChange={setF('email')} inputMode="email" /></label>
          </div>
          <label><span>Shipping address</span><input value={form.address} onChange={setF('address')} /></label>
          <label><span>Notes (colours, sizes, branding to mock up…)</span><input value={form.notes} onChange={setF('notes')} /></label>
          {error && <p className="catalog-error">{error}</p>}
          {sent && <p className="quote-sent">Saved. Now send it to our team:</p>}
          <div className="cta-row">
            <a className="btn solid" href={waHref} target="_blank" rel="noreferrer" onClick={(e) => { if (!record()) e.preventDefault(); }}>
              Send request on WhatsApp
            </a>
            <a className="btn ghost" href={mailHref} onClick={(e) => { if (!record()) e.preventDefault(); }}>
              Send by email
            </a>
            <Link className="btn ghost" href="/quote">Build a bulk quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
