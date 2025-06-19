"use client";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // Footer content data
  const contactInfo = {
    title: "How can we help?",
    hours: "Contact us 9AM TO 8 PM",
    phone: {
      label: "Call us",
      number: "7067330134",
      href: "tel:7067330134"
    },
    email: {
      label: "Send us a message",
      address: "krishnaenterprisedm@gmail.com",
      href: "mailto:krishnaenterprisedm@gmail.com"
    }
  };

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "#", label: "Facebook" },
    { icon: <FaTwitter size={20} />, href: "#", label: "Twitter" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/krishna_enterprises_dm?igsh=OWwxeWtqMW8yM2xt", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Terms of Services", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Forum", href: "/forum" }
  ];

  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-white text-green-600 p-2 rounded-full">
                <FaPhone />
              </span>
              {contactInfo.title}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-green-200 mb-2">{contactInfo.hours}</p>
                <h4 className="text-lg font-semibold mb-1">{contactInfo.phone.label}</h4>
                <Link 
                  href={contactInfo.phone.href} 
                  className="text-xl font-bold hover:text-green-300 transition-colors"
                >
                  {contactInfo.phone.number}
                </Link>
              </div>
              
              <div className="pt-4 border-t border-green-600">
                <h4 className="text-lg font-semibold mb-1">{contactInfo.email.label}</h4>
                <Link 
                  href={contactInfo.email.href} 
                  className="text-lg hover:text-green-300 transition-colors flex items-center gap-2"
                >
                  <FaEnvelope /> {contactInfo.email.address}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-6">Follow us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-green-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-green-600 mt-12 pt-8 text-center text-green-300"
        >
          <p>Copyright © tech-branzzo All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;