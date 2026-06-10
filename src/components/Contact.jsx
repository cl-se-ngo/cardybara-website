import { Mail } from 'lucide-react'

export default function Contact({ t, scrollTo }) {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-8 text-center">
        <span className="inline-block text-[11px] font-bold tracking-overline uppercase text-navy-400 mb-3">
          {t('contact.overline')}
        </span>
        <h2 className="text-3xl md:text-[40px] font-extrabold tracking-[-0.025em] text-navy-800 mb-4 text-wrap-balance">
          {t('contact.heading')}
        </h2>
        <p className="text-[16px] md:text-[17px] leading-relaxed text-navy-500 max-w-[520px] mx-auto mb-9">
          {t('contact.body')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:cardybara@se-ngo.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-[15px] font-bold text-white bg-coral-500 rounded-[14px] shadow-action hover:bg-coral-600 hover:shadow-action-lg active:bg-coral-700 transition-all duration-[120ms]"
          >
            <Mail size={17} />
            cardybara@se-ngo.com
          </a>
          <button
            onClick={() => scrollTo('product')}
            className="px-7 py-4 text-[15px] font-bold text-navy-800 bg-white border-[1.5px] border-navy-200 rounded-[14px] hover:border-navy-400 hover:bg-navy-50 active:bg-navy-100 transition-all duration-[120ms]"
          >
            {t('contact.cta2')}
          </button>
        </div>
      </div>
    </section>
  )
}
