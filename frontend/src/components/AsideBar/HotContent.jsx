import { useState } from "react";

export default function HotContent() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const genres = ["Entertainment", "PuppetShow", "StandUpComedy", "NotForKiddos", "Food", "Hackathons"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-[var(--bg)] shadow-md">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="space-y-2">
          {["New", "Hot", "Popular"].map(category => (
            <button
              key={category}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                selectedCategory === category ? "bg-[var(--primary)] text-white" : "bg-white"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-2">Genres</h2>
        <div className="space-y-2">
          {genres.map(genre => (
            <button
              key={genre}
              className="w-full text-left px-4 py-2 rounded-lg bg-white transition hover:bg-gray-200"
              onClick={() => setSearchQuery(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
