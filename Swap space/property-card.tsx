import Image from "next/image"
import { Bed, Bath, Wifi, PawPrint, Plus } from "lucide-react"
import type { Property } from "../types/property"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group relative space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={property.images[0] || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-muted-foreground">{property.location}</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1 text-sm">
            <Bed className="h-4 w-4" />
            <span>{property.amenities.bedrooms} bedrooms</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Bath className="h-4 w-4" />
            <span>{property.amenities.baths} baths</span>
          </div>
          {property.amenities.wifi && (
            <div className="flex items-center gap-1 text-sm">
              <Wifi className="h-4 w-4" />
              <span>WiFi available</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 text-sm">
          <div className="flex items-center gap-1">
            <PawPrint className="h-4 w-4" />
            <span>Pet friendly</span>
          </div>
          <div className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>{property.amenities.additionalAmenities} more amenities</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-sm font-medium text-green-600">Swap available</p>
            <p className="text-sm text-muted-foreground">
              {property.availability.start} - {property.availability.end}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">Hosted by {property.hosts.names.join(" & ")}</span>
            <div className="flex -space-x-2">
              {property.hosts.avatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar || "/placeholder.svg"}
                  alt={`Host ${i + 1}`}
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

