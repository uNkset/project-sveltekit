import type { Handle } from '@sveltejs/kit'
import { parseFormData } from 'parse-nested-form-data'

export const handle: Handle = async ({ event, resolve }) => {
  // listen to post
  if (event.request.method === 'POST') {
    // get form data
    const formData = await event.request.formData()

    // parse into json object
    const data = parseFormData(formData)

    // make it available inside actions
    event.locals.formData = data
  }

  return resolve(event)
}
