import React, { useState } from "react";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiBriefcase,
  FiCopy,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status message
    setStatus(null);
    
    try {
      const response = await fetch("https://formspree.io/f/xzzeayrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `New message from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setStatus("Thank you for contacting me! I will get back to you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || "Something went wrong. Please try again later."}`);
      }
    } catch (error) {
      setStatus("Error: Failed to submit form. Please check your connection and try again.");
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(`${label} copied`);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div id="contact" className="container mx-auto px-1 py-16 mt-20 max-w-7xl">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          Let's Connect
        </h1>
        <p className="text-lg  max-w-2xl mx-auto">
          Have a project in mind or want to chat? Reach out through the form or
          my direct contacts.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-2">
        {/* Left Side - Contact Form */}
        <div className="relative group">
          <div className="absolute -inset-1 custom bg-yellow-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative bg-[#1e1e1f] dark:bg-gray-50 p-8 rounded-xl border border-gray-300 custom-border shadow-2xl">
            <h2 className="md:text-2xl text-xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
              <div className="p-2 bg-gray-200/10 rounded-lg">
                <FiSend className="text-yellow-400 custom-text animate-pulse" />
              </div>
              Send me a message
            </h2>

            {status && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  status.includes("Thank you")
                    ? "bg-green-900/30 text-green-400 border border-green-800"
                    : "bg-red-900/30 text-red-400 border border-red-800"
                }`}
              >
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300  rounded-lg border border-gray-300  focus:border-gray-500 focus:outline-none peer"
                    placeholder="Firstname*"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300  rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Lastname*"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300  rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300  rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Company (Optional)"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#232527] dark:bg-gray-300  rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer min-h-[150px]"
                  placeholder="Message*"
                  required
                />
              </div>

              <div className="pt-2 flex justify-start">
                <button
                  type="submit"
                  className="dark:hover:text-white custom flex items-center gap-3 bg-yellow-500   font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg  active:scale-95 hover:animate-bounce"
                >
                  <FiSend className="text-lg" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Contact Details */}
        <div className="space-y-6">
          <div className="bg-[#1e1e1f] dark:bg-gray-50 p-8 rounded-xl border border-yello-500 custom-border shadow-2xl">
            <h2 className="md:text-2xl text-xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
              <div className="p-2 bg-gray-500/10 rounded-lg animate-pulse">
                <FiMapPin className="text-yellow-400 custom-text" />
              </div>
              Contact Information
            </h2>

            <p className=" mb-8 text-lg">
              Feel free to reach out through any of these channels. I typically
              respond within 24 hours.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  label: "Email",
                  value: "abdulbasitkayode@gmail.com",
                  icon: (
                    <FiMail className="text-yellow-400 custom-text text-base sm:text-lg" />
                  ),
                },
                {
                  label: "Phone",
                  value: "+234 902 502 1272",
                  icon: (
                    <FiPhone className="text-yellow-400 custom-text text-base sm:text-lg" />
                  ),
                },
                {
                  label: "Location",
                  value: "Lagos, Nigeria",
                  icon: (
                    <FiMapPin className="text-yellow-400 custom-text text-base sm:text-lg" />
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#232527] dark:bg-gray-300 dark:hover:bg-gray-200 hover:bg-[#1f2430] p-4 sm:p-5 rounded-lg border border-gray-600 transition duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="p-2 bg-gray-700/10 rounded-lg flex-shrink-0 animate-pulse">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold truncate">
                        {item.label}
                      </h3>
                      <p className=" text-sm sm:text-base truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    className="ml-4 p-2  hover:animate-shake transition duration-200 rounded-lg flex-shrink-0"
                    aria-label={`Copy ${item.label}`}
                  >
                    <FiCopy className="text-base sm:text-lg" />
                  </button>
                </div>
              ))}
            </div>

            {copied && (
              <div
                className="mt-6 p-3 bg-white/50 backdrop-blur-md dark:text-white border border-green-800 rounded-lg text-center animate-fadeIn"
              >
                {copied} to clipboard!
              </div>
            )}
          </div>

          <div className="bg-[#1e1e1f] dark:bg-gray-50  p-6 rounded-xl border border-gray-300 custom-border shadow-2xl">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <FiPhone className="text-yellow-400 custom-text" />
              Availability
            </h3>
            <p>
              I'm currently available for freelance projects and full-time
              opportunities. Typically respond within 24 hours on weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;