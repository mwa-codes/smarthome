import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import ServicesGrid from '@/components/ServicesGrid'
import ProcessSteps from '@/components/ProcessSteps'
import Testimonials from '@/components/Testimonials'
import Expert from '@/components/Expert'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <ServiceCards />
            <ServicesGrid />
            <ProcessSteps />
            <Testimonials />
            <Expert />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    )
}
