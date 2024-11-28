export type GalleryItem = {
    id: number
    attributes: {
      title: string | null
      category: 'ogradi' | 'tendi' | 'zelatin-zavesi'
      image: {
        data: {
          attributes: {
            url: string
            width: number
            height: number
          }
        }
      }
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
  }
  
  export type GalleryResponse = {
    data: GalleryItem[]
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }