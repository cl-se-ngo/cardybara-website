import { useState, useEffect } from 'react'
import { translations } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ProductSpotlight from './components/ProductSpotlight'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('cardybara-lang') || 'zh'
  )

  const t = (key) => {
    const str = translations[lang][key] ?? translations.en[key] ?? key
    return str.replace('{year}', new Date().getFullYear())
  }

  const toggleLang = () => {
    const next = lang === 'en' ? 'zh' : 'en'
    setLang(next)
    localStorage.setItem('cardybara-lang', next)
  }

  // Swap font + html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant-HK' : 'en-HK'
    document.body.classList.toggle('lang-zh', lang === 'zh')
  }, [lang])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white min-h-screen">
      <Header lang={lang} toggleLang={toggleLang} t={t} scrollTo={scrollTo} />
      <main>
        <Hero    lang={lang} t={t} scrollTo={scrollTo} />
        <Services t={t} />
        <ProductSpotlight t={t} />
        <Contact  t={t} scrollTo={scrollTo} />
      </main>
      <Footer t={t} scrollTo={scrollTo} />
    </div>
  )
}
