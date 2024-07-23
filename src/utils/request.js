import { getJwtToken } from '@/utils/storage.js'

export async function request(url, { method = 'GET', body, headers, user = true } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(user && {
        Authorization: `Bearer ${getJwtToken()}`
      }),
      ...headers
    },
    ...(body && {
      body: JSON.stringify(body)
    })
  })
  const result = await res.json()
  return result
}
