import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, User, Mail, Lock, GraduationCap } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const showAlert = (title, description) => {
    alert(`${title}\n\n${description}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      showAlert(
        "Password Mismatch",
        "Passwords do not match. Please try again."
      );
      setIsLoading(false);
      return;
    }

    // Simulated registration
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userType", formData.userType);

      showAlert(
        "Registration Successful",
        "Welcome to MindCare! Your account has been created."
      );
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-blue-100 px-8 py-10 sm:px-10">
        <div className="text-center mb-8">
          <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">
            Join <span className="text-blue-600">MindCare</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Create your account to start monitoring your mental well-being.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="flex items-center text-sm font-medium text-gray-700 mb-1"
              >
                <User className="h-4 w-4 mr-2" /> Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center text-sm font-medium text-gray-700 mb-1"
              >
                <Mail className="h-4 w-4 mr-2" /> Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="flex items-center text-sm font-medium text-gray-700 mb-1"
              >
                <Lock className="h-4 w-4 mr-2" /> Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter password"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="flex items-center text-sm font-medium text-gray-700 mb-1"
              >
                <Lock className="h-4 w-4 mr-2" /> Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm password"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          {/* User Type */}
          <div>
            <label
              htmlFor="userType"
              className="flex items-center text-sm font-medium text-gray-700 mb-1"
            >
              <GraduationCap className="h-4 w-4 mr-2" /> User Type
            </label>
            <select
              id="userType"
              value={formData.userType}
              onChange={(e) => handleInputChange("userType", e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="" disabled>
                Select your category
              </option>
              <option value="student">University Student</option>
              <option value="it-professional">IT Professional</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-md py-2 px-4 text-white font-semibold transition ${
              isLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
