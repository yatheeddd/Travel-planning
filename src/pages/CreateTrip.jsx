import Footer from "../components/Footer";

function CreateTrip() {
  return (
    <>
      <div className="max-w-3xl mx-auto pb-12">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-8 mb-6 text-white">
          <h1 className="text-3xl font-bold">✈️ Plan Your Next Adventure</h1>
          <p className="mt-2 text-blue-50">Create a detailed itinerary and organize your trip perfectly</p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-800">📝 Trip Details</h2>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">✏️ Trip Name</label>
                <input type="text" placeholder="e.g., European Summer Tour" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">🏷️ Trip Type</label>
                <select className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Adventure</option>
                  <option>Relaxation</option>
                  <option>Cultural</option>
                  <option>Business</option>
                  <option>Family</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">📅 Start Date</label>
                <input type="date" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">📅 End Date</label>
                <input type="date" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">🌍 Destination(s)</label>
                <input type="text" placeholder="e.g., Paris, London, Amsterdam" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">👥 Number of Travelers</label>
                <input type="number" placeholder="1" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">💰 Budget</label>
              <input type="number" placeholder="e.g., 5000" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">📝 Description & Notes</label>
              <textarea placeholder="Add details about your trip, highlights, must-see places, restaurants..." className="mt-2 block w-full border border-gray-300 rounded-lg p-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">📷 Add Cover Image URL</label>
              <input type="url" placeholder="https://example.com/image.jpg" className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <input type="checkbox" id="private" className="mr-2" />
              <label htmlFor="private" className="text-sm text-gray-700">Keep this trip private</label>
            </div>

            <div className="flex justify-between pt-4">
              <button type="button" className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition">Cancel</button>
              <button type="button" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:opacity-90 transition">💾 Save Trip</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateTrip;
