import { LayoutDashboard, Wrench, Sparkles } from 'lucide-react'

const CARDS = [
  { icon: LayoutDashboard, titleKey: 's1.title', bodyKey: 's1.body' },
  { icon: Wrench,          titleKey: 's2.title', bodyKey: 's2.body' },
  { icon: Sparkles,        titleKey: 's3.title', bodyKey: 's3.body' },
]

export default function Services({ t }) {
  return (
    <section id="what-we-do" className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-8">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block text-[11px] font-bold tracking-overline uppercase text-navy-400 mb-3">
            {t('services.overline')}
          </span>
          <h2 className="text-3xl md:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-navy-800 text-wrap-balance">
            {t('services.heading')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map(({ icon: Icon, titleKey, bodyKey }) => (
            <div
              key={titleKey}
              className="bg-white border border-navy-100 rounded-[20px] p-7 md:p-8 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-coral-50 text-coral-500 mb-5">
                <Icon size={22} />
              </span>
              <h3 className="text-[19px] md:text-xl font-bold text-navy-800 mb-2.5">
                {t(titleKey)}
              </h3>
              <p className="text-[15px] leading-relaxed text-navy-500">
                {t(bodyKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Product pivot */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <a
            href="#product"
            onClick={(e) => { e.preventDefault(); document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-mint-200 rounded-full bg-mint-50 text-[13px] font-semibold text-mint-700 hover:bg-mint-100 transition-colors duration-[120ms]"
          >
            <span>↓</span>
            <span>{t('pivot.label')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
