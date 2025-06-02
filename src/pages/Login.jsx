// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Brain, Mail, Lock, ArrowRight } from "lucide-react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     setTimeout(() => {
//       if (email && password) {
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("userEmail", email);
//         toast.success("Login successful!", {
//           position: "top-right",
//           autoClose: 2000,
//           onClose: () => navigate("/dashboard"),
//         });
//       } else {
//         toast.error("Login Failed: Please enter valid credentials.", {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-blue-100 to-white flex items-center justify-center px-4">
//       <ToastContainer />
//       <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100">
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg">
//             <Brain className="h-8 w-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-extrabold text-gray-800 mt-4">
//             Sign in to <span className="text-blue-600">MindCare</span>
//           </h1>
//           <p className="text-gray-500 mt-2 text-center text-sm">
//             Your mental wellness assistant
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               <span className="flex items-center">
//                 <Mail className="w-4 h-4 mr-2 text-blue-600" /> Email Address
//               </span>
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               required
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               <span className="flex items-center">
//                 <Lock className="w-4 h-4 mr-2 text-blue-600" /> Password
//               </span>
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
//           >
//             {isLoading ? (
//               "Signing In..."
//             ) : (
//               <>
//                 Sign In <ArrowRight className="ml-2 h-5 w-5" />
//               </>
//             )}
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-6">
//           Don't have an account?
//           <Link
//             to="/register"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        // alert("Login Successful: Welcome back to MindCare!");
        navigate("/dashboard");
      } else {
        alert("Login Failed: Please enter valid credentials.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-blue-100 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 mt-4">
            Sign in to <span className="text-blue-600">MindCare</span>
          </h1>
          <p className="text-gray-500 mt-2 text-center text-sm">
            Your mental wellness assistant
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" /> Email Address
              </span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="flex items-center">
                <Lock className="w-4 h-4 mr-2 text-blue-600" /> Password
              </span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
          >
            {isLoading ? (
              "Signing In..."
            ) : (
              <>
                Sign In <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Brain, Mail, Lock, ArrowRight } from "lucide-react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     setTimeout(() => {
//       // Basic check for empty fields, no toast messages here
//       if (!email || !password) {
//         // Could handle invalid login silently or show inline errors (not requested)
//       } else {
//         // Assume login successful (no notification)
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-blue-100 to-white flex items-center justify-center px-4">
//       <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100">
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg">
//             <Brain className="h-8 w-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-extrabold text-gray-800 mt-4">
//             Sign in to <span className="text-blue-600">MindCare</span>
//           </h1>
//           <p className="text-gray-500 mt-2 text-center text-sm">
//             Your mental wellness assistant
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               <span className="flex items-center">
//                 <Mail className="w-4 h-4 mr-2 text-blue-600" /> Email Address
//               </span>
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               required
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               <span className="flex items-center">
//                 <Lock className="w-4 h-4 mr-2 text-blue-600" /> Password
//               </span>
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
//           >
//             {isLoading ? "Signing In..." : (
//               <>
//                 Sign In <ArrowRight className="ml-2 h-5 w-5" />
//               </>
//             )}
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-6">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-600 hover:underline font-medium">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
