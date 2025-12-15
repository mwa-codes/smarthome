'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCards() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Für Wen Wir Smart Home Lösungen Umsetzen:
                    </h2>
                    <p className="text-xl text-gray-600">
                        Mehr Komfort. Mehr Sicherheit. Mehr Zeit Für Das, Was Zählt.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Private Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-primary to-teal-400 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow"
                    >
                        <h3 className="text-3xl font-bold mb-4">
                            Smart Home Für Ihr Zuhause
                        </h3>
                        <p className="text-lg mb-6 text-white/90 leading-relaxed">
                            Von der Einzelraumlösung bis zum vollautomatisierten Eigenheim. Wir machen Ihr Zuhause intelligent, komfortabel und energieeffizient.
                        </p>
                        <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all flex items-center gap-2 group">
                            Privatlösungen Entdecken
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Business Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-br from-primary to-teal-400 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow"
                    >
                        <h3 className="text-3xl font-bold mb-4">
                            Smart Building für Unternehmen
                        </h3>
                        <p className="text-lg mb-6 text-white/90 leading-relaxed">
                            Praxis, Büro, Gastro, Ferienobjekte oder Werkstätten – senken Sie Betriebskosten und steigern Sie Effizienz mit intelligenter Gebäudeautomation.
                        </p>
                        <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all flex items-center gap-2 group">
                            Gewerbelösungen Ansehen
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
