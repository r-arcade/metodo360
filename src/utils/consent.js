export const CONSENT_STORAGE_KEY = 'mv360_cookie_consent'

export const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export function getConsent() {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return stored ? { ...DEFAULT_CONSENT, ...JSON.parse(stored) } : DEFAULT_CONSENT
  } catch {
    return DEFAULT_CONSENT
  }
}

export function saveConsent(preferences) {
  const consent = { ...DEFAULT_CONSENT, ...preferences, necessary: true }
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  window.dispatchEvent(new CustomEvent('mv360:consent-changed', { detail: consent }))
  return consent
}
