// src/components/KeyFeatures.tsx
"use client"
import { motion } from "framer-motion";
import { FaPaperPlane, FaMagic, FaUsers, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaPaperPlane />,
    title: "Free Unlimited Messaging",
    desc: "Send unlimited WhatsApp messages at zero cost.",
  },
  {
    icon: <FaMagic />,
    title: "Bulk Messaging Tool",
    desc: "Upload contacts & send thousands of messages in seconds.",
  },
  {
    icon: <FaClock />,
    title: "Smart Scheduling",
    desc: "Automate message delivery to save time and effort.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Engagement",
    desc: "Respond with auto-replies and maintain strong connections.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-white text-center overflow-hidden">
      {/* Glowing animated background circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-300" />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-700 mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Makes Our Tool Stand Out
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto z-10 relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-green-500 transform transition duration-300 hover:scale-105 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-green-600 text-5xl mb-6 flex justify-center group-hover:animate-bounce">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition duration-200">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
