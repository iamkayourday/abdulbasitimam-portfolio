import React, { useState } from "react";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiAlertTriangle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { trackEvent } from "../utils/analytics";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_o0xt6qn",
    ADMIN_TEMPLATE_ID: "template_1xyq9j5",
    CLIENT_TEMPLATE_ID: "template_ma3twfu",
    PUBLIC_KEY: "m0I6FGY7xoCvak_fZ",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackEvent("submit_contact_form", "lead", "Contact Form Submitted");
    setStatus(null);

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const currentDate = new Date().toLocaleString();

      // Send notification to admin (you)
      const adminTemplateParams = {
        to_name: "Abdulbasit",
        from_name: fullName,
        from_email: formData.email,
        company: formData.company || "Not provided",
        message: formData.message,
        reply_to: formData.email,
        date: currentDate,
      };

      // Send auto-reply to client - SIMPLIFIED PARAMETERS
      const clientTemplateParams = {
        to_name: formData.firstName,
        from_name: "Abdulbasit Kayode Imam",
        from_email: formData.email,
        message: formData.message.substring(0, 100) + (formData.message.length > 100 ? "..." : ""),
        reply_to: "abdulbasitkayode@gmail.com",
      };

      console.log("Sending emails with params:", {
        admin: adminTemplateParams,
        client: clientTemplateParams
      });

      // Send admin email first
      const adminResult = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        adminTemplateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Admin email result:", adminResult);

      if (adminResult.status === 200) {
        // Try to send client email, but don't fail if it doesn't work
        try {
          const clientResult = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.CLIENT_TEMPLATE_ID,
            clientTemplateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
          );
          console.log("Client email result:", clientResult);
          
          setStatus({
            type: "success",
            message: "Thank you! I've received your message and sent a confirmation email. I'll get back to you within 24 hours.",
          });
          
          trackEvent("contact_form_success", "conversion", "Form Submitted Successfully");
        } catch (clientError) {
          console.warn("Client email failed, but admin email succeeded:", clientError);
          
          setStatus({
            type: "success",
            message: "Thank you! I've received your message successfully. There was a minor issue with the confirmation email, but I'll contact you directly within 24 hours.",
          });
          
          trackEvent("contact_form_partial_success", "conversion", "Admin Email Sent, Client Email Failed");
        }

        // Reset form on successful admin email
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Admin email failed to send");
      }

    } catch (error) {
      console.error("EmailJS error details:", {
        error,
        message: error.text || error.message,
        status: error.status
      });
      
      // More specific error messages
      let errorMessage = "Message sent! However, there was an issue with the confirmation email. I've received your message and will contact you soon.";
      
      if (error.status === 0) {
        errorMessage = "Network error: Please check your internet connection and try again.";
      } else if (error.status >= 400 && error.status < 500) {
        errorMessage = "Configuration issue: Please contact me directly at abdulbasitkayode@gmail.com";
      } else if (error.status >= 500) {
        errorMessage = "Server temporarily unavailable. Your message has been saved and I'll contact you soon.";
      }
      
      setStatus({
        type: "error",
        message: errorMessage,
      });
      
      trackEvent("contact_form_error", "error", `Form Submission Failed: ${error.status || 'unknown'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div id="contact" className="container mx-auto px-1 py-16 mt-20 max-w-7xl">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          Let's Connect
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a project in mind or want to chat? Reach out through the form or
          my direct contacts.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-2">
        {/* Contact Form */}
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
                className={`mb-6 p-4 rounded-lg border ${
                  status.type === "success"
                    ? "bg-green-900/30 text-green-400 border-green-800"
                    : "bg-yellow-900/30 text-yellow-400 border-yellow-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  {status.type === "success" ? (
                    <FiCheck className="text-green-400 text-xl" />
                  ) : (
                    <FiAlertTriangle className="text-yellow-400 text-xl" />
                  )}
                  <span>{status.message}</span>
                </div>
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
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Firstname*"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Lastname*"
                    required
                    disabled={isSubmitting}
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
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Email*"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-3 pr-4 py-3 bg-[#232527] dark:bg-gray-300 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer"
                    placeholder="Company (Optional)"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#232527] dark:bg-gray-300 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none peer min-h-[150px]"
                  placeholder="Message*"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="pt-2 flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`dark:hover:text-white custom flex items-center gap-3 bg-yellow-500 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg active:scale-95 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-[#1e1e1f] dark:bg-gray-50 p-8 rounded-xl border border-yellow-500 custom-border shadow-2xl">
            <h2 className="md:text-2xl text-xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
              <div className="p-2 bg-gray-500/10 rounded-lg animate-pulse">
                <FiMapPin className="text-yellow-400 custom-text" />
              </div>
              Contact Information
            </h2>

            <p className="mb-8 text-lg">
              Prefer direct communication? Reach out through any of these
              channels. I typically respond within 24 hours.
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
                    <div className="p-2 bg-gray-700/10 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold truncate">
                        {item.label}
                      </h3>
                      <p className="text-sm sm:text-base truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    className="ml-4 p-2 hover:scale-110 transition duration-200 rounded-lg flex-shrink-0"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copied === item.label ? (
                      <FiCheck className="text-green-400 text-base sm:text-lg" />
                    ) : (
                      <FiCopy className="text-base sm:text-lg" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {copied && (
              <div className="mt-6 p-3 bg-green-900/30 text-green-400 border border-green-800 rounded-lg text-center animate-fadeIn">
                {copied} copied to clipboard!
              </div>
            )}
          </div>

          <div className="bg-[#1e1e1f] dark:bg-gray-50 p-6 rounded-xl border border-gray-300 custom-border shadow-2xl">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <FiPhone className="text-yellow-400 custom-text" />
              Response Time
            </h3>
            <p>
              I'm currently available for freelance projects and full-time
              opportunities. You'll receive an immediate auto-reply and a
              personal response within 24 hours on weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;