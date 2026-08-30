'use client';
// Fire-and-forget lead capture. Never blocks the user flow; also mirrors to
// localStorage so nothing is lost if the API is unavailable.
export async function submitLead(lead) {
  try {
    const key = 'boxify_leads';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...lead, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch {
    /* storage unavailable */
  }
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      keepalive: true,
    });
  } catch {
    /* offline / API down — localStorage copy still exists */
  }
}
