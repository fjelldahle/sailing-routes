import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
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

    // Get all votes
    const rows = await sql`
      SELECT name, route_id as "routeId", created_at as "createdAt"
      FROM sailing_votes
      ORDER BY created_at ASC
    `;

    return res.status(200).json({ votes: rows });
  } catch (error) {
    console.error('Results error:', error);
    return res.status(500).json({ error: 'Database error', votes: [] });
  }
}
