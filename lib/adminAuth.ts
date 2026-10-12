import { NextRequest } from 'next/server';

/** True when the request carries `Authorization: Bearer <REINDEX_SECRET>`. */
export function isAdmin(req: NextRequest): boolean {
  const secret = process.env.REINDEX_SECRET;
  return !!secret && req.headers.get('authorization') === `Bearer ${secret}`;
}
