'use client'

import { motion } from 'framer-motion'
import { Home, Thermometer, Lightbulb, DollarSign, Cloud, Zap, Car, Wifi } from 'lucide-react'

export default function ServicesGrid() {
    const services = [
        {
            icon: <Home className="w-12 h-12" />,
            title: 'Hausautomation',
            description: 'Alles vernetzt – Szenen, App & Sprache. Nachrüstbar & zukunftssicher.',
        },
        {
            icon: <Thermometer className="w-12 h-12" />,
            title: 'Heizung & Klima',
            description: 'Raumweise Regelung für Heizkörper & FBH – komfortabel & effizient.',
        },
        {
            icon: <Lightbulb className="w-12 h-12" />,
            title: 'Lichtsteuerung',
            description: 'Ambiente auf Knopfdruck – Dimmung, Präsenz & Dämmerung.',
        },
        {
            icon: <DollarSign className="w-12 h-12" />,
            title: 'Zutritt & smarte Tür',
            description: 'Zeitcodes, Auto-Lock & Logs – sicherer Zugang per App.',
        },
        {
            icon: <Cloud className="w-12 h-12" />,
            title: 'Beschattung & Rollläden',
            description: 'Jalousien/Markisen wetter- & sonnenstandsabhängig steuern.',
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: 'Dynamische Strompreise',
            description: 'Automationen nach Spotmarkt – Strom nutzen, wenn er günstig ist.',
        },
        {
            icon: <Wifi className="w-12 h-12" />,
            title: 'PV & Wärmepumpe',
            description: 'Automationen nach Spotmarkt – Strom nutzen, wenn er günstig ist.',
        },
        {
            icon: <Car className="w-12 h-12" />,
            title: 'PV-abhängiges E-Auto-Laden',
            description: 'Wallbox lädt mit eigenem Sonnenstrom – automatisch & smart.',
        },
        {
            icon: <Wifi className="w-12 h-12" />,
            title: 'Airbnb-Automation',
            description: 'Self-Check-In, Codes & Energie – vollautomatisch für Ferienobjekte.',
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Was Wir Für Sie Smart Machen:
                    </h2>
                    <p className="text-xl text-gray-600">
                        Planung Mit System – Für Eine Intelligente Und Zukunftssichere Lösung.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all group cursor-pointer"
                        >
                            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <button className="text-primary font-semibold hover:text-teal-600 transition-colors flex items-center gap-2">
                                Details Ansehen
                                <span className="group-hover:translate-x-1 transition-transform">»</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
