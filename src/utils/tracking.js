import { getConsent } from './consent.js'

export function trackEvent(eventName, parameters = {}) {
  const consent = getConsent()

  // Hook local para conectar outras integrações sem acoplar a aplicação a um fornecedor.
  window.dispatchEvent(new CustomEvent('mv360:track', {
    detail: { event: eventName, parameters },
  }))

  if (consent.analytics) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: eventName, ...parameters })
  }

  if (consent.marketing && typeof window.fbq === 'function' && eventName === 'checkout_click') {
    window.fbq('trackCustom', 'CheckoutClick', parameters)
  }
}
