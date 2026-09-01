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
  const media = {
    hero: {
      base: 'sabrine-hero',
      alt: 'Sabrine Carvalho sorrindo, com uniforme profissional e capacete de vistoria',
      width: 1200,
      height: 1600,
    },
    sabrine: {
      base: 'sabrine-about',
      alt: 'Sabrine Carvalho com capacete de vistoria e tablet em mãos',
      width: 1200,
      height: 1704,
    },
  }
  const currentMedia = media[type]

  return (
    <div className={`blueprint-media blueprint-media--${type}`}>
      <picture className="blueprint-media__background">
        <source srcSet={`/brand/${currentMedia.base}.avif`} type="image/avif" />
        <source srcSet={`/brand/${currentMedia.base}.webp`} type="image/webp" />
        <img
          src={`/brand/${currentMedia.base}.jpg`}
          alt={currentMedia.alt}
          width={currentMedia.width}
          height={currentMedia.height}
          loading={type === 'hero' ? 'eager' : 'lazy'}
          fetchPriority={type === 'hero' ? 'high' : 'auto'}
        />
      </picture>
      <span className="blueprint-media__axis blueprint-media__axis--x" />
      <span className="blueprint-media__axis blueprint-media__axis--y" />
      <span className="blueprint-media__corner blueprint-media__corner--a" />
      <span className="blueprint-media__corner blueprint-media__corner--b" />
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
