'use client'

import { CheckCircle2, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative bg-primary pt-32 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white z-10"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Herstellerunabhängiger<br />
                            Smart-Home-<br />
                            Dienstleister In<br />
                            Österreich
                        </h1>

                        <p className="text-lg md:text-xl mb-8 text-white/90">
                            Individuelle Lösungen für Privat & Unternehmen – von der Planung bis zur Installation
                        </p>

                        {/* Checklist */}
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                <span className="text-base md:text-lg">Komplettservice von A–Z</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                <span className="text-base md:text-lg">Alle Geräte in einer App vereint</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                <span className="text-base md:text-lg">Schnelle Nachrüstung ohne Baustelle</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                            Termin Vereinbaren
                        </button>

                        {/* Rating */}
                        <div className="mt-8 flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                                <span className="ml-2 font-semibold">4.5</span>
                            </div>
                        </div>
                        <p className="text-sm mt-2 text-white/80">Von Google verifizierte Bewertungen</p>
                    </motion.div>

                    {/* Right Content - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative z-10 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[280px] lg:max-w-[320px]">
                            {/* Phone Frame */}
                            <div className="bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl ring-4 ring-white/10 transform hover:scale-105 transition-transform duration-300">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                                    {/* Notch */}
                                    <div className="bg-white h-7 relative">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-3xl"></div>
                                    </div>

                                    {/* Screen Content */}
                                    <div className="bg-gradient-to-b from-gray-50 to-white p-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* App Icons */}
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">💡</div>
                                                <p className="text-xs font-semibold text-gray-800">Lichter</p>
                                                <p className="text-xs text-gray-500">Alle Lichter Aus</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">🏠</div>
                                                <p className="text-xs font-semibold text-gray-800">Beschattung</p>
                                                <p className="text-xs text-gray-500">Fenster 0</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">🌡️</div>
                                                <p className="text-xs font-semibold text-gray-800">Raumklima</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">📱</div>
                                                <p className="text-xs font-semibold text-gray-800">Alle Apps</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">🔗</div>
                                                <p className="text-xs font-semibold text-gray-800">Szenen</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">🏡</div>
                                                <p className="text-xs font-semibold text-gray-800">Bereiche, Räu...</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">👤</div>
                                                <p className="text-xs font-semibold text-gray-800">Benutzer</p>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                                                <div className="text-3xl mb-2">📹</div>
                                                <p className="text-xs font-semibold text-gray-800">Kamera</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Home indicator */}
                                    <div className="bg-white py-2 flex justify-center">
                                        <div className="w-32 h-1 bg-black rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Curved Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}
