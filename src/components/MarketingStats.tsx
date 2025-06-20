"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// Define the Particle interface for TypeScript
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const stats = [
  {
    number: "12K",
    title: "Useful Options",
    description: "Discover a wide range of innovative marketing strategies.",
  },
  {
    number: "45%",
    title: "More Visibility",
    description: "Boost your brand with precision-targeted campaigns.",
  },
  {
    number: "8+",
    title: "Amazing Pages",
    description: "Create stunning, high-impact advertising campaigns.",
  },
];

export default function MarketingStats() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  // Particle animation effect
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 z-0";
    const section = document.querySelector(".stats-section");
    if (section) {
      section.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles array with explicit type
    const particles: Particle[] = [];
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx) return; // Null check for ctx
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 152, 219, 0.5)"; // Changed to #3498DB
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 152, 219, ${1 - dist / 100})`; // Changed to #3498DB
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.remove();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center overflow-hidden stats-section" // Adjusted padding for responsiveness
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,152,219,0.4)_0%,_transparent_70%)] -z-10"
      />

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900 mb-4 sm:mb-6" // Adjusted font size and margin
      >
        Marketing Stats That Matter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20" // Adjusted font size and margin
      >
        Dive into the metrics powering our clients&apos;success with key
        performance insights that drive results.
      </motion.p>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white/30 backdrop-blur-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-blue-200/50 overflow-hidden" // Adjusted padding and rounding
            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              boxShadow: "0 10px 20px rgba(52, 152, 219, 0.4)", // Adjusted shadow
            }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 opacity-60" /> 
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-2 sm:mb-4" // Adjusted font size and margin
              >
                {item.number}
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
            {/* Animated Border Effect */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-indigo-500" // Adjusted height
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute top-2 sm:top-4 md:top-6 lg:top-10 left-2 sm:left-4 md:left-6 lg:left-10 w-12 sm:w-16 md:w-24 lg:w-36 h-12 sm:h-16 md:h-24 lg:h-36 bg-blue-400 rounded-full blur-xl -z-5" // Adjusted sizes and positions
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1.4 }}
        className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-10 right-2 sm:right-4 md:right-6 lg:right-10 w-16 sm:w-20 md:w-32 lg:w-48 h-16 sm:h-20 md:h-32 lg:h-48 bg-blue-500 rounded-full blur-xl -z-5" // Adjusted sizes and positions
      />
    </section>
  );
}