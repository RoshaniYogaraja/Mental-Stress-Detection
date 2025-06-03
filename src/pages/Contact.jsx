import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Brain,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(
        "Message Sent: Thank you for your message. We'll get back to you soon!"
      );
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "support@mindcare.edu",
      description: "For general inquiries and support",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 11 123 4567",
      description: "Available Monday to Friday, 9 AM - 5 PM",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Colombo, Sri Lanka",
      description: "International College of Business and Technology",
    },
  ];

  const faqs = [
    {
      question: "How accurate is the stress detection system?",
      answer:
        "Our CNN-based emotion recognition system achieves 66.62% accuracy based on the FER2013 dataset. While highly effective, it should be used as a supplementary tool alongside professional mental health resources.",
    },
    {
      question: "Is my facial data stored or shared?",
      answer:
        "No, your privacy is our priority. All facial analysis is performed locally in your browser, and no images are permanently stored or transmitted to external servers.",
    },
    {
      question: "Who can use this system?",
      answer:
        "The system is designed primarily for university students and IT professionals, but anyone interested in monitoring their stress levels can use it. It's not a replacement for professional medical advice.",
    },
    {
      question: "What should I do if I get high stress results?",
      answer:
        "If the system detects high stress levels, follow the personalized recommendations provided. For persistent high stress, consider consulting with a mental health professional.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about MindCare? We're here to help you with our
              mental stress detection system and support your mental well-being
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <h2 className="text-2xl font-bold flex items-center mb-2">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-semibold text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-semibold text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full border rounded-md px-4 py-2"
                      rows={6}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <h2 className="text-xl font-bold flex items-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Get in Touch
                </h2>
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-gray-900">{info.content}</p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold flex items-center mb-2">
              <HelpCircle className="h-6 w-6 text-green-600 mr-2" />
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-6">
              Common questions about our stress detection system
            </p>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
