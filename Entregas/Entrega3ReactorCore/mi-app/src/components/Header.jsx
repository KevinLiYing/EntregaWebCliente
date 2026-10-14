export function Header({ eyebrow, title, highlight, mark }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title} <span>{highlight}</span></h1>
      </div>
      <div className="header-mark" aria-hidden="true">{mark}</div>
    </header>
  )
}