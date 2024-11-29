import Footer from '@/components/black-footer'
import ContactSection from '@/components/contact-section'
import GalleryShowcase from '@/components/gallery-showcase'
import Hero from '@/components/Hero'
import ServiceIcons from '@/components/ServiceIcons'
import ServicesSection from '@/components/services-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ServiceIcons />
      <GalleryShowcase />
      <ContactSection />
      <Footer />
    </main>
  )
}