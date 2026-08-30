'use client';
import { useState } from 'react';

export default function LeadsPage() {
  const [key, setKey] = useState('');
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const load = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/leads?key=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (!data.ok) {
        setError(data.error || 'Could not load leads');
        setLeads(null);
      } else {
        setLeads(data.leads);
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <section className="grid">
        <h1>Leads</h1>
        <p className="muted">Catalog downloads, quote requests and sample requests captured on the site.</p>
        {!leads && (
          <form className="catalog-form" onSubmit={load}>
            <label>
              <span>Passphrase</span>
              <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter passphrase" />
            </label>
            {error && <p className="catalog-error">{error}</p>}
            <button className="btn solid" type="submit" disabled={loading}>
              {loading ? 'Loading…' : 'View leads'}
            </button>
          </form>
        )}
      </section>

      {leads && (
        <section className="grid">
          <div className="cart-bar">
            <span className="pill subtle">{leads.length} lead{leads.length === 1 ? '' : 's'}</span>
            <button className="btn ghost small" onClick={() => setLeads(null)}>Lock</button>
          </div>
          <div className="leads-table-wrap">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>When</th><th>Type</th><th>Name</th><th>Business</th><th>WhatsApp</th><th>Email</th><th>Details</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td>{new Date(l.at).toLocaleString('en-IN')}</td>
                    <td><span className="pill subtle">{l.type}</span></td>
                    <td>{l.name}</td>
                    <td>{l.business}</td>
                    <td>{l.whatsapp || '—'}</td>
                    <td>{l.email || '—'}</td>
                    <td>
                      {l.message && <div>{l.message}</div>}
                      {l.payload && <pre className="leads-payload">{JSON.stringify(l.payload, null, 2)}</pre>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}
