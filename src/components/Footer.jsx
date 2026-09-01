import { Brand } from './Header'
import { Container } from './UI'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <Brand inverse />
          <p>Formação profissional em vistoria de imóvel novo para engenheiros e arquitetos.</p>
          <nav aria-label="Links institucionais">
            <span>Política de privacidade <small>(pendente)</small></span>
            <span>Termos de uso <small>(pendente)</small></span>
            <span>Contato <small>(pendente)</small></span>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Método Vistoria 360. Todos os direitos reservados.</p>
          <p>Os resultados dependem da aplicação individual de cada aluno.</p>
        </div>
      </Container>
    </footer>
  )
}
