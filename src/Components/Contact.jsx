import React, { useState } from "react";
import { FiClipboard, FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Icons for contact details

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

    const response = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(`${label} copied`);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div id="contact" className="container mx-auto px-2 py-12 mt-20 max-w-7xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500">Contact</h1>
        <p className="text-lg text-gray-200 mt-4">
          I'd love to hear from you! Please fill out the form below to reach
          out.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          {status && (
            <p className="text-center mb-4 text-lg font-semibold text-gray-700">
              {status}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6  p-3 rounded-lg"
          >
            {/* Last Name and First Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#11141d]  text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-transparent"
                  required
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-3 top-0 text-sm text-gray-500"
                >
                  Last Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#11141d] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-transparent"
                  required
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-3 top-0 text-sm text-gray-500"
                >
                  First Name
                </label>
              </div>
            </div>

            {/* Email and Company */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#11141d] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-transparent"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-0 text-sm text-gray-500"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#11141d] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-transparent"
                  required
                />
                <label
                  htmlFor="company"
                  className="absolute left-3 top-0 text-sm text-gray-500"
                >
                  Company
                </label>
              </div>
            </div>

            {/* Text Content (Message) */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-[#11141d] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-transparent"
                rows="5"
                required
              />
              <label
                htmlFor="message"
                className="absolute left-3 top-0 text-sm text-gray-500"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-16 text-lg flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700"
              >
                <FiSend className="bg-white text-yellow-500 text-5xl p-2 rounded-lg" /> {/* Added the send icon */}
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 bg-yellow-500 p-6 rounded-xl shadow-md">
        <h1 className="text-6xl text-gray-400 font-semibold">GET IN TOUCH!</h1>
          {[
            {
              label: "Email",
              value: "abdulbasitkayode@gmail.com",
              icon: (
                <FiMail
                  className="text-2xl text-yellow-500"
                  aria-label="Email icon"
                />
              ),
            },
            {
              label: "Phone",
              value: "+2349025021272",
              icon: (
                <FiPhone
                  className="text-2xl text-yellow-500"
                  aria-label="Phone icon"
                />
              ),
            },
            {
              label: "Address",
              value: "24003 Lagos, Nigeria",
              icon: (
                <FiMapPin
                  className="text-2xl text-yellow-500"
                  aria-label="Address icon"
                />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#111319] p-5 rounded-xl shadow-lg transition duration-300 hover:shadow-xl"
            >
             
              {item.icon}
              <div>
                <h3 className="text-lg font-bold text-gray-200">{item.label}</h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
              <FiClipboard
                className="text-2xl text-yellow-500 cursor-pointer ml-auto transition duration-200"
                aria-label={`Copy ${item.label}`}
                onClick={() => handleCopy(item.value, item.label)}
              />
            </div>
          ))}

          {copied && (
            <p className="text-center text-gray-400 font-semibold mt-2 animate-fadeIn">
              {copied} copied successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
