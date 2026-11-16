const CONTACTS_API_URL = import.meta.env.VITE_CONTACTS_API_URL || '/api/contacts'

async function requestContacts(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`La petición ha fallado (${response.status}).`)
  }

  return response.json()
}

export function getContacts() {
  return requestContacts(CONTACTS_API_URL)
}

export function createContact(contact) {
  return requestContacts(CONTACTS_API_URL, {
    method: 'POST',
    body: JSON.stringify(contact),
  })
}
