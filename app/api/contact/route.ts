import { neon } from '@neondatabase/serverless';

export const runtime = 'nodejs';

function bad(message: string, status = 400) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(req: Request) {
  const url = process.env.NEON_DATABASE_URL;
  if (!url) return bad('Missing NEON_DATABASE_URL on server', 500);

  const sql = neon(url);

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) return bad('Name, email and message are required');

    await sql`
      create table if not exists contacts (
        id bigserial primary key,
        name text not null,
        email text not null,
        subject text,
        message text not null,
        created_at timestamptz default now()
      )
    `;

    const rows = await sql<{
      id: string;
      created_at: string;
    }[]>`
      insert into contacts (name, email, subject, message)
      values (${name}, ${email}, ${subject || ''}, ${message})
      returning id, created_at
    `;

    return Response.json({ ok: true, contactId: rows[0].id, createdAt: rows[0].created_at }, { status: 201 });
  } catch (e: any) {
    return bad(`Error connecting to database: ${e?.message || 'unknown error'}`, 500);
  }
}


