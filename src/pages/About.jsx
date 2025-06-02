import {
  Brain,
  Users,
  Target,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description:
        "Utilizing Convolutional Neural Networks (CNN) with 66.62% accuracy for facial emotion recognition based on the FER2013 dataset containing 35,887 images.",
    },
    {
      icon: Users,
      title: "Targeted Solution",
      description:
        "Specifically designed for university students and IT professionals who face unique stress challenges in academic and workplace environments.",
    },
    {
      icon: Target,
      title: "Evidence-Based Approach",
      description:
        "Research-backed methodology combining computer vision, machine learning, and psychological insights for accurate stress detection.",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "Developed as part of BSc (Hons) Software Engineering program at International College of Business and Technology.",
    },
  ];

  const challenges = [
    "30% of individuals are unaware they are experiencing mental stress symptoms",
    "Students face academic pressure, deadlines, and performance anxiety",
    "IT professionals experience burnout from high-pressure work environments",
    "Current stress detection methods are subjective or require specialized equipment",
  ];

  const solutions = [
    "Real-time, non-invasive stress detection through facial analysis",
    "Objective assessment using advanced machine learning algorithms",
    "Personalized recommendations based on detected stress levels",
    "Accessible web-based platform requiring only a standard webcam",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* <Header /> */}

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About MindCare
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              An innovative Mental Stress Detection System using advanced Facial
              Emotion Recognition technology to help students and IT
              professionals monitor and manage their mental well-being.
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="text-gray-700 mb-4">
              Bridging technology and mental health through innovative AI
              solutions.
            </p>
            <p className="text-gray-700 mb-4">
              The Mental Stress Detection System is a groundbreaking web-based
              application that leverages cutting-edge computer vision and
              machine learning algorithms to analyze facial expressions captured
              via webcam. By detecting subtle emotional patterns, our system can
              assess stress levels in real-time and provide personalized
              recommendations for stress management.
            </p>
            <p className="text-gray-700">
              With the increasing prevalence of mental health issues in academic
              and workplace environments, there is a growing need for accessible
              tools that can detect early signs of stress and provide timely
              interventions.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Key Features & Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges and Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-red-600 mr-2" />
                Current Challenges
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                {challenges.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                Our Solution
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                {solutions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">
              Technical Specifications
            </h2>
            <p className="text-gray-700">
              Our system is trained on the FER2013 dataset with over 35,000
              labeled images for 7 emotion classes. Using a CNN-based
              architecture, we achieved 66.62% accuracy on test data. Real-time
              inference is done in the browser using a webcam and Python-based
              API connected to the model.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
