// export async function GET(event) {}

import { json, type RequestHandler } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async () => {
	const posts = await db.post.findMany();

	return json(posts);
};
