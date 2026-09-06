# Método Vistoria 360 — Landing Page

MVP da landing page do curso Método Vistoria 360, desenvolvido em React e Vite.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Checkout e oferta

O preço, parcelamento, acesso, garantia, suporte e link de checkout ficam centralizados em `src/config.js`. Os botões de compra abrem diretamente a oferta oficial da Hotmart, preservando os parâmetros de campanha permitidos em `TRACKING_KEYS`. Não é necessário carregar o widget da Hotmart na landing page.

Oferta informada: R$ 497 à vista ou 10x de R$ 59,73, com Pix ou cartão e garantia de 7 dias. O contato de suporte está disponível no rodapé.

## Configuração pendente

A página de obrigado ainda não foi informada nem configurada. As políticas de privacidade e os termos de uso continuam pendentes; esta integração não altera pixels, webhooks ou o processamento de pagamentos da Hotmart.

