"use client";

import { motion, useAnimation, Variants, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaHandshake, FaCheckCircle } from "react-icons/fa";

export default function MarketingPartnership() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  // Gains data with icons
  const gains = [
    { text: "Exceptional client experience", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Quick marketing support", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Complete marketing access", icon: <FaCheckCircle className="text-green-500" /> },
  ];

  // Particle animation effect
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 z-0";
    if (ref.current) {
      ref.current.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        particles.forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 152, 219, ${1 - dist / 120})`;
            ctx.stroke();
          }
        });
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
      className="relative  py-10 flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 overflow-hidden"
    >
      {/* Dynamic background with particle animation */}
      <div className="absolute inset-0 z-0" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header and Partnership Call */}
        <motion.div
          variants={itemVariants}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900">
              50,000+ Brands
            </span>{" "}
            Trust Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8">
            Partner with us to transform your marketing efforts.
          </p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaHandshake className="mr-2 text-xl sm:text-2xl" />
           <Link href="/Contact-us">Contact US</Link> 
          </motion.div>
        </motion.div>

        {/* Gains Carousel */}
        <motion.div
          variants={containerVariants}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll gap-6 sm:gap-8 md:gap-10">
            {[...gains, ...gains].map((gain, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100/50 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {gain.icon}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                    {gain.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <style jsx>{`
            .animate-scroll {
              display: flex;
              animation: scroll 20s linear infinite;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (min-width: 640px) {
              .animate-scroll {
                animation: scroll 25s linear infinite;
              }
            }
            @media (min-width: 1024px) {
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}