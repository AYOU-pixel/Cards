import { LinkedIn, GitHub, Twitter, Web } from '@mui/icons-material';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo or Brand Name */}
          <div className="flex justify-center sm:justify-start">
            <img
              src="logo.png"
              className="w-16 h-16 rounded-full transform transition-transform duration-700 hover:scale-125 hover:rotate-12 hover:shadow-2xl"
              alt="Logo"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center sm:justify-start space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition-colors duration-300"
            >
              <LinkedIn fontSize="large" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition-colors duration-300"
            >
              <GitHub fontSize="large" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition-colors duration-300"
            >
              <Twitter fontSize="large" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-gray-400 mb-3">Contact</h3>
            <ul className="text-gray-400 space-y-3">
              <li>Email: ayoubprograma@gmail.com</li>
              <li>Phone: +212 781913306</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-3">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/ayoub-rachd-0b344a322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300"
                >
                  <LinkedIn fontSize="small" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AYOU-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-800 transition-colors duration-300"
                >
                  <GitHub fontSize="small" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.netlify.com/teams/ayou-pixel/sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-300"
                >
                  <Web fontSize="small" />
                  <span>Netlify</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-400 mt-12">
          <p>Designed & Developed by AYOUB | © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}