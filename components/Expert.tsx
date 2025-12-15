'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Expert() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Lernen Sie Unseren Experten Kennen
                    </h2>
                </div>

                {/* Expert Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-primary/20 to-teal-100 rounded-3xl overflow-hidden relative">
                                <Image
                                    src="/images/Mario-Kremser-smartathome-CEO.png.webp"
                                    alt="Mario Kremser - Smart Home Expert"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div>
                                <p className="text-primary font-semibold mb-2">
                                    Geschäftsführer • Smart Home Experte
                                </p>
                                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                                    Mario Kremser
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-6 h-6 text-primary" />
                                    <a href="tel:+43732997184" className="text-lg hover:text-primary transition-colors">
                                        +43732997184
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MessageCircle className="w-6 h-6 text-primary" />
                                    <a href="tel:+436706075797" className="text-lg hover:text-primary transition-colors">
                                        +436706075797
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-6 h-6 text-primary" />
                                    <a href="mailto:office@smartathome.at" className="text-lg hover:text-primary transition-colors">
                                        office@smartathome.at
                                    </a>
                                </div>
                            </div>

                            <button className="mt-6 bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                                Termin Vereinbaren
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
