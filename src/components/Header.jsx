import { useState } from 'react'
import { Container, CTA } from './UI'

const links = [
  ['O método', '#metodo'],
  ['Conteúdo', '#conteudo'],
  ['Sobre', '#sabrine'],
  ['Investimento', '#investimento'],
  ['FAQ', '#faq'],
]

export function Brand({ inverse = false }) {
  return (
    <a className="brand" href="#inicio" aria-label="Método Vistoria 360 — início">
      <img
        src={inverse ? '/brand/logo-horizontal-light.png' : '/brand/logo-horizontal-color.png'}
        width="900"
        height="190"
        alt="Método Vistoria 360"
      />
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Container className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <CTA className="header-cta">Quero entrar</CTA>
      </Container>
    </header>
  )
}
