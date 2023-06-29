import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

// import type { HandleFetch } from '@sveltejs/kit'

// import type { HandleServerError } from '@sveltejs/kit'

// export const handle: Handle = async ({ event, resolve }) => {
//   // if (event.url.pathname.startsWith('/banana')) {
//   //   return new Response('banana')
//   // }

//   // const locale = 'dk'

//   // event.locals.user = 'Test'
//   // event.locals.locale = locale

//   // return resolve(event, {
//   //   transformPageChunk: ({ html }) => html.replace('%lang%', locale),
//   // })

//   const route = event.url

//   let start = performance.now()
//   const response = await resolve(event)
//   let end = performance.now()

//   let responseTime = end - start

//   if (responseTime > 2000) {
//     console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`)
//   }

//   if (responseTime < 1000) {
//     console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`)
//   }

//   return response
// }

// export const handleError: HandleServerError = async ({ error, event }) => {
//   console.log(error)

//   return {
//     message: 'Shit went wrong',
//   }
// }

// export const handleFetch: HandleFetch = async ({ request, fetch }) => {
//   if (request.url.startsWith('http')) {
//     const url = request.url.replace('http', 'https')
//     request = new Request(url, request)

//     console.log(request.url)

//     request.headers.set('x-secure', 'Blessed')

//     // you can pass cookies for cross-origin requests
//     // request.headers.set('cookie', event.request.headers.get('cookie'))
//   }

//   return fetch(request)
// }

//multiple hooks

const auth: Handle = async ({ event, resolve }) => {
  // auth hook logic
  console.log('auth hook')

  return resolve(event)
}

const i18n: Handle = async ({ event, resolve }) => {
  // internationalization hook logic
  console.log('internationalization hook')

  return resolve(event)
}

export const handle = sequence(auth, i18n)
