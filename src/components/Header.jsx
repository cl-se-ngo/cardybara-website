import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header({ lang, toggleLang, t, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { key: 'nav.what',     href: 'what-we-do' },
    { key: 'nav.products', href: 'product' },
    { key: 'nav.contact',  href: 'contact' },
  ]

  const handleNav = (href) => {
    scrollTo(href)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-[180%] border-b border-navy-100">
      <div className="max-w-container mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between gap-4">

        {/* Brand */}
        <button
          onClick={() => scrollTo('top')}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <img src="/assets/cardybara-hat-mark.png" alt="Cardybara" className="w-8 h-8 object-contain" />
          <span className="font-wordmark text-[19px] font-extrabold tracking-[0.025em] text-navy-800">
            CARDYBARA
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-9">
          {navLinks.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNav(href)}
              className="text-[15px] font-medium text-navy-600 hover:text-navy-800 transition-colors duration-[120ms]"
            >
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="font-wordmark px-3.5 py-1.5 text-[13px] font-bold text-navy-600 border-[1.5px] border-navy-200 rounded-full hover:text-navy-800 hover:border-navy-400 hover:bg-navy-50 transition-all duration-[120ms]"
            aria-label="Switch language"
          >
            {lang === 'en' ? '繁中' : 'EN'}
          </button>

          {/* CTA — hidden on small mobile, shown md+ */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:block px-5 py-2.5 text-sm font-bold text-white bg-coral-500 rounded-[10px] shadow-action hover:bg-coral-600 hover:shadow-action-lg active:bg-coral-700 active:translate-y-px transition-all duration-[120ms]"
          >
            {t('nav.cta')}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-navy-600 hover:text-navy-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy-100 px-6 pb-5 pt-3 flex flex-col gap-1">
          {navLinks.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNav(href)}
              className="text-left py-3 text-[16px] font-medium text-navy-700 hover:text-navy-900 border-b border-navy-50 last:border-0 transition-colors"
            >
              {t(key)}
            </button>
          ))}
          <button
            onClick={() => { scrollTo('contact'); setMenuOpen(false) }}
            className="mt-3 w-full py-3 text-[15px] font-bold text-white bg-coral-500 rounded-[10px] shadow-action hover:bg-coral-600 transition-colors"
          >
            {t('nav.cta')}
          </button>
        </div>
      )}
    </header>
  )
}
