import { useContacts } from '../../hooks/useContacts'

export function ContactList() {
  const {
    contacts,
    isLoading,
    isError,
    error,
  } = useContacts()

  if (isLoading) {
    return <p role="status">Cargando contactos...</p>
  }

  if (isError) {
    return <p role="alert">{error?.message || 'No se pudieron cargar los contactos.'}</p>
  }

  if (contacts.length === 0) {
    return <p role="status">Todavía no hay contactos registrados.</p>
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id || contact.email} className="contact-list__item">
          <strong>{contact.name}</strong>
          <span>{contact.email}</span>
          <p>{contact.message}</p>
        </li>
      ))}
    </ul>
  )
}
