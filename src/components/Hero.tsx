"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";


export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Parallax effect for logo
  const [typedText, setTypedText] = useState("");
  const fullText = "Supercharge Your ";

  // Typing effect
  useEffect(() => {
    let i = 0;
    let mounted = true;

    const typing = setInterval(() => {
      if (!mounted) return;
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 100);

    return () => {
      mounted = false;
      clearInterval(typing);
    };
  }, []);

  // Particle background canvas
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 z-0";
    ref.current.prepend(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
    }));

    let animationFrameId: number;

    const animate = () => {
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

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.remove();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative md:min-h-screen  py-28 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-4 overflow-hidden"
    >
      {/* Parallax radial background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,152,219,0.3)_0%,_transparent_70%)] -z-10"
      />

      {/* Overlay Logo with Parallax */}
      <motion.img
        src="/favicon1.png" // Use the imported logo
        alt="Krishna Enterprises Digital Marketing Logo"
        style={{ y: logoY }} // Parallax effect
        className="absolute top-6 md:top-10 lg:top-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-48 z-20 opacity-85"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 0.15,
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px] bg-blue-200 rounded-full blur-3xl -z-10"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4 sm:px-6 md:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-blue-900 mb-4 sm:mb-6 leading-tight drop-shadow-xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"> 
            {typedText || "Supercharge Your"}
          </span>{" "}
          WhatsApp Marketing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 font-medium"
        >
          INTRODUCING AN
          <span className="text-blue-600 font-semibold"> AMAZING WHATSAPP</span> 
           MARKETING SOFTWARE THAT OFFERS YOU THE BENEFIT OF SENDING MESSAGES WITHOUT ANY COST, ALONG WITH THE ABILITY TO SEND BULK MESSAGES EFFORTLESSLY, AND A VARIETY OF EXCITING FEATURES TO ENHANCE YOUR MARKETING EXPERIENCE!
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <motion.a
            href="https://wa.me/917067330134"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold shadow-xl flex items-center gap-2 text-sm sm:text-base md:text-lg"
          >
            <FaWhatsapp className="text-xl sm:text-2xl animate-pulse" /> Try Free Demo
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.15, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold shadow-md text-sm sm:text-base md:text-lg"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-blue-400 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-blue-500 rounded-full blur-xl"
      />
       
    </section>
  );
}