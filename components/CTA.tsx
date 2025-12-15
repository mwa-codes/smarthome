'use client'

import { motion } from 'framer-motion'

export default function CTA() {
    return (
        <section className="relative py-32 bg-cover bg-center overflow-hidden">
            {/* Dark overlay background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95"></div>

            {/* Curved top */}
            <div className="absolute top-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120C240 40 480 0 720 0C960 0 1200 40 1440 120V0H0V120Z" fill="white" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-white"
                >
                    <p className="text-lg mb-4">Antwort In 24H</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Bereit Ihr Projekt Zu Starten?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                            Termin Vereinbaren
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
                            Projekt-Check
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Curved bottom - transitioning to blue gradient */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <defs>
                        <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="50%" stopColor="#40C5C5" />
                            <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                    </defs>
                    <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z" fill="url(#footerGradient)" />
                </svg>
            </div>
        </section>
    )
}
