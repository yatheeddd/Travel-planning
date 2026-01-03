import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
      <div className="min-h-[72vh] flex items-center justify-center bg-gray-50">
        <div className="card max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800">✨ Create your GlobeTrotter account</h2>
          <p className="text-sm text-gray-600 mt-2">Join thousands of travelers planning amazing trips</p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="John Doe" className="mt-1 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="your@email.com" className="mt-1 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" placeholder="••••••••" className="mt-1 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="mt-1 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:opacity-90 transition">Sign up</button>
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-700">Already have an account?</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
