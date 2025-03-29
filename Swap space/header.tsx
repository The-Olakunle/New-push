import { Button as HeaderButton } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b py-4">
      <div className="container flex items-center justify-between">
        <div className="flex-1" />
        <HeaderButton variant="outline" className="mr-4">
          List your property
        </HeaderButton>
        <button className="flex items-center gap-2 rounded-full border p-2 hover:shadow-sm">
          <Menu className="h-5 w-5" />
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </button>
      </div>
    </header>
  )
}

and this property-card.tsx: import Image from "next/image"
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
                  alt={Host ${i + 1}}
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

and this search-bar.tsx: import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function SearchBar() {
  return (
    <div className="mx-auto flex w-[1114px] max-w-full flex-col items-start gap-2 px-4 py-8">
      <div className="flex w-full items-center gap-6 rounded-[200px] bg-white p-4 px-8 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <div className="flex w-[464px] flex-col items-start justify-center gap-2 border-r-2 border-[#D5D7DA] bg-white px-4 pb-4 pt-2">
          <label className="text-sm font-medium text-gray-900">Where would you like to go?</label>
          <input
            type="text"
            placeholder='Ex: "Brighton, East Sussex"'
            className="w-full border-0 bg-transparent p-0 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label className="text-sm font-medium text-gray-900">Check in date</label>
          <input
            type="text"
            placeholder="Add check in"
            className="w-full border-0 bg-transparent p-0 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <Separator orientation="vertical" className="h-10 bg-gray-300" />
        <div className="flex flex-col justify-center">
          <label className="text-sm font-medium text-gray-900">Check out date</label>
          <input
            type="text"
            placeholder="Add check out"
            className="w-full border-0 bg-transparent p-0 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <Separator orientation="vertical" className="h-10 bg-gray-300" />
        <div className="flex flex-col justify-center">
          <label className="text-sm font-medium text-gray-900">Guest</label>
          <input
            type="text"
            placeholder="Add guests"
            className="w-full border-0 bg-transparent p-0 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <Button size="icon" className="h-12 w-12 rounded-full bg-black hover:bg-gray-900">
          <Search className="h-5 w-5 text-white" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
      <div className="flex w-full items-center justify-between px-2">
        <div className="flex items-center gap-2 text-gray-500">
          <Switch id="mutual-swaps" />
          <label htmlFor="mutual-swaps" className="text-sm">
            Show only mutual swaps
          </label>
        </div>
        <Button variant="ghost" className="text-sm text-gray-500" size="sm">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Add more filters
        </Button>
      </div>
    </div>
  )
}

this is a type and the first file should be property.ts: export interface Property {
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

and page.tsx: import { Header } from "./components/header"
import { SearchBar } from "./components/search-bar"
import { PropertyCard } from "./components/property-card"

const MOCK_PROPERTIES = Array(6).fill({
  id: "1",
  title: "Modern Country Cottage",
  location: "Devon, United Kingdom",
  images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lmpquiirMkwd2OGZpMcmjH3Pfzemmk.png"],
  amenities: {
    sittingRoom: true,
    bedrooms: 3,
    baths: 2,
    wifi: true,
    petFriendly: true,
    additionalAmenities: 6,
  },
  availability: {
    start: "20th January",
    end: "20th February",
  },
  hosts: {
    names: ["Daniel", "Chloe"],
    avatars: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jlCk9NqFClXmApjofZ7VZ5KtfuMoX0.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rqPn5WJRaZ4Gkmd49gJ4yB5VVpXW1I.png",
    ],
  },
})

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Welcome to Swap Space Olivia{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="text-muted-foreground">Built for those ready to explore the world.</p>
        </div>
        <SearchBar />
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Explore these unique stays</h2>
          <p className="text-sm text-muted-foreground">Added by other Swappers.</p>
          <div className="grid grid-cols-3 gap-x-6 gap-y-12">
            {MOCK_PROPERTIES.map((property, i) => (
              <PropertyCard key={i} property={property} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}