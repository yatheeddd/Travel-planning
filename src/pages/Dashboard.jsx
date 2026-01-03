import FeaturedDestinations from "../components/FeaturedDestinations";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white mb-6">
          <h1 className="text-4xl font-bold">Welcome back, Traveler! 👋</h1>
          <p className="text-blue-50 mt-2">Your adventure dashboard - Plan, explore, and discover new destinations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
            <div className="text-3xl">🗺️</div>
            <p className="text-gray-600 text-sm">Total Trips</p>
            <p className="text-2xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-teal-500">
            <div className="text-3xl">🌍</div>
            <p className="text-gray-600 text-sm">Countries Visited</p>
            <p className="text-2xl font-bold text-gray-800">28</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500">
            <div className="text-3xl">📅</div>
            <p className="text-gray-600 text-sm">Days Traveled</p>
            <p className="text-2xl font-bold text-gray-800">450+</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-pink-500">
            <div className="text-3xl">⭐</div>
            <p className="text-gray-600 text-sm">Favorites</p>
            <p className="text-2xl font-bold text-gray-800">24</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:opacity-90 transition">
              📝 Plan New Trip
            </button>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:opacity-90 transition">
              👀 View My Trips
            </button>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:opacity-90 transition">
              💡 Discover Trends
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card hover:shadow-lg transition">
            <div className="text-5xl">🧭</div>
            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Smart Planning</h3>
            <p className="mt-2 text-sm text-gray-600">AI-powered itineraries tailored to your preferences</p>
          </div>

          <div className="card hover:shadow-lg transition">
            <div className="text-5xl">💰</div>
            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Budget Tracker</h3>
            <p className="mt-2 text-sm text-gray-600">Keep track of expenses and manage trip budgets</p>
          </div>

          <div className="card hover:shadow-lg transition">
            <div className="text-5xl">👥</div>
            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Collaborate</h3>
            <p className="mt-2 text-sm text-gray-600">Share trips with friends and plan together</p>
          </div>

          <div className="card hover:shadow-lg transition">
            <div className="text-5xl">📸</div>
            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Photo Gallery</h3>
            <p className="mt-2 text-sm text-gray-600">Organize and share your travel photos</p>
          </div>

          <div className="card hover:shadow-lg transition">
            <div className="text-5xl">✈️</div>
            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Flight Deals</h3>
            <p className="mt-2 text-sm text-gray-600">Get alerts for the best flight prices</p>
          </div>

          <div className="card hover:shadow-lg transition">
            <div className="text-5xl">🏨</div>
            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Hotel Finder</h3>
            <p className="mt-2 text-sm text-gray-600">Find and book the perfect accommodations</p>
          </div>
        </div>
      </div>

      <FeaturedDestinations />
      <Footer />
    </>
  );
}

export default Dashboard;
