import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function GalleryShowcase() {
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Retractable awning" },
    { src: "/placeholder.svg", alt: "Commercial shade solution" },
    { src: "/placeholder.svg", alt: "Residential fence project" },
    { src: "/placeholder.svg", alt: "Patio awning installation" },
    { src: "/placeholder.svg", alt: "Commercial awning project" },
    { src: "/placeholder.svg", alt: "Commercial awning project" },
  ]

  return (
    <section id="gallery" className="flex justify-center items-center w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Галерија</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Погледнете ги нашите професионално изработени производи, кои ќе ви помогнат да направите правилен избор!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/gallery" passHref>
            <Button size="lg" className="group">
              Отвори галерија
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

