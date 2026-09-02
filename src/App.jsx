import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FAQList } from './components/FAQ'
import { BlueprintMedia, CheckItem, Container, CTA, Eyebrow, Section } from './components/UI'
import { PRODUCT } from './config'
import {
  faqs,
  inclusions,
  journey,
  marketSignals,
  modules,
  pillars,
  practicalClasses,
  professionalQuestions,
  toolkits,
} from './data'
import { trackEvent } from './utils/tracking'

function Hero() {
  return (
    <Section id="inicio" className="hero" labelledBy="hero-title">
      <Container className="hero__grid">
        <div className="hero__copy">
          <Eyebrow>Método Vistoria 360</Eyebrow>
          <h1 id="hero-title">A visão completa da vistoria de imóvel novo.</h1>
          <p className="hero__lead">O curso definitivo para engenheiros e arquitetos que querem dominar a vistoria de imóveis novos.</p>
          <p className="hero__body">Aprenda, com um método construído a partir da experiência de mais de 1.500 vistorias reais, tudo o que você precisa para atuar com segurança — da técnica e prática de campo à captação de clientes, posicionamento, precificação e entrega do relatório.</p>
          <p className="hero__promise"><span aria-hidden="true">↳</span> Torne-se referência em vistoria de imóvel novo na sua cidade.</p>
          <CTA eventName="hero_cta_click" className="hero-button">Quero conhecer o método</CTA>
          <ul className="micro-benefits" aria-label="Informações do curso">
            <li>{PRODUCT.accessDuration} de acesso</li>
            <li>{PRODUCT.guaranteeDays} dias de garantia</li>
            <li>Suporte ao aluno</li>
          </ul>
        </div>
        <div className="hero__visual">
          <BlueprintMedia />
          <div className="hero__credential">
            <strong>+1.500</strong>
            <span>vistorias reais<br />na base do método</span>
          </div>
        </div>
      </Container>
      <div className="hero__ruler" aria-hidden="true"><span>00</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span></div>
    </Section>
  )
}

function TrustStrip() {
  return (
    <aside className="trust-strip" aria-label="Credenciais e informações principais do Método Vistoria 360">
      <Container className="trust-strip__grid">
        <div><strong>+1.500</strong><span>vistorias reais realizadas</span></div>
        <div><strong>Desde 2022</strong><span>atuação prática em Manaus</span></div>
        <div><strong>10 módulos</strong><span>da técnica ao relatório</span></div>
        <div><strong>1 ano</strong><span>de acesso ao conteúdo</span></div>
      </Container>
    </aside>
  )
}

