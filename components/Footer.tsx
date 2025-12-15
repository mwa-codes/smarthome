'use client'

import { Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const footerLinks = {
        company: [
            { label: 'Über Uns', href: '#about' },
            { label: 'smartathome® System', href: '#system' },
            { label: 'Installationsservice', href: '#service' },
            { label: 'Onlineshop', href: '#shop' },
        ],
        customer: [
            { label: 'Kontakt', href: '#contact' },
            { label: 'Sie haben eine Frage?', href: '#faq' },
        ],
        legal: [
            { label: 'AGB', href: '#terms' },
            { label: 'Impressum', href: '#imprint' },
            { label: 'Lieferbedingungen', href: '#delivery' },
            { label: 'Widerrufsbelehrung', href: '#cancellation' },
            { label: 'Datenschutzerklärung', href: '#privacy' },
            { label: 'Cookie-Richtlinie (EU)', href: '#cookies' },
        ],
    }

    return (
        <footer className="bg-gradient-to-r from-blue-600 via-primary to-teal-500 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo and Contact */}
                    <div>
                        <Link href="/" className="flex flex-col items-start gap-1 mb-6">
                            <Image
                                src="/images/sh-logo.svg"
                                alt="smartathome Logo"
                                width={60}
                                height={60}
                                className="h-14 w-auto"
                            />
                            <div className="text-white text-lg font-light tracking-wider -mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.1em' }}>
                                <span className="text-white">smart</span>
                                <span className="text-teal-100 font-normal">at</span>
                                <span className="text-white">home</span>
                            </div>
                        </Link>
                        <div className="space-y-2 text-sm">
                            <p className="flex items-center gap-2">
                                <span>📞</span> +43 (0) 732 99 71 84
                            </p>
                            <p className="flex items-center gap-2">
                                <span>📱</span> +43 (0) 670 607 57 9
                            </p>
                            <p className="flex items-center gap-2">
                                <span>✉️</span> office@smartathome.at
                            </p>
                        </div>
                    </div>

                    {/* Wir für Sie */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Wir für Sie</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kundenzone */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Kundenzone</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.customer.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm">
                            Rufen Sie uns einfach an oder schreiben Sie uns eine Nachricht.
                        </p>
                    </div>

                    {/* Wir für Sie (Legal) */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Wir für Sie</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex justify-center gap-4 mb-8">
                    <a
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm border-t border-white/20 pt-8">
                    <p>© smartathome.at 2025 | powered by smartathome 🇦🇹</p>
                </div>
            </div>
        </footer>
    )
}
