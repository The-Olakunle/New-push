import { Header } from "./components/header"
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

