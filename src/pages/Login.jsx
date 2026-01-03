import { Link } from "react-router-dom";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <div className="relative min-h-[60vh] bg-gradient-to-br from-blue-600 via-teal-500 to-blue-400 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl">✈️</div>
          <div className="absolute bottom-20 right-10 text-5xl">🗺️</div>
          <div className="absolute top-1/3 right-1/4 text-4xl">🏖️</div>
        </div>
        
        <div className="relative z-10 text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to GlobeTrotter</h1>
          <p className="text-xl text-blue-50">Plan your adventures, explore the world, create unforgettable memories</p>
        </div>
      </div>

      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="card max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800">🔐 Login to Your Account</h2>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="your@email.com" className="mt-1 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" placeholder="••••••••" className="mt-1 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:opacity-90 transition">Login</button>
            <Link to="/signup" className="text-sm text-blue-600 hover:text-blue-700">Create an account</Link>
          </div>
        </div>
      </div>

      <FeaturedDestinations />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Login;
