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
      className="relative py-28 px-6 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <FaLightbulb className="mr-2" />
            <span className="font-medium">Marketing Innovation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              Transform Your
            </span>{" "}
            Marketing Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We craft data-driven marketing plans that deliver measurable results. 
            Everything you need to grow your business—completely free of charge.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl shadow-2xl text-white overflow-hidden relative group`}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.desc}</p>
                <motion.div 
                  className="mt-6 inline-block"
                  whileHover={{ x: 5 }}
                >
                  <button className="flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition">
                    Learn more <FaArrowRight className="text-xs" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full mb-6">
                  <FaRocket className="mr-2" />
                  <span className="font-medium">Our Process</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Data-Driven Marketing <span className="text-green-600">That Works</span>
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  We combine creativity with analytics to develop strategies that deliver real business results. 
                  Our approach is tailored to your unique needs and goals.
                </p>
                <Link href="/"className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
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
                      className={`flex items-start gap-4 mb-6 p-4 rounded-xl ${i % 2 === 0 ? 'bg-green-50' : 'bg-white'} border border-green-100`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.desc}</p>
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