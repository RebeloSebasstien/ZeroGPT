'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

interface NavLink {
    name: string
    href: string
}

const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '/about-us' },
    { name: 'SERVICES', href: '/services' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'BLOGS', href: '/blog' },
    { name: 'CONTACT US', href: '/contact-us' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setHasScrolled(scrollPosition > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="mx-auto max-w-[1340px] px-3.5 sm:px-5 transition-all duration-300">
                <div className={`flex items-center justify-between ${hasScrolled ? 'py-5' : 'py-5 sm:py-8'}`} >
                    {/* Logo */}
                    <Link href="/">
                        <Image src='/assets/logo.svg' alt='logo' width={190} height={36.37} className='sm:w-[190px] sm:h-[36px] w-[170px]' />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden space-x-[27px] lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-secondary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden space-x-4 lg:flex items-center">
                        <LanguageSwitcher />
                        <Link 
                            href="/signup" 
                            className="rounded-[500px] bg-white px-[22px] py-[15px] text-sm font-semibold text-dark-blue hover:shadow-inner  transition-all duration-300 ease-in-out shadow-lg">
                            SIGN UP
                        </Link>
                        <Link
                            href="/signup"
                            className="rounded-[500px] bg-dark-blue px-[25px] py-[15px] text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-inner border hover:text-dark-blue hover:bg-white">
                            LOGIN
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden flex gap-2 sm:gap-5 items-center'>
                        <LanguageSwitcher />
                        <button onClick={toggleMenu} className='lg:hidden block'>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-x-0 top-0 transform overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                    <div className="space-y-1 px-3.5 pb-3 pt-2">

                        <div className='lg:hidden flex py-3 items-center justify-between w-full'>
                            <Link href="/">
                                <Image src='/assets/logo.svg' alt='logo' width={190} height={36.37} className='sm:w-[190px] sm:h-[36px] w-[170px]' />
                            </Link>
                            <button onClick={toggleMenu} className='lg:hidden block'>
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>

                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block transform rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 space-y-2 px-3">
                            <Link
                                href="/signup"
                                className={`block w-full transform rounded-full border bg-white px-6 py-2 text-center text-sm font-medium text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                SIGN UP
                            </Link>
                            <Link
                                href="/login"
                                className={`block w-full transform rounded-full bg-dark-blue px-6 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                LOGIN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

