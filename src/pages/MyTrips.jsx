import { useState } from "react";
import Footer from "../components/Footer";

function MyTrips() {
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allTrips = [
    { id: 1, name: "Weekend in Lisbon", emoji: "🇵🇹", dates: "2026-04-01 → 2026-04-05", type: "relaxation", rating: 4.8 },
    { id: 2, name: "Alps Ski Trip", emoji: "⛷️", dates: "2026-12-20 → 2026-12-27", type: "adventure", rating: 4.9 },
    { id: 3, name: "Tokyo Adventure", emoji: "🗾", dates: "2027-03-10 → 2027-03-20", type: "cultural", rating: 5.0 },
    { id: 4, name: "Bali Beach Getaway", emoji: "🏝️", dates: "2026-06-15 → 2026-06-25", type: "relaxation", rating: 4.7 },
    { id: 5, name: "New York City Tour", emoji: "🗽", dates: "2026-09-01 → 2026-09-07", type: "cultural", rating: 4.6 },
    { id: 6, name: "Safari in Kenya", emoji: "🦁", dates: "2027-01-10 → 2027-01-20", type: "adventure", rating: 4.9 },
  ];

  const filteredTrips = allTrips.filter((t) => {
    const matchesFilter = filterType === "all" || t.type === filterType;
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div className="pb-12">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold">📍 My Travel Adventures</h1>
          <p className="mt-2 text-blue-50">Manage and organize all your trips in one place</p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="🔍 Search trips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filterType === "all"
                  ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              All Trips ({allTrips.length})
            </button>
            <button
              onClick={() => setFilterType("adventure")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filterType === "adventure"
                  ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              🎒 Adventure
            </button>
            <button
              onClick={() => setFilterType("relaxation")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filterType === "relaxation"
                  ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              🏖️ Relaxation
            </button>
            <button
              onClick={() => setFilterType("cultural")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filterType === "cultural"
                  ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              🎭 Cultural
            </button>
          </div>
        </div>

        {filteredTrips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-4xl mb-4">🧳</p>
            <p className="text-gray-600">No trips found. Create your first adventure!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map((t) => (
              <div key={t.id} className="card hover:shadow-xl transition transform hover:translate-y-[-4px]">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-4xl">{t.emoji}</div>
                  <div className="text-yellow-400">{"⭐".repeat(Math.floor(t.rating))}</div>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-600 mt-1">📅 {t.dates}</p>
                <p className="text-xs text-gray-500 mt-2 capitalize">Type: {t.type}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-medium hover:opacity-90">
                    👁️ View Details
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-sm font-medium hover:bg-gray-300">
                    ✏️ Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyTrips;
