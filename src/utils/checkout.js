import { CHECKOUT_URL, TRACKING_KEYS } from '../config.js'

export function getCheckoutUrl() {
  if (!CHECKOUT_URL) return '#investimento'

  const destination = new URL(CHECKOUT_URL)
  const currentParams = new URLSearchParams(window.location.search)

  TRACKING_KEYS.forEach((key) => {
    const value = currentParams.get(key)
    if (value) destination.searchParams.set(key, value)
  })

  return destination.toString()
}
