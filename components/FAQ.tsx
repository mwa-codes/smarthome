'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: 'Kann ein Smart Home nachgerüstet werden?',
            answer: 'Ja, Smart Home Systeme können in den meisten Fällen problemlos nachgerüstet werden. Wir bieten herstellerunabhängige Lösungen, die sich in bestehende Gebäude integrieren lassen – oft ohne große Umbaumaßnahmen.',
        },
        {
            question: 'Welche Vorteile hat ein Smart Home?',
            answer: 'Smart Home bietet mehr Komfort durch Automatisierung, höhere Energieeffizienz, bessere Sicherheit und Zeitersparnis im Alltag. Sie können alle Geräte zentral steuern und Szenarien automatisieren.',
        },
        {
            question: 'Warum sollten Sie von smartathome® ein Smart Home nutzen?',
            answer: 'Wir sind herstellerunabhängig, bieten individuelle Lösungen, professionelle Installation und lebenslangen Support. Mit über 25+ Systemen und 3000+ Herstellern finden wir die perfekte Lösung für Ihre Bedürfnisse.',
        },
        {
            question: 'Sind Smart Home Systeme sicher?',
            answer: 'Ja, moderne Smart Home Systeme sind sehr sicher. Wir setzen auf verschlüsselte Kommunikation, lokale Verarbeitung und regelmäßige Sicherheitsupdates. Ihre Daten und Privatsphäre sind geschützt.',
        },
        {
            question: 'Ist das Smart Home System von smartathome® mit anderen Systemen kompatibel?',
            answer: 'Ja, wir arbeiten mit offenen Standards und können die meisten bestehenden Systeme integrieren. Von Apple HomeKit über Google Home bis hin zu Amazon Alexa – wir verbinden alles.',
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Noch Fragen?
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Smart Home Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:block"
                    >
                        <div className="bg-gradient-to-br from-primary/10 to-teal-100 rounded-3xl p-8 overflow-hidden">
                            <Image
                                src="/images/homeimage.png"
                                alt="Smart Home Illustration"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