function Opportunity() {
  return (
    <Section id="oportunidade" labelledBy="opportunity-title">
      <Container>
        <div className="section-heading section-heading--split">
          <div>
            <Eyebrow>Uma atuação em expansão</Eyebrow>
            <h2 id="opportunity-title">Talvez a oportunidade profissional que você procura esteja mais perto do que imagina.</h2>
          </div>
          <p>A cada nova entrega, existe um proprietário prestes a receber um dos maiores patrimônios da própria vida — e cresce a necessidade de um profissional capacitado para acompanhá-lo.</p>
        </div>
        <div className="market-grid">
          {marketSignals.map((item) => (
            <article className="market-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="impact-line">Existe mercado. Existe demanda. E existe espaço para quem aprende a atuar de forma profissional.</p>
      </Container>
    </Section>
  )
}

function Problem() {
  return (
    <Section tone="ink" id="problema" labelledBy="problem-title">
      <Container className="problem-grid">
        <div className="problem-copy">
          <Eyebrow light>O ponto cego da formação</Eyebrow>
          <h2 id="problem-title">Saber engenharia não significa saber atuar com vistoria.</h2>
          <p>A formação técnica é indispensável. Mas ela não ensina tudo o que acontece entre o primeiro contato do cliente e a entrega final de uma vistoria profissional.</p>
        </div>
        <ul className="question-list">
          {professionalQuestions.map((question, index) => (
            <li key={question}><span>{String(index + 1).padStart(2, '0')}</span>{question}</li>
          ))}
        </ul>
        <div className="problem-transition">
          <span aria-hidden="true" />
          <p>É justamente nesse espaço entre <strong>“saber engenharia”</strong> e <strong>“saber atuar no mercado”</strong> que nasceu o Método Vistoria 360.</p>
        </div>
      </Container>
    </Section>
  )
}

function Method() {
  return (
    <Section id="metodo" tone="sand" labelledBy="method-title">
      <Container>
        <div className="method-grid">
          <div className="method-copy">
            <Eyebrow>Conheça o Método Vistoria 360</Eyebrow>
            <h2 id="method-title">Muito além da técnica: uma formação para a atuação profissional completa.</h2>
            <p>O Método Vistoria 360 foi criado para organizar, em uma única jornada, tudo o que um engenheiro ou arquiteto precisa aprender para atuar com vistoria de imóvel novo.</p>
            <p>O objetivo não é formar alguém que apenas encontre defeitos. É formar um profissional capaz de compreender, conduzir, executar e transformar esse serviço em uma atuação sustentável.</p>
            <CTA className="method-button">Quero dominar essa atuação</CTA>
          </div>
          <div className="pillar-map" aria-label="Os oito pilares do Método Vistoria 360">
            <div className="pillar-map__center"><strong>360°</strong><span>atuação<br />completa</span></div>
            {pillars.map((pillar, index) => <span className={`pillar pillar--${index + 1}`} key={pillar}>{pillar}</span>)}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Journey() {
  return (
    <Section id="jornada" labelledBy="journey-title">
      <Container>
        <div className="section-heading section-heading--center">
          <Eyebrow>A lógica real do trabalho</Eyebrow>
          <h2 id="journey-title">Da primeira mensagem do cliente à entrega do relatório.</h2>
          <p>O curso acompanha o processo como ele realmente acontece.</p>
        </div>
        <div className="journey-board">
          <div className="journey-board__header">
            <span>Rota de atuação / 01—10</span>
            <span>Fluxo profissional completo</span>
          </div>
          <ol className="journey-list">
            {journey.map((item, index) => (
              <li key={item}>
                <span className="journey-list__number">{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                <i aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="journey-board__legend"><span>Entrada</span><span>Execução</span><span>Entrega</span><span>Crescimento</span></div>
        </div>
        <p className="journey-close">Você não aprende partes isoladas. <strong>Aprende o processo completo.</strong></p>
      </Container>
    </Section>
  )
}

function CourseContent() {
  return (
    <Section id="conteudo" tone="mist" labelledBy="content-title">
      <Container>
        <div className="section-heading section-heading--split section-heading--content">
          <div>
            <Eyebrow>Conteúdo do curso</Eyebrow>
            <h2 id="content-title">Tudo o que você precisa para atuar, em uma única jornada.</h2>
          </div>
          <p>Dos fundamentos à atuação profissional completa. Os módulos mostram como a vistoria funciona como serviço, profissão e oportunidade de negócio.</p>
        </div>
        <div className="modules-grid">
          {modules.map((module, index) => (
            <article className={`module-card ${index === 7 ? 'module-card--featured' : ''}`} key={module}>
              <div className="module-card__number"><span>Módulo</span><strong>{String(index + 1).padStart(2, '0')}</strong></div>
              <h3>{module}</h3>
              {index === 7 && <small>Prática de campo</small>}
            </article>
          ))}
        </div>
        <div className="content-close">
          <p>Da técnica ao cliente. Do posicionamento à prática. Da vistoria ao relatório.</p>
          <CTA variant="secondary" className="modules-button">Quero conhecer o método</CTA>
        </div>
      </Container>
    </Section>
  )
}

function Practice() {
  return (
    <Section id="pratica" tone="ink" labelledBy="practice-title">
      <Container>
        <div className="practice-intro">
          <div>
            <Eyebrow light>Aulas práticas</Eyebrow>
            <h2 id="practice-title">Você não vai apenas me ouvir falar. Vai me ver fazendo.</h2>
          </div>
          <p>Uma parte importante do Método Vistoria 360 acontece na prática, da criação do perfil à entrega profissional.</p>
        </div>
        <div className="practice-grid">
          {practicalClasses.map((item, index) => (
            <article className="practice-card" key={item.title}>
              <div className="practice-card__top"><span>{item.code}</span><small>{String(index + 1).padStart(2, '0')} / 06</small></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="practice-close"><strong>Menos teoria abstrata. Mais aplicação real.</strong><CTA variant="light" className="practice-button">Quero aprender na prática</CTA></div>
      </Container>
    </Section>
  )
}

function Materials() {
  return (
    <Section id="materiais" tone="sand" labelledBy="materials-title">
      <Container>
        <div className="section-heading section-heading--center materials-heading">
          <Eyebrow>Materiais e ferramentas</Eyebrow>
          <h2 id="materials-title">Você não precisa começar criando tudo do zero.</h2>
          <p>Ferramentas para aplicar o método com mais segurança e menos improviso.</p>
        </div>
        <div className="toolkits-grid">
          {toolkits.map((group, index) => (
            <article className={`toolkit-card ${index === 1 ? 'toolkit-card--accent' : ''}`} key={group.eyebrow}>
              <div className="toolkit-card__header">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.eyebrow}</h3>
              </div>
              <ul>{group.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul>
              <p>{index === 0 ? 'Baixe, adapte e aplique.' : 'Conteúdos não comercializados separadamente.'}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function About() {
  return (
    <Section id="sabrine" labelledBy="about-title">
      <Container className="about-grid">
        <div className="about-visual">
          <BlueprintMedia type="sabrine" />
          <div className="about-stat"><strong>Desde 2022</strong><span>atuando de forma pioneira em Manaus</span></div>
        </div>
        <div className="about-copy">
          <Eyebrow>Sobre Sabrine Carvalho</Eyebrow>
          <h2 id="about-title">De engenheira a empreendedora através da vistoria.</h2>
          <p>Sabrine Carvalho é engenheira civil especialista em vistoria de imóveis novos. Desde 2022, atua de forma pioneira em Manaus e já realizou mais de 1.500 vistorias.</p>
          <p>Ao longo dessa trajetória, transformou a vistoria em uma porta de entrada para o empreendedorismo, construiu uma marca profissional, conquistou clientes através do posicionamento digital e desenvolveu uma metodologia baseada na prática real.</p>
          <blockquote>“A vistoria foi a forma que encontrei de entrar no empreendedorismo — e deu muito certo.”</blockquote>
          <div className="about-signature"><span>Experiência real</span><span>Prática de campo</span><span>Visão de negócio</span></div>
        </div>
      </Container>
    </Section>
  )
}

function SocialProof() {
  return (
    <Section id="provas" tone="mist" labelledBy="proof-title">
      <Container>
        <div className="proof-heading">
          <div>
            <Eyebrow>Reconhecimento construído na prática</Eyebrow>
            <h2 id="proof-title">Quem acompanha o trabalho percebe a diferença antes mesmo de contratar.</h2>
          </div>
          <div className="proof-numbers">
            <p><strong>+1.500</strong><span>vistorias realizadas</span></p>
            <p><strong>2022</strong><span>início da atuação</span></p>
            <p><strong>360°</strong><span>visão do serviço</span></p>
          </div>
        </div>
        <div className="proof-placeholders" aria-label="Área reservada para provas sociais reais">
          {[1, 2, 3].map((item) => (
            <article key={item}>
              <div><span className="skeleton-line skeleton-line--short" /><span className="skeleton-line" /><span className="skeleton-line" /><span className="skeleton-line skeleton-line--medium" /></div>
              <p>Inserir feedback ou print real</p>
              <small>Material pendente · {String(item).padStart(2, '0')}</small>
            </article>
          ))}
        </div>
        <div className="proof-cta"><p>Experiência de campo que se transforma em método.</p><CTA variant="secondary" className="proof-button">Quero fazer parte</CTA></div>
      </Container>
    </Section>
  )
}

function Offer() {
  return (
    <Section id="investimento" tone="ink" className="offer" labelledBy="offer-title">
      <Container>
        <div className="offer-grid">
          <div className="offer-copy">
            <Eyebrow light>Primeira turma</Eyebrow>
            <h2 id="offer-title">Entre para o Método Vistoria 360.</h2>
            <p>Uma formação completa para transformar seu conhecimento técnico em uma atuação profissional estruturada.</p>
            <ul>{inclusions.map((item) => <CheckItem light key={item}>{item}</CheckItem>)}</ul>
          </div>
          <aside className="pricing-card" aria-label="Investimento no Método Vistoria 360">
            <p className="pricing-card__label">Condição de entrada · primeira turma</p>
            <div className="pricing-card__price"><span>Investimento</span><strong>{PRODUCT.price}</strong><small>à vista</small></div>
            <p className="pricing-card__installments">ou <strong>{PRODUCT.installments}</strong></p>
            <CTA variant="dark" className="pricing-button">Quero entrar para o método</CTA>
            <div className="checkout-pending" role="note">
              <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M10 2 3 5v5c0 4.2 2.8 6.8 7 8 4.2-1.2 7-3.8 7-8V5l-7-3Z" /><path d="m7 10 2 2 4-4" /></svg>
              <span>Pagamento seguro via Hotmart<br /><small>Link definitivo do checkout pendente</small></span>
            </div>
            <ul className="pricing-meta"><li>{PRODUCT.accessDuration} de acesso</li><li>{PRODUCT.guaranteeDays} dias de garantia</li><li>Suporte ao aluno</li></ul>
            <p className="pricing-note">A condição de parcelamento deve ser confirmada no checkout final antes da publicação.</p>
          </aside>
        </div>
      </Container>
    </Section>
  )
}

function Guarantee() {
  return (
    <Section id="garantia" tone="sand" className="guarantee" labelledBy="guarantee-title">
      <Container className="guarantee-grid">
        <div className="guarantee-seal" aria-hidden="true"><span>7</span><strong>dias</strong><small>garantia</small></div>
        <div>
          <Eyebrow>Decida com segurança</Eyebrow>
          <h2 id="guarantee-title">Você tem 7 dias para conhecer o Método Vistoria 360.</h2>
          <p>Depois da compra, você terá acesso ao conteúdo e poderá avaliar se o curso faz sentido para o seu momento profissional.</p>
          <p>Caso entenda que o Método Vistoria 360 não é para você, poderá solicitar o reembolso dentro do prazo de garantia oferecido pela plataforma.</p>
        </div>
      </Container>
    </Section>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <Container className="faq-grid">
        <div className="faq-intro">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 id="faq-title">O que você precisa saber antes de entrar.</h2>
          <p>Reunimos as principais dúvidas sobre conteúdo, acesso, suporte e aplicação do método.</p>
          <span>{String(faqs.length).padStart(2, '0')} respostas objetivas</span>
        </div>
        <FAQList />
      </Container>
    </Section>
  )
}

function FinalCTA() {
  return (
    <Section id="cta-final" tone="forest" className="final-cta" labelledBy="final-title">
      <Container>
        <span className="final-cta__index" aria-hidden="true">360</span>
        <div className="final-cta__content">
          <Eyebrow light>Seu próximo passo profissional</Eyebrow>
          <h2 id="final-title">A próxima referência em vistoria de imóvel novo da sua cidade pode ser você.</h2>
          <p>Aprenda com quem já percorreu esse caminho e organizou, em um único método, tudo o que realmente faz diferença na prática.</p>
          <CTA variant="light" className="final-button">Quero fazer parte do Método 360</CTA>
          <small>A visão completa da vistoria de imóvel novo.</small>
        </div>
      </Container>
    </Section>
  )
}

export default function App() {
  useEffect(() => {
    trackEvent('page_view', { page_title: document.title })
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Opportunity />
        <Problem />
        <Method />
        <Journey />
        <CourseContent />
        <Practice />
        <Materials />
        <About />
        <SocialProof />
        <Offer />
        <Guarantee />
        <FrequentlyAskedQuestions />
        <FinalCTA />
      </main>
      <Footer />
      <CTA className="mobile-sticky-cta">Quero entrar no Vistoria 360</CTA>
    </>
  )
}
