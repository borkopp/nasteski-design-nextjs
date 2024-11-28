import Image from 'next/image'
import type { GalleryItem } from '@/types/gallery'

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="relative aspect-square group"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.image.data.attributes.url}`}
            alt={item.attributes.title || 'Gallery Image'}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          {item.attributes.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <p className="text-sm">{item.attributes.title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}