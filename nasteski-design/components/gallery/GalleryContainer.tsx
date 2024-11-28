'use client'

import { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import GalleryGrid from './GalleryGrid'
import type { GalleryItem } from '@/types/gallery'

const CATEGORIES = ['Огради', 'Тенди', 'Желатин завеси']

export default function GalleryContainer({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.attributes.category === activeCategory)

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <GalleryGrid items={filteredItems} />
    </div>
  )
}