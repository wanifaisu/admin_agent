import { Calendar, ChevronDown, Search } from "lucide-react";
import ToogleBar from "../photos/_components/StatusBar";

export default function Photos() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Navigation Bar */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        {/* Photos Dropdown */}
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
          Photos
          <ChevronDown className="h-4 w-4" />
        </button>

        {/* Date Range Pickers */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
            <Calendar className="h-4 w-4" />
            MM / DD / YYYY
          </button>
          <span className="text-gray-500">To</span>
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
            <Calendar className="h-4 w-4" />
            MM / DD / YYYY
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2 pl-10 text-sm focus:border-gray-300 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Create Button */}
        <button className="rounded-lg bg-gray-600 px-6 py-2 text-sm font-medium text-white bg-slate-700">
          Create
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {/* Repeat this card 21 times */}
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i} className="">
            {/* Image Placeholder */}
            <ToogleBar />
            <div className="aspect-square w-full rounded-lg bg-gray-100"></div>

            {/* Card Text */}
            <p className="text-sm font-medium">
              Easily modify and generate images with AI
            </p>

            {/* Status Bar */}
          </div>
        ))}
      </div>
    </div>
  );
}
