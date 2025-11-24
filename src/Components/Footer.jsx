import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { trackSocialClick, trackEvent } from '../utils/analytics';

const Footer = () => {
  const handleSocialClick = (platform) => {
    trackSocialClick(platform);
  };

  const handleNavClick = (section) => {
    trackEvent('click_footer_nav', 'navigation', `Footer: ${section}`);
  };

  const scrollToTop = () => {
    trackEvent('click_back_to_top', 'navigation', 'Back to Top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Timeline", id: "timeline" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonial" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    {
      icon: FaPhone,
      href: "tel:+2349025021272",
      color: "text-green-600",
      label: "phone",
      platform: "Phone"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/2349025021272",
      color: "text-green-500",
      label: "whatsapp",
      platform: "WhatsApp"
    },
    {
      icon: FaEnvelope,
      href: "mailto:abdulbasitkayode@gmail.com",
      color: "text-red-500",
      label: "email",
      platform: "Email"
    },
    {
      icon: FaGithub,
      href: "https://github.com/iamkayourday",
      color: "text-gray-800",
      label: "github",
      platform: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/abdulbasitimam",
      color: "text-blue-600",
      label: "linkedin",
      platform: "LinkedIn"
    }
  ];

  return (
    <footer className="border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold custom-text mb-4 logo">Abdulbasit</h3>
            <p className="leading-relaxed mb-6">
              Full-Stack Developer passionate about creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            {/* <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 custom bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <FaArrowUp className="text-sm" />
              Back to Top
            </motion.button> */}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-6 custom text-yellow-400">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4 p-3 text-center md:text-left">
              {navigationLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    handleNavClick(link.name);
                    scrollToSection(link.id);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" transition-colors duration-300 text-left group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 custom transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold custom text-yellow-400 mb-6">Let's Connect</h4>
            <p className="mb-6">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={() => handleSocialClick(social.platform)}
                  className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 group"
                  aria-label={social.platform}
                >
                  <social.icon className={`text-xl ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2025 Abdulbasit Kayode Imam. All rights reserved.
            </p>
            <p className="text-sm">
              Crafted with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;