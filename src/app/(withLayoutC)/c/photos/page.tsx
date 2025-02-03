import { Search } from "lucide-react";
import Image from "next/image";
import Dropdown from "./_components/Dropdown";
import ToogleBar from "./_components/StatusBar";
import TimePicker from "./_components/TimePicker";

const mediaLinks = [
  // YouTube Videos
  {
    type: "video",
    title:
      "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children",
    url: "https://www.youtube.com/watch?v=XqZsoesa55w",
  },
  {
    type: "video",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  },
  {
    type: "video",
    title: "Ed Sheeran - Shape of You [Official Video]",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  },
  {
    type: "video",
    title: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video]",
    url: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  },
  {
    type: "video",
    title: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
    url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  },

  // Unsplash Photos
  {
    type: "photo",
    title: "Gray tower under clear blue sky",
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "photo",
    title: "A view of the Statue of Liberty from across the water",
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "photo",
    title: "Red telephone booth near brown concrete building during daytime",
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "photo",
    title: "Brown concrete building under blue sky during daytime",
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "photo",
    title: "Green trees and plants during daytime",
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Navigation Bar */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        {/* Photos Dropdown */}
        <Dropdown />

        {/* Date Range Pickers */}
        <TimePicker />

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
        {mediaLinks.map((item, i) => (
          <div key={i} className="">
            <div className="flex justify-end my-5">
              <ToogleBar />
            </div>
            <div className="aspect-square w-full rounded-lg bg-gray-100">
              {item.type === "photo" ? (
                <Image
                  width={300}
                  height={300}
                  src={item.url}
                  alt={item.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.url.replace("watch?v=", "embed/")}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg"
                ></iframe>
              )}
            </div>

            <p className="text-md font-bold">
              Easily modify and generate images with AI
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
