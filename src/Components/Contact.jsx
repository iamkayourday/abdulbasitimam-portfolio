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

    // Simulate form submission
    setTimeout(() => {
      setStatus("Thank you for contacting me! I will get back to you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1000);
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
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to chat? Reach out through the form or
          my direct contacts.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Contact Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative bg-[#0f121a] p-8 rounded-xl border border-gray-800 shadow-2xl">
            <h2 className="md:text-2xl text-xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <FiSend className="text-yellow-400" />
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
                  {/* <div className="absolute left-3 top-3 text-gray-500">
                    <FiUser size={18} />
                  </div> */}
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#1a1f2b] text-white rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-1 top-3 text-gray-400 pointer-events-none transition-all duration-200 
                    peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs 
                    peer-focus:text-yellow-400 -top-2 text-xs bg-[#0f121a] px-1 ml-1"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  {/* <div className="absolute left-3 top-3 text-gray-500">
                    <FiUser size={18} />
                  </div> */}
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#1a1f2b] text-white rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-1 top-3 text-gray-400 pointer-events-none transition-all duration-200 
                    peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs 
                    peer-focus:text-yellow-400 -top-2 text-xs bg-[#0f121a] px-1 ml-1"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  {/* <div className="absolute left-3 top-3 text-gray-500">
                    <FiMail size={18} />
                  </div> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#1a1f2b] text-white rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-1 top-3 text-gray-400 pointer-events-none transition-all duration-200 
                    peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs 
                    peer-focus:text-yellow-400 -top-2 text-xs bg-[#0f121a] px-1 ml-1"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  {/* <div className="absolute left-3 top-3 text-gray-500">
                    <FiBriefcase size={18} />
                  </div> */}
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#1a1f2b] text-white rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-1 top-3 text-gray-400 pointer-events-none transition-all duration-200  
                    peer-placeholder-shown:text-[10px] peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs 
                    peer-focus:text-yellow-400 -top-2 text-xs bg-[#0f121a] px-1 ml-1"
                  >
                    Company (Optional)
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1f2b] text-white rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none peer min-h-[150px]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 
                  peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs 
                  peer-focus:text-yellow-400 -top-2 text-xs bg-[#0f121a] px-1"
                >
                  Your Message
                </label>
              </div>

              <div className="pt-2 flex justify-start">
  <button
    type="submit"
    className="flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 active:scale-95"
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
          <div className="bg-[#0f121a] p-8 rounded-xl border border-gray-800 shadow-2xl">
            <h2 className="md:text-2xl text-xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <FiMapPin className="text-yellow-400" />
              </div>
              Contact Information
            </h2>

            <p className="text-gray-300 mb-8 text-lg">
              Feel free to reach out through any of these channels. I typically
              respond within 24 hours.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  label: "Email",
                  value: "abdulbasitkayode@gmail.com",
                  icon: (
                    <FiMail className="text-yellow-400 text-base sm:text-lg" />
                  ),
                },
                {
                  label: "Phone",
                  value: "+234 902 502 1272",
                  icon: (
                    <FiPhone className="text-yellow-400 text-base sm:text-lg" />
                  ),
                },
                {
                  label: "Location",
                  value: "Lagos, Nigeria",
                  icon: (
                    <FiMapPin className="text-yellow-400 text-base sm:text-lg" />
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#1a1f2b] hover:bg-[#1f2430] p-4 sm:p-5 rounded-lg border border-gray-800 transition duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="p-2 bg-yellow-500/10 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-200 truncate">
                        {item.label}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    className="ml-4 p-2 text-gray-400 hover:text-yellow-400 transition duration-200 rounded-lg flex-shrink-0"
                    aria-label={`Copy ${item.label}`}
                  >
                    <FiCopy className="text-base sm:text-lg" />
                  </button>
                </div>
              ))}
            </div>

            {copied && (
              <div className="mt-6 p-3 bg-green-900/30 text-green-400 border border-green-800 rounded-lg text-center animate-fadeIn">
                {copied} to clipboard!
              </div>
            )}
          </div>

          <div className="bg-[#0f121a] p-6 rounded-xl border border-gray-800 shadow-2xl">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <FiPhone className="text-yellow-400" />
              Availability
            </h3>
            <p className="text-gray-400">
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
