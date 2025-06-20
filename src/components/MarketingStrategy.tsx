"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { FaChartLine, FaBullhorn, FaPenFancy, FaPeopleCarry, FaLightbulb, FaRocket, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";

const features = [
  {
    icon: <FaChartLine className="text-white text-4xl" />,
    title: "Brand Strategy",
    desc: "Create a powerful identity that resonates with your audience and stands out in the market.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: <FaBullhorn className="text-white text-4xl" />,
    title: "Social Media",
    desc: "Grow your presence across platforms with data-driven content strategies.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: <FaPenFancy className="text-white text-4xl" />,
    title: "Content Creation",
    desc: "Deliver engaging content that converts visitors into loyal customers.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <FaPeopleCarry className="text-white text-4xl" />,
    title: "Customer Experience",
    desc: "Build meaningful relationships through personalized engagement.",
    color: "from-purple-500 to-violet-600"
  }
];

export default function MarketingStrategy() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 lg:w-64 h-32 sm:h-48 md:h-64 lg:h-64 bg-blue-400 rounded-full blur-xl"
        />
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 right-0 w-36 sm:w-52 md:w-72 lg:w-72 h-36 sm:h-52 md:h-72 lg:h-72 bg-blue-400 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6">
            <FaLightbulb className="mr-1 sm:mr-2 text-sm sm:text-base" />
            <span className="font-medium text-xs sm:text-sm md:text-base">Marketing Innovation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
              Transform Your
            </span>{" "}
            Marketing Strategy
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            We craft data-driven marketing plans that deliver measurable results. 
            Everything you need to grow your business—completely free of charge.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${item.color} p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg text-white overflow-hidden relative group`}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-6 sm:-right-8 md:-right-10 lg:-right-10 -top-6 sm:-top-8 md:-top-10 lg:-top-10 w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 sm:w-14 md:w-16 lg:w-16 h-12 sm:h-14 md:h-16 lg:h-16 flex items-center justify-center bg-white/20 rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-base text-white/90 leading-relaxed">{item.desc}</p>
                <motion.div 
                  className="mt-3 sm:mt-4 md:mt-6 inline-block"
                  whileHover={{ x: 5 }}
                >
                  <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold bg-white/20 hover:bg-white/30 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full transition">
                    Learn more <FaArrowRight className="text-xs sm:text-sm" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process section */}
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -right-16 sm:-right-20 md:-right-24 lg:-right-20 -top-16 sm:-top-20 md:-top-24 lg:-top-20 w-40 sm:w-48 md:w-64 lg:w-64 h-40 sm:h-48 md:h-64 lg:h-64 bg-blue-100 rounded-full blur-xl opacity-30"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6">
                  <FaRocket className="mr-1 sm:mr-2 text-sm sm:text-base" />
                  <span className="font-medium text-xs sm:text-sm md:text-base">Our Process</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Data-Driven Marketing <span className="text-blue-600">That Works</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mb-6 sm:mb-8">
                  We combine creativity with analytics to develop strategies that deliver real business results. 
                  Our approach is tailored to your unique needs and goals.
                </p>
                <Link href="/" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base md:text-lg">
                  Get Your Free Strategy Session
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  {/* Animated process steps */}
                  {[
                    { step: "1", title: "Discovery", desc: "We learn about your business" },
                    { step: "2", title: "Analysis", desc: "Research your market" },
                    { step: "3", title: "Strategy", desc: "Develop custom plan" },
                    { step: "4", title: "Execution", desc: "Implement & optimize" }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                      className={`flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 p-2 sm:p-3 md:p-4 rounded-lg ${i % 2 === 0 ? 'bg-blue-50' : 'bg-white'} border border-blue-100`}
                    >
                      <div className="flex-shrink-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}