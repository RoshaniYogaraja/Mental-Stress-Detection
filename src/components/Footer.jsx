import { Link } from "react-router-dom";
import { Brain, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                MindCare
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              Advanced Mental Stress Detection System using Facial Emotion Recognition 
              technology to help students and IT professionals monitor and manage their 
              mental well-being.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <Heart className="h-5 w-5 text-pink-400 mr-2" />
                <span className="font-semibold text-white">Developed by</span>
              </div>
              <p className="text-blue-100 font-medium">
                Marin Roshani Edvin Yogaraj<br />
                BSc (Hons) Software Engineering<br />
                International College of Business and Technology 2025
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg hover:translate-x-1 transform inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg hover:translate-x-1 transform inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg hover:translate-x-1 transform inline-block">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/stress-detection" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg hover:translate-x-1 transform inline-block">
                  Stress Detection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">support@mindcare.edu</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+94 11 123 4567</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2025 MindCare. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-lg transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-lg transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
