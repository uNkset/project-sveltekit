import type { PageServerLoad } from './$types'

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

export const load: PageServerLoad = async ({ fetch }) => {
  // await sleep(2000)
  // throw new Error('Holy moly macaroni')
  await fetch('http://google.com')
}
