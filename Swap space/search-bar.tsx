import { Button } from "@/components/ui/button"
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

