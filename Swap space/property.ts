export interface Property {
    id: string
    title: string
    location: string
    images: string[]
    amenities: {
      sittingRoom: boolean
      bedrooms: number
      baths: number
      wifi: boolean
      petFriendly: boolean
      additionalAmenities: number
    }
    availability: {
      start: string
      end: string
    }
    hosts: {
      names: string[]
      avatars: string[]
    }
  }
  
  