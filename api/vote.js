import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, routeId } = req.body || {};

  if (!name || !routeId) {
    return res.status(400).json({ error: 'Missing name or routeId' });
  }

  if (typeof routeId !== 'number' || routeId < 1 || routeId > 8) {
    return res.status(400).json({ error: 'Invalid routeId' });
  }

  const sanitizedName = String(name).trim().slice(0, 50);
  if (!sanitizedName) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);

    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS sailing_votes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        route_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(name)
      )
    `;

    // Upsert vote (one vote per name)
    await sql`
      INSERT INTO sailing_votes (name, route_id)
      VALUES (${sanitizedName}, ${routeId})
      ON CONFLICT (name) DO UPDATE SET route_id = ${routeId}, created_at = NOW()
    `;

    return res.status(200).json({ success: true, name: sanitizedName, routeId });
  } catch (error) {
    console.error('Vote error:', error);
    return res.status(500).json({ error: 'Database error' });
  }
}
