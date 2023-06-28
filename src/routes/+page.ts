import type { Post } from '@prisma/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch /*, depens*/ }) => {
  const response = await fetch('api/posts')
  const posts: Post[] = await response.json()
  // depens('posts') then in +page.svelte
  //invalidate('posts') or invalidate('api/posts') or invalidateAll()
  //to rerun the load function manually
  return { posts }
}
