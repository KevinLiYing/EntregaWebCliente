export function StatusMessage({
  type,
  message = '',
  loadingTitle = 'Escaneando la región...',
  loadingMessage = 'El event loop está consultando PokeAPI.',
  errorTitle = 'Señal perdida',
}) {
  const isLoading = type === 'loading'
  const title = isLoading ? loadingTitle : errorTitle
  const content = isLoading ? loadingMessage : message

  return (
    <section className={`status-message status-message--${type}`} role={isLoading ? 'status' : 'alert'}>
      {isLoading && <div className="status-message__orb" aria-hidden="true" />}
      <div className="status-message__content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  )
}