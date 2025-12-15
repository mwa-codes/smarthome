'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function ProcessSteps() {
    const steps = [
        {
            number: '1',
            title: 'Kostenlose Vor-Ort-Analyse',
            description: 'Wir analysieren Ihre Bedürfnisse und technischen Möglichkeiten direkt bei Ihnen – unverbindlich und herstellerunabhängig.',
        },
        {
            number: '2',
            title: 'Individuelle Systemplanung',
            description: 'Maßgeschneidertes Konzept mit transparenten Kosten. Die beste Lösung aus 25+ Systemen und 3000+ Herstellern.',
        },
        {
            number: '3',
            title: 'Professionelle Installation',
            description: 'Zertifizierte Montage, Einrichtung und Einschulung. Plus lebenslanger Support – alles aus einer Hand.',
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        In 3 Schritten Zu Ihrem Smart Home
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gradient-to-br from-primary to-teal-400 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all"
                        >
                            <div className="text-center">
                                <div className="inline-block bg-white text-primary text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partner Logos Carousel */}
                <PartnerLogosCarousel />
            </div>
        </section>
    )
}

// Partner Logos Carousel Component
function PartnerLogosCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const logoImages = [
        [
            { src: '/images/1-1.png.webp', alt: 'Partner 1' },
            { src: '/images/1-2.png.webp', alt: 'Partner 2' },
            { src: '/images/2.1.png', alt: 'Partner 3' },
        ],
        [
            { src: '/images/3-2.png.webp', alt: 'Partner 4' },
            { src: '/images/3-3.png.webp', alt: 'Partner 5' },
            { src: '/images/slider-image1.webp', alt: 'Partner 6' },
        ],
    ]

    const next = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % logoImages.length)
    }, [logoImages.length])

    const prev = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + logoImages.length) % logoImages.length)
    }, [logoImages.length])

    // Auto-advance every 4 seconds
    useEffect(() => {
        const timer = setInterval(next, 4000)
        return () => clearInterval(timer)
    }, [next])

    return (
        <div className="mt-20 relative">
            {/* Logo Display */}
            <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20"
            >
                {logoImages[currentSlide].map((logo, i) => (
                    <div
                        key={i}
                        className="relative transition-all duration-300 opacity-90 hover:opacity-100 transform hover:scale-110"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={300}
                            height={140}
                            className="h-24 md:h-28 lg:h-32 w-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={prev}
                    className="p-2 rounded-full bg-primary text-white hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Previous logos"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {logoImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentSlide
                                ? 'bg-primary w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="p-2 rounded-full bg-primary text-white hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Next logos"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
