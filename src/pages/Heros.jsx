import { Link } from "react-router-dom";

import {
  Brain,
  Camera,
  BarChart3,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";

const Heros = () => {
  const features = [
    {
      icon: Camera,
      title: "Facial Emotion Recognition",
      description:
        "Advanced CNN-based algorithms analyze facial expressions in real-time to detect emotional states.",
    },
    {
      icon: BarChart3,
      title: "Stress Level Analysis",
      description:
        "Comprehensive stress scoring algorithm that quantifies stress levels based on detected emotions.",
    },
    {
      icon: Brain,
      title: "Personalized Recommendations",
      description:
        "AI-powered suggestions for stress management techniques tailored to individual needs.",
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description:
        "Local processing ensures your facial data is never stored or transmitted to external servers.",
    },
  ];

  const benefits = [
    "Real-time stress detection through facial analysis",
    "Non-invasive monitoring solution",
    "Personalized stress management recommendations",
    "Historical stress pattern tracking",
    "Designed specifically for students and IT professionals",
    "Research-backed emotion recognition technology",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Mental Stress Detection System
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Advanced facial emotion recognition technology to help students and
            IT professionals monitor, understand, and manage their mental
            well-being effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-4 rounded-lg">
                Get Started Today
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-gray-300 hover:bg-gray-100 text-lg font-medium px-8 py-4 rounded-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology for Mental Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system combines cutting-edge computer vision, machine
              learning, and psychological research to provide accurate stress
              detection and management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Research-Backed Solution
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Based on extensive research and validated against academic standards
            for mental health assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">66.62%</div>
              <div className="text-lg opacity-90">CNN Model Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">35,887</div>
              <div className="text-lg opacity-90">
                Training Images (FER2013)
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
              <div className="text-lg opacity-90">Emotion Categories</div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose MindCare?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our system addresses the growing mental health challenges faced
                by students and IT professionals through innovative technology
                and evidence-based interventions.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  Target Audience
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">
                      University Students
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Academic pressure, exams, deadlines
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900">
                      IT Professionals
                    </h4>
                    <p className="text-indigo-700 text-sm">
                      Work pressure, technical challenges, burnout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Your Mental Health Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students and professionals who are taking control
            of their mental well-being with our advanced stress detection
            technology.
          </p>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg">
              Create Your Account
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Heros;
