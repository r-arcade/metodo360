import { getCheckoutUrl } from '../utils/checkout'
import { trackEvent } from '../utils/tracking'

export function Container({ children, className = '' }) {
  return <div className={`container ${className}`.trim()}>{children}</div>
}

export function Section({ children, id, tone = '', className = '', labelledBy }) {
  return (
    <section
      id={id}
      className={`section ${tone ? `section--${tone}` : ''} ${className}`.trim()}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  )
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{children}</p>
}

export function CTA({ children, eventName = 'checkout_click', variant = 'primary', className = '' }) {
  const href = getCheckoutUrl()
  const external = href.startsWith('http')

  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() => trackEvent(eventName, { location: className || 'page' })}
    >
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <path d="M4 10h11M11 6l4 4-4 4" />
      </svg>
    </a>
  )
}

export function CheckItem({ children, light = false }) {
  return (
    <li className={`check-item ${light ? 'check-item--light' : ''}`}>
      <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m4 10 4 4 8-9" /></svg>
      <span>{children}</span>
    </li>
  )
}

export function BlueprintMedia({ type = 'hero' }) {
  const labels = {
    hero: ['COMPOSIÇÃO ARQUITETÔNICA', 'Edifício residencial da identidade visual fornecida'],
    sabrine: ['FOTO DA INSTRUTORA', 'Retrato profissional de Sabrine Carvalho'],
  }
  const [label, description] = labels[type]

  return (
    <div className={`blueprint-media blueprint-media--${type}`} role="img" aria-label={`${label}: ${description}.${type === 'sabrine' ? ' Material visual pendente.' : ''}`}>
      {type === 'hero' && (
        <picture className="blueprint-media__background">
          <source srcSet="/brand/background-architecture.avif" type="image/avif" />
          <source srcSet="/brand/background-architecture.webp" type="image/webp" />
          <img src="/brand/social-preview.jpg" alt="" />
        </picture>
      )}
      <span className="blueprint-media__axis blueprint-media__axis--x" />
      <span className="blueprint-media__axis blueprint-media__axis--y" />
      <span className="blueprint-media__corner blueprint-media__corner--a" />
      <span className="blueprint-media__corner blueprint-media__corner--b" />
      {type !== 'hero' && (
        <div className="blueprint-media__content">
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <path d="M7 39V9h34v30H7Z" /><path d="m13 33 8-9 6 6 4-4 10 10M31 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          </svg>
          <strong>{label}</strong>
          <span>{description}</span>
          <small>Material pendente</small>
        </div>
      )}
      {type === 'hero' && (
        <div className="blueprint-media__track" aria-hidden="true">
          <div><span>01</span><strong>Técnica</strong></div>
          <div><span>02</span><strong>Cliente</strong></div>
          <div><span>03</span><strong>Campo</strong></div>
          <div><span>04</span><strong>Entrega</strong></div>
        </div>
      )}
      <span className="blueprint-media__measure">360° / 01</span>
    </div>
  )
}
