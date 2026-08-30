'use client';
import { useState } from 'react';
import { submitLead } from './lead-client';

const whatsappNumber = '9817197390';
const CATALOG_URL = '/catalog/boxify-fashion-catalog.pdf';

export default function CatalogLead() {
  const [form, setForm] = useState({ name: '', business: '', whatsapp: '' });
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.business.trim() || !form.whatsapp.trim()) {
      setError('Please fill name, business and WhatsApp number.');
      return;
    }
    setError('');
    submitLead({ type: 'catalog', ...form });
    setDone(true);
  };

  if (done) {
    return (
      <div className="catalog-done">
        <p>Thanks, {form.name.split(' ')[0]}. Your catalog is ready.</p>
        <div className="cta-row">
          <a className="btn solid" href={CATALOG_URL} target="_blank" rel="noreferrer">
            Download Full Catalog (PDF)
          </a>
          <a
            className="btn ghost"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi, this is ${form.name} from ${form.business}. I just downloaded the catalog — please share bulk pricing.`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Continue on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="catalog-form" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input value={form.name} onChange={update('name')} placeholder="Your name" />
      </label>
      <label>
        <span>Business</span>
        <input value={form.business} onChange={update('business')} placeholder="Company / store name" />
      </label>
      <label>
        <span>WhatsApp</span>
        <input value={form.whatsapp} onChange={update('whatsapp')} placeholder="+91 …" inputMode="tel" />
      </label>
      {error && <p className="catalog-error">{error}</p>}
      <button className="btn solid" type="submit">Get the catalog</button>
    </form>
  );
}
