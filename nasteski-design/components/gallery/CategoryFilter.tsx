'use client'

type CategoryFilterProps = {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg ${
          activeCategory === 'all' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Сите
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg ${
            activeCategory === category 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}