import { Check, ArrowUpRight } from 'lucide-react'

const APP_URL = 'https://casual-translator.web.app'

function TranslatorMockup() {
  // Mirrors the real app's three-zone stage layout: strip / stage / dock
  return (
    <div className="w-full max-w-[340px] mx-auto bg-navy-800 rounded-[28px] p-2.5 shadow-navy-xl">
      <div className="bg-white rounded-[22px] overflow-hidden text-sm font-sans">
        {/* Top strip: language pill + credits */}
        <div className="flex items-center justify-between px-4 h-11 border-b border-navy-100">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-navy-700 bg-navy-50 border border-navy-100 px-3 py-1.5 rounded-full">
            粵 <ArrowUpRight size={11} className="rotate-45 text-coral-500" /> 英
          </span>
          <span className="text-[12px] font-bold text-navy-400 tabular-nums">1,011</span>
        </div>

        {/* Stage: big translation, muted source below */}
        <div className="px-5 pt-6 pb-5">
          <p className="text-[21px] leading-snug font-semibold text-navy-800 tracking-[-0.01em]">
            “Where's the nearest MTR exit? I'm meeting a customer.”
          </p>
          <p className="mt-3 text-[13px] text-navy-400">
            最近的港鐵出口喺邊度？我要見個客。
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-coral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-500 inline-block" />
            tap the text to hear it · 點字即讀
          </div>
        </div>

        {/* Dock: hold-to-talk */}
        <div className="px-5 pb-5 flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-full bg-coral-500 shadow-action flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

const FEATURES = ['tf1', 'tf2', 'tf3', 'tf4', 'tf5']

export default function TranslatorSpotlight({ t }) {
  return (
    <section id="translator" className="border-y border-coral-100 bg-coral-50/40">
      <div className="max-w-container mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-[11px] font-bold tracking-overline uppercase text-coral-500 mb-3">
              {t('translator.overline')}
            </span>

            <h2 className="text-[34px] md:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-navy-800">
              {t('translator.name')}
            </h2>

            <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-navy-600 max-w-[460px] mx-auto lg:mx-0">
              {t('translator.lead')}
            </p>

            <ul className="mt-7 mb-9 grid gap-3.5 text-left max-w-[440px] mx-auto lg:mx-0">
              {FEATURES.map((key) => (
                <li key={key} className="flex items-center gap-2.5 text-[15px] font-medium text-navy-700">
                  <Check size={17} className="text-coral-500 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>

            <div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-bold text-white bg-coral-500 rounded-[14px] shadow-action hover:bg-coral-600 hover:shadow-action-lg active:bg-coral-700 active:translate-y-px transition-all duration-[120ms]"
              >
                {t('translator.cta')}
                <ArrowUpRight size={16} />
              </a>
              <p className="mt-3 text-[12px] text-navy-400">{t('translator.note')}</p>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex justify-center lg:justify-end order-first lg:order-none">
            <TranslatorMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
