'use client'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronDown, Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center "
      >
        <span>{languages.find(l => l.code === language)?.label}</span>
        <ChevronDown className={`ml-1 sm:ml-2 w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-fit rounded-md bg-white shadow-lg border">
          <div className="">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as 'en' | 'es')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150
                  ${language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher