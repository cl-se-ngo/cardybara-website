import { useEffect } from 'react'
import { terms } from '../legal/terms'
import { privacy } from '../legal/privacy'

function Section({ heading, paras = [], bullets = [], parasAfter = [] }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[17px] font-bold text-navy-800">{heading}</h2>
      {paras.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-navy-600">{p}</p>
      ))}
      {bullets.length > 0 && (
        <ul className="flex flex-col gap-2 pl-4">
          {bullets.map((b, i) => (
            <li key={i} className="text-[15px] leading-relaxed text-navy-600 list-disc list-outside ml-1">
              {b}
            </li>
          ))}
        </ul>
      )}
      {parasAfter.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-navy-600">{p}</p>
      ))}
    </section>
  )
}

export default function LegalPage({ page, lang, t, setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const isTerms = page === 'terms'
  const content = isTerms ? terms[lang] : privacy[lang]
  const titleKey = isTerms ? 'legal.terms.title' : 'legal.privacy.title'

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-container mx-auto px-6 md:px-8 py-12 md:py-16">

        {/* Back link */}
        <button
          onClick={() => setPage('home')}
          className="inline-flex items-center text-[14px] font-medium text-navy-500 hover:text-navy-800 transition-colors duration-[120ms] mb-10"
        >
          {t('legal.back')}
        </button>

        {/* Page title */}
        <h1 className="text-[30px] md:text-[38px] font-extrabold tracking-[-0.02em] text-navy-800 mb-2">
          {t(titleKey)}
        </h1>
        <p className="text-[13px] text-navy-400 mb-8">{t('legal.updated')}</p>

        {/* Intro */}
        {content.intro.split('\n\n').map((para, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-navy-600 mb-4 max-w-[680px]">
            {para}
          </p>
        ))}

        {/* Sections */}
        <div className="max-w-[680px] flex flex-col gap-8 mt-8">
          {content.sections.map((section) => (
            <Section key={section.heading} {...section} />
          ))}
        </div>
      </div>
    </main>
  )
}
