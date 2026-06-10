export default function Footer({ t, scrollTo }) {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-container mx-auto px-6 md:px-8 py-12 md:py-14 flex flex-col gap-5">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/favicon.ico"
            alt="Cardybara"
            className="w-7 h-7 object-contain"
          />
          <span className="font-wordmark text-[17px] font-extrabold tracking-[0.02em]">CARDYBARA</span>
        </div>

        {/* Note */}
        <p className="text-[14px] leading-relaxed text-navy-200 max-w-md">
          {t('footer.note')}
        </p>

        {/* Links */}
        <nav className="flex flex-wrap gap-6">
          <button
            onClick={() => scrollTo('product')}
            className="text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-[120ms]"
          >
            {t('product.name')}
          </button>
          <button
            onClick={() => scrollTo('what-we-do')}
            className="text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-[120ms]"
          >
            {t('footer.link.what')}
          </button>
          <a
            href="mailto:cardybara@se-ngo.com"
            className="text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-[120ms]"
          >
            cardybara@se-ngo.com
          </a>
        </nav>

        {/* Copyright */}
        <div className="mt-2 pt-5 border-t border-white/[0.08] text-[12px] text-white/30">
          {t('footer.copy')}
        </div>
      </div>
    </footer>
  )
}
