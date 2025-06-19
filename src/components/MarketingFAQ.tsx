"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHeadset, FaShieldAlt, FaTools } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What marketing services does your agency offer?",
    answer: "We provide a comprehensive suite of digital marketing services including SEO, social media marketing, content creation, email campaigns, PPC advertising, and marketing automation. Our team tailors strategies to your specific business goals.",
    icon: <FaTools className="text-green-600 text-xl" />
  },
  {
    id: 2,
    question: "How can I contact marketing support?",
    answer: "Our support team is available 24/7 through multiple channels: live chat on our website, email at support@yourmarketing.com, or phone at (555) 123-4567. We typically respond within 1 hour during business hours.",
    icon: <FaHeadset className="text-green-600 text-xl" />
  },
  {
    id: 3,
    question: "What is your satisfaction guarantee policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with our services within the first 30 days, we'll either rework your campaign at no extra cost or provide a full refund. Your success is our priority.",
    icon: <FaShieldAlt className="text-green-600 text-xl" />
  }
];

export default function MarketingFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/faq.jpg"
                alt="Marketing team discussing strategies"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-green-800">Got Questions?</h3>
                <p className="text-sm text-gray-700">We&apos;ve got answers!</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                  Top Marketing Questions
                </span>{" "}
                Answered
              </h2>
              <p className="text-lg text-gray-600">
                In this section we address frequently asked questions to assist you in understanding our services and policies.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg mt-1">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                          {faq.question}
                          <motion.span
                            animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown className="text-green-500" />
                          </motion.span>
                        </h3>
                        <AnimatePresence>
                          {activeId === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 pt-4">{faq.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
           
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}