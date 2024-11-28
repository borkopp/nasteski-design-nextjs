import qs from 'qs'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function fetchAPI(path: string, urlParamsObject = {}) {
  try {
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`
    
    const response = await fetch(requestUrl, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from Strapi: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching from Strapi:', error)
    throw error
  }
}