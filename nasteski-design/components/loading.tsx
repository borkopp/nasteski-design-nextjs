export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Нашите проекти</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  }