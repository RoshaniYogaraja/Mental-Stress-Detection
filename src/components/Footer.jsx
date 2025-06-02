import { Link } from "react-router-dom";
import { Brain, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                MindCare
              </span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed max-w-sm text-sm">
              A smart mental stress detection system using facial emotion
              recognition for students and IT professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Dashboard", to: "/dashboard" },
                { name: "Stress Detection", to: "/stress-detection" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span>support@mindcare.edu</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span>+94 11 123 4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 MindCare. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-400 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
