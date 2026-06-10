import { Check, UserPlus } from 'lucide-react'

function PosMockup() {
  return (
    <div className="w-full max-w-[400px] mx-auto bg-white rounded-[20px] border border-navy-100 shadow-navy-xl overflow-hidden text-sm font-sans">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-navy-100">
        <span className="text-[13px] font-extrabold text-navy-800">示範藥房 · Demo Pharmacy</span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-mint-700 bg-green-100 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          在線 · Online
        </span>
      </div>

      {/* Ticket */}
      <div className="px-4 pt-4 pb-0">
        {/* Customer row */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-blurple-50 rounded-[10px] mb-3.5">
          <div>
            <div className="text-[12px] font-semibold text-blurple-500">散客 · Guest</div>
            <div className="text-[11px] text-navy-400 mt-0.5">未有會員卡 · No member card</div>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-blurple-500 border-[1.5px] border-dashed border-blurple-200 px-2.5 py-1.5 rounded-[6px]">
            <UserPlus size={13} />
            加會員
          </div>
        </div>

        {/* Line items */}
        <div className="border-t border-navy-50">
          {[
            { name: '感冒藥 · Cold remedy',    qty: '× 2', price: 'HK$ 28.00' },
            { name: '維他命C · Vitamin C',     qty: '× 1', price: 'HK$ 38.00' },
            { name: '膠袋稅 · Plastic bag levy', qty: '× 1', price: 'HK$  1.00' },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between py-3 border-b border-navy-50">
              <div>
                <div className="text-[13.5px] font-medium text-navy-700">{item.name}</div>
                <div className="text-[11px] text-navy-400 mt-0.5">{item.qty}</div>
              </div>
              <div className="text-[13.5px] font-bold text-navy-800 tabular-nums">{item.price}</div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex items-baseline justify-between py-4">
          <span className="text-[14px] font-medium text-navy-500">總計 · Total</span>
          <span className="text-[22px] font-extrabold text-blurple-700 tracking-tight tabular-nums">HK$ 67.00</span>
        </div>
      </div>

      {/* Checkout button */}
      <div className="px-4 pb-4">
        <button className="w-full py-4 text-[15px] font-extrabold text-white bg-blurple-500 rounded-[10px] shadow-pos hover:bg-blurple-600 transition-colors duration-[120ms]">
          結帳 · Checkout — HK$ 67.00
        </button>
      </div>
    </div>
  )
}

const FEATURES = ['f1', 'f2', 'f3', 'f4', 'f5']

export default function ProductSpotlight({ t }) {
  return (
    <section id="product" className="bg-mint-50 border-y border-mint-100">
      <div className="max-w-container mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-[11px] font-bold tracking-overline uppercase text-mint-600 mb-3">
              {t('product.overline')}
            </span>

            {/* Title */}
            <div className="flex items-center gap-3.5 mb-1 justify-center lg:justify-start">
              <img src="/assets/spharm-mark.png" alt="" className="w-11 h-11 object-contain" />
              <h2 className="text-[34px] md:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-navy-800">
                {t('product.name')}
              </h2>
            </div>

            {/* Lead */}
            <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-navy-600 max-w-[460px] mx-auto lg:mx-0">
              {t('product.lead')}
            </p>

            {/* Features */}
            <ul className="mt-7 mb-9 grid gap-3.5 text-left max-w-[420px] mx-auto lg:mx-0">
              {FEATURES.map((key) => (
                <li key={key} className="flex items-center gap-2.5 text-[15px] font-medium text-navy-700">
                  <Check size={17} className="text-mint-500 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>

            <button className="px-7 py-3.5 text-[15px] font-bold text-white bg-mint-500 rounded-[14px] shadow-mint hover:bg-mint-600 hover:shadow-mint-lg active:bg-mint-700 active:translate-y-px transition-all duration-[120ms]">
              {t('product.cta')}
            </button>
          </div>

          {/* POS mockup */}
          <div className="flex justify-center lg:justify-end">
            <PosMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
