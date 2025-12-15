'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: 'Lösungen', href: '#services' },
        { label: 'Für Privat', href: '#private' },
        { label: 'Für Unternehmen', href: '#business' },
        { label: 'Über Uns', href: '#about' },
        { label: 'Termin Vereinbaren', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-primary via-primary to-teal-500 z-50 shadow-lg backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex flex-col items-center gap-1 group">
                            <Image
                                src="/images/sh-logo.svg"
                                alt="smartathome Logo"
                                width={80}
                                height={80}
                                className="h-16 w-auto transition-transform group-hover:scale-105"
                                priority
                            />
                            <div className="text-white text-xl font-light tracking-wider -mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.1em' }}>
                                <span className="text-white">smart</span>
                                <span className="text-teal-100 font-normal">at</span>
                                <span className="text-white">home</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {menuItems.slice(0, -1).map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white/90 hover:text-white hover:bg-white/10 px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="ml-6 bg-secondary text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-orange-600 hover:shadow-xl transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
                        >
                            Kontaktiere uns
                            <span className="text-lg">→</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-200 p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-primary via-primary to-teal-500 border-t border-white/20 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white hover:bg-white/10 block px-4 py-3 rounded-lg text-base font-medium transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
