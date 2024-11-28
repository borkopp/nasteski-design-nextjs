import { fetchAPI } from '@/lib/strapi'
import GalleryContainer from '@/components/gallery/GalleryContainer'
import type { GalleryResponse } from '@/types/gallery'

export default async function GalleryPage() {
  const data = await fetchAPI('/galleries', {
    populate: {
      image: {
        fields: ['url', 'width', 'height']
      }
    },
    sort: ['createdAt:desc']
  }) as GalleryResponse

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Нашите проекти</h1>
      <GalleryContainer items={data.data} />
    </div>
  )
}