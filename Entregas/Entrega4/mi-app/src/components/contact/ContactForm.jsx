import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactDefaultValues, contactSchema } from '../../schemas/contactSchema'
import { useContacts } from '../../hooks/useContacts'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: contactDefaultValues,
    resolver: zodResolver(contactSchema),
  })
  const {
    createContact,
    isCreating,
    isCreateError,
    isCreateSuccess,
    createError,
  } = useContacts()

  async function onSubmit(contact) {
    await createContact(contact)
    reset()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-form__field">
        <label htmlFor="contact-name">Nombre</label>
        <input
          id="contact-name"
          type="text"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert">{errors.name.message}</p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">Correo electrónico</label>
        <input
          id="contact-email"
          type="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert">{errors.email.message}</p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          rows="5"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" disabled={isCreating}>
        {isCreating ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {isCreateError && (
        <p role="alert">
          {createError?.message || 'No se pudo enviar el mensaje.'}
        </p>
      )}
      {isCreateSuccess && (
        <p role="status">Tu mensaje se ha enviado correctamente.</p>
      )}
    </form>
  )
}
