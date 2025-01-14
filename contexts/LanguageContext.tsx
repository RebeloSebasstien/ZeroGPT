'use client'

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react'

type Language = 'en' | 'es'

type TranslationFiles = 'home'

type NestedTranslations = {
  [key: string]: string | NestedTranslations
}

type Translations = {
  [key in Language]: {
    [file in TranslationFiles]: NestedTranslations
  }
}

const translations: Translations = {
  en: {
    home: require('../public/translations/en/home.json'),
  },
  es: {
    home: require('../public/translations/es/home.json'),
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, file?: TranslationFiles) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'es')) {
      setLanguageState(storedLanguage)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }, [])

  const t = useCallback((key: string, file: TranslationFiles = 'home') => {
    const keys = key.split('.')
    let value: string | NestedTranslations = translations[language][file]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }

    return typeof value === 'string' ? value : key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

