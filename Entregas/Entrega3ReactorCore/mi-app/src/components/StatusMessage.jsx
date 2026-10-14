export function StatusMessage({ type, message }) {
  const isLoading = type === 'loading'

  return (
    <section className={`status-message status-message--${type}`} role={isLoading ? 'status' : 'alert'}>
      {isLoading && <div className="status-message__orb" aria-hidden="true" />}
      <div className="status-message__content">
        <h2>{isLoading ? 'Escaneando la región...' : 'Señal perdida'}</h2>
        <p>{isLoading ? 'El event loop está consultando PokeAPI.' : message}</p>
      </div>
    </section>
  )
}