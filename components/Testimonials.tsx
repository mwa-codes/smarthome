'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
    const testimonials = [
        {
            name: 'G. Gansberger',
            text: 'Sehr professionelle Installation, schnelle und freundliche Kommunikation. Absolut zufrieden – klare Weiterempfehlung!',
            rating: 4.5,
        },
        {
            name: 'K-H Kranzosch',
            text: 'Sehr schnelle Lieferung und persönliche Beratung ohne Warteschleife. Probleme wurden sofort gelöst – exzellenter Kundenservice zu fairen Preisen.',
            rating: 4.5,
        },
        {
            name: 'Markus K.',
            text: 'Dank Smartathome ist unsere Fußbodenheizung jetzt smart. Sehr angenehmer Ablauf, stets freundlich und erreichbar – gerne wieder!',
            rating: 5,
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Testimonial Cards - Desktop */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(testimonial.rating)
                                                ? 'fill-secondary text-secondary'
                                                : i < testimonial.rating
                                                    ? 'fill-secondary/50 text-secondary'
                                                    : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {testimonial.text}
                            </p>
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial Carousel - Mobile */}
                <div className="md:hidden relative">
                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(testimonials[currentIndex].rating)
                                            ? 'fill-secondary text-secondary'
                                            : i < testimonials[currentIndex].rating
                                                ? 'fill-secondary/50 text-secondary'
                                                : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {testimonials[currentIndex].text}
                        </p>
                        <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-primary text-white hover:bg-teal-600 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-primary text-white hover:bg-teal-600 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Pagination dots for desktop */}
                <div className="hidden md:flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-primary"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
