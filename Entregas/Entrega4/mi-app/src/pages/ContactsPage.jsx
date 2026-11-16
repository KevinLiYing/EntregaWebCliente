import { ContactForm } from '../components/contact/ContactForm'
import { ContactList } from '../components/contact/ContactList'

export function ContactsPage() {
  return (
    <main className="contacts-page">
      <header className="contacts-page__header">
        <p className="eyebrow">M4 / Full Contact Forms</p>
        <h1>Contacta con nosotros</h1>
        <p>Valida tu mensaje y envíalo de forma segura.</p>
      </header>

      <div className="contacts-page__content">
        <section aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Nuevo mensaje</h2>
          <ContactForm />
        </section>

        <section aria-labelledby="contact-list-title">
          <h2 id="contact-list-title">Mensajes recibidos</h2>
          <ContactList />
        </section>
      </div>
    </main>
  )
}
