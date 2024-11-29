import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="Company Logo"
                width={150}
                height={40}
                className="dark:invert"
              />
            </Link>
          </div>
          <nav className="flex space-x-4 mb-6 md:mb-0">
            <Link href="#services" className="hover:text-gray-300 transition-colors">
              Услуги
            </Link>
            <Link href="#gallery" className="hover:text-gray-300 transition-colors">
              Галерија
            </Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">
              Контакт
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a href="https://facebook.com/dooel.nasteski" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://instagram.com/nasteski_design" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="tel:+38970729390" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Phone className="w-6 h-6" />
              <span className="sr-only">Телефон</span>
            </a>
            <a href="mailto:contact@nasteskidesign.mk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Е-Маил</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ДООЕЛ Настески Дизајн. Сите права се задржани.</p>
        </div>
      </div>
    </footer>
  )
}

