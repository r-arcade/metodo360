import { useState } from 'react'
import { faqs } from '../data'
import { trackEvent } from '../utils/tracking'

export function FAQList() {
  const [opened, setOpened] = useState(null)

  return (
    <div className="faq-list">
      {faqs.map(([question, answer], index) => {
        const isOpen = opened === index
        return (
          <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => {
                  setOpened(isOpen ? null : index)
                  if (!isOpen) trackEvent('faq_open', { question })
                }}
              >
                <span>{question}</span>
                <i aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-answer-${index}`} className="faq-answer" hidden={!isOpen}>
              <p>{answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
