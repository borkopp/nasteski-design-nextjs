import { Facebook, Instagram, Phone, Mail, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Контакт</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Контактирајте нас за да добиете дополнителни информации!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Достапни сме на:</h3>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+38970729390" className="hover:underline">070 729 390</a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+38970729390" className="hover:underline">070 729 390</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:contact@example.com" className="hover:underline">contact@nasteskidesign.mk</a>
            </div>
            <div className="flex items-center space-x-3">
              <Facebook className="w-5 h-5 text-primary" />
              <a href="https://www.facebook.com/dooel.nasteski" target="_blank" rel="noopener noreferrer" className="hover:underline">DOOEL Nasteski Dizajn</a>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-primary" />
              <a href="https://www.instagram.com/nasteski_design/" target="_blank" rel="noopener noreferrer" className="hover:underline">nasteski_design</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Пратете ни порака</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Име</label>
                <Input type="text" id="name" name="name" placeholder="Вашето име" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Е-Маил</label>
                <Input type="email" id="email" name="email" placeholder="example@email.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Порака</label>
                <Textarea id="message" name="message" placeholder="Вашата порака..." required className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Испрати порака
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

