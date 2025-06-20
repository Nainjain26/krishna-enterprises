"use client";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success(
          <div className="flex items-center gap-2">
            <FaPaperPlane className="text-blue-500" /> {/* Changed to #3498DB */}
            <span>Message sent successfully!</span>
          </div>,
          {
            style: {
              background: '#eff6ff', // Changed to #3498DB shade
              color: '#1e40af',
              border: '1px solid #bfdbfe',
            }
          }
        );
        reset();
        resolve(true);
      }, 1000);
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 md:px-12 relative overflow-hidden"> {/* Changed to #3498DB gradient */}
      <Toaster position="top-right" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full animate-pulse" /> {/* Changed to #3498DB shade */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full animate-spin-slow" /> {/* Changed to #3498DB shade */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-xl" /> {/* Changed to #3498DB shade */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-xl" /> {/* Changed to #3498DB shade */}

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: Math.random() * 100 }}
          animate={{
            y: [0, 100, 0],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-200' : i % 3 === 1 ? 'bg-blue-300' : 'bg-blue-400'} opacity-60`} // Changed to #3498DB shades
          style={{
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent" // Changed to #3498DB gradient
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Connect
        </motion.h1>
        <motion.p 
          className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We&apos;d love to hear from you! Whether you have a question about our services, 
          need assistance, or just want to say hello - drop us a message.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center z-10 relative">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/50 backdrop-blur-lg border border-white/60 p-8 rounded-3xl shadow-2xl space-y-6 hover:shadow-blue-100/50 hover:shadow-xl transition-shadow duration-300" // Changed to #3498DB shade
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full"> {/* Changed to #3498DB shade */}
              <FiSend className="text-blue-600 text-xl" /> {/* Changed to #3498DB */}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <div className="relative">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" // Changed to #3498DB
                  placeholder="John Doe"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <div className="relative">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" // Changed to #3498DB
                  placeholder="john@example.com"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <div className="relative">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" // Changed to #3498DB
                  placeholder="How can we help you?"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg"
              }`} // Changed to #3498DB gradient
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="text-lg" />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Quick Contact Cards */}
         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* WhatsApp */}
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/917067330134"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-green-100/30 hover:shadow-md transition-all group"
          >
            <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
              <FaWhatsapp className="text-green-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">WhatsApp Chat</h3>
              <p className="text-gray-600 mt-1">Message us directly for instant support</p>
              <p className="text-green-600 font-medium mt-2 text-sm flex items-center gap-1">
                Start chatting <span className="text-lg">→</span>
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:krishnaenterprisedm@gmail.com"
            className="flex items-center gap-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-blue-100/30 hover:shadow-md transition-all group"
          >
            <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
              <FaEnvelope className="text-blue-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
              <p className="text-gray-600 mt-1">We typically reply within 24 hours</p>
              <p className="text-blue-600 font-medium mt-2 text-sm">krishnaenterprisedm@gmail.com</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg transition-all"
          >
            <div className="p-3 bg-purple-100 rounded-xl">
              <FaPhone className="text-purple-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
              <p className="text-gray-600 mt-1">Mon-Fri, 9am-8pm</p>
              <p className="text-purple-600 font-medium mt-2 text-sm">7067330134</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg transition-all"
          >
            <div className="p-3 bg-orange-100 rounded-xl">
              <FaMapMarkerAlt className="text-orange-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Our Office</h3>
              <p className="text-gray-600 mt-1">Visit us during business hours</p>
              <p className="text-orange-600 font-medium mt-2 text-sm">331 Krishna bag colony palhar nagar tanki ke pas 60 feet RD indore MP near shiv  mandir. Indore, Madhya Pradesh, PIN: 452005 </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating action button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="https://wa.me/917067330134"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center" // Changed to #3498DB
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-2xl" />
          <span className="sr-only">WhatsApp</span>
        </motion.a>
      </motion.div>
    </section>
  );
}