function FeaturedDestinations() {
  const destinations = [
    { id: 1, name: "Paris, France", emoji: "🗼", rating: "4.9/5", trips: "2.3K" },
    { id: 2, name: "Tokyo, Japan", emoji: "🗾", rating: "4.8/5", trips: "1.8K" },
    { id: 3, name: "Bali, Indonesia", emoji: "🏝️", rating: "4.7/5", trips: "1.5K" },
    { id: 4, name: "New York, USA", emoji: "🗽", rating: "4.9/5", trips: "2.1K" },
    { id: 5, name: "Barcelona, Spain", emoji: "🏖️", rating: "4.6/5", trips: "1.2K" },
    { id: 6, name: "Dubai, UAE", emoji: "🌆", rating: "4.8/5", trips: "1.9K" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Destinations</h2>
        <p className="text-gray-600 mb-8">Explore the most popular travel destinations worldwide</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="card hover:shadow-xl transition transform hover:scale-105">
              <div className="text-5xl mb-3">{dest.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-800">{dest.name}</h3>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <span>⭐ {dest.rating}</span>
                <span>👥 {dest.trips} trips</span>
              </div>
              <button className="mt-4 w-full px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-medium hover:opacity-90">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;
