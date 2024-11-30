import React, { useState } from 'react';
import { FiClipboard, FiSend } from 'react-icons/fi'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState('');

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Thank you for contacting Me! I will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Oops! Something went wrong. Please try again.');
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(`${label} copied`);
    setTimeout(() => setCopied(''), 2000); 
  };

  return (
    <div id="contact" className="container mx-auto px-6 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
        <p className="text-lg text-gray-600 mt-4">
          I'd love to hear from you! Please fill out the form below to reach out.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          {status && (
            <p className="text-center mb-4 text-lg font-semibold text-gray-700">{status}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-transparent"
                required
              />
              <label htmlFor="name" className="absolute left-3 top-0 text-sm text-gray-500">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-transparent"
                required
              />
              <label htmlFor="email" className="absolute left-3 top-0 text-sm text-gray-500">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-transparent"
                rows="5"
                required
              />
              <label htmlFor="message" className="absolute left-3 top-0 text-sm text-gray-500">
                Message
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                <FiSend className="text-lg" /> {/* Added the send icon */}
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-gray-700">abdulbasitkayode@gmail.com</p>
            </div>
            <FiClipboard
              className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800"
              onClick={() => handleCopy('abdulbasitkayode@gmail.com', 'Email')}
            />
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p className="text-gray-700">+2349025021272</p>
            </div>
            <FiClipboard
              className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800"
              onClick={() => handleCopy('+2349025021272', 'Phone number')}
            />
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p className="text-gray-700">24003 Lagos, Nigeria</p>
            </div>
            <FiClipboard
              className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800"
              onClick={() => handleCopy('24003 Lagos, Nigeria', 'Address')}
            />
          </div>

          {copied && <p className="text-center text-green-600">{copied}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
