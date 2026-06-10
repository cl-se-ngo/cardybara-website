import { ChevronDown } from 'lucide-react'

export default function Hero({ lang, t, scrollTo }) {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">

            {/* Copy */}
            <div className="text-center md:text-left">
              {/* Overline */}
              <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
                <span className="w-[5px] h-[5px] rounded-full bg-coral-500 flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-overline uppercase text-navy-400">
                  {t('hero.overline')}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[40px] sm:text-5xl md:text-[56px] lg:text-[66px] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-800 text-wrap-balance">
                {lang === 'zh'
                  ? <>用心做軟件，<br />幫你<span className="text-coral-500">省卻煩惱。</span></>
                  : <>Software that does the work, with a little <span className="text-coral-500">heart.</span></>
                }
              </h1>

              {/* Lead */}
              <p className="mt-5 md:mt-6 text-[17px] md:text-[19px] leading-relaxed text-navy-500 max-w-[500px] mx-auto md:mx-0">
                {t('hero.lead')}
              </p>

              {/* CTAs */}
              <div className="mt-8 md:mt-9 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={() => scrollTo('product')}
                  className="px-7 py-4 text-[16px] font-bold text-white bg-coral-500 rounded-[14px] shadow-action hover:bg-coral-600 hover:shadow-action-lg active:bg-coral-700 active:translate-y-px transition-all duration-[120ms]"
                >
                  {t('hero.cta1')}
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-7 py-4 text-[16px] font-bold text-navy-800 bg-white border-[1.5px] border-navy-200 rounded-[14px] hover:border-navy-400 hover:bg-navy-50 active:bg-navy-100 transition-all duration-[120ms]"
                >
                  {t('hero.cta2')}
                </button>
              </div>
            </div>

            {/* Art */}
            <div className="flex justify-center items-center order-first md:order-last">
              <img
                src="/assets/cardybara-logo-new.png"
                alt="Cardybara — a top-hatted capybara at a laptop"
                className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[500px] object-contain drop-shadow-[0_24px_48px_rgba(11,19,43,0.10)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll cue */}
      <div className="flex flex-col items-center gap-2 pb-10 md:pb-12 text-navy-300">
        <ChevronDown size={16} className="animate-bob" />
        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase">
          {t('scroll.label')}
        </span>
      </div>

      <hr className="border-navy-100" />
    </>
  )
}
