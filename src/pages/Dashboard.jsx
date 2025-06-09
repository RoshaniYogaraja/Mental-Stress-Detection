import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Camera,
  BarChart3,
  Calendar,
  TrendingUp,
  Brain,
  Activity,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setUserName(localStorage.getItem("userName") || "User");
    setUserType(localStorage.getItem("userType") || "user");
  }, [navigate]);

  const mockStressData = {
    todayStress: 3.2,
    weeklyAverage: 2.8,
    lastAssessment: "2 hours ago",
    totalAssessments: 24,
  };

  const recentAssessments = [
    {
      date: "Today, 2:30 PM",
      stress: 3.2,
      emotion: "Neutral",
      level: "Moderate",
    },
    { date: "Today, 10:15 AM", stress: 2.1, emotion: "Happy", level: "Low" },
    {
      date: "Yesterday, 6:45 PM",
      stress: 4.1,
      emotion: "Anxious",
      level: "High",
    },
    { date: "Yesterday, 2:20 PM", stress: 2.8, emotion: "Calm", level: "Low" },
  ];

  const getStressColor = (level) => {
    switch (level) {
      case "Low":
        return "text-green-600 bg-green-100";
      case "Moderate":
        return "text-yellow-600 bg-yellow-100";
      case "High":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStressProgress = (stress) => (stress / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome back, {userName}!
            </h1>
            <p className="text-gray-600 text-lg">
              Monitor your mental well-being and track your stress patterns
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-4">
                <Camera className="h-6 w-6 text-blue-600 mr-2 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold">
                    Start Stress Detection
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Take a photo to analyze your current stress level
                  </p>
                </div>
              </div>
              <Link to="/stress-detection">
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Begin Assessment
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-6 w-6 text-green-600 mr-2 mt-1" />
                <h2 className="text-xl font-semibold">Current Status</h2>
              </div>
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium">
                  Today's Stress Level
                </span>
                <span className="text-lg font-bold text-blue-600">
                  {mockStressData.todayStress}/5.0
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${getStressProgress(mockStressData.todayStress)}%`,
                  }}
                />
              </div>
              <p className="text-sm text-gray-600">
                Last assessment: {mockStressData.lastAssessment}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: "Weekly Average",
                value: `${mockStressData.weeklyAverage}/5.0`,
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
              },
              {
                label: "Total Assessments",
                value: mockStressData.totalAssessments,
                icon: <Activity className="h-8 w-8 text-green-600" />,
              },
              {
                label: "Account Type",
                value: userType.replace("-", " "),
                icon: <Brain className="h-8 w-8 text-purple-600" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg flex items-center"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-900 capitalize">
                    {item.value}
                  </p>
                </div>
                {item.icon}
              </div>
            ))}
          </div>

          {/* Recent Assessments */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Recent Assessments</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Your latest stress detection results
            </p>
            <div className="space-y-4">
              {recentAssessments.map((a, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{a.date}</p>
                    <p className="text-sm text-gray-600">
                      Primary emotion: {a.emotion}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {a.stress}/5.0
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStressColor(
                        a.level
                      )}`}
                    >
                      {a.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
