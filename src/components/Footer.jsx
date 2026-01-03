function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-teal-400">GlobeTrotter</h4>
            <p className="text-gray-300 text-sm mt-2">Explore the world, plan adventures, create memories.</p>
          </div>
          <div>
            <h5 className="font-semibold text-white">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white">Support</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-teal-400">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-400">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white">Legal</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-teal-400">Privacy</a></li>
              <li><a href="#" className="hover:text-teal-400">Terms</a></li>
              <li><a href="#" className="hover:text-teal-400">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-sm text-gray-400">© 2026 GlobeTrotter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
