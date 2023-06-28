// export async function GET(event) {}

import { json, type RequestHandler } from '@sveltejs/kit'
import db from '$lib/database'

export const GET: RequestHandler = async ({ url }) => {
  const order = url.searchParams.get('order') ?? 'asc'
  const sortBy = url.searchParams.get('sortBy') ?? 'id'
  const limit = Number(url.searchParams.get('limit') ?? 30)
  const posts = await db.post.findMany({
    // get random numbers of posts to test caching Math.round(Math.random() * 30),
    orderBy: { [sortBy]: order },
    take: limit,
  })

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
  // event.setHeaders({
  // 	'Cache-Control': 'max-age=60', // for server-side rendering 'public, max-age=0, s-maxage=60' -- cdn
  // });

  return json(posts)
}
