import { NavLink } from "react-router-dom";

function Navbar() {
  const base = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow";

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold text-teal-600">GlobeTrotter</div>
            <nav className="ml-8 flex space-x-2">
              <NavLink end to="/" className={({isActive}) => `${base} ${isActive ? active : 'text-gray-700 hover:bg-gray-100'}`}>
                Login
              </NavLink>
              <NavLink to="/signup" className={({isActive}) => `${base} ${isActive ? active : 'text-gray-700 hover:bg-gray-100'}`}>
                Signup
              </NavLink>
              <NavLink to="/dashboard" className={({isActive}) => `${base} ${isActive ? active : 'text-gray-700 hover:bg-gray-100'}`}>
                Dashboard
              </NavLink>
              <NavLink to="/create-trip" className={({isActive}) => `${base} ${isActive ? active : 'text-gray-700 hover:bg-gray-100'}`}>
                Create Trip
              </NavLink>
              <NavLink to="/my-trips" className={({isActive}) => `${base} ${isActive ? active : 'text-gray-700 hover:bg-gray-100'}`}>
                My Trips
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
