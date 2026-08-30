import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FILE = path.join(process.cwd(), 'data', 'leads.json');
const KEY = process.env.LEADS_KEY || 'boxify-2026';

async function readLeads() {
  try {
    const raw = await fs.readFile(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeLeads(leads) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(leads, null, 2), 'utf8');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const type = String(body.type || 'general');
  const name = String(body.name || '').trim();
  const business = String(body.business || '').trim();

  if (!name || !business) {
    return NextResponse.json({ ok: false, error: 'name and business are required' }, { status: 422 });
  }

  const lead = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    type,
    name,
    business,
    whatsapp: String(body.whatsapp || '').trim(),
    email: String(body.email || '').trim(),
    message: String(body.message || '').trim(),
    payload: body.payload && typeof body.payload === 'object' ? body.payload : undefined,
    at: new Date().toISOString(),
  };

  const leads = await readLeads();
  leads.push(lead);
  await writeLeads(leads);

  return NextResponse.json({ ok: true, id: lead.id });
}

export async function GET(request) {
  const key = new URL(request.url).searchParams.get('key');
  if (key !== KEY) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  const leads = await readLeads();
  return NextResponse.json({ ok: true, count: leads.length, leads: leads.slice().reverse() });
}
